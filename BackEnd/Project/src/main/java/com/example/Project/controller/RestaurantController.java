package com.example.Project.controller;

import com.example.Project.entity.Dish;
import com.example.Project.entity.Restaurant;
import com.example.Project.repository.DishRepository;
import com.example.Project.repository.RestaurantRepository;
import jakarta.validation.Valid;
import org.apache.logging.log4j.util.Strings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/restaurants")
public class RestaurantController {


    @Autowired
    public RestaurantRepository restaurantRepository;
    @Autowired
    private DishRepository dishRepository;

    /* endpoint legge tutti i restaurant */
    @GetMapping
    public List<Restaurant> getAll(@RequestParam(name = "name", required = false) String a, @RequestParam(name = "city", required = false) String b){
        if (Strings.isNotBlank(a) && Strings.isNotBlank(b)){
            return restaurantRepository.findByNameContainingIgnoreCaseAndCityContainingIgnoreCase(a, b);
        } else if (Strings.isNotBlank(a)) {
            return restaurantRepository.findByNameContainingIgnoreCase(a);
        } else if (Strings.isNotBlank(b)) {
            return restaurantRepository.findByCityContainingIgnoreCase(b);
        }
        return restaurantRepository.findAll();
    }

    /* endpoint legge un singolo restaurant preso per id */
    @GetMapping("/{id}")
    public Restaurant getById(@PathVariable Integer id){
        Optional<Restaurant> result =  restaurantRepository.findById(id);
        if(result.isPresent()){
            return result.get();
        } else{
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "restaurant with id "+ id +" not found");
        }
    }

    /* endpoint crea un nuovo restaurant e lo salva su db */
    @PostMapping
    public Restaurant create(@Valid @RequestBody Restaurant restaurant){
        Optional<Restaurant> result = restaurantRepository.findById(restaurant.getId());
        if(result.isEmpty()){
            return restaurantRepository.save(restaurant);
        }else {
            throw new ResponseStatusException(HttpStatus.METHOD_NOT_ALLOWED, "restaurant with id "+
                    restaurant.getId() + " existing. Use Put to update resource");
        }
    }

    /* endpoint che aggiorna un restaurant preso per id */
    @PutMapping("/{id}")
    // situazione ibrida rispetto GET e POST
    public Restaurant update(@PathVariable Integer id,@Valid @RequestBody Restaurant resturant){
        Optional<Restaurant> result = restaurantRepository.findById(id);
        if(result.isPresent()){
            resturant.setId(id);
            return restaurantRepository.save(resturant);
        } else{
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "restaurant with id "+ id + " not found");
        }
    }

    /* endpoint che elimina un restaurant per id */
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id){
        if(restaurantRepository.existsById(id)){
            restaurantRepository.deleteById(id);
        }else{
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "restaurant "+ id + " not found");
        }
    }


    @PostMapping("/{id}/dishes")
    public Dish createRestaurantDish (@Valid @RequestBody Dish dish, @PathVariable Integer id){
        Optional<Restaurant> result = restaurantRepository.findById(id);
        if (result.isEmpty())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "restaurant whit id " + id + " not found");
        else {
            Dish d2 = new Dish();
            d2.setName(dish.getName());
            d2.setPrice(dish.getPrice());
            d2.setRestaurant(result.get());
            // persisto  su database
            return dishRepository.save(d2);
        }
    }
    @GetMapping("/{id}/dishes")
    public List<Dish> getRestaurantDishes(@PathVariable Integer id){
        Optional<Restaurant> result = restaurantRepository.findById(id);
        if(result.isEmpty()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "restaurant with id "+id+" not found");
        }else{
           Restaurant restaurant = result.get();
            return restaurant.getDishes();
        }
    }

    @GetMapping("/dishes")
    public List<Restaurant> getRestaurantDishes2(@RequestParam (name = "name", required = false) String a){
        List<Restaurant> result = restaurantRepository.findByDishesNameContainingIgnoreCaseOrNameContainingIgnoreCase(a,a);
        if(result.isEmpty()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "dish with name "+a+" not found");
        }else{
            return result;
        }
    }

    @GetMapping("/tag")
    public List<Restaurant> getAllres(@RequestParam(name = "name", required = false) String a){
        if (Strings.isNotBlank(a)){
            return restaurantRepository.findByTagContainingIgnoreCase(a);
        }

        return restaurantRepository.findAll();
    }



}
