package com.example.restservice;

import com.example.restservice.Model.Bulb;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BulbController {

    private final Bulb[] bulbs = new Bulb[]{
            new Bulb(1, true, "white", "slaapkamer", 92, 31, false, 0),
            new Bulb(2, false, "soft", "slaapkamer", 374, 31, false, 0),
            new Bulb(3, true, "blue", "trap", 493, 325, false, 0),
            new Bulb(4, false, "clear", "keuken", 832, 49,false, 0),
            new Bulb(5, false, "soft white", "wc", 1109, 37, false, 0),
            new Bulb(6, false, "normal", "douche", 1212, 251, true, 50),
            new Bulb(7, true, "onmove", "outside", 606, -71, false, 0),

            new Bulb(8, true, "dimmable", "outside", 606, -227, true,50),

};


    @GetMapping("/bulbs")
    public Bulb[] bulps() {
        return bulbs;
    }

    @GetMapping("/Bulb")
    public Bulb bulb(int bulbId) {
        for (Bulb bulb : bulbs) {
            if (bulb.getId() == bulbId) {
                return bulb;
            }
        }
        return null;
    }

    //toggle zet de schakelaar aan of uit

    @GetMapping("/setBulb")
    public Bulb toggleBulb(int bulbId) {
        for (Bulb bulb : bulbs) {
            if (bulb.getId() == bulbId) {
                if (bulb.isOff())
                    bulb.turnOn();
                else
                    bulb.turnOff();

                return bulb;
            }
        }
        return null;
    }
}