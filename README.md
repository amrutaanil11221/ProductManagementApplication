# Products Management Application

This repository contains a Products Management Application with a .NET Core API for the backend and an Angular application for the frontend. 

## Setup Instructions

### Prerequisites

Ensure you have the following software installed on your system:

- **Angular CLI** (15)
- **.NET Core SDK** (8)
- **SQL Server**
- **Git**

### Backend Setup (API)

1. Clone the repository:
    ```sh
    git clone https://github.com/amrutaanil11221/ProductManagementApplication/tree/main    ```

2. Restore the dependencies:
    ```sh
    dotnet restore
    ```

3. Update the database (if applicable):
    ```sh
    dotnet ef database update
    ```

4. Run the application:
    ```sh
    dotnet run
    ```

### Frontend Setup (Angular)

1. Navigate to the frontend directory:
    ```sh
    cd ../frontend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Run the application:
    ```sh
    ng serve
    ```

The frontend application should now be running on `http://localhost:4200`.

## How to Run the Application

1. Ensure both the backend and frontend are running as per the setup instructions above.
2. Open your browser and navigate to `http://localhost:4200`.
3. You should see the Products Management Application interface.

## Application Structure

### Backend (API) - .NET Core

- **Controllers**: Handle HTTP requests and responses.
- **Services**: Contain the business logic.
- **Repositories**: Interact with the database.
- **Models**: Define the data structures.
- **Data**: Contains database context and migrations.

### Frontend (Angular)

- **Components**: Reusable UI elements.
- **Services**: Handle data fetching and business logic.
- **Modules**: Organize the application into cohesive blocks.
- **Routing**: Manages the navigation between different views.

### Design Decisions

#### Backend
- **Clean Architecture**: To separate concerns and make the application easier to maintain and test.
- **Entity Framework Core**: For database interactions, leveraging LINQ and migration capabilities.
- **RESTful Services**: To ensure scalability and separation of client and server concerns.

#### Frontend
- **Component-Based Architecture**: For creating a scalable and reusable UI structure.
- **Angular Services**: For handling business logic and state management.
- **RxJS**: For handling asynchronous data streams.

### Project Structure

```plaintext
products-management-app/
├── backend/
│   ├── Controllers/
│   ├── Models/
│   ├── Repositories/
│   ├── Services/
│   ├── Data/
│   ├── ProductsManagementApp.csproj
│   └── Program.cs
└── frontend/
    ├── src/
    │   ├── app/
    │   │   ├── components/
    │   │   ├── services/
    │   │   ├── models/
    │   │   ├── app.module.ts
    │   │   ├── app.component.ts
    │   │   ├── app.component.html
    │   │   └── app-routing.module.ts
    │   ├── assets/
    │   ├── environments/
    │   ├── index.html
    │   ├── main.ts
    │   ├── polyfills.ts
    │   └── styles.css
    ├── angular.json
    ├── package.json
    └── tsconfig.json
