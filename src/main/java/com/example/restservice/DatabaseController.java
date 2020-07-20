package com.example.restservice;

import com.example.restservice.Model.PostgreSQLJDBC;
import org.springframework.web.bind.annotation.RestController;

//import com.example.restservice.Model.PostgreSQLJDBC;

@RestController
public class DatabaseController {

    private final PostgreSQLJDBC[] database = new PostgreSQLJDBC[]{
            new PostgreSQLJDBC()
    };


//    private final  [] bulbs = new Bulb[]{
//    PostgreSQLJDBC
//    @GetMapping("/demodatabase")
//    public List<Bulb> getBulbs() {
//    return Bulb;
//    }
}

//    getBulbs();


//
//
////            System.out.println("\nThis is the actor with id: 188");
////            findActorByID(188);
////
////            int count = getActorCount();
////            System.out.println("\nnumber of actors in database: " + count);
//
//
//
//
//        @GetMapping("/test")
//        public Bulb[] tests() {
//            return tests();


