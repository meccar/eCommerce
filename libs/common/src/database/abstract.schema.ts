import { Prop, Schema } from "@nestjs/mongoose";
import * as mongoose from "mongoose";

@Schema()
export class AbstractDocument {
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  _id: mongoose.Schema.Types.ObjectId;
}
