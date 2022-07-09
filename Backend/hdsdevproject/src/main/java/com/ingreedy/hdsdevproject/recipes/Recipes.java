package com.ingreedy.hdsdevproject.recipes;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Recipes {

    private Integer id;

    private String title;
    private String grains;
    private String proteins;
    private String vegetables;
    private String dairies;
    private String fruits;

    private String instructions;


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Recipes(){

    }

    public Recipes(Integer id){
        this.id = id;
    }

    public Recipes(Integer id, String title, String grains, String proteins, String vegetables, String dairies, String fruits, String instructions) {
        this.id = id;
        this.title = title;
        this.grains = grains;
        this.proteins = proteins;
        this.vegetables = vegetables;
        this.dairies = dairies;
        this.fruits = fruits;
        this.instructions = instructions;
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

    public String getInstructions() {
        return instructions;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Override
    public String toString() {
        return "Recipes{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", grains='" + grains + '\'' +
                ", proteins='" + proteins + '\'' +
                ", vegetables='" + vegetables + '\'' +
                ", dairies='" + dairies + '\'' +
                ", fruits='" + fruits + '\'' +
                ", instructions='" + instructions + '\'' +
                '}';
    }
}
