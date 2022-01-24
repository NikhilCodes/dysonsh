import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CustomersService } from './customers.service';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';
import { UseGuards } from '@nestjs/common'
import { WebhookGuard } from '../../guards/webhook.guard'

@Resolver('Customer')
export class CustomersResolver {
  constructor(private readonly customersService: CustomersService) {}

  @UseGuards(WebhookGuard)
  @Mutation('createCustomer')
  create(@Args('createCustomerInput') createCustomerInput: CreateCustomerInput) {
    return this.customersService.create(createCustomerInput);
  }

  @Query('customers')
  findAll() {
    return this.customersService.findAll();
  }

  @Query('customer')
  findOne(@Args('id') id: string) {
    return this.customersService.findOne(id);
  }

  @Mutation('updateCustomer')
  update(@Args('updateCustomerInput') updateCustomerInput: UpdateCustomerInput) {
    return this.customersService.update(updateCustomerInput.id, updateCustomerInput);
  }

  @Mutation('removeCustomer')
  remove(@Args('id') id: string) {
    return this.customersService.remove(id);
  }
}
