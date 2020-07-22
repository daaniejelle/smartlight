package com.example.restservice.Model;

import java.sql.*;
import java.util.ArrayList;

public class PostgreSQLJDBC {
    private static final String url = "jdbc:postgresql://localhost:5432/Bulbs";
    private static final String user = "postgres";
    private static final String password = "banaan007";

    private static ArrayList<Bulb> listOfActors = new ArrayList<Bulb>();


    public static Connection connect() throws SQLException {
        return DriverManager.getConnection(url, user, password);
    }

    public static int getBulbsCount() {
        String SQL = "SELECT count(*) FROM lightbulbs";
        int count = 0;

        try (Connection conn = connect();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(SQL)) {
            rs.next();
            count = rs.getInt(1);
        } catch (SQLException ex) {
            System.out.println(ex.getMessage());
        }

        return count;
    }}
//
////    public static void getlightbulbs() {
////        String SQL = "SELECT bulbid,color, location FROM lightbulbs";
////
////        try (Connection conn = connect();
////             Statement stmt = conn.createStatement();
////             ResultSet rs = stmt.executeQuery(SQL)) {
////            // display actor information
////            addLightbulbs(rs);
////
////            for (Actor actor : listOfActors){
////                actor.print();
////            }
//
////        } catch (SQLException ex) {
////            System.out.println(ex.getMessage());
////        }
////    }
//
//////    public static void findActorByID(int actorID) {
//////        String SQL = "SELECT actor_id,first_name,last_name "
//////                + "FROM actor "
//////                + "WHERE actor_id = ?";
//////
//////        try (Connection conn = connect();
//////             PreparedStatement pstmt = conn.prepareStatement(SQL)) {
//////
//////            pstmt.setInt(1, actorID);
//////            ResultSet rs = pstmt.executeQuery();
//////            addActors(rs);
//////            listOfActors.get(0).print();
//////
//////        } catch (SQLException ex) {
//////            System.out.println(ex.getMessage());
//////        }
//////    }
////
////    private static void displayActor(ResultSet rs) throws SQLException {
////        while (rs.next()) {
////
////            System.out.println(rs.getString("actor_id") + "\t"
////                    + rs.getString("first_name") + "\t"
////                    + rs.getString("last_name"));
////        }
////    }
////
////    private static void addActors(ResultSet rs) throws SQLException {
////        while (rs.next()) {
////            int id = rs.getInt("actor_id");
////            String firstName =  rs.getString("first_name");
////            String lastName = rs.getString("last_name");
////
////            Actor actor = new Actor(id, firstName, lastName);
////            listOfActors.add(actor);
////        }
////    }
////}