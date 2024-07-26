import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { DBModule } from "@app/common";
import { AuthRepository } from "./auth.repository";
import { AuthDocument, AuthSchema } from "./models/auth.schema";

@Module({
  imports: [
    DBModule,
    DBModule.forFeature([{ name: AuthDocument.name, schema: AuthSchema }]),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository],
})
export class AuthModule {}
