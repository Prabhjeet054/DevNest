import { Request, Response, NextFunction } from 'express';

export interface HttpError extends Error {
  statusCode?: number;
}

/**
 * Global error handling middleware. Catches all unhandled errors and returns
 * a consistent JSON shape: { error, message }.
 */
export function errorHandler(
  err: HttpError,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  const statusCode = err.statusCode ?? 500;
  const message = err.message ?? 'Internal Server Error';

  res.status(statusCode).json({
    error: err.name || 'Error',
    message,
  });
}
