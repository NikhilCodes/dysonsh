import { CreateProjectInput } from './create-project.input';
import { PartialType } from '@nestjs/mapped-types';
import mongoose from 'mongoose'
export class UpdateProjectInput extends PartialType(CreateProjectInput) {
  id?: string;
  write_replica?: string | mongoose.Schema.Types.ObjectId;
  read_replicas?: string[] | mongoose.Schema.Types.ObjectId[];
}
