<html>
<form method='POST' action='valida.php'>
Usuario <input type='text'  name='usuario'/><br/>
Password <input type='password' name='clave'/><br/>
<input type='submit' value='Ingresar'/>
<label id="msg" style="color:red;">
	<?php $msg=$_GET["msg"];
	echo $msg;?>
</label>
</form>
</html>
