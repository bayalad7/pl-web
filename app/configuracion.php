<?php
	header("Content-Type: text/html;charset=utf-8");
	error_reporting(E_ALL);
	ini_set( 'display_errors' , TRUE );
	ini_set( 'display_startup_errors' , TRUE );
	ini_set( 'memory_limit' , '-1' );
	ini_set( 'max_execution_time', 300 ); // 300 segundos = 5 minutos
	ini_set( 'date.timezone' , 'America/Mexico_City' );


	/////////////////////////////////////////////////////////////////////////////////
	// Configuración de la base de datos y constantes principales de la aplicación //
	/////////////////////////////////////////////////////////////////////////////////
	
	// Variables constantes comerciales de la aplicación
	define( 'IVA' , 1.16 );

	// Protocolo real de la petición (evita contenido mixto http/https).
	$sisProtocolo	=	( ( ! empty( $_SERVER['HTTPS'] ) && $_SERVER['HTTPS'] !== 'off' )
						|| ( ! empty( $_SERVER['HTTP_X_FORWARDED_PROTO'] ) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https' )
						|| ( ! empty( $_SERVER['SERVER_PORT'] ) && $_SERVER['SERVER_PORT'] == 443 ) )
						? 'https://' : 'http://';

	switch( $_SERVER["HTTP_HOST"] )
	{
		case 'pllogistic.com':
		case 'www.pllogistic.com':
        case 'tedyc.com':
		case 'www.tedyc.com':
			define( 'DIR_CAMINO'	,	'pl/' ); // Nombre de la carperta donde se guarda todo el proyecto
			define( 'SIS_URL'		,	$sisProtocolo.$_SERVER['HTTP_HOST'].'/'.DIR_CAMINO );
			break;

		case 'pl-logistics.tedyc.com':
		case 'www.pl-logistics.tedyc.com':
			define( 'DIR_CAMINO'	,	'' ); // Nombre de la carperta donde se guarda todo el proyecto
			define( 'SIS_URL'		,	$sisProtocolo.$_SERVER['HTTP_HOST'].'/'.DIR_CAMINO );
			break;

        case '10.0.0.4':
		case 'localhost':
		case 'localhost:8080':
			define( 'DIR_CAMINO'	,	'Proyectos/PL/' ); // Nombre de la carperta donde se guarda todo el proyecto
			define( 'SIS_URL'		,	$sisProtocolo.$_SERVER['HTTP_HOST'].'/'.DIR_CAMINO );
			break;
	}

	////////////////////////////////////
	// Configuración de la aplicación //
	////////////////////////////////////
	$_GET['appProyecto']	=	isset( $_GET['appProyecto'] ) ? $_GET['appProyecto'] : null; // Valor "app-web".

	// Variables constantes para el sistema de la aplicación
	define( 'APP_CAMINO' , __DIR__.'/' );
	define( 'SIS_PROYECTO' , $_GET['appProyecto'] );
	define( 'SIS_CAMINO' , $_SERVER['DOCUMENT_ROOT'].'/'.DIR_CAMINO.SIS_PROYECTO.'/' );
	define( 'SIS_ARCHIVOS' , $_SERVER['DOCUMENT_ROOT'].'/'.DIR_CAMINO );

	if( ! is_dir( SIS_CAMINO ) )
	{
		session_destroy();
		echo 'SIS_CAMINO , no es directorio.';
		die();
	}

	// Imprimir variables constantes.
	// echo '<hr><pre>'.print_r( get_defined_constants( true )['user'] , 1 ).'</pre><hr>';

	if( ! isset( $_SESSION['appRequiereVista'] ) )
	{
		$_SESSION['appRequiereVista']	=	TRUE;
	}
?>