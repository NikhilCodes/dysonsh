import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsResolver } from './projects.resolver';
import { ProjectsService } from './projects.service';
import { CustomersService } from '../customers/customers.service'
import { MongooseModule } from '@nestjs/mongoose'
import { Project, ProjectSchema } from './entities/project.entity'
import { Customer, CustomerSchema } from '../customers/entities/customer.entity'
import { GraphQLModule } from '@nestjs/graphql'

describe('ProjectsResolver', () => {
  let resolver: ProjectsResolver;



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
      providers: [ProjectsResolver, ProjectsService, CustomersService]
    }).compile();

    resolver = module.get<ProjectsResolver>(ProjectsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
