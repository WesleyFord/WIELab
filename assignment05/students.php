<?php

$servername = '127.0.0.1';
$username = 'root';
$password = '';
$database = 'assignment05';

$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

$sql = 'SELECT students.name, students.surname, courses.name, grades.grade
        FROM students, courses, grades
        WHERE students.id=grades.student_id AND courses.id=grades.course_id AND grade>26';

function createStudentsGradesTable($conn, $sql){
    echo '<table class=\'table\'>';
    echo '<thead>';
    echo '<tr>';
    echo '<th>Name</th>';
    echo '<th>Surname</th>';
    echo '<th>Course</th>';
    echo '<th>Grade</th>';
    echo '</tr>';

    if($result = mysqli_query($conn, $sql)){
        while($row = mysqli_fetch_row($result)){
            echo '<tr>';
            for($i = 0; $i < mysqli_field_count($conn); $i++){
                echo '<td>'.$row[$i].'</td>';
            }
            echo '</tr>';
        }
    }
    echo '</table>';
}

function saveStudentToDB($conn){
    $studentId = $_POST['studentId'];
    $fname = $_POST['firstName'];
    $lname = $_POST['lastName'];

    $insert_sql = "INSERT INTO students(id, name, surname) VALUES ('$studentId', '$fname', '$lname')";

    if(mysqli_query($conn, $insert_sql)){
        echo '<h2>New student recorded successfully.</h2>';
    } else {
        echo 'Error: ' . mysqli_error($conn);
    }
}

?>

<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="Web and Internet Engineering Assignment 3">
<meta name="author" content="Roberto Confalonieri">
<title>Students</title>

<!-- Bootstrap core CSS -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>

<body>
	<div class="container">
		<div class="row">
			<div class="col-md-12 order-md-1">
                <h1>Students</h1>
                <?php
                if($_SERVER['REQUEST_METHOD'] == 'GET'){
                    createStudentsGradesTable($conn, $sql);
                }else if($_SERVER['REQUEST_METHOD'] == 'POST'){
                    saveStudentToDB($conn);
                }
                ?>
			</div>
		</div>
	</div>
</body>
</html>
</body>
</html>