//package com.ingreedy.hdsdevproject.users;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@CrossOrigin(origins = "http://localhost:4200/")
//public class UserController {
//
//    @Autowired
//    private UserService service;
//    private Users user;
//
//    @PostMapping(path = "users")
//    public void saveUser(@RequestBody Users user){
//        service.save(user);
//    }
//}
