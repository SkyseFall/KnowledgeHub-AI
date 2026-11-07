package com.knowledgehub.system.dto;

import java.time.Instant;

public record SystemHealthResponse(
        String status,
        String application,
        Instant timestamp
) {
}
