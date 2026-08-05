<?php
	error_reporting(E_ALL | E_STRICT);
	require('../libs/jQuery-File-Upload/server/php/UploadHandler.php');
	$options = array(
				 'upload_dir' => '../archivos/tmp/' // Cambiar el directorio donde se guardaran los archivos.
				,'upload_url' => '../archivos/tmp/' // Cambiar el directorio que regresa
				,'image_versions' => array()		// Deshabilitar la generación de archivos thumbnail
			);
	$upload_handler = new UploadHandler( $options );
?>