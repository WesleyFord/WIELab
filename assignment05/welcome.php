<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="Web and Internet Engineering Assignment 3">
<meta name="author" content="Roberto Confalonieri">
<title>PHP - FORMS </title>

<!-- Bootstrap core CSS -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>

<body>
	<div class="container">

		<h1> Receiving data via form </h1>

		<div class="row">
			<div class="col-md-12 order-md-1">
				<table border="1px" align="center">
					<tr><th colspan="2">Submitted Data:</th></tr>
					<tr>
						<td>First Name:</td>
						<td><?php echo $_GET["firstName"]; ?></td>
					</tr>
					<tr>
						<td>Last Name:</td>
						<td><?php echo $_GET["lastName"]; ?></td>
					</tr>
				</table>
			</div>
		</div>

		<footer class="my-5 text-muted text-center text-small">
			<p class="mb-1">&copy; 2020 ACME Inc.</p>
		</footer>
	</div>
</body>
</html>
</body>
</html>