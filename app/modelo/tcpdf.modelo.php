<?php
	
	require_once( APP_CAMINO . 'libs/TCPDF-master/tcpdf.php');

	class MYPDF extends TCPDF
	{
		public $background_image;
		public $pie;
		public $pie_top;

		public function Header()
		{
			if( $this->background_image != '' )
			{
				// Obtener el margen de salto de página actual
				$bMargin = $this->getBreakMargin();
				// Obtener el modo automático de salto de página actual
				$auto_page_break = $this->AutoPageBreak;
				// Deshabilitar el auto-salto de página
				$this->SetAutoPageBreak(false, 0);
				// Configurar la imagen de fondo
				$this->Image( $this->background_image , 0, 0, 210, 297, '', '', '', false, 300, '', false, false, 0);
				// Restaurar el estado de salto de página automático
				$this->SetAutoPageBreak($auto_page_break, $bMargin);
				// Establecer el punto de inicio para el contenido de la página
				$this->setPageMark();
			}

			$headerData = $this->getHeaderData();
			$this->writeHTML( $headerData['string'] );
		}

		public function Footer()
		{
			$this->SetY( $this->pie_top  );
			// Page number
			if( strpos( $this->pie , '{{paginacion}}' ) !== false )
			{
				$this->pie = str_replace( '{{paginacion}}' , 'Página ' . $this->getAliasNumPage() . ' de ' . $this->getAliasNbPages() . '.' , $this->pie );
			}
			$this->WriteHTML( $this->pie , true , 0 , true , 0 );
		}
	}

?>