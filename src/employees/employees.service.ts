import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeesService {
  private employees: CreateEmployeeDto[] = [
  {
    id: 0,
    name: 'Javier',
    lastName: 'Anaya',
    phoneNumber: '9671430564'
  },
  {
    id: 1,
    name: 'Carolina',
    lastName: 'Zamora',
    phoneNumber: '9671301635'
  }]
  create(createEmployeeDto: CreateEmployeeDto) {
    createEmployeeDto.id = this.employees.length
    this.employees.push(createEmployeeDto);
    return this.employees;
  }

  findAll() {
    return this.employees;
  }

  findOne(id: number) {
    const employee = this.employees.filter((employee) => employee.id === id);
    return employee;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    let employeeToUpdate = this.findOne(id);
    employeeToUpdate = {
      ...employeeToUpdate,
      ...updateEmployeeDto
    }
    this.employees = this.employees.map((employee) => {
      if (employee.id === id) {
        employee = employee
      }
      return employee;
    })
    return employeeToUpdate;
  }

  remove(id: number) {
   this.employees =  this.employees.filter((employee) => employee.id != id);
   return this.employees;
  }
}
