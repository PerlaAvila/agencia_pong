<?php
$db = mysqli_connect("localhost", "pong_mensajes", "pong1234", "pong_mensajes");
 
// Check connection
if($db === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}


$to = "perla@pong.com.mx";
$subject = "Nuevo correo para PONG";
$subject1 = "Recibimos tus datos";
$from = "ping@pong.com.mx";
$name = mysqli_real_escape_string($db, $_POST['name']);
$email = mysqli_real_escape_string($db, $_POST['email']);
$phone = mysqli_real_escape_string($db, $_POST['phone']);
$msj = mysqli_real_escape_string($db, $_POST['message']);


$sql = "INSERT INTO datos_cliente (name,phone,email,message) VALUES ('$name','$phone','$email','$msj')";
if(mysqli_query($db, $sql)){
    echo "Records added successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($db);
}
 
// close connection
mysqli_close($db);

 $headers = "From: " . strip_tags($email) . "\r\n";
  $headers .= "Reply-To: ". strip_tags($email) . "\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";


   $headers1 = "From: " . strip_tags($from) . "\r\n";
  $headers1 .= "Reply-To: ". strip_tags($from) . "\r\n"; 
  $headers1 .= "MIME-Version: 1.0\r\n";
  $headers1 .= "Content-Type: text/html; charset=ISO-8859-1\r\n";



$message = '<html><body>';
$message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
$message .= "<tr style='background: #eee;'><td><strong>Nombre:</strong> </td><td>" . strip_tags($name) . "</td></tr>";
$message .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($email) . "</td></tr>";
$message .= "<tr style='background: #eee;'><td><strong>Teléfono:</strong> </td><td>" . strip_tags($phone) . "</td></tr>";
$message .= "<tr><td><strong>Qué necesita</strong> </td><td>" . strip_tags($msj) . "</td></tr>";
$message .= "</body></html>";


$message1 = '<html><body>';
$message1 .= '<table border="0" width="100%" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td style="background-color: #ffffff);" align="center" bgcolor="#ffffff"><!-- [if (gte mso 9)|(IE)]>
<table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
<tr>
<td align="center" valign="top" width="600">
        <![endif]-->
<table style="max-width: 600px;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
<tbody>
<tr>
<td style="font-size: 0;" align="center" valign="top" bgcolor="#ffffff"><!-- [if (gte mso 9)|(IE)]>
<table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
<tr>
                        <tdvalign="top" width="600">
                        <![endif]-->
<div style="display: inline-block; max-width: 100%; min-width: 100px; vertical-align: top; width: 100%;">
<table style="max-width: 600px;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
<tbody>
<tr>
<td class="mobile-center" align="center" valign="top"><img src="http://pong.com.mx/wordpress/pong-content/uploads/2017/09/mailito.png" /></td>
</tr>
</tbody>
</table>
</div>
<!-- [if (gte mso 9)|(IE)]></td>
</tr>
<tr>
                        <tdvalign="top" width="600">
                        <![endif]-->
<div style="display: inline-block; max-width: 100%; min-width: 100px; vertical-align: top; width: 100%;">
<table style="max-width: 600px;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
<tbody>
<tr>
<td class="mobile-center" align="center" valign="top"><a href="https://e4p.mx" target="_blank" rel="noopener noreferrer"><img style="margin-bottom: 20px;" src="https://pong.com.mx/prueba/sitiopong/img/logo-pong.png" width="150" /></a></td>
</tr>
</tbody>
</table>
</div>
<!-- [if (gte mso 9)|(IE)]></td>
</tr>
<tr>
                        <tdvalign="top" width="600">
                        <![endif]-->
<div style="display: inline-block; max-width: 100%; min-width: 100px; vertical-align: top; width: 100%;">
<table style="margin-top: 30px;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center" bgcolor="#3d3a8b">
<tbody>
<tr>
<td class="mobile-center" align="center" valign="top" width="200">
<p style="font-family: Arial, Helvetica, sans-serif; font-size: 14px; padding: 20px 0;"><a style="color: white;" href="tel:30996403">Of. 3099 6403 / 6588 3697</a></p>
</td>
<td class="mobile-center" align="center" valign="top" width="200">
<p style="font-family: Arial, Helvetica, sans-serif; font-size: 14px; padding: 20px 0;"><a style="color: white;" href="mailto:ping@pong.com.mx?Subject=Hola%20PONG">andi@e4p.mx</a></p>
</td>
<td class="mobile-center" align="center" valign="top" width="200">
<p style="font-family: Arial, Helvetica, sans-serif; font-size: 14px; padding: 20px 0; color: white;"><a href="" style="color: white; text-decoration: none;">Eje Central 555, Narvarte, CDMX</a></p>
</td>
</tr>
</tbody>
</table>
</div>
<!-- [if (gte mso 9)|(IE)]></td>
</tr>
</table>
<![endif]--></td>
</tr>
</tbody>
</table>
<!-- [if (gte mso 9)|(IE)]></td>
</tr>
</table>
<![endif]--></td>
</tr>
</tbody>
</table>';

mail($to, $subject, $message, $headers);
mail($email, $subject1, $message1, $headers1);
echo 'Gracias por contactarnos nos comunicaremos en breve contigo.';

?>