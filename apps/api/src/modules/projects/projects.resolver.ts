import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveReference, ResolveField, Parent,
} from '@nestjs/graphql';
import { ProjectsService } from './projects.service';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { User } from '../users/entities/user.entity'
import { Project } from './entities/project.entity'
import { UsersService } from '../users/users.service'
import { ReplicasService } from '../replicas/replicas.service'
import { CurrentUser } from '../../decorators/current-user.decorator'

@Resolver('Project')
export class ProjectsResolver {
  constructor(
    private readonly projectsService: ProjectsService,
    private readonly usersService: UsersService,
    private readonly replicasService: ReplicasService,
  ) {}

  @Mutation('createProject')
  create(@Args('createProjectInput') createProjectInput: CreateProjectInput) {
    return this.projectsService.create(createProjectInput);
  }

  @Query('projects')
  findAll(@CurrentUser() user) {
    return this.projectsService.findAllByUserId(user.id);
  }

  @Query('project')
  findOne(@Args('id') id: string) {
    return this.projectsService.findOne(id);
  }

  @Mutation('updateProject')
  update(@Args('updateProjectInput') updateProjectInput: UpdateProjectInput) {
    return this.projectsService.update(updateProjectInput.id, updateProjectInput);
  }

  @Mutation('removeProject')
  remove(@Args('id') id: string) {
    return this.projectsService.remove(id);
  }

  @ResolveField()
  async users(@Parent() project: Project) {
    const { users } = project;
    return this.usersService.findByIdMultiple(users);
  }

  @ResolveField()
  async write_replica(@Parent() project: Project) {
    const { write_replica } = project;
    return this.replicasService.findOne(write_replica);
  }

  @ResolveField()
  async read_replicas(@Parent() project: Project) {
    const { read_replicas } = project;
    return this.replicasService.findByIdMultiple(read_replicas);
  }
}
