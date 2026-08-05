<?php

	/**
	* 
	*/
	class App_Modelo Extends App_Funciones
	{

		// Variables publicas
		public $texto;

		// Variables protegidas
		protected $bdd;

		// Variables privadas
		private $datos;

		public function __construct()
		{
			self::_fn_obtener_parametros_get();
		}

		public function __destruct(){}

		public function _fn_index()
		{
			self::_fn_cargar_controlador( $_GET["appModulo"] , $_GET["appFuncion"] );
		}

		private function _fn_obtener_parametros_get()
		{
			/*
				Nombre de las variables GET por el HTACCESS
					appProyecto
					appModulo
					appControlador
					v1
					v2
					v3
					v4
					v5
					v6
			*/
			$_GET["appModulo"]		=	! empty( $_GET["appModulo"] ) ? str_replace( "/" , ""  , $_GET["appModulo"] ) : Null ;
			$_GET["appModulo"]		=	! empty( $_GET["appModulo"] ) ? str_replace( "-" , "_" , $_GET["appModulo"] ) : Null ;
			$_GET["appControlador"]	=	! empty( $_GET["appControlador"] ) ? str_replace( "/" , ""  , $_GET["appControlador"] ) : 'app-web' ;
			$_GET["appControlador"]	=	! empty( $_GET["appControlador"] ) ? str_replace( "_" , "-" , $_GET["appControlador"] ) : 'app-web' ;
			$_GET["appFuncion"]		=	! empty( $_GET["appControlador"] ) ? str_replace( "-" , "_" , $_GET["appControlador"] ) : 'index' ;
			$_GET["v1"]				=	! empty( $_GET["v1"] ) ? str_replace( "/" , "" , $_GET["v1"] ) : Null ;
			$_GET["v2"]				=	! empty( $_GET["v2"] ) ? str_replace( "/" , "" , $_GET["v2"] ) : Null ;
			$_GET["v3"]				=	! empty( $_GET["v3"] ) ? str_replace( "/" , "" , $_GET["v3"] ) : Null ;
			$_GET["v4"]				=	! empty( $_GET["v4"] ) ? str_replace( "/" , "" , $_GET["v4"] ) : Null ;
			$_GET["v5"]				=	! empty( $_GET["v5"] ) ? str_replace( "/" , "" , $_GET["v5"] ) : Null ;
			$_GET["v6"]				=	! empty( $_GET["v6"] ) ? str_replace( "/" , "" , $_GET["v6"] ) : Null ;
		}

		protected function _fn_cargar_modelo( $modelo = Null , $camino = Null )
		{
			if( $camino )
			{
				if( file_exists( SIS_CAMINO . $camino . '/' . $modelo . '.modelo.php' ) )
				{
					require_once( SIS_CAMINO . $camino . '/' . $modelo . '.modelo.php');
				}
				else
				{
					$this->texto = "'" . $modelo . "' Modelo no encontrado.";
					self::_fn_error( 404 );
					die();
				}
			}
			else
			{
				if( file_exists( SIS_CAMINO . $_GET["appModulo"] . "/" . $modelo . ".modelo.php" ) )
				{
					require_once( SIS_CAMINO . $_GET["appModulo"] . "/" . $modelo . ".modelo.php" );
				}
				else
				{
					$this->texto = "'" . $modelo . "' Modelo no encontrado.";
					self::_fn_error( 404 );
					die();
				}
			}
		}

		protected function _fn_cargar_controlador( $appModulo = Null , $appFuncion = 'index' )
		{
			///////////////////////////////////
			// Buzón de Quejas y Sugerencias //
			////////////////////////////////////////////////////////////////////////////////////////////
			if( isset( $_POST['aux_buzon_qs'] ) )
			{
				$respuesta_qs	=	Array();
				
				$sTipoBuzon			=	( isset( $_POST['sTipoBuzon'] ) ? $_POST['sTipoBuzon'] : '' );
				$sTituloBuzon		=	( isset( $_POST['sTituloBuzon'] ) ? strtoupper( trim( $_POST['sTituloBuzon'] ) ) : '' );
				$sComentarioBuzon	=	( isset( $_POST['sComentarioBuzon'] ) ? strtoupper( trim( $_POST['sComentarioBuzon'] ) ) : '' );

				// Correos Receptores.
				$correo_receptores		=	Array();
				//$correo_receptores[]	=	Array( 'correo' => 'contacto@pllogistic.com' );
				//$correo_receptores[]	=	Array( 'correo' => 'gparra@pllogistic.com' );
				//$correo_receptores[]	=	Array( 'correo' => 'comercial@pllogistic.com' );
				$correo_receptores[]	=	Array( 'correo' => 'bayala0@ucol.mx', 'oculto' => 'si' );

				$mail					=	parent::_fn_mail(
													 $correo_receptores
													,'PL Logistics - Buzón de Quejas y Sugerencias - ' . $sTipoBuzon	// $correo_asunto
													, $sTituloBuzon . '.'												// $correo_titulo
													,'Comentario.<br/>'.$sComentarioBuzon // $correo_mensaje
													,'root@pllogistic.com'	// $correo_remitente
													,'PL Logistics'			// $correo_nombre_remitente
													,Array()				// $correo_archivos
												);
				if( !$mail )
				{
					$respuesta_qs['_estado']			= 'ERROR';
					$respuesta_qs['_mensaje_usuario']	= 'Ocurrió un detalle al momento de querer enviar el correo del servidor. Por favor intente de nuevo, si el problema persiste, favor de contactar al administrador del sistema. Error generado ' . $mail;
				}
				else
				{
					$respuesta_qs['_estado']			= 'OK';
					$respuesta_qs['_mensaje_usuario']	= 'Las queja/sugerencia se envío correctamente.';
				}

				header( 'Content-Type: application/json' );
				echo json_encode( $respuesta_qs );
				exit;
			}
			////////////////////////////////////////////////////////////////////////////////////////////


			if( $appModulo === Null )
			{
				header( 'Location: ' . $_SERVER['REQUEST_URI'] . 'bienvenido/inicio/' );
			}
			else
			{
				// Verificamos si existe el directorio del módulo
				if( is_dir( SIS_CAMINO . $appModulo . "/" ) )
				{
					// Verificamos si el controlador del módulo existe.
					if( file_exists( SIS_CAMINO . $appModulo . "/" . $appModulo . ".controlador.php" ) )
					{
						require_once( SIS_CAMINO . $appModulo . "/" . $appModulo . ".controlador.php" );

						$appModulo_Controlador 	=	$appModulo . "_Controlador";
						$appModulo_Modelo 		=	new $appModulo_Controlador();

						if( method_exists( $appModulo_Modelo , $appFuncion ) )
						{
							// echo 'Existe la función [ ' . $appFuncion . ' ] del controlador del módulo [ ' . $appModulo . ' ]';
							self::_fn_requerir_vista( false );
							$appModulo_Modelo->$appFuncion();
						}
						else
						{
							$this->texto = "Llamada al método no definido [ ".$appFuncion." ] en [ ".$appModulo." ] controlador.";
							self::_fn_error( 500 );
							die();
						}
					}
					else
					{
						$this->texto	=	"Controlador [ ".$appModulo." ], archivo  no encontrado.";
						self::_fn_error( 404 );
						die();
					}
				}
				else
				{
					$this->texto	=	"'".$appModulo."' No es un directorio válido.";
					self::_fn_error( 500 );
					die();
				}
			}
		}

		protected function _fn_cargar_vista( $vista = 'index' , $datos = Array() , $plantilla = true , $camino = Null )
		{

			if( $camino != Null )
			{
				if( file_exists( SIS_CAMINO . $camino . $vista . ".php" ) )
				{
					require_once( SIS_CAMINO . $camino . $vista . ".php" );
				}
				else
				{
					$this->texto = "'".$vista."' Vista no encontrada.";
					self::_fn_error( 404 );
					die();
				}
			}
			else
			{
				// echo "Cargamos la vista desde el controlador del módulo.";
				if( file_exists( SIS_CAMINO . $_GET["appModulo"] . "/" .$vista.".php" ) )
				{
					if( $plantilla )
					{
						require_once( APP_CAMINO . "escenario/cabecera.php");						// Cabecera de la aplicación
						require_once( SIS_CAMINO . $_GET["appModulo"] . "/" . $vista . ".php" );	// Vista del módulo
						require_once( APP_CAMINO . "escenario/pie.php");							// Pie de la aplicación
					}
					else
					{
						require_once( SIS_CAMINO . $_GET["appModulo"] . "/" . $vista . ".php" );
					}
				}
				else
				{
					$this->texto = "'".$vista."' Vista no encontrada.";
					self::_fn_error( 404 );
					die();
				}
			}

		}

		protected function _fn_requerir_vista( $bBandera = true )
		{
			$_SESSION["appRequiereVista"] = $bBandera;
		}

		public function _fn_error( $error = 404 )
		{
			require_once( APP_CAMINO . $error . '.php' );
			exit;
		}

	}

?>