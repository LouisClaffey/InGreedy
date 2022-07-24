package com.ingreedy.hdsdevproject.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class UserPostMapping {

    @Autowired
    private UserService service;


    @PostMapping(path ="users")
    public void add(@RequestBody User user){
        service.save(user);
    }

}
