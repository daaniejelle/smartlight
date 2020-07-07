package com.example.restservice;

import com.example.restservice.Model.LightBulb;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {

    private final LightBulb[] lightBulbs = {
            new LightBulb(1, "Living Room", "Soft White", "25 Watt", true),
            new LightBulb(2, "Living Room", "Soft Orange", "15 Watt", true),
            new LightBulb(3, "Bedroom", "Led", "40 Watt", true),
            new LightBulb(4, "Living Room", "Night Shift", "100 Watt", true),
            new LightBulb(5, "Living Room", "Morning view", "60 Watt", true),
    };

    @GetMapping("/lightbulp")
    public LightBulb lightbulb(int id) {
        for (LightBulb lightBulb : lightBulbs) {
            return lightBulb;
        }
        return null;
    }

    @GetMapping("/lightbulbs")
    public LightBulb[] lightBulbs() {
        return lightBulbs();
    }

//    private static final String template = "Hello, %s!";
//    private final AtomicLong counter = new AtomicLong();
//
//    @GetMapping("/greeting")
//    public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
//        return new Greeting(counter.incrementAndGet(), String.format(template, name));
//    }

//    @GetMapping("/lightbulp")
//    public LightBulb lightbulb(int id) {
//        for (LightBulb lightBulb : lightbulbs) {
//            return lightBulb;
//        }
//        return null;
//    }
}



