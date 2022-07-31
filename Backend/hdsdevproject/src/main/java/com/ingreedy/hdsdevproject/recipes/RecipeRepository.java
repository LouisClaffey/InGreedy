package com.ingreedy.hdsdevproject.recipes;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RecipeRepository extends JpaRepository<Recipes, Integer> {

    List<Recipes> findByGrainsAndProteinsAndVegetablesAndDairiesAndFruits (String g, String p, String v, String d, String f);

}
