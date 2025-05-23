<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $response = [
        'success' => false,
        'message' => 'Eror en el procesamiento de la solicitud.'
    ];

    // Recolectar datos según el formulario
    if (isset($_POST['user-mail'])) { // Sign In
        $email = filter_var($_POST['user-mail'], FILTER_SANITIZE_EMAIL);
        $password = $_POST['user-password'];

        // Validar datos (ejemplo básico)
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $response['message'] = 'Correo electrónico inválido.';
        } else {
            $response['success'] = true;
            $response['message'] = 'Inicio de sesión exitoso (simulado).';
            // Aquí guardarías en una base de datos (ej: MySQL)
        }
    } 
    elseif (isset($_POST['new-user-email'])) { // Sign Up
        $username = htmlspecialchars($_POST['user-name']);
        $email = filter_var($_POST['new-user-email'], FILTER_SANITIZE_EMAIL);
        $password = $_POST['user-new-password'];

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $response['message'] = 'Correo electrónico inválido.';
        } else {
            $response['success'] = true;
            $response['message'] = 'Registro exitoso (simulado).';
            // Guardar en base de datos...
        }
    }

    echo json_encode($response);
    exit;
}
?>