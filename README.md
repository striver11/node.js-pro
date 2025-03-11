# node.js-pro

# Project Architecture

```mermaid
graph TD
    subgraph Backend
        A[Spring Boot Application]
        B[EmployeeController]
        C[EmployeeService]
        D[EmployeeServiceImp]
        E[EmployeeDAO]
        F[EmployeeDAOImp]
        G[Employee]
        H[EntityManager]
    end

    subgraph Frontend
        I[React Application]
        J[App.js]
        K[AddEmployee.js]
        L[Table.js]
    end

    subgraph Database
        M[MySQL Database]
    end

    A --> B
    B --> C
    C --> D
    D --> E
    E --> F
    F --> G
    F --> H
    A --> M

    I --> J
    J --> K
    J --> L
    J --> A
