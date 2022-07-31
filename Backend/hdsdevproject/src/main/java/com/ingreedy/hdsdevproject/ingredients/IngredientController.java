package com.ingreedy.hdsdevproject.ingredients;
import com.ingreedy.hdsdevproject.recipes.RecipeService;
import com.ingreedy.hdsdevproject.recipes.Recipes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class IngredientController {

    @Autowired
    private IngredientService service;
    private RecipeService recipeService;

    @GetMapping(path = "users/found")
    public List<Recipes> foundRecipe(){
        return service.findMatchingRecipe();
    }

    @PostMapping(path = "ingredients")
    public void add(@RequestBody Ingredients ingredients){
        service.save(ingredients);
    }

//
//    @GetMapping(path = "/ingredients/{id}")
//    public ResponseEntity<Ingredients> get(@PathVariable Integer id){
//        try {
//            Ingredients ingredients = service.get(id);
//            return new ResponseEntity<Ingredients>(ingredients, HttpStatus.OK);
//        } catch(NoSuchElementException e){
//            return new ResponseEntity<Ingredients>(HttpStatus.NOT_FOUND);
//        }
//    }


}
