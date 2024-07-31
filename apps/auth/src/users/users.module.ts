import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { DBModule } from "@app/common";
import { UserDocument, UserSchema } from "../models/user.schema";
import { UserRepository } from "../dto/user.repository";

@Module({
  imports: [
    DBModule,
    DBModule.forFeature([{ name: UserDocument.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService, UserRepository],
  exports: [UsersService],
})
export class UsersModule {}
