# InGreedy
HDSDEV project 

To run this project locally, you can clone this repository to your local directory and run the springboot application to start the server. Then you can run the front end code via npm start through your terminal in your IDE of choice.
The back-end code is in the 'Backend' folder and front end is in the 'UI_Frontend'.

Backend:
Open up InGreedy\Backend\hdsdevproject
To run, navigate src\main\java\com\ingreedy\hdsdevproject and run the HdsdevprojectApplication.java file.

database configuration: 
This project uses the h2 database in test mode, which should load and persist on application run. If you need to, you can login to the database via http://localhost:8080/h2-console
spring.datasource.username=sa
spring.datasource.password=password
spring configuration can be found in application.properties file in resources folder.

Front-End:
Open the folder: InGreedy\UI_Frontend\ingreedy-ui in your IDE
run npm start in your IDE terminal 

Logging in to the application: 
There are two password / username combinations which will work 
1) username = ingreedy, password = test
2) username = liam, password= password

To view a deployed version of the app without login see - https://ingreedy.vercel.app/ (it may take some time for data to load)

