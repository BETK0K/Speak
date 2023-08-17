<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Consultoria Web</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="Estilos/Plantilla.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-sweetalert/1.0.1/sweetalert.min.css">
</head>
    <body>
        <section id="root" class="main">
            <article class="ar" id="articulo">
                <div>
                    <h3 style="float: left" id="speak">¿Qué es una Consultoría Web?</h3>
                    <p style="float: left" id="speak">Una Consultoría web es uno de los elementos indispensables para conseguir una mayor presencia en internet. Se trata de un servicio desarrollado por profesionales, 
                        generalmente consultores web, para ver toda la estructura de una página, desde su posicionamiento hasta su diseño o su público, con el fin de poder determinar estrategias con las que crecer                         tanto dentro como fuera del ámbito digital, unos de los procedimiento por el que pasan todas las compañías que abren una página en Internet.</p>
                            
                    <p style="float: left" id="speak">Normalmente desarrollado por diferentes profesionales especializados en diferentes ámbitos, como puede ser el diseño web, posicionamiento SEO o incluso programación; 
                        ofrece a su web una serie de servicios orientados a aumentar el volumen de negocio de la empresa que lo solicita.</p>
                </div>
                <div>
                    <h3 style="float: left" id="speak">¿Para qué Sirve una Consultoría Web?</h3>
                    <p style="float: left" id="speak">Una Consultoria web sirve, tal y como marca su meta primordial, para conseguir que cualquier empresa que la solicita pueda crecer en Internet y, así, aumentar su volumen de negocio y seguir 
                        creciendo gracias a un mayor y mejor alcance en el sector digital.</p>
                            
                    <p style="float: left" id="speak">No solo mejora todo lo relacionado con la web del negocio, también permite una mejor transmisión de la información a base 
                        de dictar una nueva línea de contenidos, plantea cambios en la imagen corporativa en caso de ser necesarios e incluso detecta qué mejoras se pueden aplicar para que el 
                        rendimiento de la página sea mayor, o lo que es lo mismo, que la experiencia de navegación sea más satisfactoria.</p>
                </div>
            </article>
        </section>
        <div>
            <div>
                <button id="btn_play" class="seleccionar-texto"><i class="fa fa-play"></i></button>
                <button id="btn_pause" class="seleccionar-texto"><i class="fa fa-pause"></i></button>
                <button id="btn_stop" class="seleccionar-texto"><i class="fa fa-stop"></i></button>
            </div>
            <div class="container-voice">
                <input type="checkbox" id="btn-mas">
                <div class="Acces-voz">
                    <button id="activar" class="fa fa-eye" style="display: block" onClick="openToastr('Lectura por Parrafos Activada')"></button>
                    <button id="desactivar" class="fa fa-eye-slash" style="display: none" onClick="openToastr('Lectura por Parrafos Desactivada')"></button>
                    <button id="activarSeleccion" class="fa fa-mouse-pointer" style="display: block" onClick="openToastr('Lectura por Selección Activada')"></button>
                    <button id="desactivarSeleccion" class="fa fa-times" style="display: none" onClick="openToastr('Lectura por Selección Desactivada')"></button>
                </div>
                <div class="btn-mas">
                    <label for="btn-mas" class="fa fa-assistive-listening-systems"></label>
                </div>
            </div>
            <div id="toastr" class="toastr">
                <span>Hola</span>
            </div>
        <div>
    </body>
    <script src="js/accesibilidad.js"></script>
        <script>
            const toastr = document.querySelector('#toastr');
            const openToastr = (message) => {
            toastr.style.display = 'flex';
            toastr.innerHTML = message;
            closeToastr();
        }

        const closeToastr = ()=> {
            setTimeout(() =>{
                toastr.style.display = 'none';
            },3000)
        }
    </script>
</html>
