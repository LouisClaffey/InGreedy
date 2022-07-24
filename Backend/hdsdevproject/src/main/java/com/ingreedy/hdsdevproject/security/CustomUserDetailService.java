package com.ingreedy.hdsdevproject.security;

import com.ingreedy.hdsdevproject.users.User;
import com.ingreedy.hdsdevproject.users.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service("userDetailsService")
public class CustomUserDetailService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email);
        if (user  == null) {
            throw new UsernameNotFoundException("No user found for the given email");
        }
        return new CustomUserDetails(user);
    }
}
