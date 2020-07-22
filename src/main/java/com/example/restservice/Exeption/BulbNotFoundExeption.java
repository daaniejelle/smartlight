package com.example.restservice.Exeption;

public class BulbNotFoundExeption {

public static class BulbNotFoundException extends Exception {
        private long bulb_id;
        public BulbNotFoundException(long bulb_id) {
            super(String.format("Bulb is not found with id : '%s'", bulb_id));
        }
    }

}
