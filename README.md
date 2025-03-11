graph TD
    subgraph Infrastructure
        A[Config Server] -->|Provides Configuration| B[Customers Service]
        A --> C[Vets Service]
        A --> D[Visits Service]
        A --> E[GenAI Service]
        A --> F[API Gateway]
        A --> G[Discovery Server]
        A --> H[Admin Server]
        A --> I[Grafana]
        A --> J[Prometheus]
    end

    subgraph Services
        B -->|Registers with| G
        C -->|Registers with| G
        D -->|Registers with| G
        E -->|Registers with| G
        F -->|Routes Requests| B
        F -->|Routes Requests| C
        F -->|Routes Requests| D
        F -->|Routes Requests| E
    end

    subgraph Monitoring
        I -->|Collects Metrics| J
        J -->|Monitors| B
        J -->|Monitors| C
        J -->|Monitors| D
        J -->|Monitors| E
        J -->|Monitors| F
    end

    subgraph Frontend
        K[AngularJS Frontend] -->|Interacts with| F
    end
