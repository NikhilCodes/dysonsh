import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User, UserDocument } from './entities/user.entity'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  create(createUserInput: CreateUserInput) {
    return this.userModel.create({
      ...createUserInput,
    })
  }

  async createIfNotExists(createUserInput: CreateUserInput) {
    let exists = await this.userModel.findOne({ email: createUserInput.email })
    if (!exists) {
      return this.create(createUserInput);
    } else {
      return exists;
    }
  }

  findAll() {
    return this.userModel.find({})
  }

  findById(id: string) {
    return this.userModel.findById(id)
  }

  findOne(filter) {
    return this.userModel.findOne(filter)
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
