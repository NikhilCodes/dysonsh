import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Project,
  Customer,
} from '../models';
import {ProjectRepository} from '../repositories';

export class ProjectCustomerController {
  constructor(
    @repository(ProjectRepository)
    public projectRepository: ProjectRepository,
  ) { }

  @get('/projects/{id}/customer', {
    responses: {
      '200': {
        description: 'Customer belonging to Project',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Customer)},
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.string('id') id: typeof Project.prototype.id,
  ): Promise<Customer> {
    return this.projectRepository.customer(id);
  }
}
