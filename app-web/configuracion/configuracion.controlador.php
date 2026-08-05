<?php
	
	$v_modulo_modelo = SIS_CAMINO . "configuracion/configuracion.modelo.php";

	require_once( $v_modulo_modelo );

	/**
	* Configuracion_Controlador
	**/

	class Configuracion_Controlador Extends Configuracion_Modelo
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

		public function mapa_del_sitio()
		{
			$this->datos = false;
			$this->_fn_cargar_vista( 'vista-mapa-del-sitio' , $this->datos );
			return true;

		}

	}

?>