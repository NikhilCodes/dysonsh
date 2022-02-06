import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class Replica {
  @Prop({ default: 'mongo' })
  type: string

  @Prop()
  connection_uri: string
}

export type ReplicaDocument = Replica & Document;
export const ReplicaSchema = SchemaFactory.createForClass(Replica);
