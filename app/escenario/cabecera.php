<?php
	global $app;
	// $app->_imprimir_variables_get();
	// $app->_imprimir_arreglo( $_SESSION );
?>
<!DOCTYPE html>
<!--[if IE 9]>
	<html lang="en" class="ie9">
<![endif]-->
<!--[if !IE]><!-->
<html lang="en" style="overflow-x: hidden;" >
	<!--<![endif]-->
	<head>
		<meta charset="utf-8">
		<title>PL - Logistics &middot; &middot; &middot;</title>
		<meta name="author" content="Tedyc - Todo en Diseño y Código">
		<meta name="description" content="Empresa de servicios logísticos nacionales e internacionales de transporte terrestre y marítimo especializada en el manejo de materiales regulares." /> 
		<meta name="keywords" content="PL Logistics, Manzanillo, Colima, México, PL,Logistics,Logística,Transporte,Contenedor,Contenedores,Carga Suelta,Servicios,Almacén,Maniobras,Maniobras de carga y descarga,Almacenamiento de mercancías,Depósito de contenedores,Pensión para unidades,Despacho de mercancías" />

		<!-- Etiqueta Meta para los dispositivos moviles (Importante) -->
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<!-- Logo pequeño de pl para el navegador (Favicon) -->
		<link type="image/x-icon" href="<?php echo SIS_URL; ?>web/imagenes/ico/favicon.ico" rel="icon" />

		<!-- Importamos Framework Bootstrap (Responsive) -->
		<link href="<?php echo SIS_URL; ?>web/css/bootstrap.css" rel="stylesheet">

		<!-- Importamos Framework Font Awesome (Iconos Vectoriales) -->
		<link href="<?php echo SIS_URL; ?>web/css/font-awesome/css/font-awesome.css" rel="stylesheet">
		<link href="<?php echo SIS_URL; ?>web/css/fontello.css" rel="stylesheet">

		<!-- Importamos los estilos CSS de los Plugins -->
		<link href="<?php echo SIS_URL; ?>web/plugins/magnific-popup/magnific-popup.css" rel="stylesheet">
		<link href="<?php echo SIS_URL; ?>web/plugins/rs-plugin/css/settings.css" rel="stylesheet">
		<link href="<?php echo SIS_URL; ?>web/css/animations.css" rel="stylesheet">
		<link href="<?php echo SIS_URL; ?>web/css/animations-more.css" rel="stylesheet">
		<link href="<?php echo SIS_URL; ?>web/plugins/owl-carousel/owl.carousel.css" rel="stylesheet">
		<link href="<?php echo SIS_URL; ?>web/plugins/owl-carousel/owl.transitions.css" rel="stylesheet">
		<link href="<?php echo SIS_URL; ?>web/plugins/hover/hover-min.css" rel="stylesheet">

		<!-- SweetAlert 2 -->
		<link href="<?php echo SIS_URL; ?>web/css/sweetalert/sweetalert2.min.css" rel="stylesheet">

		<!-- Bootstrap Switch -->
		<link href="<?php echo SIS_URL; ?>web/css/bootstrap-switch-master/bootstrap-switch.min.css" rel="stylesheet">

		<!-- jsSocials 1.4-->
		<link href="<?php echo SIS_URL; ?>web/plugins/jssocials/jssocials.css" rel="stylesheet">
		<link href="<?php echo SIS_URL; ?>web/plugins/jssocials/jssocials-theme-plain.css" rel="stylesheet">

		<!-- Importamos los estilos core CSS -->
		<link href="<?php echo SIS_URL; ?>web/css/style.css" rel="stylesheet" >
		<!-- Importamos Color de los estilos CSS -->
		<link href="<?php echo SIS_URL; ?>web/css/skins/green.css" rel="stylesheet" >

		<!-- Importamos los estilos css propios Custom --> 
		<link href="<?php echo SIS_URL; ?>web/css/custom.css" rel="stylesheet">

		<!-- Archivos Jquery & Bootstap-->
		<script type="text/javascript" src="<?php echo SIS_URL; ?>web/plugins/jquery.min.js"></script>
		<script type="text/javascript" src="<?php echo SIS_URL; ?>web/js/bootstrap.min.js"></script>

	</head>

	<body class="no-trans front-page" style="overflow-x: hidden;">

		<!-- scrollToTop -->
		<!-- ================ -->
		<div class="scrollToTop circle"><i class="icon-up-open-big"></i></div>

		<div class="page-wrapper">
			<div class="header-container">

				<div class="header-top" style="background: #fff; border-bottom: solid 1px #eee;" >
					<div class="container">
						<div class="row">
							<div class="col-xs-2 col-sm-5">
								<div class="header-top-first clearfix">
									<ul class="social-links circle animated-effect-1 colored small clearfix hidden-xs">
										<li class="facebook"><a target="_blank" href="https://www.facebook.com/pllogisticmx/"><i class="fa fa-facebook"></i></a></li>
										<li class="instagram"><a target="_blank" href="https://www.instagram.com/pllogisticsmx/"><i class="fa fa-instagram"></i></a></li>
										<!--
										<li class="googleplus"><a href="mailto:contacto@pllogistic.com"><i class="fa fa-at"></i></a></li>
										-->
									</ul>
									<div class="social-links circle animated-effect-1 small hidden-lg hidden-md hidden-sm">
										<div class="btn-group dropdown">
											<button type="button" class="btn dropdown-toggle" data-toggle="dropdown"><i class="fa fa-share-alt"></i></button>
											<ul class="dropdown-menu dropdown-animation" style="background-color: #fff;" >
												<li class="facebook"><a target="_blank" href="https://www.facebook.com/pllogisticmx/"><i class="fa fa-facebook"></i></a></li>
												<li class="instagram"><a target="_blank" href="https://www.instagram.com/pllogisticsmx/"><i class="fa fa-instagram"></i></a></li>
												<!--
												<li class="googleplus"><a href="mailto:contacto@pllogistic.com"><i class="fa fa-at"></i></a></li>
												-->
											</ul>
										</div>
									</div>
									<ul class="list-inline hidden-xs hidden-ms pl-head-ul">
										<li><a class="pl-header-a"><i class="fa fa-phone pr-5 pl-10"></i>(314) 138.3465</a></li>
										<li class="pl-header-a">|</li>
										<li><a class="pl-header-a" target="_blank" href="https://api.whatsapp.com/send?phone=523141462931&text=Hola!%20Estoy%20interesado%20en%20trabajar%20con%20PL-Logistics."><i class="fa fa-phone pr-5"></i>(314) 146.2931</a></li>
									</ul>
								</div>
							</div>
							<div class="col-xs-10 col-sm-7">
								<div id="header-top-second" class="clearfix text-right">
									<div class="btn-group">
										<!--
										<a href="<?php echo SIS_URL; ?>app-web/empresa/registro-de-clientes/" class="btn btn-animated btn-default btn-sm" style="margin-right: 5px;" >Registro de Clientes <i class="fa fa-users"></i></a>
										-->
										<a href="<?php echo SIS_URL; ?>app-web/configuracion/mapa-del-sitio/" class="btn btn-animated btn-default btn-sm" >Mapa del Sitio <i class="fa fa-map-signs"></i></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<style type="text/css">
					.dropdown>a:before {
					    color: #333;
					}
					.navbar .navbar-nav {
						font-family: "Poppins-Regular" !important;
						color:#43637C;
						// text-transform: none;
						text-transform: uppercase;
					}
					.navbar-default .navbar-nav>li>a{
						font-family: "Poppins-Regular" !important;
						color:#43637C;
						// font-size: 18px;
						font-size: 16px;
					}
					.navbar-default .navbar-nav>.dropdown.open>a:before {
						color: #24a828;
					}
					.dropdown-menu>li>a{
						font-family: "Poppins-Regular" !important;
						color: #43637C;
					}
					.dropdown-menu>li>a i{
						color: #43637C;
						-webkit-transition: all .2s ease-in-out;
						-o-transition: all .2s ease-in-out;
						transition: all .2s ease-in-out;
					}
				</style>
				<!-- Class fixed object-visible fadeInDown -->
				<header class="header clearfix" style="background: #fff; border-bottom: 0px solid transparent;">
					<div class="container">
						<div class="row">
							<div class="col-md-3">
								<div class="header-left clearfix">
									<div id="logo" class="logo" style="margin-top: -10px;" >
										<center>
											<a href="<?php echo SIS_URL; ?>app-web/bienvenido/inicio/" >
												<img id="logo_img" src="<?php echo SIS_URL; ?>web/imagenes/pl-l/logo.png" width="180" height="70" />
											</a>
										</center>
									</div>
								</div>
							</div>
							<div class="col-md-9">
								<div class="header-right clearfix">
									<div class="main-navigation  animated with-dropdown-buttons">
										<nav class="navbar navbar-default" role="navigation">
											<div class="container-fluid">
												<!-- Toggle get grouped for better mobile display -->
												<div class="navbar-header">

													<p class="hidden-sm hidden-md hidden-lg pl-menu" style="float: left; margin-top: 14px; margin-left: 15px;">
														Menu de Navegación
													</p>
													<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">
														<span class="sr-only">Toggle navigation</span>
														<span class="icon-bar"></span>
														<span class="icon-bar"></span>
														<span class="icon-bar"></span>
													</button>
												</div>
												<div class="collapse navbar-collapse" id="navbar-collapse-1">

													<!-- main-menu -->
													<ul class="nav navbar-nav pl-menu">
														<li class="skModuloFuncion"><a href="<?=SIS_URL;?>app-web/bienvenido/inicio/"><i class="fa fa-home"></i> Inicio</a></li>
														<li class="dropdown" skmodulo="empresa" style="">
															<a class="dropdown-toggle" data-toggle="dropdown" style="cursor: default;"><i class="fa fa-building"></i> Empresa</a>
															<ul class="dropdown-menu">
																<li class="skModuloFuncion"><a href="<?=SIS_URL;?>app-web/empresa/acerca-de/"><i class="fa fa-info-circle"></i> Acerca De</a></li>
																<li class="skModuloFuncion"><a href="<?=SIS_URL;?>app-web/empresa/aviso-de-privacidad/"><i class="fa fa-shield"></i> Aviso de Privacidad de Datos</a></li>
																<li class="skModuloFuncion"><a href="<?=SIS_URL;?>app-web/empresa/directorio/"><i class="fa fa-address-book"></i> Directorio</a></li>
																<li class="skModuloFuncion"><a href="<?=SIS_URL;?>app-web/empresa/documentos/"><i class="fa fa-archive"></i> Documentos</a></li>
															</ul>
														</li>

														<li class="skModuloFuncion"><a href="<?=SIS_URL;?>app-web/empresa/servicios/"><i class="fa fa-cogs"></i> Servicios</a></li>
														
														<!--
														<li class="dropdown" skmodulo="empresa" style="">
															<a class="dropdown-toggle" data-toggle="dropdown" style="cursor: default;"><i class="fa fa-rocket"></i> Apps</a>
															<ul class="dropdown-menu">
																<li class="skModuloFuncion"><a href="<?=SIS_URL;?>app-web/empresa/cotizador-pl/"><i class="fa fa-file-text"></i> Cotizador PL</a></li>
																<li class="skModuloFuncion"><a href="<?=SIS_URL;?>app-web/empresa/tracking-pl/"><i class="fa fa-truck"></i> Tracking PL</a></li>
															</ul>
														</li>
														-->
														
														<li class="skModuloFuncion"><a href="<?=SIS_URL;?>app-web/empresa/contacto/"><i class="fa fa-envelope-open"></i> Contacto</a></li>
													</ul>
													<!-- main-menu end -->
												
													<!-- header dropdown buttons -->
													<div class="header-dropdown-buttons">
														<div class="btn-group dropdown popover-left" title="BUZÓN DE QUEJAS Y SUGERENCIAS." data-content="Dejanos un comentario de queja o sugerencia para poder mejorar nuestra calidad en la atención a nuestros clientes." >
															<button type="button" class="btn dropdown-toggle" data-toggle="dropdown" id="BtnModalBuzon" ><i class="fa fa-envelope"></i></button>
														</div>
													</div>
													<!-- header dropdown buttons end-->
												</div>
											</div>
										</nav>
										<!-- navbar end -->
									</div>
									<!-- main-navigation end -->	
								</div>
								<!-- header-right end -->
							</div>
						</div>
					</div>
				</header>
			</div>

		<!-- Modal Buzón de Quejas y Sugerencias -->
		<div id="ModalBuzon" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div>
						<section class="pl-prsec-bg-top">
							<div class="row" style="margin-top: 15px;" >
								<div class="col-md-12">
									<button type="button" class="close" data-dismiss="modal" style="float: right; margin-top: 35px; margin-right: 15px; " ><span aria-hidden="true"><img src="<?php echo SIS_URL; ?>web/imagenes/x2.png" width="50" height="50" /></span><span class="sr-only">Close</span></button>
									<br/><br/>
									<center>
										<p class="pl-contenido-titulos">Buzón de Quejas y Sugerencias <span class="pl-nombre" ><nsp>P</nsp><nsl>L</nsl>&nbsp;<nl>Logistics</nl>&nbsp;<span class="pl-nombre-s" style="position: relative; top:-1px !important;" ><o><i class="fa fa-circle"></i></o>&nbsp;<oo><i class="fa fa-circle"></i></oo>&nbsp;<ooo><i class="fa fa-circle"></i></ooo></span></span></p>
										<img src="<?php echo SIS_URL; ?>web/imagenes/shade.png" style="margin: 7px auto 3px;" >
									</center>
								</div>
							</div>
						</section>
					</div>
					<div class="modal-body pl-forms" >
						<div class="row" id="_gif_modal_buzon" style="display:none;">
							<div class="col-md-12">
								<center>
									<p class="pl-guar-p" >
										<strong>Validando Información.</strong>
										<img src="<?php echo SIS_URL; ?>web/imagenes/cargar.gif" align="absmiddle">
									</p>
								</center>
								<br/>
							</div>
						</div>
						<div class="row">
							<div class="col-md-4">
								<label class="control-label"><i class="fa fa-circle"></i>Tipo de Buzón</label>
							</div>
							<div class="col-md-8">
								<div class="has-feedback">
									<select class="form-control" id="sTipoBuzon" >
										<option value="" >SELECCIONA...</option>
										<option value="QUEJA">Queja</option>
										<option value="SUGERENCIA">Sugerencia</option>
									</select>
									<i class="fa fa-sitemap form-control-feedback"></i>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-4">
								<label class="control-label"><i class="fa fa-circle"></i>Título</label>
							</div>
							<div class="col-md-8">
								<div class="has-feedback">
									<input type="text" class="form-control" id="sTituloBuzon" value="">
									<i class="fa fa-etsy form-control-feedback"></i>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-4">
								<label class="control-label"><i class="fa fa-circle"></i>Comentario</label>
							</div>
							<div class="col-md-8">
								<div class="has-feedback">
									<textarea class="form-control" id="sComentarioBuzon" rows="4" maxlength="256" style="resize:none;"></textarea>
									<i class="fa fa-envelope form-control-feedback"></i>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12" id="acciones">
								<center>
									<button type="button" class="btn btn-animated btn-default" onclick="_fn_buzon( this );">Enviar Comentario <i class="fa fa-paper-plane"></i></button>
									<img src="<?php echo SIS_URL; ?>web/imagenes/shade-2.png" width="100%">
								</center>
							</div>
						</div>
						<br/>
						<div class="row">
							<div class="col-md-12">
								<p class="pl-p-obli"><i class="fa fa-circle"></i> Indica que es <strong>obligatorio</strong> llenar el campo.</p>
								<p class="pl-p-obli"><i class="fa fa-circle-o"></i> Indica que es <strong>opcional</strong> llenar el campo.</p>
							</div>
						</div>

					</div>
					<!--
					<div class="modal-footer">
						<button type="button" class="btn btn-sm btn-dark" data-dismiss="modal">Cerrar</button>
					</div>
					-->
				</div>
			</div>
		</div>

		<script type="text/javascript">
			$(document).ready(function() {
				// Modal Buzón de Quejas y Sugerencias
				$("#BtnModalBuzon").click(function(event){ $("#ModalBuzon").modal({ backdrop: 'static' , keyboard: false }); });
			});	
		</script>

		<section class="main-container" id="contenido" style="padding: 0px 0; z-index: 1 !important;">

			<form id="_form" method="post" enctype="multipart/form-data" style="margin: 0px !important;" >
				<!-- Input's variables get -->
				<input type="hidden" name="v1" id="v1" class="cls_vGet" value="<?php echo (isset( $_GET['v1'] )) ? $_GET['v1'] : Null ; ?>" />
				<input type="hidden" name="v2" id="v2" class="cls_vGet" value="<?php echo (isset( $_GET['v2'] )) ? $_GET['v2'] : Null ; ?>" />
				<input type="hidden" name="v3" id="v3" class="cls_vGet" value="<?php echo (isset( $_GET['v3'] )) ? $_GET['v3'] : Null ; ?>" />
				<input type="hidden" name="v4" id="v4" class="cls_vGet" value="<?php echo (isset( $_GET['v4'] )) ? $_GET['v4'] : Null ; ?>" />
				<input type="hidden" name="v5" id="v5" class="cls_vGet" value="<?php echo (isset( $_GET['v5'] )) ? $_GET['v5'] : Null ; ?>" />
				<input type="hidden" name="v6" id="v6" class="cls_vGet" value="<?php echo (isset( $_GET['v6'] )) ? $_GET['v6'] : Null ; ?>" />
				
				<!-- Gif Loader (Cargar) para hacer el registro del formulario con Ajax. -->
				<div class="row" id="_gif_guardar" style="display:none;">
					<div class="col-md-12">
						<center>
							<br/>
							<p class="pl-guar-p">
								<strong>Validando Información - Guardar.</strong>
								<img src="<?php echo SIS_URL; ?>web/imagenes/cargar.gif" align="absmiddle">
							</p>
							<br/>
						</center>
					</div>
				</div>