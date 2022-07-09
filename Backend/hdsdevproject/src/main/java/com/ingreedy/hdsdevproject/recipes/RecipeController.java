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

    @GetMapping(path = "/recipes")
    public List<Recipes> list(){
        return service.listAll();
    }

    @PostMapping(path = "/recipes")
    public void add(@RequestBody Recipes recipe){
        service.save(recipe);
    }


    @GetMapping(path = "/recipes/{id}")
    public ResponseEntity<Recipes> get(@PathVariable Integer id){
        try {
            Recipes recipe = service.get(id);
            return new ResponseEntity<Recipes>(recipe, HttpStatus.OK);
        } catch(NoSuchElementException e){
            return new ResponseEntity<Recipes>(HttpStatus.NOT_FOUND);
        }
    }

}
