package com.example.restservice.Model;

public class LightSensor {

    private String sensorManager;
    private String Light;
    private int minLux = 0;
    private int currentLux = 0;
    private int maxLux;

    public LightSensor(String sensorManager, String light, int minLux, int currentLux, int maxLux) {
        this.sensorManager = sensorManager;
        Light = light;
        this.minLux = minLux;
        this.currentLux = currentLux;
        this.maxLux = maxLux;
    }

    public String getSensorManager() {
        return sensorManager;
    }

    public void setSensorManager(String sensorManager) {
        this.sensorManager = sensorManager;
    }

    public String getLight() {
        return Light;
    }

    public void setLight(String light) {
        Light = light;
    }

    public int getMinLux() {
        return minLux;
    }

    public void setMinLux(int minLux) {
        this.minLux = minLux;
    }

    public int getCurrentLux() {
        return currentLux;
    }

    public void setCurrentLux(int currentLux) {
        this.currentLux = currentLux;
    }

    public int getMaxLux() {
        return maxLux;
    }

    public void setMaxLux(int maxLux) {
        this.maxLux = maxLux;
    }


    public void SensorActivity() {

    }

    protected void onResume() {
        if (currentLux > 10000) {
            onResume();

        }
    }

    protected void onHold() {

        if (currentLux == minLux) {
            onHold();
        }
    }

    public void onAccuracyChanged() {

    }

    public void onSensorChanged() {
    }


}

