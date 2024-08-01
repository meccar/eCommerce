import { Injectable, UnauthorizedException } from "@nestjs/common";
import { CreateUserDto } from "../dto/createUser.dto";
import { UserRepository } from "../dto/user.repository";
import { UpdateUserDto } from "../dto/updateUser.dto";
import * as bcrypt from "bcryptjs";

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    return this.userRepository.create({
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    });
  }

  async validateUser(email: string, password: string) {
    const user = await this.userRepository.findOne({ email });
    const passwordValid = await bcrypt.compare(password, user.password);
    if (passwordValid) {
      throw new UnauthorizedException("Credentials are not valid");
    }
    return user;
  }

  async findAll() {
    return this.userRepository.find({});
  }

  async findOne(_id: string) {
    return this.userRepository.findOne({ _id });
  }

  async update(_id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.findOneAndUpdate(
      { _id },
      { $set: updateUserDto }
    );
  }

  async remove(_id: string) {
    return this.userRepository.findOneAndDelete({ _id });
  }
}
