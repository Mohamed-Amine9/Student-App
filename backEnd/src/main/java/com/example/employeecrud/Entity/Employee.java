package com.example.employeecrud.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "employee")
@Data
public class Employee {
    @Id
    @GeneratedValue
    private Long id;
    @Column(name="nom")
    private String nom;
    @Column(name="prenom")
    private String prenom;
    @Column(name="poste")
    private String poste;
    @Column(name="salaire")
    private float salaire;
}
