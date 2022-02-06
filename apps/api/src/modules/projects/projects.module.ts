import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsResolver } from './projects.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Project, ProjectSchema } from './entities/project.entity';
import { User, UserSchema } from '../users/entities/user.entity'
import { UsersService } from '../users/users.service'
import { Replica, ReplicaSchema } from '../replicas/entities/replica.entity'
import { ReplicasService } from '../replicas/replicas.service'

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Project.name,
        schema: ProjectSchema,
      },
      {
        name: User.name,
        schema: UserSchema,
      },
      {
        name: Replica.name,
        schema: ReplicaSchema,
      },
    ]),
  ],
  providers: [ProjectsResolver, ProjectsService, UsersService, ReplicasService]
})
export class ProjectsModule {}
