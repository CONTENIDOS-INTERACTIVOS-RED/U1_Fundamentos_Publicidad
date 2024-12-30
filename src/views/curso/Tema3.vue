<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Rol de la publicidad en la comunicación del <em>marketing</em>'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5



    .bg-9.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema3/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up")  Con el fin de comercializar o vender un producto o servicio, las empresas y los emprendedores deben fortalecer la comunicación con los clientes; es así como independiente de la actividad económica, se requiere de una interacción permanente; es así como en publicidad se requiere que esta comunicación sea de doble vía y permita conocer las necesidades y gustos, para establecer las estrategias del <em>marketing</em>. 
   
    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Elementos de la comunicación en el <em>marketing</em>
    
    p.mb-5 Ahora, conozcamos cuales son los elementos de la comunicación en el <em>marketing</em>.

  
    .row.justify-content-center.align-items-center.mb-5.bg-10.tarjeta.p-5
      .col-lg-10
        ImagenInfografica.color-secundario(data-aos="zoom-in-up")
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema3/17.svg', alt='', style="max-width: 1106px;").mx-auto

            .bg-8.tarjeta.box-shadow.p-3(x="71.2%" y="26.2%" numero="+")
              h5 Anunciante
              p Persona(s) o empresa que crea(n) un mensaje para promocionar la marca, producto o servicio a través de estrategias publicitarias.

            .bg-8.tarjeta.box-shadow.p-3(x="71.2%" y="88.3%" numero="+")
              h5 Consumidor o cliente final
              p Persona(s) que recibe(n) la comunicación y es el objetivo principal de la estrategia. Su importancia radica en que la respuesta influirá en la eficacia de las medidas adoptadas.

            .bg-8.tarjeta.box-shadow.p-3(x="17%" y="61.5%" numero="+")
              h5 Código
              p Conjunto de recursos y lenguajes para organizar el mensaje. Actualmente, hay muchas maneras diferentes de crear mensajes para que sean más llamativos, emocionantes y convincentes. Algunos de los lenguajes más utilizados son el audiovisual, el gráfico, el auditivo y el textual, los cuales permiten diversas formas de comunicación.

            .bg-8.tarjeta.box-shadow.p-3(x="12.5%" y="33.5%" numero="+")
              h5 Medio
              p Canal por el cual se transmite el mensaje. Hoy en día, los medios digitales han cobrado mayor importancia, siendo las redes sociales las más destacadas como fuentes de información. En comparación con la televisión convencional, los medios web son más efectivos para llevar a cabo estrategias de <em>marketing</em>.

            .bg-8.tarjeta.box-shadow.p-3(x="24.1%" y="87.1%" numero="+")
              h5 Retroalimentación
              p Este elemento, es fundamental en <em>marketing</em>, puesto que ayuda a evaluar la eficacia de las estrategias y hacer los cambios necesarios para lograr el objetivo trazado. La empresa y los emprendedores, deben facilitar formas simples para que los clientes respondan, de acuerdo con dichos objetivos. Algunas acciones comunes incluyen hacer una compra, registrarse en un sitio web, completar formularios, dar "me gusta o likes" a publicaciones, compartir o comentar contenido y comunicarse a través de mensajes, en aplicaciones como WhatsApp y Telegram.


    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Medios de comunicación
    
    .row.mb-5.align-items-center
      .col-lg-7
        .row.align-items-center.bg-2.p-4
          .col-lg-auto
            img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Si bien actualmente se está viviendo una era digital, desde la perspectiva de publicidad y comunicación, de la mano del mercadeo, es necesario conocer y abordar los medios de comunicación tradicionales, como la base para llegar al público objetivo; dentro de estos, se destacan: 
      .col-lg-5(data-aos="zoom-in-up")
        figure
          img(src='@/assets/curso/tema3/3.png', alt='')
    
    .bg-fondo-9
      .row.mb-5
        .col-lg-5
          figure
            img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in").mt-4.mt-lg-0
        .col-lg-7
          LineaTiempoD.color-primario.large(data-aos="fade-left")
            p(numero="1" titulo="Televisión") Es el medio de comunicación audiovisual que permite llegar a un número de televidentes y a un grupo masivo de posibles consumidores; en este medio, se resalta que la publicidad debe ser corta, precisa y llamativa. La narrativa y el lenguaje, deben estar acordes con franjas horarias y con la normatividad vigente.
            p(numero="2" titulo="Radio") Es un medio de comunicación auditivo, generalmente tiene alcance regional o nacional; cuando son emisoras con largo alcance, se puede argumentar información a través de programas, cuñas y jingles, principalmente.
            p(numero="3" titulo="Prensa y revistas") Como medio de comunicación tradicional, es información impresa en un documento que permite dar a conocer, en ciertas secciones o espacios, el producto o servicio a publicitar; pueden ser carácter regional o nacional, y en los últimos tiempos han perdido relevancia y audiencia, obligándoles a mudarse para redes sociales y aplicaciones digitales.
            p(numero="4" titulo="Publicidad exterior") La característica principal de este medio es la de estar ubicado donde existe afluencia del público objetivo, donde lo gráfico y creativo, resulta lo más valioso para obtener los resultados esperados.
    
    
      .row.mb-5.align-items-center
        .col-lg-8
          p Micó Sanz, J. L. & Coll Rubio, P. (2018), destacan la transición de medios tradicionales, como prensa, radio y televisión, hacia plataformas digitales, las cuales permiten una interacción más directa y personalizada con el consumidor. Enfatizan en la importancia de las redes sociales, blogs y sitios web corporativos, como canales claves para la comunicación del <em>marketing</em> en la era digital. 
          p.bg-2.p-4.mb-0 Es importante resaltar que la integración de estrategias multicanal, combinadas con medios tradicionales y digitales, logran maximizar el alcance y la efectividad de las campañas publicitarias.
        .col-lg-4(data-aos="zoom-in-up")
          figure
            img(src='@/assets/curso/tema3/5.svg', alt='')
    
    p.mb-5 Teniendo en cuenta esto, es indispensable comprender lo que enuncian Sabater Quinto, F. & Monserrat Gauchi, J. (2017), con relación a la clasificación de los medios de comunicación en el contexto digital, destacando tres categorías principales:

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
                img(src="@/assets/curso/tema3/6.png")
            .col-lg-7
              h4 Medios propios (Owned Media)
              p Son aquellos canales de comunicación que la empresa controla directamente, como su sitio web, blogs corporativos y perfiles en redes sociales. Estos medios permiten a la organización, difundir contenido alineado con su estrategia y establecer una comunicación directa con su audiencia.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
                img(src="@/assets/curso/tema3/7.png")
            .col-lg-7
              h4 Medios pagados (Paid Media)
              p Incluye todas las formas de publicidad pagada, como anuncios en redes sociales, banners en sitios web y campañas de pago por clic. Estos medios buscan amplificar el alcance del mensaje y atraer a nuevas audiencias, mediante inversiones económicas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
                img(src="@/assets/curso/tema3/8.png")
            .col-lg-7
              h4 Medios ganados (Earned Media)
              p Se refiere a la exposición obtenida a través de menciones espontáneas, reseñas, compartidos y recomendaciones por parte de usuarios y medios externos. Este tipo de medios refleja la percepción y aceptación de la marca en el público, siendo resultado de la calidad del contenido y la interacción efectiva con la audiencia.
    
    .bg-fondo-4
      .row.mb-5.align-items-center
        .col-lg-auto
          figure
            img(src="@/assets/curso/tema3/9.svg", alt="").mt-4.mt-lg-0
        .col-lg
          p.mb-0 Esta clasificación es fundamental para desarrollar una estrategia de comunicación integral en redes sociales, permitiendo a las organizaciones equilibrar y optimizar sus esfuerzos en cada tipo de medio, para alcanzar sus objetivos del <em>marketing</em>.

    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Interconexión entre publicidad y otros aspectos del <em>marketing</em>
    
    p La publicidad se interconecta con los demás elementos del <em>marketing</em> y, de esta manera, se puede garantizar el éxito de las estrategias establecidas; es así que, para esto, es necesario que tenga un vínculo directo con: 

    .bg-fondo-7
      .row.justify-content-center
        .col-11.col-md-4.col-xl-5.pe-xl-8
          figure.mb-4.mb-md-0
            img(src='@/assets/curso/tema3/10.png', alt='Texto que describa la imagen')
        .col-11.col-md-8.col-xl-7
          SlyderF(columnas="col-12 col-lg-6")
            .row.py-4.px-3.h-100
              .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-8.tarjeta
                img(src='@/assets/curso/tema3/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Relaciones Públicas (RRPP)
                p.text-center La publicidad refuerza las percepciones positivas generadas por las RRPP.
            .row.py-4.px-3.h-100
              .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-8.tarjeta
                img(src='@/assets/curso/tema3/12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 <em>Marketing</em> digital
                p.text-center En el entorno digital, la publicidad utiliza datos obtenidos de plataformas, para personalizar y dirigir mensajes, complementando con estrategias de contenido.
            .row.py-4.px-3.h-100
              .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-8.tarjeta
                img(src='@/assets/curso/tema3/13.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Ventas
                p.text-center Una campaña publicitaria efectiva, genera "leads" que pueden ser convertidos en clientes a través de estrategias de ventas bien estructuradas.
            .row.py-4.px-3.h-100
              .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-8.tarjeta
                img(src='@/assets/curso/tema3/14.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Promociones
                p.text-center Las campañas publicitarias comunican promociones específicas, como descuentos por tiempo limitado, incentivando la acción inmediata.
            .row.py-4.px-3.h-100
              .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-8.tarjeta
                img(src='@/assets/curso/tema3/15.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Investigación de mercado
                p.text-center Los datos obtenidos del mercado, encaminan la creación de campañas publicitarias, que resuenen con las audiencias.
    
    p.text-bold.mb-5 Algunos ejemplos prácticos de publicidad, son:

    .row.mb-5
      .col-lg-7
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          div(numero="1" titulo='Coca-Cola. Campaña "Comparte una Coca-Cola"') 
            ul.lista-ul
              li.d-flex 
                i.bg-7.fas.fa-check-circle
                p #[strong Descripción.] Esta campaña personalizó las etiquetas de las botellas con nombres populares, invitando a los consumidores a compartirlas con amigos o familiares.
              li.d-flex 
                i.bg-7.fas.fa-check-circle
                p <strong><em>Marketing.</em></strong> Combinó publicidad masiva en televisión, redes sociales con hashtags interactivos, y promociones en punto de venta, creando una experiencia omnicanal (experiencia de compra en todos los canales, tiendas físicas, dispositivos móviles e Internet).
              li.d-flex 
                i.bg-7.fas.fa-check-circle
                p #[strong Resultado.]  Aumentó las ventas y mejoró el engagement en redes sociales.
          div(numero="2" titulo='Red Bull. “Stratos”') 
            ul.lista-ul
              li.d-flex 
                i.bg-7.fas.fa-check-circle
                p #[strong Descripción.] En el 2012, Red Bull patrocinó el salto en caída libre de Félix Baumgartner, desde la estratósfera.
              li.d-flex 
                i.bg-7.fas.fa-check-circle
                p <strong><em>Marketing.</em></strong> La campaña mostró un evento en vivo, del salto en caída en libre. 

              li.d-flex 
                i.bg-7.fas.fa-check-circle
                p #[strong Resultado.]  La campaña tuvo un gran alcance, con más de 74 millones de visualizaciones del video y más de 370 millones de interacciones en Twitter y un impacto en las ventas globales de la compañía, que aumentaron hasta 500 millones de dólares.
              
          div(numero="3" titulo='Nike. Campaña "Just Do It"') 
            ul.lista-ul
              li.d-flex 
                i.bg-7.fas.fa-check-circle
                p #[strong Descripción.] Con mensajes inspiradores y relevantes, Nike integró publicidad en televisión, redes sociales y colaboraciones con influencers.

              li.d-flex 
                i.bg-7.fas.fa-check-circle
                p <strong><em>Marketing.</em></strong> La publicidad estaba integrada con productos específicos, promociones y una narrativa consistente en todos los puntos de contacto con el consumidor.

              li.d-flex 
                i.bg-7.fas.fa-check-circle
                p #[strong Resultado.]  Posicionó a Nike como un líder global en ropa deportiva y aumentó su base de consumidores leales.
              
          div(numero="4" titulo='Procter&Gamble. Gracias Mamá') 
            ul.lista-ul
              li.d-flex 
                i.bg-7.fas.fa-check-circle
                p #[strong Descripción.]  En los Juegos Olímpicos de Londres del 2012, una campaña para agradecer el apoyo de las mamás de los atletas de América Latina a sus hijos, en su carrera deportiva.
              li.d-flex 
                i.bg-7.fas.fa-check-circle
                p <strong><em>Marketing.</em></strong> La campaña mostró el camino hacia los Juegos Olímpicos, de cuatro madres y sus hijos, y se centró en situaciones de la infancia de los atletas, en las que la fuerza de sus madres marcó la diferencia.
              li.d-flex 
                i.bg-7.fas.fa-check-circle
                p #[strong Resultado.]  La campaña ha recibido diversos premios y reconocimientos a nivel mundial, consolidándose como uno de los mayores éxitos de publicidad emocional.
              
          div(numero="5" titulo='Apple. Celular iPhone') 
            ul.lista-ul
              li.d-flex 
                i.bg-7.fas.fa-check-circle
                p #[strong Descripción.] Apple utiliza campañas integradas para lanzar sus productos, combinando publicidad televisiva, digital y eventos en vivo.
              li.d-flex 
                i.bg-7.fas.fa-check-circle
                p <strong><em>Marketing.</em></strong> Sus anuncios destacan las características innovadoras del producto, mientras las promociones y las relaciones públicas, generan expectativa.
              li.d-flex 
                i.bg-7.fas.fa-check-circle
                p #[strong Resultado.]  Se crea una conexión emocional con el público, estableciendo un modelo de <em>marketing</em> aspiracional.
              
         
          
      .col-lg-5
        figure
          img(src="@/assets/curso/tema3/16.png", data-aos="zoom-in").mt-4.mt-lg-0

    
</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>
