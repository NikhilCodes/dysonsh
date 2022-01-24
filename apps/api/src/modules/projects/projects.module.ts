import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsResolver } from './projects.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Project, ProjectSchema } from './entities/project.entity';
import { Customer, CustomerSchema } from '../customers/entities/customer.entity'
import { CustomersService } from '../customers/customers.service'

@Module({
  imports: [
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
})
export class ProjectsModule {}
