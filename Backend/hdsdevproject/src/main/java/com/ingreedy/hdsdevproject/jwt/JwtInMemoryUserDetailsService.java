package com.ingreedy.hdsdevproject.jwt;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

  static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();

  static {
    inMemoryUserList.add(new JwtUserDetails(1L, "ingreedy",
        "$2a$10$WfQM7v/0v3OuG7QvC4RwKeKxI1Yu6OwMJMlWgTXoJjEEF47wIGQd.", "ROLE_USER_1"));

    inMemoryUserList.add(new JwtUserDetails(2L, "liam",
            "$2a$10$s/.5mcZ8lqQXh4IR72kaD.1WIFWKgdX8w04U8S8LYl7OLmRt5lrwa", "ROLE_USER_2"));

  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    Optional<JwtUserDetails> findFirst = inMemoryUserList.stream()
        .filter(user -> user.getUsername().equals(username)).findFirst();

    if (!findFirst.isPresent()) {
      throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
    }

    return findFirst.get();
  }

}


