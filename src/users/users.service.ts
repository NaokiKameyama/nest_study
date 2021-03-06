import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateUserDto } from './dto/create-user.dto'
import { User } from './interfacees/user.interface'

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
  users: CreateUserDto[] = []
  async create(user: CreateUserDto) {
    const createdUser = new this.userModel({
      username: user.username,
      password: user.password,
    })
    return await createdUser.save()
  }
  async findAll() {
    return await this.userModel.find().exec()
  }
  async findOne(username: string) {
    const user = await this.userModel.findOne({ username }).exec()
    if (!user) {
      throw new NotFoundException('Could not find user')
    }
    return user
  }
}
