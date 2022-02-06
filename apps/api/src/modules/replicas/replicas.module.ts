import { Module } from '@nestjs/common';
import { ReplicasService } from './replicas.service';
import { ReplicasResolver } from './replicas.resolver';
import { MongooseModule } from '@nestjs/mongoose'
import { Replica, ReplicaSchema } from './entities/replica.entity'
import { Project, ProjectSchema } from '../projects/entities/project.entity'
import { ProjectsService } from '../projects/projects.service'
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Project.name,
        schema: ProjectSchema,
      },
      {
        name: Replica.name,
        schema: ReplicaSchema,
      },
    ]),
  ],
  providers: [ReplicasResolver, ReplicasService, ProjectsService]
})
export class ReplicasModule {}
