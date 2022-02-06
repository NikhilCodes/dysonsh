import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ReplicasService } from './replicas.service';
import { CreateReplicaInput } from './dto/create-replica.input';
import { UpdateReplicaInput } from './dto/update-replica.input';
import { ProjectsService } from '../projects/projects.service'

@Resolver('Replica')
export class ReplicasResolver {
  constructor(private readonly replicasService: ReplicasService, private readonly projectsService: ProjectsService) {}

  @Mutation('createWriteReplica')
  async createWrite(@Args('createReplicaInput') createReplicaInput: CreateReplicaInput) {
    const replica = await this.replicasService.create(createReplicaInput);
    await this.projectsService.update(createReplicaInput.project, { write_replica: replica.id })

    return replica
  }

  @Mutation('createReadReplica')
  async createRead(@Args('createReplicaInput') createReplicaInput: CreateReplicaInput) {
    const replica = await this.replicasService.create(createReplicaInput);
    await this.projectsService.update(createReplicaInput.project, { $push: { read_replicas: replica.id } })

    return replica
  }

  @Mutation('createReplica')
  create(@Args('createReplicaInput') createReplicaInput: CreateReplicaInput) {
    return this.replicasService.create(createReplicaInput);
  }

  @Query('replica')
  findOne(@Args('id') id: string) {
    return this.replicasService.findOne(id);
  }

  @Mutation('updateReplica')
  update(@Args('updateReplicaInput') updateReplicaInput: UpdateReplicaInput) {
    return this.replicasService.update(updateReplicaInput.id, updateReplicaInput);
  }

  @Mutation('removeReplica')
  remove(@Args('id') id: string) {
    return this.replicasService.remove(id);
  }
}
