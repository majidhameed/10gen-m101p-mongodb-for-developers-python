<!DOCTYPE html>
<html>
<head>
	<title>Hello World! with templates</title>
</head>
<body>
Welcome {{name}}!
<ul>
%for fruit in fruits:	
<li>{{fruit}}</li>	
%end
</ul>
</body>
</html>