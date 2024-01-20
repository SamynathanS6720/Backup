package com.map.tracking;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class main {

    @RequestMapping("/react")
    public String index(){
        return "index";
    }
    
    @CrossOrigin 
    @RequestMapping("/hello")
    public String hello(){
        return "Hello World";
    }
}
