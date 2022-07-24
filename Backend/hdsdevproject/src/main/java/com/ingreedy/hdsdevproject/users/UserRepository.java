package com.ingreedy.hdsdevproject.users;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
    public interface UserRepository extends JpaRepository<User, Integer> {
    public User findByEmail(String email);
}
