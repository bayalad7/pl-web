var app_id_cadena_tab	=	_fn_generar_cadena();
var IVA					=	1.16;
var esFormValido		=	'';
var input;
var sWLH				=	window.location.href;

$(document).on("ready",function(){

	$(".mask-telefono" ).mask('(000)-000-0000');

	$(".navbar-nav > li").mouseover(function(event) {
		$(this).addClass("open");
	});

	$(".navbar-nav > li").mouseleave(function(event) {
		$(this).removeClass("open");
	});

	// Agregar la clase active al menu de navegaciÃ³n.
	$.each( $(".skModuloFuncion") , function(indice, valor) {
		if( $(valor).find('a').attr('href').indexOf( sWLH ) > -1 )
		{
			$(this).addClass('active');
		}
	});

	var sbreadcrumb = '';

	$.each( $("#list-breadcrumb li"), function(indice, li) {
		sbreadcrumb += $(li).text().trim() + " / ";
	});
	// Quitamos los ultimos 3 caracteres
	sbreadcrumb = sbreadcrumb.substring(0,sbreadcrumb.length-3);

	// Contador de Redes Sociales
	$("#jssocials-share").jsSocials({
		text: "PL-Logistics.\n"+$('meta[name=description]').attr("content")+"\n\n"+sbreadcrumb+"\n",
		showCount: false,
		showLabel: false,
		shares: [
					{ share: "facebook", label: "Facebook" },
					{ share: "twitter", label: "Twitter" },
					{ share: "whatsapp", label: "WhatsApp" },
					{ share: "googleplus", label: "Google Plus" },
					//{ share: "pinterest", label: "Pinterest" },
					{ share: "line", label: "Line" },
					{ share: "email", label: "Correo" },
				]
	});

	// Deshabilitar la tecla [ ESC ]
	$(document).keydown(function(e){
		if ( e.keyCode == 27 )
		{
			return false;
		}
	});

	/* Revisar la transición
	$(window).scroll(function(){
		if ( $(this).scrollTop() > 222 )
		{
			$('#acciones').addClass('fixed-top-buttons');
		}
		else
		{
			$('#acciones').removeClass('fixed-top-buttons');
		}
	});
	*/

	_fn_convertir_texto();

	//**********************************************************************
	//************** Jquery ToolTip
	//**********************************************************************	
	$('[data-toggle="tooltip"]').tooltip();

	//**********************************************************************
	//************** Jquery Popover
	//**********************************************************************
	$('[data-toggle="popover"]').popover({
		html:true
	});

	$('[data-toggle=popover]').on('click', function (e) {
		$('[data-toggle=popover]').not(this).popover('hide');
	});

	$(".popover-top").popover({
		html:true,
		placement : "top",
		trigger: "hover",
	});

	$(".popover-left").popover({
		html:true,
		placement : "left",
		trigger: "hover",
	});

	//**********************************************************************
	//************** Jquery Validate
	//**********************************************************************
	jQuery.extend(jQuery.validator.messages, {
		required: "Este campo es requerido.",
		remote: "Por favor arregla este campo.",
		email: "Por favor ingresa un correo electrónico valido.",
		url: "Por favor introduzca un URL válido.",
		date: "Por favor introduzca una fecha valida",
		dateISO: "Por favor ingrese una fecha válida (ISO)",
		number: "Por favor introduzca un número valido.",
		digits: "Por favor introduzca solo dígitos.",
		equalTo: "Por favor, introduzca el mismo valor de nuevo.",
		maxlength: jQuery.validator.format("Por favor, introduzca un máximo de {0} caracteres."),
		minlength: jQuery.validator.format("Por favor, introduzca un mínimo de {0} caracteres."),
		rangelength: jQuery.validator.format("Por favor, introduzca un valor entre {0} and {1} caracteres."),
		range: jQuery.validator.format("Por favor, introduzca un valor entre {0} and {1}."),
		max: jQuery.validator.format("Por favor, introduzca un valor menor o igual a {0}."),
		min: jQuery.validator.format("Por favor, introduzca un valor superior o igual a {0}."),
		step: jQuery.validator.format( "Por favor, introduzca un múltiplo de {0}." )
	});

	// Solo letras y espacios
	jQuery.validator.addMethod( "onlyletters" , function(value, element){
		return this.optional(element) || /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value);
	}, "Por favor ingresa solo letras y espacios" );

	//Numeros con 2 decimales
	jQuery.validator.addMethod("numberDecimal", function(value, element){
		return this.optional(element) || /^\d+(\.\d{0,6})?$/.test(value); 
	}, "Por favor ingresa solo números");

	// Mas grande que
	jQuery.validator.addMethod("greaterThan", function (value, element, param) {
		var $otherElement = $(param);
		return parseInt(value, 10) > parseInt($otherElement.val(), 10);
	});

	//**********************************************************************
	//************** Jquery UploadHandler File
	//**********************************************************************
	'use strict';
	// Define the url to send the image data to
	var url = '../../../../app/ajax/subir_archivo.php';
	$.each( $('.cls_vGet') , function( indice , valor ){
		if( $(valor).val() != '' )
		{
			url = '../' + url;	// Control para navegar al archivo [subir_archivo.php] dependiendo de las variables que existan en la Url
		}
	});
	console.log( 'subir archivo [ url ] ::: ' + url );
	// Call the fileupload widget and set some parameters - Funcion Default
	$(":file").blur(function(event){

			var infoArchivo = event.target.files[0];

			console.log( 'infoArchivo ::: ' );
			console.log( infoArchivo );

			var bar 		= $(this).parent().parent().find('.bar');
			var skArchivo 	= $(this).parent().parent().find('.skArchivo');
			var verArchivo	= $(this).parent().parent().find('.verArchivo');

			$( bar ).text( 0 + '% Completado');
			$( bar ).css( 'width' , 0 + '%' );
			verArchivo.html('');
			skArchivo.val('');


			$(this).fileupload({
				url: url,
				dataType: 'json',
				done: function (e, data) {
					console.log( ' ::: file data ::: ');
					console.log(data);
					// Add each uploaded file name to the #files list
					$.each(data.result.files, function (index, file) {

						if ( file.error === undefined )
						{
							console.log(file);

							$(skArchivo).val( file.name + '|' + file.type + '|' + file.size );
							
							var href = '../../../../app/archivos/tmp/'+file.name;

							$.each( $('.cls_vGet') , function( indice , valor ){
								if( $(valor).val() != '' )
								{
									href = '../' + href;	// Control para navegar y ver el archivo dependiendo de las variables que existan en la Url
								}
							});

							$(verArchivo).html('<a href="'+href+'" target="_blank" class="btn btn-animated btn-default-transparent" >Ver Archivo <i class="fa fa-file"></i></a>');
						}
						else
						{
							console.log(file.error);
							sweetAlert(
								'Oops...',
								file.error,
								'error'
							);
							$( bar ).text( 0 + '% Completado')
							$( bar ).css( 'width' , 0 + '%' );
						}

					});

				},

				progress: function (e, data) {
					var progress = parseInt( data.loaded / data.total * 100 , 10 );
					$( bar ).text( progress + '% Completado');
					$( bar ).css( 'width' , progress + '%' );
					//console.log(data.files);
				},
				
				processfail: function (e, data) {
					console.log( data.files[data.index].name + "\n" + data.files[data.index].error );
				}

			});
	});

	//**********************************************************************
	//************** Autocompletar Datos
	//**********************************************************************
	//<!-- AutoCompletado Rfc CFDi Receptor -->
	if( $("#typeaheadReceptorRFC").length > 0 )
	{
		$('#typeaheadReceptorRFC').typeahead({
			source: function (query, process){
				objects	=	[];
				map		=	{};
				$.ajax({
					beforeSend: function(){
						$("#ikCliente").val('');
						$("#ReceptorRazonSocial").val('');
						$("#typeaheadResidenciaFiscal").val('');
						$("#ResidenciaFiscal").val('');
						$("#NumRegIdTrib").val('');
						$("#ReceptorCorreo").val('');
						$("#NombreResponsable").val('');
						$("#typeaheadReceptorRFC").removeClass('gifInput');
						$("#typeaheadReceptorRFC").addClass('gifInput');
					},
					url: '',
					type: 'POST',
					dataType: 'json',
					data: { aux_typeahead : 'ReceptorRFC', query : query },
					success: function(data){
						$("#typeaheadReceptorRFC").removeClass('gifInput');
						$.each(data, function(i, object){
							map[object.Nombre.toUpperCase()] = object;
							objects.push(object.Nombre.toUpperCase());
						});
						process(objects);
					}
				});	
			},
			updater: function(item){
				console.log( map[item] );
				$("#ikCliente").val( map[item].ikCliente );
				$("#typeaheadReceptorRFC").val( map[item].sRfc );
				$("#ReceptorRazonSocial").val( map[item].sRazonSocial );
				$("#ReceptorCorreo").val( map[item].sCorreo );
				$("#NombreResponsable").val( map[item].sNombreResponsable );
				
				if( map[item].sRfc == 'XEXX010101000' || map[item].sRfc == 'XAXX010101000' )	// RFC Genérico para clientes del extranjero & RFC Genérico para público en general
				{
					$("#ContenidoResidenciaFiscal").slideDown('slow', function() {
						$("#typeaheadResidenciaFiscal").val( map[item].sResidenciaFiscalDescripcion );	// Descripción del país
						$("#ResidenciaFiscal").val( map[item].skResidenciaFiscal );	// Clave
						$("#NumRegIdTrib").val( map[item].sNumRegIdTrib );
					});
				}
				else
				{
					$("#ContenidoResidenciaFiscal").slideUp( 'slow', function(){
						$("#typeaheadResidenciaFiscal").val('');
						$("#ResidenciaFiscal").val('');
						$("#NumRegIdTrib").val('');
					});
				}
				return map[item].sRfc.toUpperCase(); // Solo regresamos el RFC; de lo contrario pone lo que viene en el map[item].Nombre
				// return item;
			},
			minLength : 1, // Enviar Ajax después de teclear el número de cantidad de letras ingresadas
			autoSelect: true,
		});
	}


	//<!-- AutoCompletado ResidenciaFiscal CFDi Receptor -->
	if( $("#typeaheadResidenciaFiscal").length > 0 )
	{
		$('#typeaheadResidenciaFiscal').typeahead({
			source: function (query, process){
				objects	=	[];
				map		=	{};
				$.ajax({
					beforeSend: function(){
						$('#ResidenciaFiscal').val('');
						$("#typeaheadResidenciaFiscal").removeClass('gifInput');
						$("#typeaheadResidenciaFiscal").addClass('gifInput');
					},
					url: '',
					type: 'POST',
					dataType: 'json',
					data: { aux_typeahead : 'ResidenciaFiscal', query : query },
					success: function(data){
						$("#typeaheadResidenciaFiscal").removeClass('gifInput');
						$('#ResidenciaFiscal').val('');
						$.each(data, function(i, object){
							map[object.Nombre] = object;
							objects.push(object.Nombre);
						});
						process(objects);
					}
				});	
			},
			updater: function(item){
				console.log( map[item].Id );
				console.log( map[item].Nombre );
				$('#ResidenciaFiscal').val( map[item].Id );
				return item;
			},
			minLength : 1, // Enviar Ajax después de teclear el número de cantidad de letras ingresadas
		});
	}


	//<!-- AutoCompletado LugarExpedicion CFDi Comprobante -->
	if( $("#typeaheadLugarExpedicion").length > 0 )
	{
		$('#typeaheadLugarExpedicion').typeahead({
			source: function (query, process){
				objects	=	[];
				map		=	{};
				$.ajax({
					beforeSend: function(){
						$('#LugarExpedicion').val('');
						$("#typeaheadLugarExpedicion").removeClass('gifInput');
						$("#typeaheadLugarExpedicion").addClass('gifInput');
					},
					url: '',
					type: 'POST',
					dataType: 'json',
					data: { aux_typeahead : 'LugarExpedicion', query : query },
					success: function(data){
						$("#typeaheadLugarExpedicion").removeClass('gifInput');
						$('#LugarExpedicion').val('');
						$.each(data, function(i, object){
							map[object.Nombre] = object;
							objects.push(object.Nombre);
						});
						process(objects);
					}
				});	
			},
			updater: function(item){
				console.log( map[item].Id );
				console.log( map[item].Nombre );
				$('#LugarExpedicion').val( map[item].Id );
				if( map[item].Nombre.indexOf("NO REGISTROS ENCONTRADOS PARA") > -1 )
				{
					return '';
				}
				else
				{
					return item;
				}
			},
			minLength : 1, // Enviar Ajax después de teclear el número de cantidad de letras ingresadas
		});
	}

	//<!-- AutoCompletado Moneda CFDi Comprobante -->
	if( $("#typeaheadMoneda").length > 0 )
	{
		$('#typeaheadMoneda').typeahead({
			source: function (query, process){
				objects	=	[];
				map		=	{};
				$.ajax({
					beforeSend: function(){
						$('#Moneda').val('');
						$('#MonedaCantidadDecimales').val('');
						$("#typeaheadMoneda").removeClass('gifInput');
						$("#typeaheadMoneda").addClass('gifInput');
					},
					url: '',
					type: 'POST',
					dataType: 'json',
					data: { aux_typeahead : 'Moneda', query : query },
					success: function(data){
						$("#typeaheadMoneda").removeClass('gifInput');
						$('#Moneda').val('');
						$('#MonedaCantidadDecimales').val('');
						$.each(data, function(i, object){
							map[object.Nombre] = object;
							objects.push(object.Nombre);
						});
						process(objects);
					}
				});	
			},
			updater: function(item){

				var cantidad_decimales = map[item].iDecimales;
				
				$("#Moneda").val( map[item].Id );
				$("#MonedaCantidadDecimales").val( cantidad_decimales );

				var placeholder_decimales = '0';

				if( parseInt( cantidad_decimales ) > 0 )
				{
					placeholder_decimales += '.';
					for ( var i = 0 ; i < cantidad_decimales ; i++)
					{
						placeholder_decimales += '0';
					}
				}

				$("#AddCon_idValorUnitario").attr("placeholder", placeholder_decimales );

				if( map[item].Nombre.indexOf("NO REGISTROS ENCONTRADOS PARA") > -1 )
				{
					return '';
				}
				else
				{
					return item;
				}

			},
			minLength : 1, // Enviar Ajax después de teclear el número de cantidad de letras ingresadas
		});
	}

	//<!-- AutoCompletado Concepto CFDi Conceptos -->
	if( $("#typeaheadConcepto").length > 0 )
	{
		$('#typeaheadConcepto').typeahead({
			source: function (query, process){
				objects	=	[];
				map		=	{};
				$.ajax({
					beforeSend: function(){
						$("#AddCon_ikConcepto").val('');
						$("#AddCon_skClaveProdServ").val('');
						$("#AddCon_sDescripcionSAT").val('');
						$("#AddCon_sDescripcionPropia").val('');
						$("#AddCon_typeaheadUnidadMedida").val('');
						$("#AddCon_skClaveUnidad").val('');
						$("#AddCon_sUnidad").val('');
						$("#AddCon_iCantidad").val('1');
						$("#AddCon_idValorUnitario").val('');
						$("#AddCon_iDescuentoPorciento").val('0');
						$("#typeaheadConcepto").removeClass('gifInput');
						$("#typeaheadConcepto").addClass('gifInput');
					},
					url: '',
					type: 'POST',
					dataType: 'json',
					data: { aux_typeahead : 'Concepto', query : query },
					success: function(data){
						$("#AddCon_ikConcepto").val('');
						$("#AddCon_skClaveProdServ").val('');
						$("#AddCon_sDescripcionSAT").val('');
						$("#AddCon_sDescripcionPropia").val('');
						$("#AddCon_typeaheadUnidadMedida").val('');
						$("#AddCon_skClaveUnidad").val('');
						$("#AddCon_sUnidad").val('');
						$("#AddCon_iCantidad").val('1');
						$("#AddCon_idValorUnitario").val('');
						$("#AddCon_iDescuentoPorciento").val('0');
						$("#typeaheadConcepto").removeClass('gifInput');
						$.each(data, function(i, object){
							map[object.Nombre] = object;
							objects.push(object.Nombre);
						});
						process(objects);
					}
				});	
			},
			updater: function(item){
				// Obligamos a que se seleccione la Moneda antes de que busque los conceptos
				if( $("#Moneda").val() == '' || $("#Moneda").val() == null )
				{
					swal({
						title:'Oops...',
						html: '<div style="text-align:left !important;" >Favor de primero seleccionar la moneda de la lista desplegable.</div>',
						type:'error'
					});
					return '';
				}
				
				$("#AddCon_ikConcepto").val( map[item].ikConcepto );
				$("#AddCon_skClaveProdServ").val( map[item].skClaveProdServ );
				$("#AddCon_sDescripcionSAT").val( map[item].sDescripcionSAT );

				var sDescripcion		=	'',
					decimales_moneda	=	$("#MonedaCantidadDecimales").val();

				if( map[item].sMarca != '' && map[item].sMarca != null )
				{
					sDescripcion += map[item].sMarca + ' ';
				}
				if( map[item].sModelo != '' && map[item].sModelo != null )
				{
					sDescripcion += map[item].sModelo + ' ';
				}
				if( map[item].sDescripcionAPP != '' && map[item].sDescripcionAPP != null )
				{
					sDescripcion += map[item].sDescripcionAPP;
				}

				$("#AddCon_sDescripcionPropia").val( sDescripcion );
				
				if( map[item].skClaveUnidad != '' && map[item].skClaveUnidad != null )
				{
					$("#AddCon_skClaveUnidad").val( map[item].skClaveUnidad );
					$("#AddCon_sUnidad").val( map[item].sNombreUnidadMedida );
					
					$("#AddCon_typeaheadUnidadMedida").val( '[ ' + map[item].skClaveUnidad + ' ] - [ ' + map[item].sNombreUnidadMedida + ' ]' );					
				}
				
				$("#AddCon_iCantidad").val( map[item].idCantidad );

				if( map[item].idPrecioVenta != '' && map[item].idPrecioVenta != null && map[item].idPrecioVenta >= 0 )
				{
					$("#AddCon_idValorUnitario").val( _fn_number_format( map[item].idPrecioVenta , decimales_moneda , '.' , ',' ).replace( /,/g , '' ) );	// Se toma en cuenta también los decimales de la moneda que selecciono el usuario en la sección del Comprobante
				}

				if( map[item].sTipoConcepto == 'PAQUETE' )	// Si cargamos los hijos en la sección PARTE del CFDi
				{
					$("#nav_adicionalesP").addClass('active');
					$("#htab2").addClass('active');
					$("#htab2").addClass('in');
					fn_cargar_conceptos_parte( map[item].ikConcepto ); // Función que esta en el módulo de facturación.
				}
				else
				{
					$("#nav_adicionalesP").removeClass('active');
					$("#htab2").removeClass('active');
					$("#htab2").removeClass('in');
					$(".detalle_concepto_parte").fadeOut('slow', function() {
						$(".detalle_concepto_parte").remove();
					});
				}

				return '';
			},
			minLength : 2, // Enviar Ajax después de teclear el número de cantidad de letras ingresadas
		});
	}
	//<!-- AutoCompletado Unidad de Medida CFDi Conceptos -->
	if( $(".typeaheadUnidadMedida").length > 0 )
	{
		var elemento_typeaheadUnidadMedida, elemento_skClaveUnidad, elemento_sUnidadMedida;

		$('.typeaheadUnidadMedida').typeahead({
			source: function (query, process){
				objects	=	[];
				map		=	{};
				elemento_typeaheadUnidadMedida 	=	$(this)[0].$element,
				elemento_skClaveUnidad			=	elemento_typeaheadUnidadMedida.closest('.row-contenido').find('.skClaveUnidad');
				elemento_sUnidadMedida			=	elemento_typeaheadUnidadMedida.closest('.row-contenido').find('.sUnidadMedida');
				$.ajax({
					beforeSend: function(){
						elemento_skClaveUnidad.val('');
						elemento_sUnidadMedida.val('');
						elemento_typeaheadUnidadMedida.removeClass('gifInput');
						elemento_typeaheadUnidadMedida.addClass('gifInput');
					},
					url: '',
					type: 'POST',
					dataType: 'json',
					data: { aux_typeahead : 'UnidadMedida', query : query },
					success: function(data){
						elemento_skClaveUnidad.val('');
						elemento_sUnidadMedida.val('');
						elemento_typeaheadUnidadMedida.removeClass('gifInput');
						$.each(data, function(i, object){
							map[object.Nombre] = object;
							objects.push(object.Nombre);
						});
						process(objects);
					}
				});	
			},
			updater: function(item){
				elemento_skClaveUnidad.val( map[item].Id );
				elemento_sUnidadMedida.val( map[item].sUnidad );
				if( map[item].Nombre.indexOf("NO REGISTROS ENCONTRADOS PARA") > -1 )
				{
					return '';
				}
				else
				{
					return item;
				}
			},
			minLength : 1, // Enviar Ajax después de teclear el número de cantidad de letras ingresadas
		});
	}

	//<!-- AutoCompletado Clave y Descripción SAT para Partes CFDi Conceptos -->
	if( $("#AddConPar_skClaveProdServ").length > 0 )
	{
		$('#AddConPar_skClaveProdServ').typeahead({
			source: function (query, process){
				objects	=	[];
				map		=	{};
				$.ajax({
					beforeSend: function(){
						$('#AddConPar_sDescripcionSAT').val('');
						$("#AddConPar_skClaveProdServ").removeClass('gifInput');
						$("#AddConPar_skClaveProdServ").addClass('gifInput');
					},
					url: '',
					type: 'POST',
					dataType: 'json',
					data: { aux_typeahead : 'ClaveSatParte', query : query },
					success: function(data){
						$('#AddConPar_sDescripcionSAT').val('');
						$("#AddConPar_skClaveProdServ").removeClass('gifInput');
						$.each(data, function(i, object){
							map[object.Nombre] = object;
							objects.push(object.Nombre);
						});
						process(objects);
					}
				});	
			},
			updater: function(item){
				if( map[item].Nombre.indexOf("NO REGISTROS ENCONTRADOS PARA") > -1 )
				{
					return '';
				}
				else
				{
					$("#AddConPar_sDescripcionSAT").val( map[item].sDescripcionSAT );
					return map[item].Id;
				}
			},
			minLength : 1, // Enviar Ajax después de teclear el número de cantidad de letras ingresadas
		});
	}

	//<!-- AutoCompletado Clave y Descripción SAT Catálogo de conceptos -->
	if( $(".skSatClaveProdServ").length > 0 )
	{
		var elemento_skSatClaveProdServ, elemento_skSatClaveProdServDescripcion;
		$('.skSatClaveProdServ').typeahead({
			source: function (query, process){
				objects	=	[];
				map		=	{};
				elemento_skSatClaveProdServ 			=	$(this)[0].$element,
				elemento_skSatClaveProdServDescripcion	=	elemento_skSatClaveProdServ.closest('.row-contenido').find('.skSatClaveProdServDescripcion');
				console.log( elemento_skSatClaveProdServDescripcion );
				$.ajax({
					beforeSend: function(){
						elemento_skSatClaveProdServDescripcion.val('');
						elemento_skSatClaveProdServ.removeClass('gifInput');
						elemento_skSatClaveProdServ.addClass('gifInput');
					},
					url: '',
					type: 'POST',
					dataType: 'json',
					data: { aux_typeahead : 'ClaveSat', query : query },
					success: function(data){
						elemento_skSatClaveProdServDescripcion.val('');
						elemento_skSatClaveProdServ.removeClass('gifInput');
						$.each(data, function(i, object){
							map[object.Nombre] = object;
							objects.push(object.Nombre);
						});
						process(objects);
					}
				});	
			},
			updater: function(item){
				if( map[item].Nombre.indexOf("NO REGISTROS ENCONTRADOS PARA") > -1 )
				{
					return '';
				}
				else
				{
					elemento_skSatClaveProdServDescripcion.val( map[item].sDescripcionSAT );
					return map[item].Id;
				}
			},
			minLength : 1, // Enviar Ajax después de teclear el número de cantidad de letras ingresadas
		});
	}

	//<!-- AutoCompletado CFDi Complemento de Pago -->
	if( $("#typeaheadCFDi").length > 0 )
	{
		$('#typeaheadCFDi').typeahead({
			source: function (query, process){
				objects	=	[];
				map		=	{};
				$.ajax({
					beforeSend: function(){
						$("#ikFactura").val('');
						$("#typeaheadCFDi").removeClass('gifInput');
						$("#typeaheadCFDi").addClass('gifInput');
					},
					url: '',
					type: 'POST',
					dataType: 'json',
					data: { aux_typeahead : 'CFDi', query : query },
					success: function(data){
						$("#ikFactura").val('');
						$("#typeaheadCFDi").removeClass('gifInput');
						$.each(data, function(i, object){
							map[object.Nombre] = object;
							objects.push(object.Nombre);
						});
						process(objects);
					}
				});	
			},
			updater: function(item){
				if( map[item].Nombre.indexOf("NO REGISTROS ENCONTRADOS PARA") > -1 )
				{
					return '';
				}
				else
				{
					$("#ikFactura").val( map[item].ikFactura );
					return map[item].sUUID;
				}
			},
			minLength : 2, // Enviar Ajax después de teclear el número de cantidad de letras ingresadas
		});
	}



	//**********************************************************************
	//************** Input's para Fechas y Horas
	//**********************************************************************
	//Fecha y Hora
	if( $(".datetimepicker").length > 0 )
	{
		$( ".datetimepicker" ).each(function( indice , valor ){
			
			var valor = $(this).val();

			if ( valor == '' )
			{
				$(this).datetimepicker({
					locale: 'es',
					format: 'YYYY-MM-DD HH:mm:ss',
					minDate: moment().add( 1 , 'days' ) // new Date()
				});
				$(this).val('');
			}
			else
			{
				$(this).datetimepicker({
					locale: 'es',
					format: 'YYYY-MM-DD HH:mm:ss',
					useCurrent: false,
					minDate: new Date(valor),
				});
			}

		});
	}

	//Fecha
	if( $(".datepicker").length > 0 )
	{
		$( ".datepicker" ).each(function( indice , valor ){
			
			var valor		=	$(this).val(),
				v_minDate	=	$(this).attr('data-date-minDate'),
				v_maxDate	=	$(this).attr('data-date-maxDate');

			if( _fn_esta_definida( v_minDate ) == '')
			{
				v_minDate	=	0;
			}

			if( _fn_esta_definida( v_maxDate ) == '')
			{
				v_maxDate	=	0;
			}

			if ( valor == '' )
			{
				$(this).datetimepicker({
					locale: 'es',
					format: 'YYYY-MM-DD',
					useCurrent: false,
					minDate: moment().add( v_minDate , 'days' ), // new Date()
					maxDate: moment().add( v_maxDate , 'days' ), // new Date(valor)
				});
				$(this).val('');
			}
			else
			{
				$(this).datetimepicker({
					locale: 'es',
					format: 'YYYY-MM-DD',
					useCurrent: false,
					minDate: moment().add( v_minDate , 'days' ),
					maxDate: moment().add( v_maxDate , 'days' ),
				});
			}

		});
	}

	//**********************************************************************
	//************** Bootstrap Switch
	//**********************************************************************
	if( $(".switch").length > 0 )
	{

		$.fn.bootstrapSwitch.defaults.onColor	= 'success';
		$.fn.bootstrapSwitch.defaults.offColor	= 'warning';
		$.fn.bootstrapSwitch.defaults.onText	= 'Si';
		$.fn.bootstrapSwitch.defaults.offText	= 'No';

		$.each( $(".switch") , function( indice , el ){

			if ( $(this).val() == 'Si')
			{
				$(this).bootstrapSwitch( 'state' , true );
				$(this).on( 'switchChange.bootstrapSwitch' , function ( event , state ){
					if( state === true )
					{
						$(this).val('Si');
					}
					else
					{
						$(this).val('No');
					}
				});
			}
			else
			{
				$(this).bootstrapSwitch( 'state' , false );
				$(this).on( 'switchChange.bootstrapSwitch' , function ( event , state ){
					if( state === true )
					{
						$(this).val('Si');
					}
					else
					{
						$(this).val('No');
					}
				});
			}

		});

	}

	//**********************************************************************
	// Validamos que input's utilizarán del v1 al v5
	//**********************************************************************
	$.each( $('.cls_vGet') , function( indice , valor ){

		if( $(this).val() == null || $(this).val() == '' )
		{
			console.log( 'Input ' + $(this).attr('name') + ' sin valor' )
			$(this).remove();
		}
		else
		{
			console.log( 'Input ' + $(this).attr('name') + ' con valor ' + $(this).attr('value') )
		}

	});
	//**********************************************************************

	// Aparecer los botones ocultos si es que los inputs del v1 al v5 tienen valor.
	if( $('.cls_vGet').length > 0 )
	{
		$(".cls_AparecerBtnEnEditar").fadeIn('slow');
	}
	else
	{
		$(".cls_AparecerBtnEnEditar").remove();
	}

	//**********************************************************************
	//************** Módulos de consultas
	//**********************************************************************
	$("#criterios_de_busqueda").slideUp('slow'); // Ocultamos los criterios de busqueda
	$("#aparecer_criterios_de_busqueda").click(function(){

		$("#criterios_de_busqueda").slideToggle(function(){

			var _filtro = $("#_filtro").val();

			if( _filtro == "No" )
			{
				$("#_filtro").val("Si");
				$("#_filtrar").prop("disabled", false);	// Botón que viene desde la base de datos
			}
			else
			{
				$("#_filtro").val("No");
				$("#_filtrar").prop("disabled", true);	// Botón que viene desde la base de datos
				$("._busquedas").val('');				// Limpiamos los input's para ver que se va a buscar en ['criterios_busquedas']
				$("#_numero_de_pagina").val('1');		// Se resetea el número de pág cuando se buscan los registros
				_cargar_registros_consultas();			// Se resetea
			}

		});

	});

	$("#_filtrar").click(function(){
		$("#_numero_de_pagina").val('1');				// Se resetea el número de pág cuando se buscan los registros
		_cargar_registros_consultas();
	});

	//**********************************************************************
	//************** Jquery Expander
	//**********************************************************************	
	/*
	$('div.expandable p').expander({
		slicePoint: 86,						// Si eliminamos por defecto es 100 caracteres
		expandText: '[ Ver más... ]',		// Por defecto es 'read more...'
		collapseTimer: 0,				// Tiempo de para cerrar la expanción si desea poner 0 para no cerrar
		userCollapseText: '[ Ver menos... ]'// Por defecto es 'read less...'
	});
	*/


	//**********************************************************************
	//************** Jquery Cookies
	//**********************************************************************	
	var CookieExpiraFecha	=	new Date();
	var CookieExpiraMinutos	=	60; // 1 Hora

	CookieExpiraFecha.setTime( CookieExpiraFecha.getTime() + ( CookieExpiraMinutos * 60 * 1000 ) );

	// Función extendida de jQuery Cookie
	$.fn.extend({
		cookieList: function (cookieName) {

			var cookie		=	$.cookie( cookieName );
			var storedAry	=	( cookie == null ) ? [] : jQuery.parseJSON( cookie );

			return {
				
				add: function (val) {
					var is_Arr = $.isArray( storedAry );
					
					if( $.inArray(val, storedAry) === -1 )
					{
						storedAry.push(val);
					}

					$.cookie( cookieName, JSON.stringify( storedAry ), { expires : CookieExpiraFecha ,  path : '/'});
				},
				
				remove: function (val) {
					storedAry = $.grep( storedAry , function(value){
						return value != val;
					});
					$.cookie( cookieName, JSON.stringify(storedAry), { expires : CookieExpiraFecha ,  path : '/'});
				},

				clear: function () {
					storedAry = null;
					$.cookie(cookieName, null, { expires: CookieExpiraFecha , path: '/' });
				},
		
				items: function () {
					return storedAry;
				},

				length: function () {
					return storedAry.length;
				},
				
			}
		}
	});


	//**********************************************************************
	//************** Jquery Mask
	//**********************************************************************
	$(".mk-monto-d1").mask( "#,###,###,##0.0" , {reverse: true});
	$(".mk-monto-d2").mask( "#,###,###,##0.00" , {reverse: true});
	$(".mk-monto-d3").mask( "#,###,###,##0.000" , {reverse: true});
	$(".mk-monto-d4").mask( "#,###,###,##0.0000" , {reverse: true});
	$(".mk-tel").mask( "(000) 000-0000" , {placeholder: "(000) 000-0000"} );
	$(".mk-cp").mask( "00000" , {placeholder: "00000"} );
	$(".mk-fecha").mask( "00/00/0000" , {placeholder: "DD/MM/AAAA"} );
	$(".mk-hora").mask( "00:00:00" , {placeholder: "HH:MM:SS"} );
	$(".mk-fecha-hora").mask( "00/00/0000 00:00:00" , {placeholder: "DD/MM/AAAA HH:MM:SS"} );
	$(".mk-ipv4").mask( "000.000.000.000" , {placeholder: "000.000.000.000"} );
	$(".mk-porciento").mask('##0.00%', {reverse: true});
	$(".mk-uuid").mask( "AAAAAAAA-AAAA-AAAA-AAAA-AAAAAAAAAAAA" , {placeholder: "AAAAAAAA-AAAA-AAAA-AAAA-AAAAAAAAAAAA"} );



	//**********************************************************************
	//************** Control de Tabs - Pestañas abiertas
	//**********************************************************************
	/*
		Nota.
			Los identificadores de las pestañas ( app_id_cadena_tab )
			van cambiando cade vez que en la aplicación el usuario.
			- Abre una nueva pestaña.
			- Recarga una pestaña.
			- Preciona F5 cuando esta en una pesteña.
			- Cierra una pestaña.
	*/
	// Agregar app_id_cadena_tab
	_agregar_tab();
	// Eliminar app_id_cadena_tab; Cuando el usuario la cierre
	window.onbeforeunload = _eliminar_tab;
	// Eliminar app_id_cadena_tab; Por si recarga la página o presiona F5
	$( window ).unload( function() {
		_eliminar_tab();
	});


	//**********************************************************************
	//************** Revisiones Push
	//**********************************************************************
	// Revisar - Notificaciones - Push
	// _revisar_notificaciones_push();
	// setInterval( _revisar_notificaciones_push , ( 60000 * 5 ) ); // Mandar a llamar funcion cada 5 minutos.

	/* Información - URL
	console.log("document.URL : " + document.URL);
	console.log("document.location.href : " + document.location.href);
	console.log("document.location.origin : " + document.location.origin);
	console.log("document.location.hostname : " + document.location.hostname);
	console.log("document.location.host : " + document.location.host);
	console.log("document.location.pathname : " + document.location.pathname);
	*/

	//**********************************************************************
	//************** Hora Sistema
	//**********************************************************************
	fn_actualizar_fecha_hora_servidor();
	setInterval( fn_actualizar_fecha_hora_servidor , 1000 ); // Mandar a llamar funcion cada 1 segundo.

}); // Cierra Ready App


//////////////////////////////////////////////////////////////////////////////////////////
// FUNCIONES
//////////////////////////////////////////////////////////////////////////////////////////
function _agregar_tab()
{
	var app_cookie = $.fn.cookieList( "app_tabs" );
	// Por cada vez que se abre una pestaña nueva se genera una cadena unica para identicar la pestaña
	app_cookie.add( app_id_cadena_tab );

	console.log( 'app_tabs_abiertas' );
	console.log( app_cookie.items() );
}

function _eliminar_tab()
{
	var app_cookie = $.fn.cookieList( "app_tabs" );
	app_cookie.remove( app_id_cadena_tab );
}

function _contar_tabs()
{
	var app_cookie = $.fn.cookieList( "app_tabs" );
	return app_cookie.length();
}

function _cambiar_de_perfil( sModuloRedirigir )
{
	// Validamos que el número de pestañas abiertas, no sea mayor a 1.
	// Se obliga al usuario que cierre todas las pestañas excepto la actual
	// para que pueda cambiar de perfil, y así no ocasionar problemas
	// con las variables de sesiones de php.
	if( _contar_tabs() > 1 )
	{
		swal({
			title: 'Oops...',
			type: 'info',
			html: $('<div>')
				.addClass('some-class')
				.text('Se encontró más de 1 pestaña abierta en la aplicación, favor de cerrar las otras pestañas para poder habilitar el cambio del perfil.'),
			animation: false,
			customClass: 'animated tada'
		});
	}
	else
	{
		window.location.href = sModuloRedirigir;
	}
}

function _actualizar_mis_datos( sModuloRedirigir )
{
	// Validamos que el número de pestañas abiertas, no sea mayor a 1.
	// Se obliga al usuario que cierre todas las pestañas excepto la actual
	// para que pueda cambiar los datos de usuario, y así no ocasionar problemas
	// con las variables de sesiones de php.
	if( _contar_tabs() > 1 )
	{
		swal({
			title: 'Oops...',
			type: 'info',
			html: $('<div>')
				.addClass('some-class')
				.text('Se encontró más de 1 pestaña abierta en la aplicación, favor de cerrar las otras pestañas para poder habilitar el cambio de su información.'),
			animation: false,
			customClass: 'animated tada'
		});
	}
	else
	{
		window.location.href = sModuloRedirigir;
	}
}

function _cargar_registros_consultas()
{
	var formData = $('#_form').serializeArray();

	formData.push({name: 'aux_consultas', value: 'consultar'});

	$.ajax({
		cache: false,
		dataType: 'json',
		url: '',
		type: 'POST',
		data: formData,
		success: function( datos ){

			console.log( datos );
			
			$('#_gif_consultar').slideUp(function(){
				
				// Total de registros encontrados
				$("#_total_registros_encontrados").html( '[ ' + datos._total_registros + ' ]' );

				var total_columnas_tabla = $("#tabla_registros thead tr th").length;
					
				// Agregamos los registros a la tabla
				$.each( datos._registros , function( indice , valor ){
					var tr = '';	// Por cada registro es 1 tr
					tr += '<tr>';
					// Validamos cuantas columnas se van agregar al tr
					for (var i = 1 ; i < total_columnas_tabla + 1 ; i++)
					{
						tr += '<td class="'+_fn_esta_definida( datos._registros[indice]._tr_color )+'" >';
							tr += valor[i]; // Información de los registros devueltos.
						tr += '</td>';
					}
					tr += '</tr>';
					$('#tabla_registros tbody').append( tr );
				});

				$('#tabla_registros tbody').fadeIn('slow');

				// Rellenamos el select con el número total de páginas devueltas
				for ( var i = 1 ; i <= datos._total_paginas ; i++ )
				{
					var option, selected = '';

					if( datos._numero_de_pagina == i )
					{
						selected = 'selected';
					}

					option = '<option value="'+i+'" '+selected+' >'+i+'</option>';
					$('#_pagina_seleccionada').append( option );
				}

				// Importante
				$('[data-toggle="popover"]').popover({ html:true });
				$('[data-toggle=popover]').on('click', function (e){ $('[data-toggle=popover]').not(this).popover('hide'); });

				//Inputs convertir a mayusculas
				_fn_convertir_texto();

				// Inputs de tipo switch en las consultas
				if( $(".switch").length > 0 )
				{
					$.fn.bootstrapSwitch.defaults.onColor	= 'success';
					$.fn.bootstrapSwitch.defaults.offColor	= 'warning';
					$.fn.bootstrapSwitch.defaults.onText	= 'Si';
					$.fn.bootstrapSwitch.defaults.offText	= 'No';

					$.each( $(".switch") , function( indice , el ){

						if ( $(this).val() == 'Si')
						{
							$(this).bootstrapSwitch( 'state' , true );
							$(this).on( 'switchChange.bootstrapSwitch' , function ( event , state ){
								if( state === true )
								{
									$(this).val('Si');
								}
								else
								{
									$(this).val('No');
								}
							});
						}
						else
						{
							$(this).bootstrapSwitch( 'state' , false );
							$(this).on( 'switchChange.bootstrapSwitch' , function ( event , state ){
								if( state === true )
								{
									$(this).val('Si');
								}
								else
								{
									$(this).val('No');
								}
							});
						}
					});
				}
			
				// Inputs de tipo datepicker en las consultas
				if( $(".datepicker").length > 0 )
				{
					$( ".datepicker" ).each(function( indice , valor ){
						
						var valor		=	$(this).val(),
							v_minDate	=	$(this).attr('data-date-minDate'),
							v_maxDate	=	$(this).attr('data-date-maxDate');

						if( _fn_esta_definida( v_minDate ) == '')
						{
							v_minDate	=	0;
						}

						if( _fn_esta_definida( v_maxDate ) == '')
						{
							v_maxDate	=	0;
						}

						if ( valor == '' )
						{
							$(this).datetimepicker({
								locale: 'es',
								format: 'YYYY-MM-DD',
								useCurrent: false,
								minDate: moment().add( v_minDate , 'days' ), // new Date()
								maxDate: moment().add( v_maxDate , 'days' ), // new Date(valor)
							});
							$(this).val('');
						}
						else
						{
							$(this).datetimepicker({
								locale: 'es',
								format: 'YYYY-MM-DD',
								useCurrent: false,
								minDate: moment().add( v_minDate , 'days' ),
								maxDate: moment().add( v_maxDate , 'days' ),
							});
						}

					});
				}

				/*
				$("#tabla_registros").floatThead({
					responsiveContainer: function( $table ){
						return $table.closest('.table-responsive');
					},
					zIndex: function($table){
						return 0;
					}
				});
				*/

				// Mandar a llamar la función si se requiere después de cargar los registros
				// Por cuestiones del DOM
				if( typeof _funcion_despues_de_cargar_los_registros !== 'undefined' && jQuery.isFunction( _funcion_despues_de_cargar_los_registros ) )
				{
					//Es seguro ejectura la función
					_funcion_despues_de_cargar_los_registros();
				}

			});

		},
		beforeSend: function(){
			$("#_gif_consultar").slideDown();
			// Reseteamos los registros encontrados
			$("#_total_registros_encontrados").html( '[ 0 ]' );
			// Reseteamos la paginación
			$('#_pagina_seleccionada').html('');
			// Limpiamos los registros que se cargaron en tabla
			$("#tabla_registros tbody").slideUp('slow', function(){
				$("#tabla_registros tbody").html('');
			});
		},
		error: function( jqXHR , estado , error ){
			$("#_gif_consultar").slideUp('slow', function(){
				swal({
					title: 'Oops...',
					text: error + ' : ' + estado,
					type: 'error'
				});
			});
		}
	});

}

function _paginar()
{
	$("#_numero_de_pagina").val( $("#_pagina_seleccionada").val() );
	_cargar_registros_consultas();
}

//******************************************************************************************************************************************************************************************************************
//************** Cancelación de transacciones
//******************************************************************************************************************************************************************************************************************
function _cancelar( obj , url )
{
	swal({
		title: '¿Confirma cancelar la transacción?',
		html: 'Motivo de la cancelación.',
		type: 'question',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Si, confirmo.',
		cancelButtonText: 'No, confirmo',
		buttonsStyling: true,
		allowOutsideClick: false,
		showLoaderOnConfirm: true,
		input: 'textarea',
	}).then(function( text ){

		text = text.trim().toUpperCase();

		if(		text == ''
			||	text == null	)
		{
			swal({
				title: 'Oops...',
				text: 'Favor de ingresar el motivo de la cancelación de la transacción...',
				type: 'error',
				allowOutsideClick: false,
			});
			return false;
		}

		console.log( 'Motivo de cancelación ::: ' + text );

		$.ajax({
			cache: false,
			dataType: 'json',
			url: '',
			type: 'POST',
			data:{ aux_cancelar: "aux_cancelar" , motivo_cancelacion: text , 'v1': $("#v1").val() , 'v2': $("#v2").val() , 'v3': $("#v3").val() , 'v4': $("#v4").val() , 'v5': $("#v5").val() },
			success: function( datos ){
				console.log('********************************** AJAX CANCELACIÓN DE INFORMACIÓN FORM PRINCIPAL **********************************');
				console.log( datos );
				$('#_gif_cancelar').slideUp(function(){

					if( datos._estado == 'OK' ) // OK - TODO BIEN
					{
						swal({
							title: '<u>Ok.</u>',
							type: 'success',
							html: datos._mensaje_usuario, // Mensaje al usuario
							confirmButtonColor: '#236bb0',
							confirmButtonText: '<i class="fa fa-thumbs-up"></i> De acuerdo!',
							showCancelButton: false,
							buttonsStyling: true,
							allowOutsideClick: false,
						}).then(function(){
							// Redirigimos a la sección de consultas dependiendo el módulo
							$(location).attr( 'href' , url );
						});
					}
					else // ERROR - OCURRIO ALGO
					{
						obj.disabled = false;
						swal({
							title: 'Oops...',
							html: datos._mensaje_usuario,
							type: 'error',
							allowOutsideClick: false,
						});
					}
				});
				
			},
			beforeSend: function(){
				obj.disabled = true;
				$("#_gif_cancelar").slideDown();
			},
			error: function( jqXHR , exception , error ){
				var mensaje_error_ajax = '';
				obj.disabled = false;

				console.log( '********************************** jqXHR **********************************' );
				console.log( jqXHR );
				console.log( '********************************** exception **********************************' );
				console.log( exception );
				console.log( '********************************** error **********************************' );
				console.log( error );
				console.log( 'jqXHR.responseText ::: ' + jqXHR.responseText );

				if( jqXHR.status === 0 )
				{
					console.log('No hay conexión, revise la red.');
					mensaje_error_ajax = 'No hay conexión, revise la red.';
				}
				else if( jqXHR.status == 404 )
				{
					console.log('La página solicitada no se encuentra. Error [ 404 ].');
					mensaje_error_ajax = 'La página solicitada no se encuentra. Error [ 404 ].';
				}
				else if( jqXHR.status == 500 )
				{
					console.log('Internal Server Error [ 500 ]. No se puede procesar la información.');
					mensaje_error_ajax = 'Internal Server Error [ 500 ]. No se puede procesar la información.';
				}
				else if( exception === 'parsererror' )
				{
					console.log('Error parsererror. Intente nuevamente.');
					mensaje_error_ajax = 'Error parsererror. Intente nuevamente.';
				}
				else if( exception === 'timeout' )
				{
					console.log('Time out error. Intente nuevamente.');
					mensaje_error_ajax = 'Time out error. Intente nuevamente.';
				}
				else if( exception === 'abort' )
				{
					console.log('Ajax request aborted. Intente nuevamente.');
					mensaje_error_ajax = 'Ajax request aborted. Intente nuevamente.';
				}
				else
				{
					console.log('Error no detectado. ' + jqXHR.responseText );
					mensaje_error_ajax = 'Error no detectado. ' + jqXHR.responseText;
				}

				$("#_gif_cancelar").slideUp('slow', function(){
					swal({
						title: 'Oops...',
						text: mensaje_error_ajax,
						type: 'error',
						allowOutsideClick: false,
					});
				});
			}
		});

	}, function( dismiss ){
		obj.disabled = false;
		if ( dismiss === 'cancel' )
		{
			console.log('Cancelar guardar información...');
		}
	});

}

//******************************************************************************************************************************************************************************************************************
//************** Validación del formulario al momento de guardar
//******************************************************************************************************************************************************************************************************************
function _guardar( obj , url )
{

	obj.disabled = true;
	
	// Validamos que primero la información del formulario sea valida con el plugin de jQuery Validate.
	if( !esFormValido.form() )
	{
		swal({
			type: 'info',
			title: 'Oops....',
			html: '<p class="text-justify">Favor de verificar validaciones (Mensajes en color rojo) del formulario, para poder guardar la información.</p>',
			allowOutsideClick: false,
			background: '#f8f8f8',
			confirmButtonText: '<i class="fa fa-thumbs-up"></i> De acuerdo!',
		});

		obj.disabled = false;
		return false;
	}

	swal({
		title: '¿Confirma guardar la información?',
		type:  'question',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Si, confirmo.',
		cancelButtonText: 'No, confirmo',
		buttonsStyling: true,
		allowOutsideClick: false,
		showLoaderOnConfirm: true,
	}).then(function(){

		if ( window.FormData )
		{
			formData = new FormData( $("#_form")[0] );
		}

		$.ajax({
			cache: false,
			dataType:'json',
			contentType: false,
			processData: false,
			type: 'POST',
			url: '',
			data: formData,
			beforeSend:function(){
				$("#_gif_guardar").slideDown();
			},
			success: function( datos ){
				console.log('********************************** AJAX GUARDADO DE INFORMACIÓN FORM PRINCIPAL **********************************');
				console.log( datos );
				$("#_gif_guardar").slideUp('slow', function() {

					if( datos._estado == 'ARREGLO' )
					{
						console.log( datos._arreglo );
						obj.disabled = false;
						return true;
					}

					console.log( datos );

					if( datos._estado == 'OK' ) // OK - TODO BIEN
					{
						swal({
							title: '<u>Ok.</u>',
							type: 'success',
							html: datos._mensaje_usuario, // Mensaje al usuario
							confirmButtonColor: '#236bb0',
							confirmButtonText: '<i class="fa fa-thumbs-up"></i> De acuerdo!',
							showCancelButton: false,
							buttonsStyling: true,
							allowOutsideClick: false,
						}).then(function(){
							
							// Empezamos a verificar cuales variables de |v1|v2|v3|v4|v5| se devolvieron para usarlas en los módulos de detalles a donde redirigen.
							if( datos._v1 != null ) // Si v1 no es nulo se concatena a la url
							{
								url = url.concat( datos._v1 , '/' ); // Concatenamos la variable v1 a la url
								if( datos._v2 != null ) // Si v2 no es nulo se concatena a la url
								{
									url = url.concat( datos._v2 , '/' ); // Concatenamos la variable v2 a la url
									if( datos._v3 != null ) // Si v3 no es nulo se concatena a la url
									{
										url = url.concat( datos._v3 , '/' ); // Concatenamos la variable v3 a la url
										if( datos._v4 != null ) // Si v4 no es nulo se concatena a la url
										{
											url = url.concat( datos._v4 , '/' ); // Concatenamos la variable v4 a la url
											if( datos._v5 != null ) // Si v5 no es nulo se concatena a la url
											{
												url = url.concat( datos._v5 , '/' ); // Concatenamos la variable v5 a la url
												if( datos._v6 != null ) // Si v6 no es nulo se concatena a la url
												{
													url = url.concat( datos._v6 , '/' ); // Concatenamos la variable v5 a la url
													$(location).attr( 'href' , url ); // Redirigimos al módulo que se indica con la variable v1, v2, v3, v4 y v5
												}
												else
												{
													$(location).attr( 'href' , url ); // Redirigimos al módulo que se indica con la variable v1, v2, v3 y v4
												}
											}
											else
											{
												$(location).attr( 'href' , url ); // Redirigimos al módulo que se indica con la variable v1, v2, v3 y v4
											}
										}
										else
										{
											$(location).attr( 'href' , url ); // Redirigimos al módulo que se indica con la variable v1, v2 y v3
										}
									}
									else
									{
										$(location).attr( 'href' , url ); // Redirigimos al módulo que se indica con la variable v1 y v2
									}
								}
								else
								{
									$(location).attr( 'href' , url ); // Redirigimos al módulo que se indica con la variable v1
								}
							}
							else
							{
								$(location).attr( 'href' , url ); // Redirigimos al módulo que se indica.
							}

						});

					}
					else // ERROR - OCURRIO ALGO
					{
						
						obj.disabled = false;

						swal({
							title: 'Oops...',
							html: datos._mensaje_usuario,
							type: 'error',
							allowOutsideClick: false,
						});

					}

				});
			},	
			error:function( jqXHR , exception , error ){

				var mensaje_error_ajax = '';
				obj.disabled = false;

				console.log( '********************************** jqXHR **********************************' );
				console.log( jqXHR );
				console.log( '********************************** exception **********************************' );
				console.log( exception );
				console.log( '********************************** error **********************************' );
				console.log( error );
				console.log( 'jqXHR.responseText ::: ' + jqXHR.responseText );

				if( jqXHR.status === 0 )
				{
					console.log('No hay conexión, revise la red.');
					mensaje_error_ajax = 'No hay conexión, revise la red.';
				}
				else if( jqXHR.status == 404 )
				{
					console.log('La página solicitada no se encuentra. Error [ 404 ].');
					mensaje_error_ajax = 'La página solicitada no se encuentra. Error [ 404 ].';
				}
				else if( jqXHR.status == 500 )
				{
					console.log('Internal Server Error [ 500 ]. No se puede procesar la información.');
					mensaje_error_ajax = 'Internal Server Error [ 500 ]. No se puede procesar la información.';
				}
				else if( exception === 'parsererror' )
				{
					console.log('Error parsererror. Intente nuevamente.');
					mensaje_error_ajax = 'Error parsererror. Intente nuevamente.';
				}
				else if( exception === 'timeout' )
				{
					console.log('Time out error. Intente nuevamente.');
					mensaje_error_ajax = 'Time out error. Intente nuevamente.';
				}
				else if( exception === 'abort' )
				{
					console.log('Ajax request aborted. Intente nuevamente.');
					mensaje_error_ajax = 'Ajax request aborted. Intente nuevamente.';
				}
				else
				{
					console.log('Error no detectado. ' + jqXHR.responseText );
					mensaje_error_ajax = 'Error no detectado. ' + jqXHR.responseText;
				}

				$("#_gif_guardar").slideUp('slow', function(){
					swal({
						title: 'Oops...',
						text: mensaje_error_ajax,
						type: 'error',
						allowOutsideClick: false,
					});
				});

			}
		}); // Cierra AJAX

	}, function( dismiss ){
		obj.disabled = false;
		if ( dismiss === 'cancel' )
		{
			console.log('Cancelar guardar información...');
		}
	});

}


//******************************************************************************************************************************************************************************************************************
//************** Buzón de Quejas y Sugerencias
//******************************************************************************************************************************************************************************************************************
function _fn_buzon( obj )
{
	swal({
		title: '¿Confirma enviar el comentario?',
		type:  'question',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Si, confirmo.',
		cancelButtonText: 'No, confirmo',
		buttonsStyling: true,
		allowOutsideClick: false,
		showLoaderOnConfirm: true,
	}).then(function(){

    var sMensajes = '';

    if( $("#sTipoBuzon").val() == '' || $("#sTipoBuzon").val() == null )
    {
      sMensajes += 'Favor de seleccionar el tipo de buzón.';
    }

    if( $("#sTituloBuzon").val().trim().toUpperCase() == '' || $("#sTituloBuzon").val().trim().toUpperCase() == null )
    {
      sMensajes += ( sMensajes == '' ? '' : '<br/>' );
      sMensajes += 'Favor de ingresa el título del comentario.';
    }

    if( $("#sComentarioBuzon").val().trim().toUpperCase() == '' || $("#sComentarioBuzon").val().trim().toUpperCase() == null )
    {
      sMensajes += ( sMensajes == '' ? '' : '<br/>' );
      sMensajes += 'Favor de ingresar el comentario.';
    }

    if( sMensajes != '' )
    {
      swal({
        title: 'Mensaje...',
        html: '<p class="text-justify">'+sMensajes+'</p>',
        type: 'info',
        allowOutsideClick: false,
      });
      return false;
    }
    
		console.log( '::: Buzón :::');
		console.log( 'sTipoBuzon :::' + $("#sTipoBuzon").val() );
		console.log( 'sTituloBuzon :::' + $("#sTituloBuzon").val() );
		console.log( 'sComentarioBuzon :::' + $("#sComentarioBuzon").val() );

		obj.disabled = true;

		$.ajax({
			cache: false,
			dataType: 'json',
			url: '',
			type: 'POST',
			data:{ aux_buzon_qs: "aux_buzon_qs" , 'sTipoBuzon': $("#sTipoBuzon").val() , 'sTituloBuzon': $("#sTituloBuzon").val() , 'sComentarioBuzon': $("#sComentarioBuzon").val() },
			success: function( datos ){
				console.log('********************************** AJAX BUZÓN DE QUEJAS Y SUGERENCIAS **********************************');
				console.log( datos );
				$('#_gif_modal_buzon').slideUp(function(){

					if( datos._estado == 'OK' ) // OK - TODO BIEN
					{
						swal({
							title: '<u>OK.</u>',
							type: 'success',
							html: datos._mensaje_usuario, // Mensaje al usuario
							confirmButtonColor: '#236bb0',
							confirmButtonText: '<i class="fa fa-thumbs-up"></i> OK.',
							showCancelButton: false,
							buttonsStyling: true,
							allowOutsideClick: false,
						}).then(function(){
							$("#sTipoBuzon").val('');
							$("#sTituloBuzon").val('');
							$("#sComentarioBuzon").val('');
							$(".bs-example-modal-lg-buzon").modal('toggle');
						});
					}
					else // ERROR - OCURRIO ALGO
					{
						swal({
							title: 'Oops...',
							html: datos._mensaje_usuario,
							type: 'error',
							allowOutsideClick: false,
						});
					}
					obj.disabled = false;
				});
				
			},
			beforeSend: function(){
				obj.disabled = true;
				$("#_gif_modal_buzon").slideDown();
			},
			error: function( jqXHR , exception , error ){
				var mensaje_error_ajax = '';
				obj.disabled = false;

				console.log( '********************************** jqXHR **********************************' );
				console.log( jqXHR );
				console.log( '********************************** exception **********************************' );
				console.log( exception );
				console.log( '********************************** error **********************************' );
				console.log( error );
				console.log( 'jqXHR.responseText ::: ' + jqXHR.responseText );

				if( jqXHR.status === 0 )
				{
					console.log('No hay conexión, revise la red.');
					mensaje_error_ajax = 'No hay conexión, revise la red.';
				}
				else if( jqXHR.status == 404 )
				{
					console.log('La página solicitada no se encuentra. Error [ 404 ].');
					mensaje_error_ajax = 'La página solicitada no se encuentra. Error [ 404 ].';
				}
				else if( jqXHR.status == 500 )
				{
					console.log('Internal Server Error [ 500 ]. No se puede procesar la información.');
					mensaje_error_ajax = 'Internal Server Error [ 500 ]. No se puede procesar la información.';
				}
				else if( exception === 'parsererror' )
				{
					console.log('Error parsererror. Intente nuevamente.');
					mensaje_error_ajax = 'Error parsererror. Intente nuevamente.';
				}
				else if( exception === 'timeout' )
				{
					console.log('Time out error. Intente nuevamente.');
					mensaje_error_ajax = 'Time out error. Intente nuevamente.';
				}
				else if( exception === 'abort' )
				{
					console.log('Ajax request aborted. Intente nuevamente.');
					mensaje_error_ajax = 'Ajax request aborted. Intente nuevamente.';
				}
				else
				{
					console.log('Error no detectado. ' + jqXHR.responseText );
					mensaje_error_ajax = 'Error no detectado. ' + jqXHR.responseText;
				}

				$("#_gif_modal_buzon").slideUp('slow', function(){
					swal({
						title: 'Oops...',
						text: mensaje_error_ajax,
						type: 'error',
						allowOutsideClick: false,
					});
				});
			}
		});

	}, function( dismiss ){
		obj.disabled = false;
		if ( dismiss === 'cancel' )
		{
			console.log('Cancelar guardar información...');
		}
	});

}

function _fn_solo_numeros(e, field)
{
	key = e.keyCode ? e.keyCode : e.which
	// backspace
	if (key == 8) return true
	// 0-9
	if (key > 47 && key < 58) {
		if (field.value == "") return true
			regexp = /.[0-9]{25}$/
			return !(regexp.test(field.value))
	}
	return false
}

function _fn_solo_numeros_decimal(e, field) {
	key = e.keyCode ? e.keyCode : e.which
	// backspace
	if (key == 8) return true
	// 0-9
	if (key > 47 && key < 58) {
		if (field.value == "") return true
			regexp = /.[0-9]{25}$/
			return !(regexp.test(field.value))
	}
	if (key == 46) {
		if (field.value == "") return false
			regexp = /^[0-9]+$/
			return regexp.test(field.value)
	}
	
	// other key
	return false
}

function _fn_acentos( cadena )
{
	//Remplazar Minusculas
	cadena=cadena.replace( /á/g , '\u00e1' );
	cadena=cadena.replace( /é/g , '\u00e9' );
	cadena=cadena.replace( /í/g , '\u00ed' );
	cadena=cadena.replace( /ó/g , '\u00f3' );
	cadena=cadena.replace( /ú/g , '\u00fa' );
	//Remplazar Mayusculas
	cadena=cadena.replace( /Á/g , '\u00c1' );
	cadena=cadena.replace( /É/g , '\u00c9' );
	cadena=cadena.replace( /Í/g , '\u00cd' );
	cadena=cadena.replace( /Ó/g , '\u00d3' );
	cadena=cadena.replace( /Ú/g , '\u00da' );
	cadena=cadena.replace( /ñ/g , '\u00f1' );
	cadena=cadena.replace( /Ñ/g , '\u00d1' );
	return cadena;
}

function _fn_matar_sesion()
{
	setTimeout("window.open('salir.php','_top');",1800000);
}

// Función para validar un RFC
// Devuelve el RFC sin espacios ni guiones si es correcto
// Devuelve false si es inválido
// ( debe estar en mayúsculas, guiones y espacios intermedios opcionales )
function _fn_valida_rfc( rfc , aceptarGenerico = true )
{

	rfc = rfc.toUpperCase();

	console.log( 'Rfc ::: ' + rfc );

	if( !rfc )
	{
		console.log( 'return f');
		return false;
	}

	const	re			=	/^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/;
	var		validado	=	rfc.match( re );

	if ( !validado ) // Coincide con el formato general del regex?
	{
		console.log( 'return f');
		return false;
	}

	//Separar el dígito verificador del resto del RFC
	const	digitoVerificador	=	validado.pop(),
			rfcSinDigito		=	validado.slice(1).join(''),
			len					=	rfcSinDigito.length,
	//Obtener el digito esperado
			diccionario       = "0123456789ABCDEFGHIJKLMN&OPQRSTUVWXYZ Ñ",
			indice            = len + 1;

	var		suma,
			digitoEsperado;

	if (len == 12)
	{
		suma = 0
	}
	else
	{
		suma = 481; //Ajuste para persona moral
	}

	for( var i = 0 ; i < len ; i++ )
	{
		suma += diccionario.indexOf(rfcSinDigito.charAt(i)) * (indice - i);
	}

	digitoEsperado = 11 - suma % 11;

	if( digitoEsperado == 11 )
	{
		digitoEsperado = 0;
	}
	else if( digitoEsperado == 10)
	{
		digitoEsperado = "A";
	}

	//El dígito verificador coincide con el esperado?
	// o es un RFC Genérico (ventas a público general)?
	if(		( digitoVerificador != digitoEsperado )
		&&	( !aceptarGenerico || rfcSinDigito + digitoVerificador != "XAXX010101000" )
	)
	{
		console.log( 'return f');
		return false;
	}
	else if ( !aceptarGenerico && rfcSinDigito + digitoVerificador == "XEXX010101000" )
	{
		console.log( 'return f');
		return false;
	}

	console.log( 'return ' + rfcSinDigito + digitoVerificador );
	return rfcSinDigito + digitoVerificador;

}

function _fn_es_numero_positivo( cantidad )
{

	console.log( 'cantidad ::: ' + cantidad );

	if( isNaN( cantidad ) )
	{
		return false;
	}
	else if ( cantidad < 0 )
	{
		return false;
	}
	else if( cantidad == '' )
	{
		return false;
	}
	else if( cantidad == null )
	{
		return false;
	}

	return true;

}

function _fn_es_float( numero ) 
{
	// es true si es 1, osea si es flotante
	var mod = numero % 1;

	if ( mod == 0 ) 
	{
		return false;
	}
	else
	{
		return true;
	}
}


function _fn_generar_cadena()
{
	var cadena		=	"";
	var longitud	=	32;
	var caracteres	=	"abcdefghijkmnpqrtuvwxyzABCDEFGHIJKLMNPQRTUVWXYZ123467890";

	for ( i = 0 ; i < longitud ; i++ )
	{
		cadena	+=	caracteres.charAt( Math.floor( Math.random() * caracteres.length ) );
	}

	return cadena;

}

/*
	Ejemplos :::
	console.log(number_format(132323232320.321, 2, ',', '.'));
	console.log(number_format(10.22));
	console.log(number_format(10000));
	console.log(number_format(10000 , 4 ));
	console.log(number_format(10000 , 4 , '.' , null ));
	console.log(number_format(1000, 2, '.', ','));
*/
function _fn_number_format( number , decimals , dec_point , thousands_point )
{
	if( number == null || !isFinite( number ) )
	{
		throw new TypeError("El número no es valido.");
	}

	if( !decimals )
	{
		var len = number.toString().split('.').length;
		decimals = len > 1 ? len : 0;
	}

	if( !dec_point )
	{
		dec_point = '.';
	}

	if( !thousands_point )
	{
		thousands_point = ',';
	}

	number = parseFloat(number).toFixed(decimals);

	number = number.replace(".", dec_point);

	var splitNum = number.split(dec_point);
	splitNum[0] = splitNum[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousands_point);
	number = splitNum.join(dec_point);

	return number;
}


function _fn_convertir_texto()
{
	// Convertir a mayusculas input['text']
	$(".textoMayusculas").focus(function(e){
		input	=	$(this);
	});
	$(".textoMayusculas").focusout(function(e){
		input.val( input.val().toUpperCase() );
	});

	$(".textoMinusculas").focus(function(e){
		input	=	$(this);
	});
	$(".textoMinusculas").focusout(function(e){
		input.val( input.val().toLowerCase() );
	});
}

function _fn_existe_elemento_vacio_clase( sNombreClase )
{

	var existe = false;

	$.each( $( "." + sNombreClase ) , function( indice , valor ){
		
		if( $(this).val().trim().toUpperCase() == '' || $(this).val().trim().toUpperCase() == null )
		{
			existe = true;
		}

	});

	console.log( 'existe ::: ' + existe );

	return existe;

}

function _fn_existe_clave_agregada( iClaveBuscar , sNombreClase )
{

	var existe_clave = false;

	$.each( $( "." + sNombreClase ) , function( indice , valor ){
		
		if( $(this).val().trim().toUpperCase() == iClaveBuscar.trim().toUpperCase() )
		{
			existe_clave = true;
		}

	});

	console.log( 'existe_clave ::: ' + existe_clave );

	return existe_clave;

}

function _fn_existen_detalles_agregados( sNombreClase )
{
	if( $( "." + sNombreClase ).length > 0 )
	{
		return true;
	}
	else
	{
		return false;
	}
}

function _fn_esta_definida( variable )
{
	if( variable == undefined )
	{
		return '';
	}
	else
	{
		return variable;
	}
}

function _revisar_notificaciones_push()
{
	$.ajax({
		cache: false,
		dataType: 'json',
		url: '',
		type: 'POST',
		data:{ aux_push: "_revisar_notificaciones_push" },
		success: function( datos ){
			
			console.log( ":::::::::::::::::::: Notificaciones Push ::::::::::::::::::::" );
			console.log( datos );

			if( datos._notificaciones_push )
			{
				$.each( datos._notificaciones_push , function( indice , valor ){
					/*
					console.log( valor.ikNotificacion );
					console.log( valor.sTitulo );
					console.log( valor.sMensaje );
					*/
					Push.create( valor.sTitulo ,{
						body: valor.sMensaje ,
						icon: document.location.origin + "/siol/web/img/logo_footer.png",
						timeout: 30000, // 30 Segundos.
						onClick: function(){
							// Si el usuario le da click a la notificación del cuadrito; Se marcará como leida.
							// valor.ikNotificacion - Id de la notificación que se marcará como leida.
							_verificar_notificacion_push( valor.ikNotificacion )
							this.close();
						},
					});
				});
			}

		},
		error: function( jqXHR , estado , error ){
			swal({
				title: 'Oops...',
				text: error + ' : ' + estado,
				type: 'error',
				allowOutsideClick: false,
			});
		}
	});
}

function _verificar_notificacion_push( ikNotificacion )
{
	var sRespuesta = false;

	$.ajax({
		cache: false,
		dataType: 'json',
		url: '',
		type: 'POST',
		data:{ aux_push: "_verificar_notificacion_push", ikNotificacion: ikNotificacion },
		success: function( datos ){
			console.log( ":::::::::::::::::::: Verificar Notificación Push ::::::::::::::::::::" );
			console.log( datos );
			sRespuesta = datos._actualizacion_notificacion_push;
		},
		error: function( jqXHR , estado , error ){
			swal({
				title: 'Oops...',
				text: error + ' : ' + estado,
				type: 'error',
				allowOutsideClick: false,
			});
		}
	});

	return sRespuesta;
}

function _actualizar_fecha_de_revision_solicitud(
												 sRevisionSolicitudTipo
												,iRevisionSolicitudTransaccion
												,ikPerfilRevisa
												,ikUsuarioRevisa
												,sEvento
											)
{
	console.log( 'sRevisionSolicitudTipo ::::: ' + sRevisionSolicitudTipo );
	console.log( 'iRevisionSolicitudTransaccion ::::: ' + iRevisionSolicitudTransaccion );
	console.log( 'ikPerfilRevisa ::::: ' + ikPerfilRevisa );
	console.log( 'ikUsuarioRevisa ::::: ' + ikUsuarioRevisa );
	console.log( 'sEvento ::::: ' + sEvento );

	$.ajax({
		cache: false,
		dataType: 'json',
		url: '',
		type: 'POST',
		data:{	 aux_revision_solicitud: "_actualizar_fecha_de_revision_solicitud"
				,sRevisionSolicitudTipo: sRevisionSolicitudTipo
				,iRevisionSolicitudTransaccion: iRevisionSolicitudTransaccion
				,ikPerfilRevisa: ikPerfilRevisa
				,ikUsuarioRevisa: ikUsuarioRevisa
				,sEvento: sEvento },
		success: function( datos ){
			console.log( ":::::::::::::::::::: Verificar Solicitud ::::::::::::::::::::" );
			console.log( datos );

			if( datos._actualizacion_fecha != 'FECHA ACTUALIZADA' )
			{
				swal({
					title: 'Oops...',
					text:   'Ocurrió un error al momento de actualizar la fecha de revisión, favor de volver a entrar a la solicitud. Si el problema persiste favor de contactar a Sistemas.',
					type:  'warning',
					width: 650,
					showCancelButton: false,
					confirmButtonColor: '#3085d6',
					background:'#FEFFED',
					allowOutsideClick : false, 
					confirmButtonText: 'De acuerdo!'
				}).then(function(){
					window.close(); // Click Ok! - Cerramos la ventana del navegador.
				});
			}

		},
		error: function( jqXHR , estado , error ){
			swal({
				title: 'Oops...',
				text: error + ' : ' + estado,
				type: 'error',
				allowOutsideClick: false,
			});
		}
	});

	setTimeout('_actualizar_fecha_de_revision_solicitud( "'+sRevisionSolicitudTipo+'" , '+iRevisionSolicitudTransaccion+' , '+ikPerfilRevisa+' , '+ikUsuarioRevisa+' , "'+sEvento+'" )' , ( 60000 * 1 ) ); // Mandar a llamar funcion cada 1 minuto.
}

function fn_actualizar_fecha_hora_servidor()
{
	var fecha_hora_servidor = new Date( $("#app_input_fecha_hora_servidor").val() );

	fecha_hora_servidor.setSeconds( fecha_hora_servidor.getSeconds() + 1 );

	var	meses	=	[ "Enero" , "Febrero" , "Marzo" , "Abril" , "Mayo" , "Junio" , "Julio" , "Agosto" , "Septiembre" , "Octubre" , "Noviembre" , "Diciembre" ],
		dias	=	[ "Domingo" , "Lunes" , "Martes" , "Mi&eacute;rcoles" , "Jueves" , "Viernes" , "S&aacute;bado" ],
		Y		=	fecha_hora_servidor.getFullYear(),
		m		=	fecha_hora_servidor.getMonth() + 1, // 0 = Enero, 11 = Diciembre
		d		=	fecha_hora_servidor.getDate(),
		H		=	fecha_hora_servidor.getHours(),
		mi		=	fecha_hora_servidor.getMinutes(),
		s		=	fecha_hora_servidor.getSeconds(),
		sMes		=	meses[ fecha_hora_servidor.getMonth() ],
		sDia		=	dias[ fecha_hora_servidor.getDay() ];

	if( d < 10 )	// Días
	{
		d = '0' + d;
	}
	if( m < 10 )	// Meses
	{
		m = '0' + m;
	}
	if( H < 10 )	// Horas
	{
		H = '0' + H;
	}
	if( mi < 10 ) 	// Minutos
	{
		mi = '0' + mi;
	}
	if( s < 10 )	// Segundos
	{
		s = '0' + s;
	}
	var fecha_actual = Y+'-'+m+'-'+d+' '+H+':'+mi+':'+s;
	$("#app_fecha_hora_texto").html( '<i class="fa fa-calendar pr-5"></i>'+sDia+', '+d+' de '+sMes+' de '+Y+'. - '+H+':'+mi+':'+s+' Horas.' );
	$("#app_input_fecha_hora_servidor").val( fecha_actual );
}

function _fn_valida_correo( correo )
{
    var expresion_regular = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
    if( expresion_regular.test( correo ) )
    {
    	return true; // correo correcto
    }
    else
    {
    	return false; // correo incorrecto
    }
}
