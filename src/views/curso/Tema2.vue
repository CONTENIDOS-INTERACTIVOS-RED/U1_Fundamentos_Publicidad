<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Historia y evolución de la publicidad'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-5.align-items-center
      .col-lg-7(data-aos="fade-left")
        p.p-4.bg-9.mb-0 Como se enunció anteriormente, antes de establecer la historia de la publicidad, es necesario conocer la historia de la comunicación, principal elemento para que se pueda desarrollar publicidad; es así como la comunicación persuasiva ha sido fundamental para la interacción de los seres humanos y ha influido en la cultura, creencias, actitudes y, por ende, en el comportamiento y forma de pensar de las sociedades y los individuos. 
      .col-lg-5(data-aos="zoom-in-up") 
        figure
          img(src="@/assets/curso/tema2/1.png", alt="").mt-4.mt-lg-0

    

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Orígenes, de acuerdo con las etapas históricas
    
    p Perceval (2015), examina la evolución de la comunicación humana a través de diversas etapas históricas, destacando cómo, cada una, ha contribuido al desarrollo de las sociedades. A continuación, se presentan las principales etapas identificadas por el autor:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3
                img(src="@/assets/curso/tema2/2.png")
            .col-lg-7
              h4 Etapa oral-gestual
              p Esta fase inicial, se caracteriza por la comunicación a través de gestos y sonidos, donde las primeras comunidades humanas dependían de la cooperación y el intercambio oral, para sobrevivir y desarrollarse. La transmisión de conocimientos y tradiciones se realizaba de manera oral, fortaleciendo los lazos comunitarios.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3
                img(src="@/assets/curso/tema2/3.png")
            .col-lg-7
              h4 Etapa de la escritura
              p Con la invención de la escritura, las sociedades pudieron registrar información, leyes y relatos, lo que facilitó la administración y la preservación del conocimiento a lo largo del tiempo. Este avance permitió la consolidación de civilizaciones más complejas y estructuradas. 
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3
                img(src="@/assets/curso/tema2/4.png")
            .col-lg-7
              h4 Etapa de la imprenta
              p La creación de la imprenta por Johannes Gutenberg en el siglo XV, revolucionó la difusión del conocimiento, permitiendo la producción masiva de libros y documentos. Esto democratizó el acceso a la información y fomentó movimientos como la Reforma y el Renacimiento.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3
                img(src="@/assets/curso/tema2/5.png")
            .col-lg-7
              h4 Etapa de los medios de comunicación de masas
              p Con la aparición de la prensa escrita, la radio y la televisión, la información pudo transmitirse a grandes audiencias de manera rápida y efectiva. Estos medios jugaron un papel crucial en la formación de la opinión pública y en la difusión de culturas y valores.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3
                img(src="@/assets/curso/tema2/6.png")
            .col-lg-7
              h4 Etapa digital
              p La revolución digital ha transformado radicalmente la comunicación, introduciendo Internet y las redes sociales como plataformas principales de interacción. Esta etapa se caracteriza por la inmediatez, la interactividad y la globalización de la información, cambiando la forma en que las sociedades se comunican y se organizan.
      
    .row.mb-5.justify-content-center
      .col-lg-8
        h2.mb-5(data-aos="fade-right") Publicidad en el siglo XX
        .row.align-items-start.bg-6.mb-5.p-4
          .col-md-auto.mb-3
            img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
          .col-md
            p.mb-0 Perceval también aborda las crisis y desafíos que han acompañado a cada etapa, analizando cómo las sociedades han enfrentado y adaptado sus sistemas de comunicación a lo largo del tiempo. Su análisis ofrece una comprensión profunda de la comunicación, como un proceso dinámico y esencial en la construcción de las comunidades humanas
        h2(data-aos="fade-right") Prácticas comerciales
        p El comercio fue uno de los primeros ámbitos donde se aplicó la comunicación persuasiva con fines comerciales. Los mercaderes, especialmente en mercados concurridos, utilizaban símbolos y textos simples para atraer la atención de los compradores:
      .col-md-8.col-lg-4(data-aos="zoom-in-up")
        figure
          img(src="@/assets/curso/tema2/7.svg", alt="").mt-4.mt-lg-0
    
    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Uso de signos" :icon="require('@/assets/curso/tema2/9.svg')" )
        .row.justify-content-center
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Uso de signos
            p En la Edad Media, los comerciantes emplearon símbolos como imágenes de personas, animales y herramientas, para representar sus acciones, costumbres y tiendas, facilitando una comunicación mucho más visual.
        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/10.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Invención de la imprenta" :icon="require('@/assets/curso/tema2/9.svg')" )
        .row.justify-content-center
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Invención de la imprenta
            p La invención de la imprenta por Johannes Gutenberg en el siglo XV, revolucionó la comunicación, permitiendo no solo la producción masiva de periódicos, panfletos, folletos y carteles, sino que además logró que los individuos apropiaran la información, la interpretarán y se pudieran comunicar más fácilmente, a través de temas comunes o sociales.
        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/11.png', alt='')

      .tabs-content.border.px-4.p-md-5.py-3(titulo="Prácticas religiosas" :icon="require('@/assets/curso/tema2/9.svg')" )
        .row.justify-content-center
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Prácticas religiosas
            p Las prácticas religiosas incidieron y permitieron fortalecer la comunicación y, por ende, aportaron a la publicidad dichas prácticas como la predicación, la lectura de textos sagrados, la oración, los cantos y rituales; la explicación y las reflexiones sobre la palabra sagrada, llevaron a los individuos a establecer canales comunicativos entorno a una temática específica “la religión”, la cual a través de los tiempos ha tenido incidencia en el ámbito político, social, educativo y comercial. 
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/12.png', alt='', style="width: 100%;")


    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Publicidad en los siglos XX y XXI: la era digital y los nuevos medios
    
    .row.mb-5.align-items-center.bg-fondo-8
      .col-lg-6(data-aos="fade-right")
        p A continuación, conoceremos cómo era la publicidad en los siglos XX y XXI.
        h2.mb-5(data-aos="fade-right") Publicidad en el siglo XX
        p En su obra La publicidad moderna: De Bretton Woods a la era digital, 1945-1995, Francisco A. Roig (2022), ofrece un análisis detallado de la evolución de la publicidad durante la segunda mitad del siglo XX. El autor resalta cómo los cambios económicos, tecnológicos y sociales, influyeron en las prácticas publicitarias y en la comunicación del <em>marketing</em>, estableciendo cuatro periodos fundamentales: 
      .col-lg-6
        figure
          img(src="@/assets/curso/tema2/13.svg", data-aos="zoom-in").mt-4.mt-lg-0
    
    .row.mb-5
      .col-lg-5.order-2.order-lg-1
        figure
          img(src="@/assets/curso/tema2/14.png", data-aos="zoom-in").mt-4.mt-lg-0
      .col-lg-7.order-1.order-lg-2.mb-3
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="1" titulo="Período de posguerra") <b>Período de posguerra y el Acuerdo de Bretton Woods (1945-1971).</b> Tras la Segunda Guerra Mundial, el Acuerdo de Bretton Woods estableció un nuevo orden económico internacional, que incentivó la estabilidad financiera y el crecimiento económico. Lo anterior facilitó la expansión de las empresas multinacionales y los mercados de consumo masivo. La publicidad se convirtió en una herramienta indispensable para posicionar los productos, en mercados cada vez más competitivos y globalizados.
          p(numero="2" titulo="La era dorada de la publicidad") <b>La era dorada de la publicidad (1950-1970).</b> Durante estas décadas, la publicidad experimentó un auge significativo, especialmente en Estados Unidos. La televisión emergió como el medio dominante, permitiendo a las marcas llegar a las audiencias masivas. Agencias publicitarias como Ogilvy & Mather y Leo Burnett, desarrollaron campañas icónicas que aún se estudian en la actualidad. Roig señala que este período se caracterizó por la creatividad y la innovación en las estrategias publicitarias, con un enfoque en la construcción de marcas sólidas y memorables.
          p(numero="3" titulo="Crisis del petróleo") <b>Crisis del petróleo y cambios económicos (1970-1980).</b> La crisis del petróleo de 1973 y la posterior recesión económica, afectaron el gasto en publicidad. Las empresas buscaron estrategias más eficientes y orientadas a resultados. Se produjo una mayor segmentación del mercado y un enfoque en la investigación de mercado, para comprender mejor las necesidades y deseos de los consumidores. La publicidad comenzó a adaptarse a un entorno más desafiante, donde la eficiencia y la efectividad se volvieron primordiales
          p(numero="4" titulo="Avances tecnológicos") <b>Avances tecnológicos y la era digital (1980-1995).</b> La introducción de tecnologías como las computadoras personales y, posteriormente, Internet, revolucionó la publicidad. Las empresas comenzaron a explorar nuevas formas de comunicación digital, aunque inicialmente, de manera experimental. Roig destaca que, aunque la adopción masiva de la publicidad digital se produciría después de 1995, este período sentó las bases para la transformación digital que redefiniría la industria publicitaria, en las décadas siguientes.
    
    h2(data-aos="fade-right") Publicidad en el siglo XXI

    .row.mb-5.align-items-center.justify-content-center
      .col-lg-8
        .row.align-items-start.bg-9.p-4
          .col-md-auto.mb-3
            img(src="@/assets/curso/tema2/15.svg", style="max-width: 90px").mx-auto
          .col-md
            p.mb-0 Como se evidencia durante el desarrollo de esta unidad, la publicidad es tan antigua como el ser humano y ha estado presente, de manera implícita, en cada acción que desarrolla; en la actualidad, la publicidad tiene mayor presencia en el mundo digital y apunta su presencia en redes sociales, plataformas, aplicaciones, pódcast y motores de búsqueda; sin embargo, la publicidad en los medios y estrategias tradicionales, no ha perdido su importancia, como veremos a continuación:
      .col-md-8.col-lg-4
        figure
          img(src="@/assets/curso/tema2/16.png", data-aos="zoom-in").mt-4.mt-lg-0
    
    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3
                img(src="@/assets/curso/tema2/17.png")
            .col-lg-7
              h4 Publicidad en medios convencionales
              p La televisión, la radio, la prensa impresa, aun permiten llegar a clientes y consumidores; la televisión en su parte visual, sigue siendo atractiva y la radio se ha fortalecido hacia publicidades que requieren llegar a una mayor cantidad de público.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3
                img(src="@/assets/curso/tema2/18.png")
            .col-lg-7
              h4 Publicidad en medios digitales
              p Coll Rubio y Micó Sanz (2018), evidencian que la publicidad en el siglo XXI se caracteriza por la integración de estrategias, la flexibilidad basada en investigación, el uso diversificado de técnicas y la evaluación constante de resultados. Estas prácticas permiten a las empresas adaptarse eficazmente, a un entorno digital, en constante evolución y llegar a un público mucho más segmentado. Asimismo, permite evaluar, por ejemplo, a través de métricas e inteligencia artificial, el mercado o usuario objetivo y su comportamiento; como ejemplo de esto, tenemos a Google y a Facebook Ads.

    .bg-fondo-4
      p.mb-5.p-3 <b>Publicidad en estrategias de la nueva era.</b> Son las nuevas tendencias de la publicidad, las que permiten interactuar, con mayor precisión con el consumidor y que este se identifique, no solo con el producto sino con el valor que quiere brindar la empresa; aquí apunta hacia la idea popular que indica “se venden emociones más que un producto”; entre estas estrategias, se pueden encontrar:  
    
    .row.mb-5
      .col-lg-7.order-2.order-lg-1
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="1" titulo="Publicidad de influencia") Es una estrategia que aprovecha la credibilidad y el alcance de personas influyentes, en plataformas digitales, para promocionar productos o servicios. Según Albuquerque, M. (2023), los influencers son “personas con relevancia, a las que admiramos, cuyo criterio atendemos cerca de entre los 6000 impactos publicitarios que recibimos cada día en nuestro cerebro y que nos influyen. Como ejemplo, un dato clarificador: el sector del <em>marketing</em> de influencers, movió 13.800 millones de dólares en el mundo, durante el 2021” <br><br><b>Ejemplo de personas influyentes:</b><br><b>Cristiano Ronaldo</b> futbolista portugués, que cuenta con patrocinios con empresas como Nike y EA Sports, entre otras, brindando publicidad y que lo convierten en la persona más influyente en Instagram, con más de 200 millones de seguidores.<br><b>Kylie Jenner</b> empresaria de línea de maquillaje con más de 195 millones de seguidores en Instagram.  
          p(numero="2" titulo="Publicidad programática") Es aquella publicidad que tiene como finalidad optimizar las campañas en tiempo real, a través de algoritmos de compra en espacios publicitarios. <br><br><b>Ejemplo.</b> El caso de Nike en el 2015, donde lanzó una campaña bajo el nombre de Nike Phenomenal Shot, con el fin de lograr una interacción con los fans del fútbol, en varios lugares del mundo. Para esto, la marca creó y publicó gráficos interactivos en tercera dimensión, con los que se podían seleccionar imágenes digitalizadas de los jugadores y customizar el gráfico 3D con frases, logos, etc.

          p(numero="3" titulo="Publicidad basada en datos") Es la publicidad que tiene en cuenta los datos y el análisis predictivo para el envío de mensajes personalizados y maximizar la efectividad de las campañas, ayudando a comprender comportamientos y preferencias que motivan a comprar o usar un servicio. <br><br><b>Ejemplo.</b> La Tarjeta Aqua Prepago de BBVA, es una tarjeta diseñada para ofrecer un control total sobre el gasto de sus clientes, permitiendo hacer uso exclusivamente del dinero recargado. A través del conocimiento de los datos de usuarios, permitieron realizar una campaña personalizada, a través del comportamiento en la web.
          
      .col-lg-5.order-1.order-lg-2.mb-3
        figure
          img(src="@/assets/curso/tema2/19.png", data-aos="zoom-in").mt-4.mt-lg-0
    
    .row.mb-5.justify-content-center
      .col-md-8.col-lg-4
        figure
          img(src="@/assets/curso/tema2/20.png", data-aos="zoom-in").mt-4.mt-lg-0
      .col-lg-8
        h2.mb-5(data-aos="fade-right") Redes sociales
        .row.align-items-center.bg-2.p-4.mb-4
          .col-md-auto.mb-3
            img(src="@/assets/curso/tema2/21.svg", style="max-width: 90px").mx-auto
          .col-md
            p.mb-0 Cada red social tiene su grupo de usuarios, diferente del de las demás. Los contenidos atraen a un perfil de usuarios y, a su vez, este, marca los contenidos. Se trata de un bucle en el que lo uno lleva a lo otro y lo otro a lo uno, Albuquerque, M. (2023). 
        p.text-bold A continuación, se presentan algunos ejemplos de redes sociales: 
  
    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Instagram" :icon="require('@/assets/curso/tema2/9.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Instagram
            p Los usuarios pueden compartir fotos y videos de corta duración; fue creada por Kevin Systrom y el brasileño Mike Krieger en el 2010. Adicional a las fotos y videos, se les puede aplicar filtros y compartirlos, tanto en perfil como en las historias.
        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/22.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Facebook" :icon="require('@/assets/curso/tema2/9.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Facebook
            p Diseñada para permitir una conexión entre los usuarios, facilitando la interacción con amigos, familiares, compañeros de trabajo y personas con intereses comunes. Con más de 2.800 millones de usuarios activos mensuales, y creada por Mark Zuckerberg en febrero del 2004.
        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/23.png', alt='')

      .tabs-content.border.px-4.p-md-5.py-3(titulo="Trend " :icon="require('@/assets/curso/tema2/9.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Trend 
            p Permite crear publicaciones de hasta 500 caracteres de largo, con la opción de incluir enlaces, fotos, secuencias y videos de hasta 5 minutos de duración; desarrollada por Meta, la empresa matriz de Facebook e Instagram. 
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/24.png', alt='', style="width: 100%;")
      .tabs-content.border.px-4.p-md-5.py-3(titulo="X" :icon="require('@/assets/curso/tema2/9.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 X
            p Permite que los usuarios mantengan comunicación constante entre ellos, a través de mensajes rápidos y frecuentes; creada por el empresario Elon Musk en el 2022, inicialmente se llamó Twitter y la rebautizó como <strong>X</strong>, debido a un cambio en la imagen corporativa.
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/25.png', alt='', style="width: 100%;")
    
    p.mb-5 Además de lo anterior, es importante destacar como lo indican Coll Rubio y Micó Sanz (2018), los aspectos claves a considerar en la evolución digital: 

    .row.mb-5.justify-content-center
      .col-lg-7
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="1" titulo="Integración de estrategias 360º") La adopción de estrategias de comunicación 360º, donde las empresas combinan acciones de publicidad y relaciones públicas para aprovechar sinergias y maximizar el impacto en sus audiencias. Este enfoque integrado, permite una comunicación más coherente y efectiva en múltiples canales. <br><br><b>Ejemplo.</b> La empresa Ikea a través del uso maximizado de los recursos, aprovechó la realidad virtual para vender muebles; a través de esta herramienta, permitían a los usuarios proyectar como quedaría la sala, comedor y alcobas, con los muebles que seleccionaran, permitiéndoles así dar visibilidad de esta campaña a través de varios canales y vivir una experiencia real. Esta colaboración se dio con Apple y HTC.  
          p(numero="2" titulo="Importancia de la investigación y la flexibilidad") La investigación previa es fundamental en la toma de decisiones publicitarias. Las empresas analizadas realizan estudios de mercado y seguimiento constante de sus acciones, para ajustar sus estrategias de manera ágil y basada en datos. Esta flexibilidad es esencial en un entorno digital dinámico. <br><br><b>Ejemplo.</b> Un ejemplo de los últimos tiempos y que ha impactado a nivel mundial, es la investigación de mercados que realizó UBER, quienes a través de su aplicación brindan servicio de transporte a sus usuarios. La empresa logró identificar que el medio de comunicación que permitiría solicitar el servicio, sería el teléfono móvil, evitando hacer llamadas para pedir un taxi; adicional, reconocieron a los usuarios la importancia de hacer un seguimiento del viaje y calificar al conductor. Dentro de la atracción de nuevos clientes, realizan descuentos a usuarios que la utilizan por primera vez o a quienes la recomiendan.

          p(numero="3" titulo="Uso de técnicas diversificadas") Las compañías emplean una variedad de técnicas publicitarias, desde campañas en televisión hasta <em>marketing</em> de contenidos y colaboraciones con influencers. La elección de estas técnicas se basa en la búsqueda de sinergias y en la adaptación a las características específicas, de cada público objetivo. <br><br><b>Ejemplo.</b> Un claro ejemplo de campañas exitosas, fue la realizada por la empresa Chipotle (franquicia de restaurantes de comida rápida especializada en cocina tex-mex) con el reto en Tik Tok #LidFlipChallenge que invitaba a los usuarios a voltear la tapa de su bol de burritos Chipotle en el aire y atraparla. El reto se lanzó en el 2019 y rápidamente se hizo viral; batió récords de ventas digitales y descargas de aplicaciones para Chipotle. Adicional, muchos influenciadores se unieron al reto y obtuvieron millones de impresiones, incluyendo cobertura en CNBC, Fast Company, BuzzFeed News y The Atlantic.

          p(numero="4" titulo="Evaluación constante de resultados") La evaluación continua de las acciones publicitarias, permite a las empresas medir la efectividad de sus estrategias y realizar ajustes en tiempo real. Este proceso de retroalimentación, es clave para optimizar recursos y alcanzar los objetivos de comunicación establecidos.
          
      .col-md-8.col-lg-5
        figure
          img(src="@/assets/curso/tema2/26.png", data-aos="zoom-in").mt-4.mt-lg-0

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            //- Referencia con enlace 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/196993" target="_blank" rel="noopener noreferrer") Uribe Beltrán, C. I. (2020). Marketing digital en agencias de publicidad: social media en Mipymes de servicios creativos de Bogotá. Fundación Universitaria Los Libertadores. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/270009" target="_blank" rel="noopener noreferrer") Albuquerque, M. (2023). Marketing de influencia: cómo aplicar la ciencia al arte de la influencia. LID Editorial España.   
            //- Referencia de youtube 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=fr-DjodB6iw" target="_blank" rel="noopener noreferrer") Los de Anteojos. (2020). Evolución de la publicidad.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=q9P2xxLzAcY" target="_blank" rel="noopener noreferrer") Brand Inteligente. (2019). Evaluación de marca: Importancia | Brand Inteligente.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtube.com/shorts/iElWMb54y5E?si=6tItgv0pPvwAcbEB" target="_blank" rel="noopener noreferrer") Ejemplo de Animación de publicidad. Motion Graphics para Magnum Pup. 


          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
   

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
