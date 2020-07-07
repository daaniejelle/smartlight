package com.example.restservice.Controller;

import com.example.restservice.Model.CheckLight;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CheckLightController {

@RequestMapping("/checkLight")
public void getCheckLightController
(@RequestParam(value = "location", defaultValue = "1", required = false) String location,
 @RequestParam(value = "isLit", defaultValue = "2", required = false) boolean isLit
        ) {
    CheckLight light1 = new CheckLight(true);
    CheckLight light2 = new CheckLight(false);
    light1.turnOff();
    light2.turnOn();
    System.out.println("Light 1 is now: " + light1.getLight());
    return;


}



//public static void Print() {



    }




//
//System.out.println ("Light 2 is now: " +light2.getLight());
//

//
//System.out.println ("Light 1 is now: " +light1.getLight());
//
//System.out.println ("Light 2 is now: " +light2.getLight());



