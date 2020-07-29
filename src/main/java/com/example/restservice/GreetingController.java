//package com.example.restservice;
//
//import com.example.restservice.Model.LightBulb;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//public class GreetingController {
//
//    private final LightBulb[] lightBulbs = {
//            new LightBulb(1, "Living Room", "Soft White", "25 Watt", true),
//            new LightBulb(2, "Living Room", "Soft Orange", "15 Watt", true),
//            new LightBulb(3, "Bedroom", "Led", "40 Watt", true),
//            new LightBulb(4, "Living Room", "Night Shift", "100 Watt", true),
//            new LightBulb(5, "Living Room", "Morning view", "60 Watt", true),
//
//    };
//
//    @GetMapping("/lightbulbs")
//    public LightBulb[] lightBulbs() {
//        return lightBulbs;
//    }
//
//    @GetMapping("/lightbulb")
//    public LightBulb lightbulb(int id) {
//        for (LightBulb lightBulb : lightBulbs) {
//            if (lightBulb.getId() == id) {
//                return lightBulb;
//            }
//        }
//        return null;
//    }
//}
//
//
//
