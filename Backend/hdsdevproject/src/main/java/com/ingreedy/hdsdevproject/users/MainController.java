package com.ingreedy.hdsdevproject.users;

import com.ingreedy.hdsdevproject.recipes.RecipeService;
import com.ingreedy.hdsdevproject.recipes.Recipes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class MainController {

    @GetMapping("/")
    public String viewHomePage(){
        return "index";
    }

    @GetMapping("/user/login")
    public String viewUserLogin(){
        return "user_login";
    }

    @GetMapping("/user/home")
    public String viewUserHomePage() {
        return "user_home";
    }
}
