import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { User } from '../../users/entities/user.entity'
import * as mongoose from 'mongoose';
import { Document } from 'mongoose'
import { Replica } from '../../replicas/entities/replica.entity'

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
  users: string[];

  @Prop({
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Replica',
      }
  })
  write_replica: string

  @Prop({
    default: [],
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Replica',
      },
    ],
  })
  read_replicas: string[]
}

export type ProjectDocument = Project & Document;
export const ProjectSchema = SchemaFactory.createForClass(Project);
