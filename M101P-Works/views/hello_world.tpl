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
<form action="/fav_fruit" method="post">
<input type="text" name="fruit" size="20" value=""/>
<input type="submit" value="OK">
</form>
</body>
</html>