import { CreateProjectInput } from './create-project.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateProjectInput extends PartialType(CreateProjectInput) {
  id: number;
}
