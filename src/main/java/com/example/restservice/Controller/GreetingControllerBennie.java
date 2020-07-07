package com.example.restservice.Controller;

import com.example.restservice.Greeting;
import com.example.restservice.Model.Address;
import com.example.restservice.Model.Person;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.concurrent.atomic.AtomicLong;


@RestController
public class GreetingControllerBennie {

    private final Address[] addresses = {
            new Address("hoflaan", 17, "1234AA", "Zoomstra"),
            new Address("kerkstraat", 5, "4321AB", "Planka"),
    };

    private final Person[] persons =   {
            new Person(0,"Jan","", "Smit", LocalDate.of(2000, 10, 13), addresses[0]),
            new Person(1,"Piet", "de", "de Vries", LocalDate.of(1980, 2, 24), addresses[0]),
            new Person(2,"Linda", "", "Engelshoven", LocalDate.of(1982, 4, 12), addresses[1]),
            new Person(3,"Klaas", "van", "Gestel", LocalDate.of(2001, 7, 11), addresses[1])
    };

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @GetMapping("/greeting")
    public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
        return new Greeting(counter.incrementAndGet(), String.format(template, name));
    }

    @GetMapping("/person")
    public Person person(@RequestParam(value = "id", defaultValue = "") String id) {
        int parsedId = Integer.parseInt(id);
        for (Person person : persons){
            if (person.getId() == parsedId){
                return person;
            }
        }
        return null;
    }

    @GetMapping("/persons")
    public Person[] persons() {
        return persons;
    }

    @GetMapping("/updatePerson")
    public Person updatePerson(Person person) {
        Person myPerson = null;
        for (Person p : persons){
            if (p.getId() == person.getId()){
                myPerson = p;
            }
        }

        // Only change the firstname, prefix and lastname
        if (myPerson != null){
            myPerson.setFirstName(person.getFirstName());
            myPerson.setPrefix(person.getPrefix());
            myPerson.setLastName(person.getLastName());
        }

        return myPerson;
    }

    @GetMapping("/isPersonDirty")
    public int isPersonDirty(@RequestParam(value = "id", defaultValue = "") String id) {
        int parsedId = Integer.parseInt(id);
        for (Person person : persons){
            if (person.getId() == parsedId){
                return person.getIsDirtyCounter();
            }
        }
        return -1;
    }
}
