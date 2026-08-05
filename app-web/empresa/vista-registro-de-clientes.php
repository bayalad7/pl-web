	<div class="breadcrumb-container clearfix pl-breadcrumb">
		<div class="container">
			<ol id="list-breadcrumb" class="breadcrumb">
				<li>&nbsp;<i class="fa fa-building-o"></i>&nbsp;&nbsp;PL Logistics</li>
				<li>&nbsp;<i class="fa fa-building"></i>&nbsp;&nbsp;Empresa</li>
				<li class="active"><i class="fa fa-user"></i>&nbsp;&nbsp;Registro de Clientes</li>
			</ol>
		</div>
	</div>

	<input type="hidden" name="_form[validacion_extra][registro_cliente][empresa][rfc]" value="" />

	<section class="pl-prsec-bg-top">
		<div class="container">
			<div class="row" style="margin-top: 60px;" >
				<div class="col-md-12">
					<center>
						<p class="pl-contenido-titulos">Registro de Clientes <span class="pl-nombre" ><nsp>P</nsp><nsl>L</nsl>&nbsp;<nl>Logistics</nl>&nbsp;<span class="pl-nombre-s" style="position: relative; top:-1px !important;" ><o><i class="fa fa-circle"></i></o>&nbsp;<oo><i class="fa fa-circle"></i></oo>&nbsp;<ooo><i class="fa fa-circle"></i></ooo></span></span></p>
						<img src="<?php echo SIS_URL; ?>web/imagenes/shade.png" style="margin: 7px auto 3px;" >
					</center>
				</div>
			</div>
		</div>
	</section>



	<section>
		<div class="container pl-forms">

			<div class="row">
				<div class="col-md-12" id="acciones">
					<button type="button" class="btn btn-animated btn-default" onclick="_guardar( this , '<?php echo SIS_URL; ?>app-web/empresa/registro-de-clientes/' );">Guardar Solicitud de Registro <i class="fa fa-hdd-o"></i></button>
					<img src="<?php echo SIS_URL; ?>web/imagenes/shade-2.png" width="100%">
				</div>
			</div>

			<br/>

			<div class="row">
				<div class="col-md-12">
					<h4 class="title">Cliente ::: <strong>Información de la Empresa.</strong></h4>
					<div class="separator-2"></div>
				</div>
			</div>

			<div class="row">
				<div class="col-md-2">
					<label class="control-label"><i class="fa fa-circle"></i>R.F.C.</label>
				</div>
				<div class="col-md-4">
					<div class="has-feedback">
						<input type="text" name="_form[RegistroCliente][Empresa][sRFC]" id="Empresa_sRFC" class="form-control" value="" >
						<i class="fa fa-qrcode form-control-feedback"></i>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-2">
					<label class="control-label"><i class="fa fa-circle"></i>Razón Social</label>
				</div>
				<div class="col-md-10">
					<div class="has-feedback">
						<input type="text" name="_form[RegistroCliente][Empresa][sRazonSocial]" id="Empresa_sRazonSocial" class="form-control" value="" >
						<i class="fa fa-id-card form-control-feedback"></i>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-md-2">
					<label class="control-label"><i class="fa fa-circle"></i>País</label>
				</div>
				<div class="col-md-4">
					<div class="has-feedback">
						<input type="text" name="_form[RegistroCliente][Empresa][sPais]" id="Empresa_sPais" class="form-control" value="" >
						<i class="fa fa-globe form-control-feedback"></i>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-md-2">
					<label class="control-label"><i class="fa fa-circle"></i>Estado</label>
				</div>
				<div class="col-md-4">
					<div class="has-feedback">
						<input type="text" name="_form[RegistroCliente][Empresa][sEstado]" id="Empresa_sEstado" class="form-control" value="" >
						<i class="fa fa-map-marker form-control-feedback"></i>
					</div>
				</div>
				<div class="col-md-2">
					<label class="control-label"><i class="fa fa-circle"></i>Municipio</label>
				</div>
				<div class="col-md-4">
					<div class="has-feedback">
						<input type="text" name="_form[RegistroCliente][Empresa][sMunicipio]" id="Empresa_sMunicipio" class="form-control" value="" >
						<i class="fa fa-map-marker form-control-feedback"></i>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-md-2">
					<label class="control-label"><i class="fa fa-circle"></i>Domicilio</label>
				</div>
				<div class="col-md-10">
					<div class="has-feedback">
						<input type="text" name="_form[RegistroCliente][Empresa][sDomicilio]" id="Empresa_sDomicilio" class="form-control" value="" >
						<i class="fa fa-map-signs form-control-feedback"></i>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-md-2">
					<label class="control-label"><i class="fa fa-circle"></i>Núm. Ext.</label>
				</div>
				<div class="col-md-4">
					<div class="has-feedback">
						<input type="text" name="_form[RegistroCliente][Empresa][sNumExt]" id="Empresa_sNumExt" class="form-control" value="" >
						<i class="fa fa-sort-numeric-asc form-control-feedback"></i>
					</div>
				</div>
				<div class="col-md-2">
					<label class="control-label"><i class="fa fa-circle-o"></i>Núm. Int.</label>
				</div>
				<div class="col-md-4">
					<div class="has-feedback">
						<input type="text" name="_form[RegistroCliente][Empresa][sNumInt]" id="Empresa_sNumInt" class="form-control" value="" >
						<i class="fa fa-sort-numeric-asc form-control-feedback"></i>
					</div>
				</div>
			</div>

			<div class="row">
				<!--
				<div class="col-md-2">
					<label class="control-label"><i class="fa fa-circle-o"></i>Localidad</label>
				</div>
				<div class="col-md-4">
					<div class="has-feedback">
						<input type="text" name="_form[RegistroCliente][Empresa][sLocalidad]" id="Empresa_sLocalidad" class="form-control" value="" >
						<i class="fa fa-map-marker form-control-feedback"></i>
					</div>
				</div>
				-->
				<div class="col-md-2">
					<label class="control-label"><i class="fa fa-circle"></i>Código Postal</label>
				</div>
				<div class="col-md-4">
					<div class="has-feedback">
						<input type="text" name="_form[RegistroCliente][Empresa][iCP]" id="Empresa_iCP" class="form-control mk-cp" value="" >
						<i class="fa fa-map-signs form-control-feedback"></i>
					</div>
				</div>
			</div>


			<br/><br/>


			<div class="row">
				<div class="col-md-12">
					<h4 class="title">Cliente ::: <strong>Información del Representante Legal.</strong></h4>
					<div class="separator-2"></div>
				</div>
			</div>

			<div class="row">
				<div class="col-md-2">
					<label class="control-label"><i class="fa fa-circle"></i>Nombre(s)</label>
				</div>
				<div class="col-md-10">
					<div class="has-feedback">
						<input type="text" name="_form[RegistroCliente][Representante][sNombre]" id="Representante_sNombre" class="form-control" value="" >
						<i class="fa fa-user-circle form-control-feedback"></i>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-2">
					<label class="control-label"><i class="fa fa-circle"></i>Ape. Paterno</label>
				</div>
				<div class="col-md-4">
					<div class="has-feedback">
						<input type="text" name="_form[RegistroCliente][Representante][sApellidoPaterno]" id="Representante_sApellidoPaterno" class="form-control" value="" >
						<i class="fa fa-user-circle form-control-feedback"></i>
					</div>
				</div>
				<div class="col-md-2">
					<label class="control-label"><i class="fa fa-circle"></i>Ape. Materno</label>
				</div>
				<div class="col-md-4">
					<div class="has-feedback">
						<input type="text" name="_form[RegistroCliente][Representante][sApellidoMaterno]" id="Representante_sApellidoMaterno" class="form-control" value="" >
						<i class="fa fa-user-circle form-control-feedback"></i>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-md-2">
					<label class="control-label"><i class="fa fa-circle"></i>Teléfono</label>
				</div>
				<div class="col-md-4">
					<div class="has-feedback">
						<input type="text" name="_form[RegistroCliente][Representante][sTelefono]" id="Representante_sTelefono" class="form-control mk-tel" value="" maxlength="14" >
						<i class="fa fa-mobile form-control-feedback"></i>
					</div>
				</div>
			</div>


			<br/><br/>


			<div class="row">
				<div class="col-md-12">
					<h4 class="title">Cliente ::: <strong>Información del Usuario al Acceso del Sistema.</strong></h4>
					<div class="separator-2"></div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-2">
					<label class="control-label"> <i class="fa fa-circle"></i>Nombre Usuario</label>
				</div>
				<div class="col-md-4">
					<div class="has-feedback">
						<input type="text" name="_form[RegistroCliente][Acceso][sNombreUsuario]" id="Acceso_sNombreUsuario" class="form-control" value="" />
						<i class="fa fa-user-circle form-control-feedback"></i>
					</div>
				</div>
				<div class="col-md-2">
					<label class="control-label"> <i class="fa fa-circle"></i>Correo Elec.</label>
				</div>
				<div class="col-md-4">
					<div class="has-feedback">
						<input type="email" name="_form[RegistroCliente][Acceso][sCorreo]" id="Acceso_sCorreo" class="form-control" placeholder="correo@dominio.com" value="" />
						<i class="fa fa-envelope form-control-feedback"></i>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-2">
					<label class="control-label"> <i class="fa fa-circle"></i>Contraseña</label>
				</div>
				<div class="col-md-4">
					<div class="has-feedback">
						<input type="password" name="_form[RegistroCliente][Acceso][sPassword]" id="Acceso_sPassword" class="form-control" value="" />
						<i class="fa fa-key form-control-feedback"></i>
					</div>
				</div>
				<div class="col-md-2">
					<label class="control-label"> <i class="fa fa-circle"></i>Confirmar</label>
				</div>
				<div class="col-md-4">
					<div class="has-feedback">
						<input type="password" name="_form[RegistroCliente][Acceso][sPasswordConfirmar]" id="Acceso_sPasswordConfirmar" class="form-control" value="" />
						<i class="fa fa-key form-control-feedback"></i>
					</div>
				</div>
			</div>

			<br/>

			<div class="row">
				<div class="col-md-12">
					<p class="pl-contenido-p text-justify" style="font-size: 14px; color: #c00000;" >El uso de esta aplicación implica la aceptación de los términos y condiciones de las políticas de privacidad de datos de PL Logistics. Al enviar la información a través de este formulario usted acepta que los datos proporcionados son verídicos. En caso de existir alteración u omisión en la información solicitada, su cuenta podría ser deshabilitada o bien el registro de la misma podría no ser autorizado.</p>
					<br/>
					<p class="pl-contenido-p text-center" style="font-size: 15px;" >
						<input class="switch" type="checkbox" id="bTerminosCondiciones" value="No" />&nbsp;&nbsp;
						<strong>He leído y acepto los términos y condiciones del sistema PL Logistics.</strong>
					</p>
				</div>
			</div>
		</div>
	</section>


	<br/>


	<section>
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<p class="pl-p-obli"><i class="fa fa-circle"></i> Indica que es <strong>obligatorio</strong> llenar el campo.</p>
					<p class="pl-p-obli"><i class="fa fa-circle-o"></i> Indica que es <strong>opcional</strong> llenar el campo.</p>
				</div>
			</div>
		</div>
	</section>

	<!--
				<div class="row pl-forms">
					<div class="col-md-2">
						<label class="control-label"><i class="fa fa-circle"></i>País</label>
					</div>
					<div class="col-md-3">
						<div class="has-feedback">
							<input type="text" name="_form[RegistroCliente][]" id="" class="form-control" value="" >
							<i class="fa fa- form-control-feedback"></i>
						</div>
					</div>
				</div>
	-->







	<script type="text/javascript">
		$(document).ready(function(){

			esFormValido = $("form").validate({
				ignore: "not:hidden",	// Validar también inputs hidden
				rules: {
					'_form[RegistroCliente][Empresa][sRFC]':{
						required: true,
					},
					// Validaciones Extras
					/*
					'_form[validacion_extra][registro_cliente][empresa][rfc]':{
						required: true,
					},
					*/
				},
				messages: {
					'_form[RegistroCliente][Empresa][sRFC]':{
						required: "Ingresa el R.F.C.",
					},
					// Validaciones Extras
					/*
					'_form[validacion_extra][registro_cliente][empresa][rfc]':{
						required: "SIN CONFIGURACIÓN DE PROPIETARIOS Y LOTES ACTIVOS.",
					},
					*/
				},
				errorElement: "div",
				errorPlacement: function ( error, element ) {
					// Añadir la clase `ayuda-block` al elemento de error
					error.addClass( "alert alert-danger alert-danger-icon" );
					error.insertAfter( element );
					/*
					if ( element.attr("name") == "_form[validacion_extra][registro_cliente][empresa][rfc]")
					{
						error.appendTo( $("#tabla_config_cargos_conceptos").parent() );
					}
					*/
				}
			});





		});
	</script>


