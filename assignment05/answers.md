# Exercise 1

### a) Describe the functions ctable(), add_1() and add_2() in the file (i.e., does it use global or local variables, which variables are the input, what is the output of the function?)

*   `ctable()`

    Takes two arguments, `$rows` and `$columns`. Those variables are passed by value. This function creates a table with dimensions `$rows` x `$columns`. In each cell, the position of the cell is written(row, column).

*   `add_1($num1)`

    Takes one argument, `$num1` and it is passed by value. Finds the sum of the numbers that starting from 1 to `$num1`.

*   `add_2(&$num1, &$num2)`

    Takes two arguments, `&$num1` and `&$num2`. Those values are passed by reference. That means, memory reference of the variables passed instead of their value. Any operation made with those variables will change the values of the variables. Finds sum of two numbers and compares the total with THRESHOLD  (defined at the beginning). If total is greater than THRESHOLD, returns THRESHOLD, else returns total.

### b) Describe the output of the function add_3(). What should be modified to print the real input that add_3() passes to add_2()?

`add_3()` takes two arguments and calls add_2() with those parameters then the return value is assigned to the variable `$result`. Prints input values and the result.

Since `add_2()` function takes arguments as references, actual values of `$num1` and `$num2` change. To prevent this, the ampersand symbol should be deleted so values will be passed by value.

# Exercise 2

### a) What is the action that is executed within the form in the welcome.html file? What is the method used?

    When 'Submit' button is clicked, a GET request is made to the '/welcome.php' with the parameters in the URL. 

### b) What other method could be used for passing variables’ content? What is the difference with the method used in the given file?

    POST method could be used to passing the variables. The difference is, values that are passing are in the request object instead of the URL.

### c) What are the variables used in the form? Which variable is transferred from the webpage welcome.html to the webpage welcome.php?

    'firstName' and 'lastName' variables are used in the form and those variables are passed to 'welcome.php'.

# Exercise 3

## Queries

### Filling GRADES table with data:
    INSERT INTO grades(student_id, course_id, grade)
    SELECT students.id, courses.id, FLOOR(RAND()*(30-1+1)+1) FROM students, courses

### Student details:
    SELECT * FROM students

### Students that have a grade higher than 26:
    SELECT * FROM students WHERE id IN (SELECT student_id FROM grades WHERE grade > 26)

# Exercise 4

## student.html
    Has a form with three input fields for name, surname and student id number. When Submit button is clicked, page performs a POST request to student.php. 

## student.php
    Has two functionalities. First one is to select all students with a grade higher than 26 and list the data in a table. This is done with a function called 'createStudentsGradesTable()'. It takes two parameters, connection and SQL string. After the query has been made, it fetches every single row and writes the data into each cell.

    Second functionality is to create new student on the database. This is done by a POST request. This request holds the data gathered from the form in student.html. Then, the data is inserted into the database using a SQL query. 

    'student.php' file is functional for both GET and POST requests. The request type is checked before calling a function. If it is a GET request, 'createStudentsGradesTable()' is called. If it is a POST request, 'saveStudentToDB()' is called.

