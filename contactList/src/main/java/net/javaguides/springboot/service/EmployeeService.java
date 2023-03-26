package net.javaguides.springboot.service;

import java.util.List;

import net.javaguides.springboot.model.Employee;

public interface EmployeeService {
	public String addEmployee(Employee employee);

	public List<Employee> findAllEmployee();

}
