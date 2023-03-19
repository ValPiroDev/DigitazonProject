package com.example.Project.repository;

import com.example.Project.entity.Dish;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Set;

public interface DishRepository extends JpaRepository<Dish, Integer> {
    List<Dish> findByRestaurantIdEquals(Integer resId);
    List<Dish> findByNameContainingIgnoreCase(String a);

}


