<?php
	// Configuraciones de la aplicación
	require_once("../configuracion.php");
	require_once( APP_CAMINO . "modelo/app.funciones.php");
	require_once( APP_CAMINO . "modelo/app.modelo.php");
	$app = new App_Modelo();
	$app->_fn_index();
?>
