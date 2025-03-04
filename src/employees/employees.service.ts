import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';
import { v4 as uuid} from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeesService {
 
  constructor(
    @InjectRepository(Employee)
    private EmployeeRepository: Repository<Employee>
  ){}

  async create(createEmployeeDto: CreateEmployeeDto) {
    const employee = await this.EmployeeRepository.save(createEmployeeDto)
    return employee;
  }

  findAll() {
    return this.EmployeeRepository.find();
  }

  findOne(id: string) {
    const employee = this.EmployeeRepository.findOneBy({
      employeeId: id
    })
    return employee
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    const employeeToUpdate = await this.EmployeeRepository.preload({
      employeeId: id,
      ...updateEmployeeDto
    });
    if (!employeeToUpdate) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }
    this.EmployeeRepository.save(employeeToUpdate)
    return employeeToUpdate;
  }

  remove(id: string) {
   this.EmployeeRepository.delete({
    employeeId: id
   })
   return {
    message: `Employee with ID ${id} successfully deleted`
   }
  }
}
