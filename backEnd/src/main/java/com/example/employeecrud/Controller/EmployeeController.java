package com.example.employeecrud.Controller;

import com.example.employeecrud.Entity.Employee;
import com.example.employeecrud.Service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController

public class EmployeeController {
    @Autowired
    EmployeeService service;

    //get methods
    @GetMapping("/getById/{id}")
    public Employee getEmployee(@PathVariable Long id){
        return service.getEmployee(id);
    }
    @GetMapping("/Employees")
    public List<Employee> getEmployees(){
        return service.getEmployees();
    }
    //Post methods
    @PostMapping("/addEmployee")
    public Employee PostEmployee(@RequestBody Employee e){
        return service.PostEmployee(e);
    }
    @PostMapping("/addEmployees")
    public List<Employee> PostEmployees(@RequestBody List<Employee> e){
        return service.PostEmployees(e);
    }
    //Delete methods
    @DeleteMapping("/delete/{id}")
    public Map<String,Boolean> DeleteEmployee(@PathVariable Long id){
        return service.DeleteEmployee(id);
    }
    @PutMapping("/Update/{id}")
    public Employee UpdateEmployee(@PathVariable Long id,@RequestBody Employee e) {
        return service.UpdateEmployee(id,e);
    }

}
