export function validateTaxIdentifier(taxIdentifier: string): boolean {
    if (!taxIdentifier) return false;

    const onlyNumbers = taxIdentifier.replace(/\D/g, "");

    if (onlyNumbers.length === 11) {
        return validateCPF(onlyNumbers);
    } else if (onlyNumbers.length === 14) {
        return validateCNPJ(onlyNumbers);
    }

    return false;
}

function validateCPF(cpf: string): boolean {
    if (/^(.)\1*$/.test(cpf)) return false;

    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += Number(cpf[i]) * (10 - i);
    }
    let remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== Number(cpf[9])) return false;

    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += Number(cpf[i]) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;

    return remainder === Number(cpf[10]);
}

function validateCNPJ(cnpj: string): boolean {
    if (/^(.)\1*$/.test(cnpj)) return false;

    const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    const calculateCheckDigit = (numbers: string, weights: number[]): number => {
        const sum = numbers
            .split("")
            .reduce((acc, digit, index) => acc + Number(digit) * weights[index], 0);
        const remainder = sum % 11;
        return remainder < 2 ? 0 : 11 - remainder;
    };

    const base = cnpj.slice(0, 12);
    const checkDigits = cnpj.slice(12);

    const firstCheckDigit = calculateCheckDigit(base, weights1);
    const secondCheckDigit = calculateCheckDigit(base + firstCheckDigit, weights2);

    return checkDigits === `${firstCheckDigit}${secondCheckDigit}`;
}
