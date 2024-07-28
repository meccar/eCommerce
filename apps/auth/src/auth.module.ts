import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { DBModule, LoggerModule } from "@app/common";
import { AuthRepository } from "./auth.repository";
import { AuthDocument, AuthSchema } from "./models/auth.schema";

@Module({
  imports: [
    DBModule,
    DBModule.forFeature([{ name: AuthDocument.name, schema: AuthSchema }]),
    LoggerModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository],
})
export class AuthModule {}
