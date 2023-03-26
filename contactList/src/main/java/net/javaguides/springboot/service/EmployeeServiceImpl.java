package net.javaguides.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {
	@Autowired
	EmployeeRepository employeeRepository;

	@Override
	public String addEmployee(Employee employee) {
		Employee result = employeeRepository.save(employee);
		return "Successful";
	}

	@Override
	public List<Employee> findAllEmployee() {
		return employeeRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
	}

}
