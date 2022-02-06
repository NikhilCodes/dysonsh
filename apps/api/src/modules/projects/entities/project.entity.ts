import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { User } from '../../users/entities/user.entity'
import * as mongoose from 'mongoose';
import { Document } from 'mongoose'
import { Replica } from './replica.entity'

@Schema()
export class Project {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  region: string;

  @Prop({ required: true })
  pricing: string;

  @Prop({default: true})
  is_running: boolean;

  @Prop({
    required: true,
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  })
  user: User | mongoose.Schema.Types.ObjectId | string;

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Replica',
      },
    ],
  })
  masterReplica: Replica | mongoose.Schema.Types.ObjectId | string

  @Prop({
    default: [],
    type: [
      {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Replica',
      },
    ],
  })
  readReplicas: Replica[] | mongoose.Schema.Types.ObjectId[] | string[]
}

export type ProjectDocument = Project & Document;
export const ProjectSchema = SchemaFactory.createForClass(Project);
