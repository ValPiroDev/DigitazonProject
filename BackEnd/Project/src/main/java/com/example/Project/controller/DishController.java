package com.example.Project.controller;


import com.example.Project.entity.Dish;
import com.example.Project.entity.Restaurant;
import com.example.Project.repository.DishRepository;
import com.example.Project.repository.RestaurantRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/dishes")
public class DishController {
    @Autowired
    private DishRepository dishRepository;
    @Autowired
    private RestaurantRepository restaurantRepository;

    @GetMapping
    public List<Dish> getAll() {
        return dishRepository.findAll();
    }

    @GetMapping("/{id}")
    public List<Dish> getByRestaurantId(@PathVariable Integer id) {
        List<Dish> result = dishRepository.findByRestaurantIdEquals(id);
        if (result.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "task with id " + id + " not found");
        } else {
            return result;
        }
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        if (dishRepository.existsById(id)) {
            dishRepository.deleteById(id);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "task with id " + id + " not found");
        }
    }

    @PutMapping("/{id}/{restaurantId}")
    public Dish update(@PathVariable Integer id, @Valid @RequestBody Dish dish, @PathVariable Integer restaurantId) {
        Optional<Dish> result = dishRepository.findById(id);
        Optional<Restaurant> optionalRestaurant = restaurantRepository.findById(restaurantId);
        if (optionalRestaurant.isPresent() && result.isPresent()) {
            Restaurant restaurant = optionalRestaurant.get();
                dish.setId(id);
                dish.setRestaurant(restaurant);
                restaurant.getDishes().add(dish);
                restaurantRepository.save(restaurant);
                return dishRepository.save(dish);
            } else {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "task with id " + id + " not found");
            }
        }
        }





