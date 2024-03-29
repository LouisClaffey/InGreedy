package com.ingreedy.hdsdevproject.recipes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeService {


    @Autowired
    private RecipeRepository repo;

    public List<Recipes> listAll(){
        return repo.findAll();
    }

    public List<Recipes> listAllReverse(){
        Iterable<Recipes> recipesReversed = repo.findAll(Sort.by("id").descending());
        return (List<Recipes>) recipesReversed;
    }

    /** this function although unused, will delete the latest recipe in the repository
     * due to time constraints the student did not implement this feature
     * see HDSDEV_Project\UI_Frontend\ingreedy-ui\src\components\FunctionsToUse.js*/

    public List<Recipes> delete(){

        List<Recipes> theList =  repo.findAll();

        if(theList != null) {
            Integer max = 0;

            for (Recipes recipe : theList) {
                Integer i = recipe.getId();
                if (i > max) {
                    max = i;
                }

            }
            repo.deleteById(max);
        }

        return theList;
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
