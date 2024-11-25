import { Request, Response, NextFunction } from "express";
import Joi from "joi";

const createFarmSchema = Joi.object({
    name: Joi.string().min(3).required().messages({
        "string.base": `"name" deve ser um texto`,
        "string.min": `"name" deve ter pelo menos 3 caracteres`,
        "any.required": `"name" é obrigatório`,
    }),
    city: Joi.string().required().messages({
        "string.base": `"city" deve ser um texto`,
        "any.required": `"city" é obrigatório`,
    }),
    state: Joi.string().length(2).required().messages({
        "string.base": `"state" deve ser um texto`,
        "string.length": `"state" deve ter exatamente 2 caracteres`,
        "any.required": `"state" é obrigatório`,
    }),
    totalArea: Joi.number().positive().required().messages({
        "number.base": `"totalArea" deve ser um número`,
        "number.positive": `"totalArea" deve ser um número positivo`,
        "any.required": `"totalArea" é obrigatório`,
    }),
    agriculturalArea: Joi.number().positive().optional().messages({
        "number.base": `"agriculturalArea" deve ser um número`,
        "number.positive": `"agriculturalArea" deve ser um número positivo`,
    }),
    vegetationArea: Joi.number().positive().optional().messages({
        "number.base": `"vegetationArea" deve ser um número`,
        "number.positive": `"vegetationArea" deve ser um número positivo`,
    }),
    crops: Joi.array()
        .items(Joi.string().required())
        .min(1)
        .required()
        .messages({
            "array.base": `"crops" deve ser uma lista`,
            "array.min": `"crops" deve conter pelo menos um elemento`,
            "any.required": `"crops" é obrigatório`,
        }),
    producerId: Joi.string().uuid().required().messages({
        "string.base": `"producerId" deve ser um texto`,
        "string.guid": `"producerId" deve ser um UUID válido`,
        "any.required": `"producerId" é obrigatório`,
    }),
});

export const validateCreateFarm = (req: Request, res: Response, next: NextFunction): void => {
    const { error } = createFarmSchema.validate(req.body, { abortEarly: false });

    if (error) {
        res.status(400).json({
            message: "Erro de validação",
            details: error.details.map((detail) => detail.message),
        });
        return;
    }

    next();
};
