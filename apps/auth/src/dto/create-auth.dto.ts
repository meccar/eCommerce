import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from "class-validator";
import { Match } from "./match.decorator";
import { Type } from "class-transformer";

export class CreateAuthDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsStrongPassword()
  @IsNotEmpty()
  password: string;

  @Match("password", { message: "Passwords do not match" })
  @IsNotEmpty()
  passwordConfirm: string;

  @IsDate()
  @Type(() => Date)
  startDate: Date;
}
