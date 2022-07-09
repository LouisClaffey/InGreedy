//package com.ingreedy.hdsdevproject.ingredients;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.List;
//import java.util.NoSuchElementException;
//
//@RestController
//@CrossOrigin(origins = "http://localhost:4200/")
//public class IngredientController {
//
//    @Autowired
//    private IngredientService service;
//
//    @GetMapping(path = "/ingredients")
//    public List<Ingredients> list(){
//        return service.listAll();
//    }
//
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
//
//
//}
