import { Request, Response } from 'express';

/**
 * GET /api/health - Health check endpoint for load balancers and monitoring.
 */
export function getHealth(_req: Request, res: Response): void {
  res.json({
    status: 'ok',
    timestamp: Date.now(),
  });
}
