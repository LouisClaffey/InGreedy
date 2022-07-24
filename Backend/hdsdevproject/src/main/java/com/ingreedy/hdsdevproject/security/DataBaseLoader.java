//package com.ingreedy.hdsdevproject.security;
//
//import com.ingreedy.hdsdevproject.users.User;
//import com.ingreedy.hdsdevproject.users.UserRepository;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//@Configuration
//public class DataBaseLoader {
//
//    private UserRepository repo;
//
//    public DataBaseLoader(UserRepository repo) {
//        this.repo = repo;
//    }
//
//    @Bean
//    public CommandLineRunner initializeDatabase() {
//        return args -> {
//            User user1 = new User("test@gmail.com", "admin123");
//
//            repo.save(user1);
//
//            System.out.println("initialized");
//        };
//    }
//}
