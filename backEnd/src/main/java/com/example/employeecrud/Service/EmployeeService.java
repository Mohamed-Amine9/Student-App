package com.example.employeecrud.Service;

import com.example.employeecrud.Entity.Employee;
import com.example.employeecrud.Exeption.ResourceNotFoundException;
import com.example.employeecrud.Repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class EmployeeService {
    @Autowired
    EmployeeRepository repository;

    //get methods
    public List<Employee> getEmployees(){
        return repository.findAll();
    }
    public Employee getEmployee(Long id){
        return repository.findById(id).orElse(null);
    }
    //post methods
    public Employee PostEmployee(Employee e){
        return repository.save(e);
    }
    public List<Employee> PostEmployees(List<Employee> e){
        return repository.saveAll(e);
    }
    //update methods
    public Employee UpdateEmployee(Long id ,Employee emp){
        Employee e=repository.findById(id).orElse(null);
        e.setNom(emp.getNom());
        e.setPrenom(emp.getPrenom());
        e.setSalaire(emp.getSalaire());
        e.setPoste(emp.getPoste());
       return repository.save(e);
    }
    //delete methods
    public Map<String,Boolean> DeleteEmployee(Long id) {
        Employee e = repository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("employee xith the id: "+id+" not exist"));
        repository.delete(e);
        Map<String ,Boolean>response=new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response).getBody();
    }


}
