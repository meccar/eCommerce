import { Injectable } from "@nestjs/common";
import { CreateAuthDto } from "./dto/createUser.dto";
import { UpdateAuthDto } from "./dto/updateUser.dto";
import { AuthRepository } from "./dto/user.repository";

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  create(createAuthDto: CreateAuthDto) {
    return this.authRepository.create({
      ...createAuthDto,
      username: "string",
      email: "string",
      password: "string",
      passwordConfirm: "string",
      startDate: new Date(),
    });
  }

  findAll() {
    return this.authRepository.find({});
  }

  findOne(_id: string) {
    return this.authRepository.findOne({ _id });
  }

  update(_id: string, updateAuthDto: UpdateAuthDto) {
    return this.authRepository.findOneAndUpdate(
      { _id },
      { $set: updateAuthDto }
    );
  }

  remove(_id: string) {
    return this.authRepository.findOneAndDelete({ _id });
  }
}
