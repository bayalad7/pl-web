<?php
	
	$v_modulo_modelo = SIS_CAMINO . "bienvenido/bienvenido.modelo.php";

	require_once( $v_modulo_modelo );

	/**
	* Bienvenido_Controlador
	**/

	class Bienvenido_Controlador Extends Bienvenido_Modelo
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

		public function inicio()
		{
			$this->datos['datos'] = false;
			$this->_fn_cargar_vista( 'vista-index' , $this->datos );
			return true;
		}

	}

?>