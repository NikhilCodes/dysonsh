import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsService } from './projects.service';
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { GraphQLModule } from '@nestjs/graphql'
import { Project, ProjectSchema } from './entities/project.entity'
import { Customer, CustomerSchema } from '../customers/entities/customer.entity'

describe('ProjectsService', () => {
  let service: ProjectsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          envFilePath: ['.env.development.local', '.env.development'],
        }),
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
      providers: [ProjectsService],
    }).compile();

    service = module.get<ProjectsService>(ProjectsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
