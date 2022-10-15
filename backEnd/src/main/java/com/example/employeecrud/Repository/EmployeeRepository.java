package com.example.employeecrud.Repository;

import com.example.employeecrud.Entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
@CrossOrigin
public interface EmployeeRepository extends JpaRepository<Employee,Long> {

}
