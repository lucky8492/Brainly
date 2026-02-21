import express from "express";
declare global {
    namespace Express {
        interface Request {
            userId?: string;
        }
    }
}
export declare const authUser: (req: express.Request, res: express.Response, next: express.NextFunction) => Promise<void>;
//# sourceMappingURL=userAuth.d.ts.map