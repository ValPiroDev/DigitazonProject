package com.example.Project.repository;

import com.example.Project.entity.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Set;

public interface RestaurantRepository extends JpaRepository<Restaurant, Integer> {

    List<Restaurant> findByNameContainingIgnoreCaseAndCityContainingIgnoreCase(String name, String surname);
    List<Restaurant> findByNameContainingIgnoreCase(String name);
    List<Restaurant> findByCityContainingIgnoreCase(String surname);
    List<Restaurant> findByDishesNameContainingIgnoreCaseOrNameContainingIgnoreCase(String childName, String a);

    List<Restaurant> findByTagContainingIgnoreCase(String surname);


}
