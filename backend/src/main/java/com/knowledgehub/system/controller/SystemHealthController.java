package com.knowledgehub.system.controller;

import com.knowledgehub.system.dto.SystemHealthResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;


@RestController
@RequestMapping("api/v1/system")
public class SystemHealthController {

    @GetMapping("/health")
    public SystemHealthResponse health(){
        return new SystemHealthResponse(
                "UP",
                "KnowledgeHub AI",
                Instant.now()
        );
    }
}
