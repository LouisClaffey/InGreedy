package com.ingreedy.hdsdevproject.ingredients;

import com.ingreedy.hdsdevproject.recipes.RecipeRepository;
import com.ingreedy.hdsdevproject.recipes.Recipes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IngredientService {

    @Autowired
    private IngredientRepository ingredientsRepo;

    @Autowired
    private RecipeRepository recipeRepo;


    public List<Recipes> findMatchingRecipe(){
        List<Recipes> allRecipes = recipeRepo.findAll();
        List<Recipes> found = recipeRepo.findAll();

        for (Recipes recipes : allRecipes ){
            found = recipeRepo.findByGrainsAndProteinsAndVegetablesAndDairiesAndFruits
                    (findLatest().getGrains(),
                            findLatest().getProteins(),
                            findLatest().getVegetables(),
                            findLatest().getDairies(),
                            findLatest().getFruits());
        }

        return found;

    }

    public Ingredients findLatest(){
        List<Ingredients> all = ingredientsRepo.findAll();
        Ingredients latest = all.get(all.size()-1);
        return latest;
    }


    public void save(Ingredients ingredient){
        ingredientsRepo.save(ingredient);
    }

}
