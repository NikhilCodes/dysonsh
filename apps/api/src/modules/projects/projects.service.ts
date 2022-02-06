import { Injectable } from '@nestjs/common';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Project, ProjectDocument } from './entities/project.entity'

@Injectable()
export class ProjectsService {
  constructor(@InjectModel(Project.name) private projectModel: Model<ProjectDocument>) {}

  create(createProjectInput: CreateProjectInput) {
    return 'This action adds a new project';
  }

  findAllByUserId(uid: string) {
    return this.projectModel.find({
      users: { $in: uid },
    })
  }

  findOne(id: string) {
    return this.projectModel.findById(id)
  }

  update(id: string, updateProjectInput: UpdateProjectInput | any) {
    return this.projectModel.updateOne({ _id: id }, updateProjectInput)
  }

  remove(id: string) {
    return `This action removes a #${id} project`;
  }
}
