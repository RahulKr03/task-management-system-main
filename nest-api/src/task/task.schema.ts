import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Task {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop()
  dueDate: Date;

  @Prop()
  priority: string;

  @Prop()
  status: string;

  @Prop()
  assignedTo: string;

  @Prop()
  createdBy: string;
}

export type TaskDocument = Task & Document;
export const TaskSchema = SchemaFactory.createForClass(Task);
