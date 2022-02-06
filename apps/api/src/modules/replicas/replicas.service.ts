import { Injectable } from '@nestjs/common';
import { CreateReplicaInput } from './dto/create-replica.input';
import { UpdateReplicaInput } from './dto/update-replica.input';
import { InjectModel } from '@nestjs/mongoose'
import { Project, ProjectDocument } from '../projects/entities/project.entity'
import { Model } from 'mongoose'
import { Replica, ReplicaDocument } from './entities/replica.entity'
import * as mongoose from 'mongoose'

@Injectable()
export class ReplicasService {
  constructor(@InjectModel(Replica.name) private replicaModel: Model<ReplicaDocument>) {}

  create(createReplicaInput: CreateReplicaInput) {
    return this.replicaModel.create(createReplicaInput)
  }

  findOne(id: string) {
    return this.replicaModel.findById(id)
  }

  findByIdMultiple(listOfId: string[]) {
    return this.replicaModel.find({
      _id: { $in: listOfId },
    })
  }

  update(id: string, updateReplicaInput: UpdateReplicaInput) {
    return this.replicaModel.updateOne({ _id: id }, updateReplicaInput)
  }

  remove(id: string) {
    return this.replicaModel.remove({ _id: id })
  }
}
