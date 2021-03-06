import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsService } from './projects.service';
import { MongooseModule } from '@nestjs/mongoose'
import { GraphQLModule } from '@nestjs/graphql'
import { Project, ProjectSchema } from './entities/project.entity'
import { User, UserSchema } from '../users/entities/user.entity'

describe('ProjectsService', () => {
  let service: ProjectsService;

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
            name: User.name,
            schema: UserSchema,
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
