import { Test, TestingModule } from '@nestjs/testing';
import { CustomersService } from './customers.service';
import { MongooseModule } from '@nestjs/mongoose'
import { GraphQLModule } from '@nestjs/graphql'
import { Customer, CustomerSchema } from './entities/customer.entity'

describe('CustomersService', () => {
  let service: CustomersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot('mongodb+srv://dysonsh:test1234@cluster0.6rrfr.mongodb.net/dysondb?retryWrites=true&w=majority'),
        GraphQLModule.forRootAsync({
          useFactory: () => ({
            typePaths: ['./**/*.graphql'],
            debug: !(process.env.NODE_ENV === 'production'),
            useGlobalPrefix: true,
          }),
        }),
        MongooseModule.forFeature([
          {
            name: Customer.name,
            schema: CustomerSchema,
          },
        ]),
      ],
      providers: [CustomersService],
    }).compile();

    service = module.get<CustomersService>(CustomersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
