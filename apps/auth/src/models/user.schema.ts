import { AbstractDocument } from "@app/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ versionKey: false })
export class UserDocument extends AbstractDocument {
  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  passwordConfirm: string;

  @Prop()
  startDate: Date;
}

export const UserSchema = SchemaFactory.createForClass(UserDocument);
