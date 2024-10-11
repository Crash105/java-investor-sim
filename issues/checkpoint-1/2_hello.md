# Title: (2) Basic Hello World Route

### Description:
In this task, you will create a simple "Hello World" route at the `/hello` endpoint. When someone visits this URL, your Spring Boot application will return the message "Hello, World!". This will help you understand how Spring Boot handles web requests and how to create a basic route.

### What is a Route?
A route is simply an endpoint in a web application. In this case, the route will be `/hello`, and it will handle **GET** requests (which means it's designed to return something when someone visits that URL in a browser or through a tool like `curl`).

### Tasks:
1. **Create a REST Controller**: 
   - A controller is a class in Spring Boot that handles web requests.
   - Create a new Java class in the `com.example` package called `HelloController`.
   - Use the `@RestController` annotation to make it a controller that returns data directly (in this case, the text "Hello, World!").

2. **Define the GET Route**: 
   - In the `HelloController` class, create a method that responds to HTTP GET requests.
   - Use the `@GetMapping("/hello")` annotation above the method to map the `/hello` URL to this method.
   - The method should return the string `"Hello, World!"`.

3. **Test the Route**:
   - Run your Spring Boot application.
   - Open your web browser and navigate to `http://localhost:8080/hello` to see if it returns "Hello, World!".
   - Alternatively, you can use the command-line tool `curl` by typing `curl http://localhost:8080/hello` to test the route.

### Tips:
- If you're new to Spring Boot, don't worry! The `@RestController` annotation is just telling Spring that this class will handle web requests, and `@GetMapping` is specifying which URL path will trigger the method inside.
- You can use any web browser or `curl` to test your endpoint. If you're unfamiliar with `curl`, it’s a command-line tool to make HTTP requests. For example, `curl http://localhost:8080/hello` will request that page and display the response in your terminal.
- Make sure your project is running locally on `localhost:8080` (Spring Boot uses port 8080 by default). If you run into issues with starting the project, check for errors in the console for clues.

### Acceptance Criteria:
- `/hello` route successfully returns "Hello, World!" when accessed via a web browser or `curl`.
- The route is reachable locally at `http://localhost:8080/hello`.
- The code is well-organized and follows Spring Boot conventions (controller class inside the `com.example` package).

### References:
- **Spring Boot Hello World Example**: [Baeldung Guide](https://www.baeldung.com/spring-boot-start)
- **Introduction to Spring Boot**: [Official Spring Documentation](https://spring.io/guides/gs/spring-boot/)
- **What is a REST Controller?**: [Spring Documentation](https://docs.spring.io/spring-framework/docs/current/reference/html/web.html#mvc-ann-restcontroller)
