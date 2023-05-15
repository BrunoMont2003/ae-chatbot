import { Request, Response, NextFunction } from "express";

const formatPhoneNumber = (req: Request, _: Response, next: NextFunction) => {
    const { body } = req;
    const { phone } = body;
    // delete all stuff that is not a number
    body.phone = phone?.replace(/\D/g, "");

    next();

};

export { formatPhoneNumber };
