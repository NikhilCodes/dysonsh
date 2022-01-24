import { Test, TestingModule } from '@nestjs/testing';
import { CustomersResolver } from './customers.resolver';
import { CustomersService } from './customers.service';
import { MongooseModule } from '@nestjs/mongoose'
import { GraphQLModule } from '@nestjs/graphql'
import { Project, ProjectSchema } from '../projects/entities/project.entity'
import { Customer, CustomerSchema } from './entities/customer.entity'
import { ProjectsResolver } from '../projects/projects.resolver'
import { ProjectsService } from '../projects/projects.service'

describe('CustomersResolver', () => {
  let resolver: CustomersResolver;

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
            name: Project.name,
            schema: ProjectSchema,
          },
          {
            name: Customer.name,
            schema: CustomerSchema,
          },
        ]),
      ],
      providers: [CustomersResolver, CustomersService],
    }).compile();

    resolver = module.get<CustomersResolver>(CustomersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
