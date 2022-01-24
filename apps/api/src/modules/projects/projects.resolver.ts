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
import { Customer } from '../customers/entities/customer.entity'
import { Project } from './entities/project.entity'
import { CustomersService } from '../customers/customers.service'

@Resolver('Project')
export class ProjectsResolver {
  constructor(
    private readonly projectsService: ProjectsService,
    private readonly customersService: CustomersService,
  ) {}

  @Mutation('createProject')
  create(@Args('createProjectInput') createProjectInput: CreateProjectInput) {
    return this.projectsService.create(createProjectInput);
  }

  @Query('projects')
  findAll() {
    return this.projectsService.findAll();
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
  remove(@Args('id') id: number) {
    return this.projectsService.remove(id);
  }

  @ResolveField()
  async customer(@Parent() project: Project) {
    const { customer } = project;
    return this.customersService.findOne(customer.toString());
  }
}
