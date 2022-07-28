package com.ingreedy.hdsdevproject;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcryptEncoderGenerator {

    public static void main(String[] args) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

        for(int i=0; i<10; i++) {
            String encodedPw = encoder.encode("test");
            System.out.println(encodedPw);
        }


    }
}
