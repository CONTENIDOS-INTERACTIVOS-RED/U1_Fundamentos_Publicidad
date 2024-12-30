export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Introducción a la publicidad',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Introducción a la publicidad ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Conceptos básicos de publicidad',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Objetivos principales de la publicidad',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Historia y evolución de la publicidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Orígenes, de acuerdo con las etapas históricas',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Publicidad en los siglos XX y XXI: la era digital y los nuevos medios',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Rol de la publicidad en la comunicación del ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Elementos de la comunicación en el <em>marketing</em>',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Medios de comunicación',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Interconexión entre publicidad y otros aspectos del <em>marketing</em>',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Roig, F. A. (2022). La publicidad moderna: De Bretton Woods a la era digital, 1945-1995. Ediciones Infinito.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/218583 ',
    },
    {
      referencia:
        'Kotler, P. (2024). Marketing empresarial: más allá del profesionalismo, hacia la creatividad, el liderazgo y la sostenibilidad. Ediciones Granica.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/267031?page=315',
    },
    {
      referencia:
        'Kotler, P. & Stigliano, G. (2020). Retail 4.0: 10 reglas para la era digital. LID Editorial España.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/269739 ',
    },
    {
      referencia:
        'Feenstra, R. A. (2014). Ética de la publicidad: retos en la era digital. Dykinson.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/58047 ',
    },
    {
      referencia:
        'Perceval, J. M. (2015). Historia mundial de la comunicación. Difusora Larousse - Ediciones Cátedra.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/115201',
    },
    {
      referencia:
        'Sabater Quinto, F. & Monserrat Gauchi, J. (2017). Planificación estratégica de la comunicación en redes sociales. Editorial UOC.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/58649 ',
    },
    {
      referencia:
        'Micó Sanz, J. L. & Coll Rubio, P. (2018). Marketing y comunicación en la nueva economía. Editorial UOC.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/218583 ',
    },
  ],
  glosario: [
    {
      termino: 'Campaña publicitaria',
      significado:
        'Conjunto de estrategias y acciones, organizadas para promocionar un producto, servicio o idea, en un periodo de tiempo específico.',
    },
    {
      termino: 'Ciclo de vida de un producto',
      significado:
        'Etapas por las que pasa un producto, desde su introducción al mercado, hasta su declive.',
    },
    {
      termino: 'Cliente',
      significado:
        'Individuo o entidad que adquiere un producto o servicio a cambio de un pago.',
    },
    {
      termino: 'Comunicación ',
      significado:
        'Proceso de intercambio de mensajes con el fin de informar, persuadir o generar entendimiento.',
    },
    {
      termino: 'Consumidor',
      significado:
        'Persona que utiliza o consume un producto o servicio, para satisfacer una necesidad.',
    },
    {
      termino: '<em>Engagement</em>',
      significado:
        'Nivel de interacción y compromiso emocional entre una marca y su audiencia.',
    },
    {
      termino: 'Interacción',
      significado:
        'Proceso de intercambio entre dos o más personas, marcas o entidades, que genera comunicación activa y retroalimentación.',
    },
    {
      termino: 'Interacciones',
      significado:
        'Acciones mutuas entre usuarios y marcas, como comentarios, compartidos, clics o respuestas a mensajes en plataformas.',
    },
    {
      termino: 'Marca',
      significado:
        'Identidad única de un producto, servicio o empresa que lo diferencia en el mercado.',
    },
    {
      termino: '<em>Marketing</em>',
      significado:
        'Es el conjunto de estrategias y acciones destinadas a identificar, crear, comunicar y entregar valor a un público objetivo, con el fin de satisfacer sus necesidades y deseos, mientras se generan beneficios para la organización. Involucra elementos como investigación de mercado, <em>branding</em>, publicidad, distribución y experiencia del cliente.',
    },
    {
      termino: 'Medios de comunicación',
      significado:
        'Medios a través de los cuales se transmiten mensajes al público, como televisión, radio, prensa, redes sociales y plataformas digitales.',
    },
    {
      termino: 'Producto',
      significado:
        'Bien tangible diseñado para satisfacer necesidades o deseos de los consumidores.',
    },
    {
      termino: 'Receptor',
      significado:
        'Individuo o grupo que recibe y decodifica un mensaje en el proceso de comunicación.',
    },
    {
      termino: 'Red social',
      significado:
        'Plataforma digital donde las personas interactúan, comparten contenido y crean comunidades en línea.',
    },
    {
      termino: 'Segmentación',
      significado:
        'Proceso de dividir un mercado en grupos con características y necesidades similares, para dirigirse de manera más efectiva.',
    },
    {
      termino: 'Servicio',
      significado:
        'Actividad o beneficio intangible que satisface una necesidad específica del consumidor.',
    },
    {
      termino: 'Usuarios',
      significado:
        'Personas que interactúan con productos, servicios o plataformas, consumiendo o respondiendo a los mensajes comunicados.',
    },
    {
      termino: 'Ventas',
      significado:
        'Es el proceso directo mediante el cual una empresa o individuo intercambia un producto o servicio por dinero u otro valor, buscando concretar transacciones que cumplan con las necesidades del cliente y contribuyan a los objetivos comerciales de la organización. Las ventas son la etapa operativa y final del marketing.',
    },
  ],
}
