import type { Request, Response } from 'express';
export declare const readAllCats: (req: Request, res: Response) => void;
export declare const readCat: (req: Request, res: Response) => void;
export declare const createCat: (req: Request, res: Response) => void;
export declare const updateCat: (req: Request, res: Response) => void;
export declare const updatePartialCat: (req: Request, res: Response) => void;
export declare const deleteCat: (req: Request, res: Response) => void;
