import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { UsersService } from "../users/users.service";
import { CreateUserDto } from "../dto/createUser.dto";
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({ usernameField: "email" });
  }

  async validate(email: string, password: string) {
    try {
      return await this.usersService.validateUser(email, password);
    } catch (err) {
      throw new UnauthorizedException(err);
    }
  }
}
