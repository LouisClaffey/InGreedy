package com.ingreedy.hdsdevproject.ingredients;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IngredientRepository extends JpaRepository<Ingredients, Integer> {
    
    List<Ingredients> findAll();


}
