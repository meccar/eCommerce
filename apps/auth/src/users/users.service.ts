import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "../dto/createUser.dto";
import { UserRepository } from "../dto/user.repository";
import { UpdateUserDto } from "../dto/updateUser.dto";

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    return this.userRepository.create(createUserDto);
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
