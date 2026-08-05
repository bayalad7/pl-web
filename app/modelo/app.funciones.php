<?php
	/**
	* 
	*/
	class App_Funciones
	{
		// Variables publicas

		// Variables protegidas

		// Variables privadas

		/*		
		public function __construct(){}

		public function __destruct(){}
		*/

		/**
		* mail
		*
		* @param    string      $correo_receptor
		* @param    string      $correo_asunto
		* @param    string      $correo_titulo
		* @param    string      $correo_mensaje
		* @param    string      $correo_remitente
		* @param    string      $correo_nombre_remitente
		* @param    array()     $correo_archivos
		* @return   true || message error
		*/
		public function _fn_mail( $correo_titulo,
                                  $correo_asunto,
                                  $correo_mensaje,
                                  $correo_remitente,
                                  $correo_nombre_remitente,
                                  $correo_receptores = Array(),
                                  $correo_archivos = Array() )
		{

			$config_mail = 'gmail';

			if( $config_mail == 'gmail' )
			{
				require_once( APP_CAMINO . 'libs/PHPMailer/PHPMailerAutoload.php' );
			}

			if( $config_mail == 'localhost' )
			{
				require_once( APP_CAMINO . 'libs/PHPMailer/class.phpmailer.php' );
			}


			$plantilla_html		=	'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
									<html lang="en">
									<head>
											<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
											<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
											<title>Notificaci&oacute;n Naviero-System.</title>
										</head>
										<body style="margin:0; margin-top:30px; margin-bottom:30px; padding:0; width:100%; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; background-color: #fafafa;">
											<table cellpadding="0" cellspacing="0" border="0" width="100%" style="border:0; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; background-color: #fafafa;">
												<tbody>
													<tr>
														<td align="center" style="border-collapse: collapse;">
															<!-- ROW LOGO -->
															<table cellpadding="0" cellspacing="0" border="0" width="560" style="border:solid 1px #d2d2d2; border-collapse:collapse; background-color:#ffffff; border-radius:6px;">
																<tbody>
																	<tr>
																		<td style="border-collapse:collapse; vertical-align:middle; text-align center; padding:20px;">
																			<!-- Headline Header -->
																			<table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">
																				<tbody>
																					<tr><!-- logo -->
																						<td width="100%" style="font-family: helvetica, Arial, sans-serif; font-size: 18px; letter-spacing: 0px; text-align: center;">	
																							<a style="text-decoration: none;">
																								<a href="'.SIS_URL.'" target="_blank" ><img src="'.SIS_URL.'web/imagenes/pl-l/logo.png" alt="" border="0" width="300" height="auto" style="with: 166px; height: auto; border: 5px solid #ffffff;"></a>
																								<br/>
																								<img src="'.SIS_URL.'web/imagenes/shade-2.png" alt="" border="0" width="100%" height="auto">
																							</a>
																						</td>
																					</tr>
																					<tr><!-- spacer before the line -->
																						<td width="100%" height="20"></td>
																					</tr>
																					<tr>
																						<td width="100%" style="font-size: 14px; line-height: 16px; font-family:helvetica, Arial, sans-serif; text-align: left; padding:15px;">
																							<center>
																								<p style=" font-size:18px;margin: 0px 0px 16px; line-height: 24px; color:#000;">'.$correo_titulo.'</p>
																								<hr/>
																							</center>
																							'.$correo_mensaje.'
																							<br/>		
																							<br/>
																						</td>
																					</tr>
																				</tbody>
																			</table>
																			<!-- /Headline Header -->
																		</td>
																	</tr>
																</tbody>
															</table>
															<!-- /ROW LOGO -->
															<!-- Space -->
															<table width="100%" border="0" cellpadding="0" cellspacing="0" align="left" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">
																<tbody>
																	<tr>
																		<td width="100%" height="30"></td>
																	</tr>
																</tbody>
															</table>
															<!-- /Space -->
															<!-- ROW FOOTER -->
															<table cellpadding="0" cellspacing="0" border="0" width="560" style="border:solid 1px #d2d2d2; border-collapse:collapse; background-color:#ffffff; border-radius:6px;">
																<tbody>
																	<tr>
																		<td style="border-collapse:collapse; vertical-align:middle; text-align center; padding:20px;">
																			<!-- copyright-->
																			<table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">
																				<tbody>
																					<tr>
																						<td width="100%" height="30"></td>
																					</tr>
																					<tr><!-- copyright -->
																						<td width="100%" style="font-family: helvetica, Arial, sans-serif; font-size: 12px; text-align: center; line-height: 24px;">
																							<center> Copyright &copy; '.date("Y").' PL - Logistics. Todos los Derechos Reservados | Desarrollado por <a href="http://www.tedyc.com" target="_blank" style="color: #f8931d; text-decoration:none;" >Tedyc <img src="'.SIS_URL.'web/imagenes/tedyc-ojos.png" style="display: inline; width: 24px; margin-top: -2px;" ></a></center>
																						</td>
																					</tr>
																					<tr>
																						<td width="100%" height="30"></td>
																					</tr>
																				</tbody>
																			</table>
																			<!-- /copyright -->
																		</td>
																	</tr>
																</tbody>
															</table>
															<!-- /ROW FOOTER -->
														</td>
													</tr>
												</tbody>
											</table>
										</body>
									</html>';

			$mail = new PHPMailer(true);
			
			try
			{
				if( $config_mail == 'gmail' )
				{
					/*
						NOTA IMPORTANTE.
						Ir a google y buscar "Less secure apps - My Account - Google" - "https://myaccount.google.com/lesssecureapps"
						Activar lo siguiente; Permitir el acceso de aplicaciones menos seguras: SÍ.
						Para poder utilizar el correo de gmail y mandar el mail
					*/
					$mail->isSMTP();								// Establecer el correo para usar SMTP
					$mail->Mailer		=	'smtp';
					$mail->SMTPAuth		=	true;					// Habilitar autenticación SMTP
					//$mail->SMTPDebug	=	1;						// Habilita la salida de depuración verbosa - ( "1" errores y mensajes ) - ( "2" solo mensajes )
					$mail->From			=	utf8_decode( $correo_remitente );
					$mail->FromName		=	utf8_decode( $correo_nombre_remitente );
					$mail->Host			=	'smtp.gmail.com';		// Especificar servidores SMTP principales y de respaldo
					$mail->SMTPSecure	=	'ssl';					// Habilitar el cifrado TLS, `ssl` también aceptado
					$mail->Port			=	465;					// Puerto TCP para conectarse a
					$mail->Username		=	'pl.logistics.notificaciones@gmail.com';	// Nombre de usuario de SMTP
					$mail->Password		=	'pwC@&1bm4#xSwwOCMWtaKE]n[1i![*#x';			// Contraseña SMTP
					//$mail->WordWrap	=	50;						// Ajuste de línea
					//$mail->addReplyTo('info@example.com', 'Information');
					//$mail->addCC('bayalad7@gmail.com');
					//$mail->addBCC('bayalad7@gmail.com');			// Mail con copia oculta
				}

				if( $config_mail == 'localhost' )
				{
					$mail->Host			=	'localhost';
					$mail->From			=	utf8_decode( $correo_remitente );
					$mail->FromName		=	utf8_decode( $correo_nombre_remitente );
					$mail->Timeout		=	30;
				}

				foreach( $correo_receptores as $indice => $valor )
				{
					if( isset( $valor['oculto'] ) )
					{
						$mail->addBCC( $valor['correo'] ); // Mail con copia oculta
					}
					else
					{
						$mail->AddAddress( $valor['correo'] );
					}
				}

				if( count( $correo_archivos ) > 0 )
				{
					foreach( $correo_archivos as $indice => $valor )
					{
						$mail->AddAttachment( $valor['archivo_ruta'] , $valor['archivo_nombre'] );
					}
				}


				$mail->IsHTML( true );
				$mail->Subject	=	utf8_decode( $correo_asunto );
				$mail->Body		=	$plantilla_html;
				$mail->Send();

				return true;

			}
			catch( phpmailerException $e )
			{
				return $e->errorMessage();	// Pretty error messages from PHPMailer
			}
			catch( Exception $e)
			{
				return $e->getMessage();	// Boring error messages from anything else!
			}

		}

		/**
		* Excel
		*/
		public function _fn_excel( $datos_excel , $titulo , $configuracion_excel )
		{
			// PHPExcel_IOFactory
			require_once( APP_CAMINO . 'libs/PHPExcel-1.8/Classes/PHPExcel/IOFactory.php');
			require_once( APP_CAMINO . 'libs/PHPExcel-1.8/Classes/PHPExcel/Worksheet/Drawing.php');

			// Creamos un objeto PHPExcel
			$objPHPExcel = new PHPExcel();

			// Cabeceras - PHPExcel Descargar
			// header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
			header('Content-Type: application/vnd.ms-excel');
			header('Content-Disposition: attachment;filename="'.$titulo.'.xlsx"');
			header('Cache-Control: max-age=0');

			// Establecer propiedades
			$objPHPExcel->getProperties()->setCreator(			( isset( $configuracion_excel['setCreator'] )			?	$configuracion_excel['setCreator']			: '' )	);
			$objPHPExcel->getProperties()->setLastModifiedBy(	( isset( $configuracion_excel['setLastModifiedBy'] )	?	$configuracion_excel['setLastModifiedBy']	: '' )	);
			$objPHPExcel->getProperties()->setTitle(			( isset( $configuracion_excel['setTitle'] )				?	$configuracion_excel['setTitle']			: '' )	);
			$objPHPExcel->getProperties()->setSubject(			( isset( $configuracion_excel['setSubject'] )			?	$configuracion_excel['setSubject']			: '' )	);
			$objPHPExcel->getProperties()->setDescription(		( isset( $configuracion_excel['setDescription'] )		?	$configuracion_excel['setDescription']		: '' )	);

			// Poner toda la hoja con fondo en blanco
			$objPHPExcel->getDefaultStyle()->applyFromArray(
														Array(
															'fill' => Array(
																		'type'  => PHPExcel_Style_Fill::FILL_SOLID,
																		'color' => array('argb' => 'FFFFFFFF')
																	),
														)
													);

			// Recorremos el arreglo que tiene la información para ponerla en el excel
			foreach ( $datos_excel['hojas'] as $pos_hoja => $valor )
			{

				// Indicamos que se pare en la hoja dependiendo del arreglo
				$objPHPExcel->setActiveSheetIndex( ( $pos_hoja - 1 ) );

				// Recorremos columnas
				foreach ( $datos_excel['hojas'][ $pos_hoja ] as $columna => $columna_valor )
				{
					if( $columna != 'conf' )
					{
						// Configuraciones
						// Auto-ajustar las celdas
						$objPHPExcel->getActiveSheet()->getColumnDimension( $columna )->setAutoSize( ( isset( $columna_valor['conf']['setAutoSize'] ) ? $columna_valor['conf']['setAutoSize'] : false ) );

						// Recorremos filas
						foreach ( $datos_excel['hojas'][ $pos_hoja ][ $columna ] as $fila => $datos )
						{
							if( $fila != 'conf' )
							{
								// Tipo de letra
								if( isset( $datos['letra'] ) )
								{
									$objPHPExcel->getActiveSheet()->getStyle( $columna . ( $fila ) )->applyFromArray( $datos['letra'] );
								}

								// Color de fondo
								if( isset( $datos['fondo'] ) )
								{
									$objPHPExcel->getActiveSheet()->getStyle( $columna . ( $fila ) )->applyFromArray( $datos['fondo'] );
								}

								// Aliniamiento horizontal
								if( isset( $datos['h_align'] ) )
								{
									$objPHPExcel->getActiveSheet()->getStyle( $columna . ( $fila ) )->applyFromArray( $datos['h_align'] );
								}

								// Bordes
								if( isset( $datos['border'] ) )
								{
									$objPHPExcel->getActiveSheet()->getStyle( $columna . ( $fila ) )->applyFromArray( $datos['border'] );
								}

								$objPHPExcel->getActiveSheet()->SetCellValue( $columna . ( $fila ) , $datos['valor'] );

							}
						}
					}
					else
					{

						// Configuraciones de la hoja para combiar celdas
						if( isset( $columna_valor['combinar_celdas'] ) )
						{
							foreach ( $columna_valor['combinar_celdas'] as $indice => $valor_rango )
							{
								$objPHPExcel->setActiveSheetIndex( ( $pos_hoja - 1 ) )->mergeCells( $valor_rango );
							}
						}

						// Configuraciones de la hoja para filtro
						if( isset( $columna_valor['auto_filtrado'] ) )
						{
							foreach ( $columna_valor['auto_filtrado'] as $indice => $valor_rango )
							{
								$objPHPExcel->getActiveSheet()->setAutoFilter( $valor_rango );
							}
						}

						// Configuraciones de la hoja imagenes
						if( isset( $columna_valor['imagenes'] ) )
						{
							foreach( $columna_valor['imagenes'] as $indice => $valor )
							{
								$objDrawing = new PHPExcel_Worksheet_Drawing();
								$objDrawing->setWorksheet( $objPHPExcel->getActiveSheet() );
								$objDrawing->setPath( $valor['setPath'] );
								$objDrawing->setCoordinates( $valor['setCoordinates'] );
								$objDrawing->setWidth( $valor['setWidth'] );
							}
						}

					}
				}

				// Titulo de la hoja - Pestaña
				$objPHPExcel->getActiveSheet()->setTitle( ( isset( $datos_excel['hojas'][$pos_hoja]['conf']['setTitle'] ) ? $datos_excel['hojas'][$pos_hoja]['conf']['setTitle'] : '' ) );
				// Protección de la hoja - Pestaña
				$objPHPExcel->getActiveSheet()->getProtection()->setSheet( ( isset( $datos_excel['hojas'][$pos_hoja]['conf']['setSheet'] ) ? $datos_excel['hojas'][$pos_hoja]['conf']['setSheet'] : false ) );
				/*
					- Poner contraseña a la hoja bloqueada
						$objPHPExcel->getActiveSheet()->getProtection()->setPassword( 'Contraseña Aquí...' );
					
					- Esta sección desbloquea el rango ('A1: A100') de la hoja bloqueada
						$objPHPExcel->getActiveSheet()->getStyle('A1:A100')->getProtection()->setLocked( PHPExcel_Style_Protection::PROTECTION_UNPROTECTED );
				*/
			}

			// Se descarga el archivo en formato Excel 2007. Si queremos trabajar con Excel 2003, basta cambiar el 'Excel2007' por 'Excel5' y el nombre del archivo de salida cambiar su formato por '.xls'
			$objWriter = PHPExcel_IOFactory::createWriter( $objPHPExcel , 'Excel2007' );
			$objWriter->save( 'php://output' );

			return true;

		}

		public function _fn_excel_bgcolor( $color = 'ffffff' )
		{
			return	Array(
						'fill' => array(
							'type'	=>	'solid', // PHPExcel_Style_Fill
							'color'	=>	array( 'rgb' => $color )
						)
					);
		
		}

		public function _fn_excel_font( $font_name = 'Tahoma' , $font_size = 10 , $font_color = '000000' , $font_bold = false )
		{
			return	Array(
					'font'	=> array(
						'name'	=>	$font_name,
						'size'	=>	$font_size,
						'color'	=>	array('rgb' => $font_color ),
						'bold'	=>	$font_bold,
					)
				);

		}

		public function _fn_excel_h_alignment( $horizontal_alignment = 'left' )
		{
			return	Array(
					'alignment' => array(
						'horizontal' => $horizontal_alignment, // PHPExcel_Style_Alignment - center , centerContinuous , general , justify , left , right
					)
				);
		}

		public function _fn_excel_border( $border = 'none' )
		{
			return	Array(
						'borders' => Array(
										'allborders' => Array(
														'style' => $border, // PHPExcel_Style_Border - none, dashDot, dashDotDot, dashed, dotted, double, hair, medium, mediumDashDot, mediumDashDotDot, mediumDashed, slantDashDot, thick, thin,
														)
									)
				);
		}

		public function _fn_excel_obtener_letra( $posicion )
		{
			$excel_columna_letra = Array( 'A' , 'B' , 'C' , 'D' , 'E' , 'F' , 'G' , 'H' , 'I' , 'J' , 'K' , 'L' , 'M' , 'N' , 'O' , 'P' , 'Q' , 'R' , 'S' , 'T' , 'U' , 'V' , 'W' , 'X' , 'Y' , 'Z' );
			return $excel_columna_letra[ $posicion ];
		}


		/**
		* PDF - TcPdf
		*
		* @param    string      $cabecera				- pdf cabecera - html
		* @param    string      $contenido				- pdf content - html
		* @param    string      $pie					- pdf pie - html
		* @param    string      $titulo					- pdf title 
		* @param    string      $PDF_PAGE_ORIENTATION	- orientación horizontal o vertical
		* @param    string      $PDF_UNIT				- mm
		* @param    string      $PDF_PAGE_FORMAT		- formato A4, A5, ...
		* @param    String      $PDF_OUTPUT				- I , D , F , S , FI , FD
		* @return   null
		*/
		public function _fn_tcpdf( $cabecera,
								   $contenido,
								   $pie,
								   $titulo,
								   $PDF_PAGE_ORIENTATION	=	'P',
								   $PDF_UNIT				=	'mm',
								   $PDF_PAGE_FORMAT		    =	'A4',
								   $PDF_OUTPUT			    =	'I',
								   $configuracion_pdf       =   Array() )
		{

			require_once( APP_CAMINO . 'modelo/tcpdf.modelo.php');
			
			/**
			* Configurar la información del documento
			**/
			$pdf = new MYPDF( $PDF_PAGE_ORIENTATION , $PDF_UNIT, $PDF_PAGE_FORMAT , true , 'UTF-8' , false );

			$pdf->SetCreator( ( isset( $configuracion_pdf['creador'] ) ? $configuracion_pdf['creador'] : 'SAC-La Jolla Residencial.' ) );
			$pdf->SetAuthor( ( isset( $configuracion_pdf['autor'] ) ? $configuracion_pdf['autor'] : 'SAC-La Jolla Residencial.' ) );
			$pdf->SetTitle( $titulo . '.pdf' );
			$pdf->SetSubject( ( isset( $configuracion_pdf['tema'] ) ? $configuracion_pdf['tema'] : '' ) );
			$pdf->SetKeywords( ( isset( $configuracion_pdf['palabras_claves'] ) ? $configuracion_pdf['palabras_claves'] : '' ) );

			// Establecer datos de encabezado predeterminados
			$pdf->SetHeaderData(
								 PDF_HEADER_LOGO
								,PDF_HEADER_LOGO_WIDTH
								,''
								,$cabecera
							);

			$pdf->background_image	=	isset( $configuracion_pdf['background_image'] ) ? $configuracion_pdf['background_image'] : '';
			$pdf->pie_top			=	isset( $configuracion_pdf['pie']['top'] ) ? $configuracion_pdf['pie']['top'] : -15;
			$pdf->pie				=	$pie;

			// set margins
			$pdf->SetMargins(
								 ( isset( $configuracion_pdf['margenes']['PDF_MARGIN_LEFT'] )  ? $configuracion_pdf['margenes']['PDF_MARGIN_LEFT']  : 10 )
								,( isset( $configuracion_pdf['margenes']['PDF_MARGIN_TOP'] )   ? $configuracion_pdf['margenes']['PDF_MARGIN_TOP']   : 15 )
								,( isset( $configuracion_pdf['margenes']['PDF_MARGIN_RIGHT'] ) ? $configuracion_pdf['margenes']['PDF_MARGIN_RIGHT'] : 10 )
							);

			$pdf->SetHeaderMargin( (isset( $configuracion_pdf['margenes']['PDF_MARGIN_HEADER'] ) ? $configuracion_pdf['margenes']['PDF_MARGIN_HEADER']  : 5 ) );
			$pdf->SetFooterMargin( (isset( $configuracion_pdf['margenes']['PDF_MARGIN_FOOTER'] ) ? $configuracion_pdf['margenes']['PDF_MARGIN_FOOTER']  : 10 ) );

			// Establecer saltos de pagina automaticos
			$pdf->SetAutoPageBreak( TRUE , (isset( $configuracion_pdf['margenes']['PDF_MARGIN_BOTTOM'] ) ? $configuracion_pdf['margenes']['PDF_MARGIN_BOTTOM']  : 25 ) );

			// Establecer factor de escala de imagen
			$pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);

			// Establecer algunas cadenas dependientes del idioma (opcional)
			if( @file_exists( dirname(__FILE__) . '/lang/spa.php' ) )
			{
				require_once( dirname(__FILE__) . '/lang/spa.php' );
				$pdf->setLanguageArray($l);
			}

			// Agregar página
			$pdf->AddPage( $PDF_PAGE_ORIENTATION , $PDF_PAGE_FORMAT );

			/**
			* Generar el contenido HTML
			**/
			$pdf->writeHTML($contenido, true, false, true, false, '');
			
			/**
			* Cerrar y exportar documento PDF
			* I: enviar el archivo en línea al navegador (predeterminado). El plug-in se utiliza si está disponible. El nombre dado por nombre se utiliza cuando se selecciona la opción "Guardar como" en el enlace que genera el PDF.
			* D: enviar al navegador y forzar una descarga de archivos con el nombre dado por su nombre.
			* F: guardar en un archivo de servidor local con el nombre dado por nombre.
			* S: devolver el documento como una cadena. nombre se ignora.
			* FI: equivalente a la opción F + I
			* FD: equivalente a la opción F + D
			**/
			$pdf->Output( $titulo . '.pdf' , $PDF_OUTPUT );
		}


		public function _fn_imprimir_variables_get()
		{
			echo '<hr><pre>';
			echo print_r( $_GET , 1 );
			echo '</pre><hr>';
		}

		public function _fn_imprimir_variables_post()
		{
			echo '<hr><pre>';
			echo print_r( $_POST , 1 );
			echo '</pre><hr>';
		}

		public function _fn_imprimir_arreglo( $arreglo )
		{
			echo '<hr><pre>';
			echo print_r( $arreglo , 1 );
			echo '</pre><hr>';
		}

		public function _fn_es_ajax()
		{
			$headers = getallheaders();

			if( isset( $headers['X-Requested-With'] ) )
			{
				if( strtolower( $_SERVER['HTTP_X_REQUESTED_WITH'] ) == 'xmlhttprequest' )
				{
					return true;
				}
				else
				{
					return false;
				}
			}
			else
			{
				return false;
			}

			return false;
		}

		public function _fn_fecha_hora_servidor()
		{
			return date("Y-m-d H:i:s");
		}

	}


?>