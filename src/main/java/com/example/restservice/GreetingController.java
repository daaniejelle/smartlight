package com.example.restservice;

import com.example.restservice.Models.LightBulb;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.atomic.AtomicLong;


@RestController
public class GreetingController {

    private final LightBulb[] lightbulbs = {
            new LightBulb(1, "Living Room", "Soft White", "25 Watt", true),
            new LightBulb(2, "Living Room", "Soft Orange", "15 Watt", true),
            new LightBulb(3, "Bedroom", "Led", "40 Watt", true),
            new LightBulb(4, "Living Room", "Night Shift", "100 Watt", true),
            new LightBulb(5, "Living Room", "Morning view", "60 Watt", true),
    };

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @GetMapping("/greeting")
    public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
        return new Greeting(counter.incrementAndGet(), String.format(template, name));
    }

    @GetMapping("/lightbulp")
    public LightBulb lightbulb(int id) {
        for (LightBulb lightBulb : lightbulbs) {
            return lightBulb;
        }
        return null;
    }

    @GetMapping("/bulbs")
    public LightBulb[] bulbs() {
        return bulbs();
    }


//      @GetMapping("/updateBulp")
//      public LightBulb updateBulb (LightBulb lightbulp){
//          LightBulb myLightbulp = null;
//           for (LightBulb x : lightbulbs) {
//                if (x.getId() == lightbulb(updateBulb()).getId()) {
//                    myLightbulp = x;
//            }
//       }


//    @GetMapping("/isLightBulpDirty")
//    public int isLightBulpDirty(@RequestParam(value = "id", defaultValue = "") String id) {
//        int parsedId = Integer.parseInt(id);
//        for (LightBulb lightBulb : lightbulbs) {
//            if (lightBulb.getId() == parsedId) {
//                return lightBulb.getIsDirtyCounter();
//            }
//        }
//        return -1;
//    }
}
