<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Introducción a la publicidad '")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p En esta primera parte, conoceremos los conceptos básicos de la publicidad y sus principales objetivos.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Conceptos básicos de publicidad

    .bg-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up")  La publicidad es una disciplina en constante evolución que ha acompañado el desarrollo económico, social y tecnológico, desde mediados del siglo XX. Según el libro “La publicidad moderna: De Bretton Woods a la era digital 1945–1995”, la publicidad moderna surge en el contexto de la posguerra como un fenómeno global vinculado a la expansión del consumo y los medios masivos; adicional, se afirma que “la publicidad moderna tiene, entre sus virtudes, la de hacer exhaustivo y, a la vez, dinámico recorrido por la comunicación publicitaria de las últimas décadas, el siglo pasado y el presente” (p. 13).
    
    h5 Otros autores han contribuido para enriquecer esta definición:

    .row.align-items-center.mb-5.justify-content-center
      .col-lg-7
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="1" titulo="Kotler (2020)") Aborda la publicidad como una herramienta esencial del <em>marketing</em>, utilizada por empresas, organizaciones sin fines de lucro e instituciones gubernamentales para comunicar mensajes persuasivos para audiencias específicas. La publicidad se define como una forma pagada de comunicación no personal, que promueve ideas, bienes o servicios, por parte de un patrocinador identificado. Esta definición destaca que la publicidad es una inversión estratégica, destinada a influir en las decisiones de compra y comportamientos del público objetivo, contribuyendo al posicionamiento de la marca y al incremento de las ventas. Además, la publicidad se manifiesta en diversos medios, incluyendo televisión, radio, prensa escrita, Internet y plataformas digitales, adaptándose continuamente, a los cambios tecnológicos y sociales, para mantener su eficacia.
          p(numero="2" titulo="Roig F. A. (2022)") La publicidad moderna no es solo una herramienta para vender productos, sino un canal estratégico para establecer diálogos significativos, con los públicos objetivos.
          p(numero="3" titulo="Erickson (2010)") Define la publicidad como una herramienta de comunicación estratégica, utilizada por las empresas para informar, persuadir y recordar a los consumidores sobre sus productos o servicios. Esta disciplina se centra en la creación y difusión de mensajes a través de diversos medios, con el objetivo de influir en las decisiones de compra y fortalecer la imagen de marca. <br> Adicional, destaca que la publicidad no solo busca promover ventas, sino también construir relaciones duraderas con el público, generar confianza y diferenciarse en un mercado competitivo. La efectividad de la publicidad radica en su capacidad para conectar emocionalmente con la audiencia y transmitir valores que resuenen con sus necesidades y deseos.

      .col-md-8.col-lg-5(data-aos="zoom-in-up")
        figure
          img(src="@/assets/curso/tema1/2.png", alt="").mt-4.mt-lg-0
      
    h2.mb-5(data-aos="fade-right") Comunicación como base de la publicidad

    .row.mb-5.justify-content-center
      .col-md-8.col-lg-4.mb-3(data-aos="zoom-in-up")
        figure
          img(src="@/assets/curso/tema1/3.svg", alt="").mt-4.mt-lg-0
      .col-lg-8
        p.p-5.bg-4 Al tratar sobre publicidad, se tiene que hablar de comunicación, siendo esta la principal herramienta para conectar los productos o servicios con los consumidores o clientes finales; es así como Roig, F.A. (2022), en “La publicidad moderna: De Bretton Woods a la era digital”, define la comunicación como “el proceso mediante el cual se intercambian mensajes con la intención de transmitir información, influir en las percepciones o generar un entendimiento compartido”; esta definición destaca la importancia, en la actualidad, de la comunicación interactiva y de doble sentido.
        p La comunicación, en la publicidad, es crucial para que las marcas se conecten con los consumidores, cambien sus percepciones y establezcan relaciones duraderas. Por lo tanto, es fundamental en cualquier estrategia publicitaria exitosa. En la era de la globalización y la tecnología, la publicidad se ha transformado para transmitir mensajes que van más allá de informar, buscando persuadir y emocionar a su audiencia; por lo tanto, las marcas necesitan destacarse en un mercado saturado, por lo que la comunicación debe permitir responder a esta necesidad. 

    .bg-fondo-4
      .row.mb-5.align-items-center
        .col-md-auto
          figure.justify-content-center.d-flex
            img.pst(src="@/assets/curso/tema1/4.svg", alt="").mt-4.mt-lg-0
        .col-md
          p.mb-0 Roig también destaca que: la comunicación integrada de <b><em>marketing</em></b> (CIM), ha transformado la forma en que las marcas interactúan con sus audiencias. “La CIM permite coordinar mensajes a través de múltiples canales, para garantizar coherencia y maximizar el impacto comunicativo”.
    
    .bg-fondo-5
      h2(data-aos="fade-right") Impacto de la comunicación en la publicidad moderna
      h5.mb-5 La publicidad utiliza principios de comunicación para:

      .row.justify-content-center.align-items-stretch.mb-5
        .col-md-6.col-lg-4.mb-4(data-aos="zoom-in")
          .custom-image-card-2.h-100
            img.custom-image-card__image(src="@/assets/curso/tema1/5.png" alt="")
            .custom-image-card__text.p-4
              h5.mb-2.text-center Desarrollo de productos
              p.mb-0 Crear una línea de panadería sin gluten, levadura, azúcar y lácteos con ingredientes naturales.
        .col-md-6.col-lg-4.mb-4(data-aos="zoom-in")
          .custom-image-card-2.h-100
            img.custom-image-card__image(src="@/assets/curso/tema1/6.png" alt="")
            .custom-image-card__text.p-4
              h5.mb-2.text-center Estrategias de <em>marketing</em>
              p.mb-0 Implementar campañas en redes sociales y otras plataformas digitales para atraer a clientes.
        .col-md-6.col-lg-4.mb-4(data-aos="zoom-in")
          .custom-image-card-2.h-100
            img.custom-image-card__image(src="@/assets/curso/tema1/7.png" alt="")
            .custom-image-card__text.p-4
              h5.mb-2.text-center Garantía de calidad
              p.mb-0 Establecer protocolos estrictos de seguridad alimentaria y prevención de contaminación cruzada.
    
    .row.mb-5.justify-content-center
      .col-md-8.col-lg-4(data-aos="zoom-in-up")
        figure
          img(src="@/assets/curso/tema1/8.png", alt="").mt-4.mt-lg-0
      .col-lg-8
        p.p-4.bg-6.mb-5 Conforme a estos principios, la publicidad se fundamenta en lograr comunicarse con los clientes, los cuales son cada vez más informados, sabios y, por lo tanto, más exigentes; adicional, al tener acceso a múltiples fuentes de información, la comunicación debe ser más efectiva y diferencial, no solo para atraerlos sino para mantenerlos atraídos con la marca.  
        h2.mb-4(data-aos="fade-right") Diferencias entre publicidad, promoción y propaganda
        p Al hablar de publicidad, es indispensable entender la diferencia entre tres elementos claves: la publicidad, la promoción y la propaganda que, aunque comparten condiciones comunicativas similares, difieren en sus objetivos, métodos y contextos de aplicación; a continuación, se presentan los aspectos diferenciales: 
    
    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3
                img(src="@/assets/curso/tema1/9.png")
            .col-lg-7
              h4 Publicidad
              ul.lista-ul
                li.d-flex 
                  i.bg-7.fas.fa-check-circle
                  | Enfoque comercial.
                li.d-flex 
                  i.bg-7.fas.fa-check-circle
                  p Persigue objetivos de <em>marketing</em>, cómo aumentar ventas o fortalecer la marca.
                li.d-flex 
                  i.bg-7.fas.fa-check-circle
                  | Utiliza medios masivos (televisión, Internet, radio, etc.).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3
                img(src="@/assets/curso/tema1/10.png")
            .col-lg-7
              h4 Promoción
              ul.lista-ul
                li.d-flex 
                  i.bg-7.fas.fa-check-circle
                  | A corto plazo, busca estimular la compra inmediata, mediante incentivos como descuentos, cupones o promociones “dos por uno”.
                li.d-flex 
                  i.bg-7.fas.fa-check-circle
                  | Se centra en la acción directa del consumidor.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3
                img(src="@/assets/curso/tema1/11.png")
            .col-lg-7
              h4 Propaganda
              ul.lista-ul
                li.d-flex 
                  i.bg-7.fas.fa-check-circle
                  | Tiene objetivos ideológicos, políticos o religiosos.
                li.d-flex 
                  i.bg-7.fas.fa-check-circle
                  | Busca persuadir al público sobre ideas, valores o comportamientos.
            
    .bg-fondo-6
      .row.mb-5.align-items-center
        .col-md-auto
          figure.justify-content-center.d-flex
            img.pst(src="@/assets/curso/tema1/12.svg", alt="").mt-4.mt-lg-0
        .col-md
          p.mb-0 Mientras que la publicidad y la promoción se enfocan en el ámbito comercial, la propaganda persigue la transmisión de valores o ideologías, apelando, con frecuencia, a las emociones más profundas del receptor. 

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Objetivos principales de la publicidad
    
    p.mb-5 Kotler (2020), en su análisis de las transformaciones del sector minorista, aporta los siguientes propósitos en el ámbito del retail digital:Kotler (2020), en su análisis de las transformaciones del sector minorista, aporta los siguientes propósitos en el ámbito del retail digital:

    .bg-fondo-7
      .row.justify-content-center
        .col-md-8.col-xl-5.pe-xl-8(data-aos="zoom-in-up")
          figure.mb-4.mb-md-0
            img(src='@/assets/curso/tema1/18.png', alt='Texto que describa la imagen')
        .col-md-12.col-xl-7
          SlyderF(columnas="col-12 col-md-6")
            .row.py-4.px-3.h-100
              .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-8.tarjeta
                img(src='@/assets/curso/tema1/13.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Generar tráfico a canales digitales y físicos
                p.text-center La publicidad busca atraer clientes, tanto a tiendas en línea como a establecimientos físicos, aumentando la visibilidad y las oportunidades de venta.
            .row.py-4.px-3.h-100
              .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-8.tarjeta
                img(src='@/assets/curso/tema1/14.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Personalizar la experiencia del cliente
                p.text-center Utilizando datos y análisis, la publicidad se orienta a ofrecer mensajes y ofertas personalizadas, que resuenen con las preferencias individuales de los consumidores.
            .row.py-4.px-3.h-100
              .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-8.tarjeta
                img(src='@/assets/curso/tema1/15.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Fomentar la fidelidad a la marca
                p.text-center Mediante campañas que refuercen los valores y la identidad de la marca, la publicidad aspira a construir relaciones duraderas con los clientes, incentivando la repetición de compras.
            .row.py-4.px-3.h-100
              .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-8.tarjeta
                img(src='@/assets/curso/tema1/16.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Promover la omnicanalidad
                p.text-center La publicidad en el retail 4.0, se enfoca en integrar diversos canales de venta y comunicación, proporcionando una experiencia de cliente coherente y fluida.
            .row.py-4.px-3.h-100
              .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-8.tarjeta
                img(src='@/assets/curso/tema1/17.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Impulsar la innovación y la adaptabilidad
                p.text-center En un entorno digital en constante cambio, la publicidad debe ser ágil y creativa, adaptándose rápidamente a nuevas tendencias y tecnologías, para mantener la relevancia.
    
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            //- Referencia con enlace 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/58473?page=1" target="_blank" rel="noopener noreferrer") Moore, S. (2015). Relaciones públicas y la historia de las ideas. Editorial UOC.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/36392" target="_blank" rel="noopener noreferrer") Erickson, B. F. (2010). La publicidad. Firmas Press.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.alohacreativos.com/blog/que-es-publicidad" target="_blank" rel="noopener noreferrer") ¿Qué es la publicidad?  
            //- Referencia de youtube 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=CZB5yRWb8Mg" target="_blank" rel="noopener noreferrer") TEDx Talks. (2024). Cómo las marcas conectan con las personas | Daniela Goicoechea | TEDxUPFMataró.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=XXZw3CA8MSg" target="_blank" rel="noopener noreferrer") Negocios En Tu Mundo. (2021). ¿Cuál es la importancia de la psicología para las marcas? [Negocios en Tm] ®. 


          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

   

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
