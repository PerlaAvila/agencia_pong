<?php

$to = "perla@pong.com.mx";
$subject = "Nuevo correo para ti";
$subject1 = "Recibimos tus datos";
$from = "ping@pong.com.mx";
$name = $_POST['name'];
$empresa = $_POST['empresa'];
$personal = $_POST['personal'];
$listo = $_POST['listo'];
$idea = $_POST['idea'];
$ayuda = $_POST['ayuda'];
$email = $_POST['email'];
$phone = $_POST['phone'];


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
$message .= "<tr><td><strong>Proyecto para:</strong> </td><td>" . strip_tags($empresa) . "</td></tr>";
$message .= "<tr style='background: #eee;'><td><strong>Proyecto para</strong> </td><td>" . strip_tags($personal) . "</td></tr>";
$message .= "<tr><td><strong>Qué tan listo está mi proyecto:</strong> </td><td>" . strip_tags($listo) . "</td></tr>";
$message .= "<tr style='background: #eee;'><td><strong>Qué tan listo está mi proyecto:</strong> </td><td>" . strip_tags($idea) . "</td></tr>";
$message .= "<tr><td><strong>Qué tan listo está mi proyecto:</strong> </td><td>" . strip_tags($ayuda) . "</td></tr>";
$message .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($email) . "</td></tr>";
$message .= "<tr style='background: #eee;'><td><strong>Teléfono:</strong> </td><td>" . strip_tags($phone) . "</td></tr>";
$message .= "</body></html>";


$message1 = '<html><body>';
$message1 .= '<p>Gracias por contactarnos, recibimos tu datos y en breve nos comunicaremos contigo para confirmar tu información. </p>';
$message1 .= "</body></html>";

mail($to, $subject, $message, $headers);
mail($email, $subject1, $message1, $headers1);

?>