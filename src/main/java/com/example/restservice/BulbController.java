package com.example.restservice;

import com.example.restservice.Model.Bulb;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.awt.*;

@RestController
public class BulbController {

    private final Bulb[] bulbs = new Bulb[]{
            new Bulb(1, false, Color.black, "Zwart", "slaapkamer"),
            new Bulb(2, false, Color.white, "wit", "gang"),
            new Bulb(3, false, Color.red, "wit", "badkamer"),
            new Bulb(4, false, Color.white, "groen", "wc"),
            new Bulb(5, false, Color.white, "wit", "zolder")

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
}




