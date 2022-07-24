package com.ingreedy.hdsdevproject.users;
;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void save (User user){
        userRepository.save(user);
    }


}
