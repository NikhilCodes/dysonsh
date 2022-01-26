import { Injectable } from '@nestjs/common';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';
import { Customer, CustomerDocument } from './entities/customer.entity'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class CustomersService {
  constructor(@InjectModel(Customer.name) private customerModel: Model<CustomerDocument>) {}

  create(createCustomerInput: CreateCustomerInput) {
    return this.customerModel.create({
      ...createCustomerInput,
    })
  }

  async createIfNotExists(createCustomerInput: CreateCustomerInput) {
    let exists = await this.customerModel.findOne({ email: createCustomerInput.email })
    if (!exists) {
      return this.create(createCustomerInput);
    } else {
      return exists;
    }
  }

  findAll() {
    return this.customerModel.find({})
  }

  findById(id: string) {
    return this.customerModel.findById(id)
  }

  findOne(filter) {
    return this.customerModel.findOne(filter)
  }

  update(id: string, updateCustomerInput: UpdateCustomerInput) {
    return `This action updates a #${id} customer`;
  }

  remove(id: string) {
    return `This action removes a #${id} customer`;
  }
}
