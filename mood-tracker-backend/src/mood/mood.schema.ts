import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MoodDocument = Mood & Document;

@Schema()
export class Mood {
  @Prop({ required: true })
  mood: string;

  @Prop({ required: true })
  note: string;

  @Prop({ required: true })
  timestamp: Date;
}

export const MoodSchema = SchemaFactory.createForClass(Mood);