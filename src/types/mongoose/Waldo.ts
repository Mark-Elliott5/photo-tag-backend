import { Schema, Types, Model, model } from 'mongoose';

export interface IWaldo {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
}

const waldoSchema = new Schema<IWaldo, Model<IWaldo>>({
  minX: { type: Number, required: true },
  maxX: { type: Number, required: true },
  minY: { type: Number, required: true },
  maxY: { type: Number, required: true },
});

export const Waldo = model('Waldo', waldoSchema);
