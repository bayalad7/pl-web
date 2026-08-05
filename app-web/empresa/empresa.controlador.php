<?php
	
	$v_modulo_modelo = SIS_CAMINO . "empresa/empresa.modelo.php";

	require_once( $v_modulo_modelo );

	/**
	* Inicio_Controlador
	**/

	class Empresa_Controlador Extends Empresa_Modelo
	{
		// Variables publicas

		// Variables protegidas

		// Variables privadas
		private $datos	=	Array();

		public function __construct()
		{
			parent::__construct();
		}

		public function __destruct()
		{
			
		}

		public function acerca_de()
		{
			$this->datos['datos'] = false;

			$this->_fn_cargar_vista( 'vista-acerca-de' , $this->datos );
			return true;
		}

		public function aviso_de_privacidad()
		{
			$this->datos['datos'] = false;

			$this->_fn_cargar_vista( 'vista-aviso-de-privacidad' , $this->datos );
			return true;
		}

		public function servicios()
		{
			$this->datos['datos'] = false;

			$this->_fn_cargar_vista( 'vista-servicios' , $this->datos );
			return true;
		}

		public function documentos()
		{
			$this->datos['datos'] = false;

			$this->_fn_cargar_vista( 'vista-documentos' , $this->datos );
			return true;
		}

		public function contacto()
		{
			$this->datos['datos'] = false;

			//////////////////////////////////
			// Form Contacto a PL Logistics //
			////////////////////////////////////////////////////////////////////////////////////////////
			if( isset( $_POST['aux_contacto_pl'] ) )
			{
				$respuesta_qs	=	Array();
				
				$sNombre				=	isset( $_POST['sNombre'] )		?	trim( $_POST['sNombre'] )	: '';
				$sTelefono				=	isset( $_POST['sTelefono'] )	?	trim( $_POST['sTelefono'] )	: '';
				$sCorreo				=	isset( $_POST['sCorreo'] )		?	trim( $_POST['sCorreo'] )	: '';
				$sMensaje				=	isset( $_POST['sMensaje'] )		?	trim( $_POST['sMensaje'] )	: '';
			
				// Correos Receptores.
				$correo_receptores		=	Array();
				$correo_receptores[]	=	Array( 'correo' => 'contacto@pllogistic.com' );
				$correo_receptores[]	=	Array( 'correo' => 'gparra@pllogistic.com' );
				$correo_receptores[]	=	Array( 'correo' => 'comercial@pllogistic.com' );
				$correo_receptores[]	=	Array( 'correo' => 'bayala0@ucol.mx', 'oculto' => 'si' );

				$mail					=	App_Funciones::_fn_mail(
													 $correo_receptores
													,'PL Logistics - Solicitud de Contacto' // $correo_asunto
													,'Solicitud de Contacto'	// $correo_titulo
													,'Nombre: '. $sNombre . '<br/>Tel&eacute;fono: '.$sTelefono.'<br/>Correo Electr&oacute;nico: '.$sCorreo.'<br/><br/>Mensaje.<br/>'.$sMensaje // $correo_mensaje
													,$sCorreo	// $correo_remitente
													,$sNombre	// $correo_nombre_remitente
													,Array()	// $correo_archivos
												);

				if( !$mail )
				{
					$respuesta_qs['_estado']			= 'ERROR';
					$respuesta_qs['_mensaje_usuario']	= 'Ocurrió un detalle al momento de querer enviar el correo del servidor. Por favor intente de nuevo, si el problema persiste, favor de contactar al administrador del sistema. Error generado ' . $mail;
				}
				else
				{
					$respuesta_qs['_estado']			= 'OK';
					$respuesta_qs['_mensaje_usuario']	= 'El correo electr&oacute;nico se envío correctamente.';
				}

				header( 'Content-Type: application/json' );
				echo json_encode( $respuesta_qs );
				exit;
			}
			////////////////////////////////////////////////////////////////////////////////////////////



			$this->_fn_cargar_vista( 'vista-contacto' , $this->datos );
			return true;
		}

		public function directorio()
		{
			$this->datos['datos'] = false;

			$this->_fn_cargar_vista( 'vista-directorio' , $this->datos );
			return true;
		}

		public function registro_de_clientes()
		{
			$this->datos['datos'] = false;

			////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			// Si POST trae valores, es por que se envío el formulario
			////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			if( $_POST )
			{
				// parent::_imprimir_arreglo( $_POST );
				$this->RegistroClientes['sRFC'] = isset( $_POST['_form']['RegistroCliente']['Empresa']['sRFC'] ) ? utf8_decode( strtoupper( trim( $_POST['_form']['RegistroCliente']['Empresa']['sRFC'] ) ) ) : '';

				parent::_respuestas_json(
										 'OK'
										,'La información del registro se guardo correctamente.'
										//,$this->RegistroClientes['sRFC']
									 );
			}


			$this->_fn_cargar_vista( 'vista-registro-de-clientes' , $this->datos );
			return true;
		}

	}

?>