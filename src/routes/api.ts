import { Router } from 'express';
import expressAsyncHandler from 'express-async-handler';
import { IReq, IRes, INext } from '../types';

const apiRouter = Router();

// Catch 404
apiRouter.use((req: IReq, res: IRes) => {
  console.log('v1.ts 404');
  res.status(404).json({
    status: 404,
    error: 'Not Found',
    message: 'v1.ts: The requested resource could not be found on the server.',
  });
});

// error handler
// needs 4 args to register as error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
apiRouter.use((err: Error, req: IReq, res: IRes, next: INext): void => {
  res.status(500).json({ err: `apiRouterV1 error catcher: ${err}` });
});

export default apiRouter;