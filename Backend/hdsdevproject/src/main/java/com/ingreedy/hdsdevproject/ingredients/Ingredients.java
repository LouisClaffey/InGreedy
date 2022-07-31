package com.ingreedy.hdsdevproject.ingredients;

import javax.persistence.*;

@Entity
@Table(name ="ingredients")
public class Ingredients {

    private Integer id;
    private String grains;
    private String proteins;
    private String vegetables;
    private String dairies;
    private String fruits;

    public Ingredients(){

    }
    public Ingredients(Integer id, String grains, String proteins, String vegetables, String dairies, String fruits) {
        this.id = id;
        this.grains = grains;
        this.proteins = proteins;
        this.vegetables = vegetables;
        this.dairies = dairies;
        this.fruits = fruits;
    }

    public Ingredients(String grains, String proteins, String vegetables, String dairies, String fruits) {
        this.grains = grains;
        this.proteins = proteins;
        this.vegetables = vegetables;
        this.dairies = dairies;
        this.fruits = fruits;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getGrains() {
        return grains;
    }

    public void setGrains(String grains) {
        this.grains = grains;
    }

    public String getProteins() {
        return proteins;
    }

    public void setProteins(String proteins) {
        this.proteins = proteins;
    }

    public String getVegetables() {
        return vegetables;
    }

    public void setVegetables(String vegetables) {
        this.vegetables = vegetables;
    }

    public String getDairies() {
        return dairies;
    }

    public void setDairies(String dairies) {
        this.dairies = dairies;
    }

    public String getFruits() {
        return fruits;
    }

    public void setFruits(String fruits) {
        this.fruits = fruits;
    }

    @Override
    public String toString() {
        return "Ingredients{" +
                "id=" + id +
                ", grains='" + grains + '\'' +
                ", proteins='" + proteins + '\'' +
                ", vegetables='" + vegetables + '\'' +
                ", dairies='" + dairies + '\'' +
                ", fruits='" + fruits + '\'' +
                '}';
    }
}
