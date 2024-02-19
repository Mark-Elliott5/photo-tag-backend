import expressAsyncHandler from 'express-async-handler';
import { IReq, IRes } from '../types/types';
import { Waldo } from '../types/mongoose/Waldo';

const asyncHandler = expressAsyncHandler;

const startGame = asyncHandler(async (req: IReq, res: IRes) => {
  req.session.endDate = undefined;
  req.session.startDate = new Date();
  req.session.win = false;
  req.session.correctCount = 0;
  const randomWaldos = await Waldo.aggregate([{ $sample: { size: 5 } }]).exec();
  const waldosObj = randomWaldos.reduce(
    (acc, cur) => Object.assign(acc, cur),
    {}
  );
  req.session.waldos = waldosObj;
  res.json({ characters: Object.keys(waldosObj) });
});

export { startGame };
