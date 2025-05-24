<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $asunto = htmlspecialchars(trim($_POST['subject']));
    $telefono = htmlspecialchars(trim($_POST['phone']));
    $mensaje = htmlspecialchars(trim($_POST['message']));

    $destinatario = "ventas@aeronav.com.ar";
    $titulo = "Nuevo mensaje de contacto desde Aeronav.com.ar";

    $contenido = "Nombre: $nombre\nEmail: $email\nTeléfono: $telefono\nAsunto: $asunto\nMensaje:\n$mensaje\n";

    $cabeceras = "From: $email\r\n";
    $cabeceras .= "Reply-To: $email\r\n";

    if (mail($destinatario, $titulo, $contenido, $cabeceras)) {
        echo "ok";
    } else {
        echo "error";
    }
}
?>
