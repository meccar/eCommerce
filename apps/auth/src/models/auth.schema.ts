import { AbstractDocument } from "@app/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ versionKey: false })
export class AuthDocument extends AbstractDocument {
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

export const AuthSchema = SchemaFactory.createForClass(AuthDocument);
