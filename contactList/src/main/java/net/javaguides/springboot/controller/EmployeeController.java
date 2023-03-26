package net.javaguides.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.service.EmployeeServiceImpl;


	@RestController
	@RequestMapping("/employee")
	@CrossOrigin
	public class EmployeeController {

		@Autowired
		EmployeeServiceImpl employeeService;

		@PostMapping("/add")
		public String addStudent(@RequestBody Employee employee) {
			return employeeService.addEmployee(employee);
		}

		@GetMapping
	    public List<Employee> findALlStudents(){
			return employeeService.findAllEmployee();
		}
	}

