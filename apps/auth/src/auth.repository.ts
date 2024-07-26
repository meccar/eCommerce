import { AbstractRepository } from "@app/common";
import { Injectable, Logger } from "@nestjs/common";
import { AuthDocument } from "./models/auth.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class AuthRepository extends AbstractRepository<AuthDocument> {
  protected readonly logger = new Logger(AuthRepository.name);

  constructor(@InjectModel(AuthDocument.name) authModel: Model<AuthDocument>) {
    super(authModel);
  }
}
