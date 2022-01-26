import { AuthProviderTypes } from '../entities/customer.entity'

export class CreateCustomerInput {
  email: string;
  passkey: string;
}

export class LoginCustomerInput {
  email: string;
  passkey: string;
}
