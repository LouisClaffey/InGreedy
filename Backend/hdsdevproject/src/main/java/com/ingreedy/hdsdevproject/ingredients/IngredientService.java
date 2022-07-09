//package com.ingreedy.hdsdevproject.ingredients;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class IngredientService {
//
//    @Autowired
//    private IngredientRepository repo;
//
//    public List<Ingredients> listAll(){
//        return repo.findAll();
//    }
//
//    public void save(Ingredients ingredient){
//        repo.save(ingredient);
//    }
//
//    public Ingredients get(Integer id){
//        return repo.findById(id).get();
//    }
//
//    public void delete(Integer id){
//        repo.deleteById(id);
//    }
//}
