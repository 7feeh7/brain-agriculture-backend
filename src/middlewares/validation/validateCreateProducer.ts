import { Request, Response, NextFunction } from "express";
import Joi from "joi";

const createProducerSchema = Joi.object({
    name: Joi.string().min(3).required().messages({
        "string.base": `"name" deve ser um texto`,
        "string.min": `"name" deve ter pelo menos 3 caracteres`,
        "any.required": `"name" é obrigatório`,
    }),
    taxIdentifier: Joi.string().required().messages({
        "any.required": `"taxIdentifier" é obrigatório`,
        "string.empty": `"taxIdentifier" não pode estar vazio`,
    }),
});

export const validateCreateProducer = (req: Request, res: Response, next: NextFunction): void => {
    const { error } = createProducerSchema.validate(req.body, { abortEarly: false });

    if (error) {
        res.status(400).json({
            message: "Erro de validação",
            details: error.details.map((detail) => detail.message),
        });
        return;
    }

    next();
};
