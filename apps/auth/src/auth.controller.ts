import {
  Controller,
  Post,
  Res,
  UseGuards,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import {LocalAuthGuard} from "./guards/localAuth.guard"
import { currentUser } from "./currentUser.decorator";
import { UserDocument } from "./models/user.schema";
import { response } from "express";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @UseGuards(LocalAuthGuard)
  @Post("login")
  async login(
    @currentUser() user: UserDocument
    @Res({passthrough: true}) response: Response
  ) {
    await this.authService.login(user, response)
    response.send(user)
  }
}
