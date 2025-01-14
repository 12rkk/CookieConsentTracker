<?php
/**
 * Plugin Name: Cookie Consent Tracker
 * Description: Plugin para rastrear e armazenar o consentimento de cookies dos usuários com ID persistente.
 * Version: 1.0
 * Author: Rafael Cavalheiro, aka Hallow33n 12rkk.
 * Author URI: https://gist.github.com/12rkk
 * License: GPL2
 */

// Evitar o acesso direto ao arquivo
if (!defined('ABSPATH')) {
    exit;
}

// Função para incluir os scripts e estilos no frontend
function cct_enqueue_scripts() {
    wp_enqueue_script('cct-app', plugin_dir_url(__FILE__) . 'js/app.js', array(), null, true); // Enfileira o script JS
    wp_enqueue_style('cct-style', plugin_dir_url(__FILE__) . 'css/style.css'); // Enfileira o CSS (se necessário)
}

add_action('wp_enqueue_scripts', 'cct_enqueue_scripts');

// Função para exibir o código no footer (se necessário)
function cct_display_footer() {
    ?>
    <script>
        // Código para chamar o consentimento de cookies aqui (se necessário)
        document.addEventListener('DOMContentLoaded', function() {
            // Verifique se o consentimento já foi dado e se o ID do usuário já está no localStorage
            if (!localStorage.getItem('user_id')) {
                // Execute a lógica de consentimento aqui
                // Exemplo de chamada ao seu código JS
            }
        });
    </script>
    <?php
}
add_action('wp_footer', 'cct_display_footer');
?>
