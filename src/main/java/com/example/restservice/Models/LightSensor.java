package com.example.restservice.Models;

public class LightSensor {

    private String sensorManager;
    private String mLight;
    int minLux = 0;
    int currentLux = 0;
    int maxLux;

    public LightSensor(String sensorManager, int minLux, int currentLux, int maxLux) {
        this.sensorManager = sensorManager;
        this.minLux = minLux;
        this.currentLux = currentLux;
        this.maxLux = maxLux;
    }


    protected void onResume() {
    }

    protected void onPause() {
    }

    public void onAccuracyChanged() {

    }

    public void onSensorChanged() {
    }
}




