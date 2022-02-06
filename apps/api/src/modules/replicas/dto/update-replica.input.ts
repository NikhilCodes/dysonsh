import { CreateReplicaInput } from './create-replica.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateReplicaInput extends PartialType(CreateReplicaInput) {
  id: string;
}
