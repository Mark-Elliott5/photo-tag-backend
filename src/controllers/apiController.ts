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
    (acc, cur) => Object.assign(acc, { cur, found: false }),
    {}
  );
  req.session.waldos = waldosObj;
  res.json({ characters: Object.keys(waldosObj) });
});

const guessWaldo = asyncHandler(
  async (
    req: IReq<{ coords: { x: number; y: number }; waldo: string }>,
    res: IRes
  ) => {
    if (!req.cookies.userId) {
      throw new Error('userId cookie not found.');
    }
    if (!req.session) {
      throw new Error('No session.');
    }
    if (
      !req.session ||
      !req.session.startDate ||
      req.session.endDate ||
      !req.session.waldos ||
      req.session.correctCount === undefined
    ) {
      throw new Error('A new game has not been started.');
    }

    const waldo = req.session.waldos[req.body.waldo];
    if (!waldo) {
      throw new Error('Waldo not found.');
    }
    const { minX, maxX, minY, maxY } = waldo;
    const { x, y } = req.body.coords;
    if (x >= minX && x <= maxX && y >= minY && y <= maxY) {
      req.session.correctCount += 1;
      waldo.found = true;
      if (req.session.correctCount >= 5) {
        req.session.endDate = new Date();
        req.session.win = true;
        res.json({ correct: true, win: true });
      }
      res.json({ correct: true, win: false });
    }
    res.json({ correct: false, win: false });
  }
);

export { startGame, guessWaldo };
