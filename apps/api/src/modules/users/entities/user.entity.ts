import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose';

export type AuthProviderTypes = 'github' | 'google' | 'email-password';

@Schema()
export class User {
  @Prop({ required: true })
  email: string;

  @Prop({
    default: 'email-password'
  })
  authProvider: AuthProviderTypes

  @Prop({
    required: true,
  })
  passkey: string;

  @Prop({
    default: Date.now,
  })
  createdAt: Date;

  [key: string]: any;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
