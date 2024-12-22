# CS-465 Full Stack Development with MEAN
## **Scenario**
You are a software developer working for a software development company. Your supervisor assigned you to build a travel booking website for a new client, Travlr Getaways. The marketing department at Travlr Getaways has provided the specs and a wireframe to guide the development of the website. Your role as a software developer is to produce a fully functional travel web application that meets Travlr Getaways’ requirements:

“We are looking to create a travel booking site for our customers to book travel packages. Our customers must be able to create an account, search for travel packages by location and price point, and book reservations with our travel agency. Customers must also be able to visit our website regularly before their trip to see their itineraries. We are also seeking to have an admin-only site where Travlr Getaways administrators can maintain a customer base, available trip packages, and pricing for each item and package.”

### Architecture
The development for the front end for the admin SPA website was for more complex compared to the client-side website. There were more moving parts since everything was in different components. The client-side was simpler because each page was built separately. MongoDB was a great resource to use for storing, querying, and managing data on the backend. MongoDB is flexible and reliable with a highly scalable database.

### Functionality
JavaScript is a programming language while JSON is a data format. JSON is derived from JavaScript. JSON is a lightweight format and easy to read and understand. It can be used to store and transport data, mostly used to send data from a server to a webpage. JavaScript objects are dependent on JavaScript while JSON is supported by multiple programming languages. We refactored the header and footer on the client-side pages. There are reusable functions that can be called multiple times such as searching for all trips or a specific trip.

### Testing
There were several ways that I tested the API endpoints. When it came to the client-side, there was a method to retrieve all the trips and another to retrieve one trip. I was able to test this why checking my localhost:3000 site and see if I was able to see all the trips or just one. With the admin website, we added more functions such as adding, updating, and deleting a trip. For this, I used an application called Postman as well as testing using the site localhost:4200. If I ran into any issues, I would check the console log. When it came to adding security, I used Postman to check if the website worked as intended. If I tried to make a change without certain credentials, I would receive a message such as "UnauthorizedError: No authorization token was found."

### Reflection
I have learned more about the different ways to build a website, such as the traditional way and SPA. I have more knowledge about building different components and how they connect. This course has helped me understand ways to improve my code and keep it organized when I refactored the code. I was able to learn more about adding security to the website such as only an admin that is logged in can add, update, or delete a trip.

### Preview
Website

![website](https://github.com/user-attachments/assets/c54a7639-20a9-4d41-b441-5e41c5b4b611)
![website 2](https://github.com/user-attachments/assets/8d5a8ff1-3b5c-46ea-a90a-bdfd827cf1e1)

Admin Page

![admin page](https://github.com/user-attachments/assets/995ea32e-a428-427a-ad3f-54c032ee4eb8)

Login

![login](https://github.com/user-attachments/assets/c7782075-8c00-40d8-b099-bb387e6ee308)
![admin page login](https://github.com/user-attachments/assets/a945744c-ed40-4eaf-bf8e-65004ff08304)
![admin page login 2](https://github.com/user-attachments/assets/3ba22822-6c3b-413e-a22a-928fc4182559)

Edit Trip

![edit trip](https://github.com/user-attachments/assets/0e1357f8-fad8-43f3-9374-b6d26831a870)
![edit trip 2](https://github.com/user-attachments/assets/2609aae4-de68-4288-947f-3c791092ead9)

Delete Trip

![delete trip](https://github.com/user-attachments/assets/ae4acc84-70db-4557-9354-c8e797824df9)
![delete trip 2](https://github.com/user-attachments/assets/c54308b7-a1dc-4ed6-b935-b4d855005d96)
![delete trip 3](https://github.com/user-attachments/assets/c87b82df-79c4-4d40-91d5-57cfd07cb977)

Add Trip

![add trip](https://github.com/user-attachments/assets/cf8429e0-463e-44f4-b1c6-51ce8f63ae1b)
![add trip 2](https://github.com/user-attachments/assets/01656b63-cdad-4f73-b7c4-bf1f1757de72)
![add trip 3](https://github.com/user-attachments/assets/13e518ec-ac35-4aad-91c3-6dfe40b34958)
