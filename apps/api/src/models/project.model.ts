import {
  belongsTo,
  Entity,
  model,
  property,
} from '@loopback/repository';
import { Customer } from './customer.model'

@model({settings: {strict: false}})
export class Project extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  region: string;

  @property({
    type: 'number',
    required: true,
  })
  pricing: number;

  @belongsTo(() => Customer)
  customerId: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Project>) {
    super(data);
  }
}

export interface ProjectRelations {
}

export type ProjectWithRelations = Project & ProjectRelations;
