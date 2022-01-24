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

  findAll() {
    return this.customerModel.find({})
  }

  findOne(id: string) {
    return this.customerModel.findById(id)
  }

  update(id: string, updateCustomerInput: UpdateCustomerInput) {
    return `This action updates a #${id} customer`;
  }

  remove(id: string) {
    return `This action removes a #${id} customer`;
  }
}
