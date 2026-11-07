package com.knowledgehub;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


/*
@SpringBootApplication combines:
- Configuration declaration.
- Component scanning.
- Auto-configuration.
 */
@SpringBootApplication
public class KnowledgeHubApplication {

    public static void main(String[] args){
        SpringApplication.run(KnowledgeHubApplication.class, args);
    }
}
