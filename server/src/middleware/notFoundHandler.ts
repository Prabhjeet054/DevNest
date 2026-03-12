import { Request, Response, NextFunction } from 'express';

/**
 * 404 handler for unknown routes. Must be registered after all routes.
 */
export function notFoundHandler(
  req: Request,
  _res: Response,
  next: NextFunction
): void {
  const err = new Error(`Not Found: ${req.method} ${req.originalUrl}`) as Error & {
    statusCode?: number;
  };
  err.statusCode = 404;
  next(err);
}
