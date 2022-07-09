package com.ingreedy.hdsdevproject.recipes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeService {

    @Autowired
    private RecipeRepository repo;

    public List<Recipes> listAll(){
        return repo.findAll();
    }

    public void save (Recipes recipe){
        repo.save(recipe);
    }

    public Recipes get(Integer id){
        return repo.findById(id).get();
    }

    public void delete(Integer id){
        repo.deleteById(id);
    }
}
