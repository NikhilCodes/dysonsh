import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Customer } from '../../customers/entities/customer.entity'
import * as mongoose from 'mongoose';
import { Document } from 'mongoose'

@Schema()
export class Project {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  region: string;

  @Prop({ required: true })
  pricing: string;

  @Prop({
    required: true,
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
      },
    ],
  })
  customer: Customer | mongoose.Schema.Types.ObjectId | string;
}

export type ProjectDocument = Project & Document;
export const ProjectSchema = SchemaFactory.createForClass(Project);
