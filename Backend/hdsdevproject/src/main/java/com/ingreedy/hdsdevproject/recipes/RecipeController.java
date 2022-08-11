package com.ingreedy.hdsdevproject.recipes;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class RecipeController {

    @Autowired
    private RecipeService service;
    private Recipes recipe;


    @GetMapping(path = "users/home")
    public List<Recipes> listReverse(){
        return service.listAllReverse();
    }

    @PostMapping(path = "recipes")
    public void add(@RequestBody Recipes recipe){
        service.save(recipe);
    }

    /** this code will delete the latest submitted recipe
     * due to time constraints was not fully implemented */
    @DeleteMapping(path ="users/home")
    public List<Recipes> theNewList(){
        service.delete();
        return service.listAllReverse();
    }

/** this function would be used for getting specific recipes
 * due to time constraints this was not implemented */
//    @GetMapping(path = "users/recipes/{id}")
//    public ResponseEntity<Recipes> get(@PathVariable Integer id){
//        try {
//            Recipes recipe = service.get(id);
//            return new ResponseEntity<Recipes>(recipe, HttpStatus.OK);
//        } catch(NoSuchElementException e){
//            return new ResponseEntity<Recipes>(HttpStatus.NOT_FOUND);
//        }
//    }

    /** return oldest first */
//    @GetMapping(path = "users/recipes")
//    public List<Recipes> list(){
//        return service.listAll();
//    }

}
