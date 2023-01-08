const preguntas = [
  {
    pregunta: "¿En qué año se independizó Argentina?",
    img: "https://elabcrural.com/wp-content/uploads/2022/07/declaracion-independencia-1024x768.jpg",
    opciones: [
      { respuesta: "1816", isCorrect: true },
      { respuesta: "1492", isCorrect: false },
      { respuesta: "1810", isCorrect: false },
      { respuesta: "1700", isCorrect: false },
    ],
  },
  {
    pregunta: "¿En qué año terminó la Primera Guerra Mundial?",
    img: "https://concepto.de/wp-content/uploads/2018/02/primera-guerra-mundial-677x451.jpg",
    opciones: [
      { respuesta: "1998", isCorrect: false },
      { respuesta: "1945", isCorrect: false },
      { respuesta: "1918", isCorrect: true },
      { respuesta: "1916", isCorrect: false },
    ],
  },
  {
    pregunta: "¿En qué año se descubrió América?",
    img: "https://www.tuescueladeespanol.es/wp-content/uploads/2015/07/Primeros-homenajes-a-Colon-en-el-Nuevo-Mundo-de-Jose-Garnelo-y-Alda.jpg",
    opciones: [
      { respuesta: "1682", isCorrect: false },
      { respuesta: "1834", isCorrect: false },
      { respuesta: "1492", isCorrect: true },
      { respuesta: "2001", isCorrect: false },
    ],
  },
  {
    pregunta: "¿Quién pintó la Mona Lisa?",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsAMx3KWYD5ISgIBxSPTztUYX3bo8cADkUKw&usqp=CAU",
    opciones: [
      { respuesta: "Leonardo da Vinci", isCorrect: true },
      { respuesta: "Frida Khalo", isCorrect: false },
      { respuesta: "Pablo Picasso", isCorrect: false },
      { respuesta: "Rembrandt", isCorrect: false },
    ],
  },
  {
    pregunta: "¿En dónde fue la Primera Revolución Industrial?",
    img: "https://sebastianbrau.com/wp-content/uploads/2018/10/daily-sun-2018-05-04-8-620x350.jpg",
    opciones: [
      { respuesta: "Australia", isCorrect: false },
      { respuesta: "Inglaterra", isCorrect: true },
      { respuesta: "Alemania", isCorrect: false },
      { respuesta: "España", isCorrect: false },
    ],
  },
  {
    pregunta: "¿Cuándo se fundó Córdoba?",
    img: "https://como-viviren.com/wp-content/uploads/2020/09/vivir-en-cordoba.jpg",
    opciones: [
      { respuesta: "12 de Junio de 1287", isCorrect: false },
      { respuesta: "4 de Julio de 1478", isCorrect: false },
      { respuesta: "6 de Julio de 1573", isCorrect: true },
      { respuesta: "4 de Septiembre de 1696", isCorrect: false },
    ],
  },
  {
    pregunta: "¿Quién pintó la Última Cena?",
    img: "https://cdn.culturagenial.com/es/imagenes/1200px-the-last-supper-leonardo-da-vinci-high-resolution-32x16-cke.jpg",
    opciones: [
      { respuesta: "Gustav Klimt", isCorrect: false },
      { respuesta: "Claude Monet", isCorrect: false },
      { respuesta: "Leonardo da Vinci", isCorrect: true },
      { respuesta: "Rembrandt", isCorrect: false },
    ],
  },
  {
    pregunta: "¿Qué hecho hizo estallar la Primera Guerra Mundial?",
    img: "https://concepto.de/wp-content/uploads/2018/02/primera-guerra-mundial-677x451.jpg",
    opciones: [
      { respuesta: "Guerra de Vietnam", isCorrect: false },
      { respuesta: "Creación de La Unión Soviética", isCorrect: false },
      { respuesta: "Invasión Alemana sobre Polonia", isCorrect: false },
      {
        respuesta: "Asesinato del heredero al trono austrohúngaro",
        isCorrect: true,
      },
    ],
  },
  {
    pregunta: "¿Cuántos años tuvo de duración la Guerra de los 100 años?",
    img: "https://t1.up.ltmcdn.com/es/posts/0/9/7/guerra_de_los_100_anos_causas_y_consecuencias_1790_600.jpg",
    opciones: [
      { respuesta: "116 años", isCorrect: true },
      { respuesta: "100 años", isCorrect: false },
      { respuesta: "162 años", isCorrect: false },
      { respuesta: "Ninguna de las anteriores", isCorrect: false },
    ],
  },
  {
    pregunta: "¿Cuándo San Martin cruzó los Andes?",
    img: "https://research.kent.ac.uk/warandnation/wp-content/uploads/sites/1846/2018/07/Battle_of_Chacabuco-wikipedia-creative-commons.jpg",
    opciones: [
      { respuesta: "En 1672", isCorrect: false },
      { respuesta: "En 1934", isCorrect: false },
      { respuesta: "En 1817", isCorrect: true },
      { respuesta: "En 1576", isCorrect: false },
    ],
  },
  {
    pregunta: "¿De cuántos kilómetros es una maratón?",
    img: "https://yoatomo.files.wordpress.com/2015/04/corredores-en-el-maratc3b3n-de-boston.jpg",
    opciones: [
      { respuesta: "35.210 km", isCorrect: false },
      { respuesta: "5.435 km", isCorrect: false },
      { respuesta: "10.000 km", isCorrect: false },
      { respuesta: "42.195 km", isCorrect: true },
    ],
  },
  {
    pregunta: "¿Cuántos jugadores hay en un equipo de béisbol?",
    img: "https://eloficiodehistoriar.com.mx/wp-content/uploads/2020/10/Beisbol.jpg",
    opciones: [
      { respuesta: "9", isCorrect: true },
      { respuesta: "11", isCorrect: false },
      { respuesta: "5", isCorrect: false },
      { respuesta: "8", isCorrect: false },
    ],
  },
  {
    pregunta: "¿Qué país ganó la Copa del Mundo 2018?",
    img: "https://www.mundodeportivo.com/files/image_449_220/uploads/2018/07/15/60e73d59cecb0.jpeg",
    opciones: [
      { respuesta: "España", isCorrect: false },
      { respuesta: "Francia", isCorrect: true },
      { respuesta: "Alemania", isCorrect: false },
      { respuesta: "Bélgica", isCorrect: false },
    ],
  },
  {
    pregunta: "¿Qué deporte es considerado el “rey de los deportes”?",
    img: "https://www.diariocritico.com/fotos/1/football-1350792_1280.jpg",
    opciones: [
      { respuesta: "Tenis", isCorrect: false },
      { respuesta: "Baloncesto", isCorrect: false },
      { respuesta: "Fútbol", isCorrect: true },
      { respuesta: "Padel", isCorrect: false },
    ],
  },
  {
    pregunta:
      "¿De qué color es la tarjeta que enseña un árbitro de fútbol para echar un jugador?",
    img: "https://www.elquindiano.com/upload/article/b202110301133304.jpg",
    opciones: [
      { respuesta: "Naranja", isCorrect: false },
      { respuesta: "Azul", isCorrect: false },
      { respuesta: "Roja", isCorrect: true },
      { respuesta: "Negro", isCorrect: false },
    ],
  },
  {
    pregunta: "¿En qué deporte se conoce al árbitro como juez de silla?",
    img: "https://ichef.bbci.co.uk/news/640/cpsprodpb/13B06/production/_103364608_gettyimages-1029421842.jpg",
    opciones: [
      { respuesta: "En el Fútbol", isCorrect: false },
      { respuesta: "En el Padel", isCorrect: false },
      { respuesta: "En el Tenis", isCorrect: true },
      { respuesta: "En el handball", isCorrect: false },
    ],
  },
  {
    pregunta:
      "¿Qué fútbolista jugó en el Barcelona:  Ronaldo, Ronaldinho, Romario?",
    img: "https://image.shutterstock.com/image-photo/france-january-21-2020-fc-260nw-1621753657.jpg",
    opciones: [
      { respuesta: "Ronaldo Nazário", isCorrect: false },
      { respuesta: "Ronaldinho", isCorrect: false },
      { respuesta: "Romario", isCorrect: false },
      { respuesta: "Todos", isCorrect: true },
    ],
  },
  {
    pregunta: "¿A qué trofeo futbolístico se le conoce como la orejona?",
    img: "https://www.mundiario.com/asset/thumbnail,1280,720,center,center/media/mundiario/images/2014/03/22/2015092400105944142.jpg",
    opciones: [
      { respuesta: "Copa América", isCorrect: false },
      { respuesta: "Europa League", isCorrect: false },
      { respuesta: "Copa Sudamericana", isCorrect: false },
      { respuesta: "Champions League", isCorrect: true },
    ],
  },
  {
    pregunta: "¿Cuánto dura una parte de un partido de fútbol?",
    img: "https://panel.carreraspopulares.com/imagesRV/O/2110/616568d6c7723.JPG",
    opciones: [
      { respuesta: "30 Minutos", isCorrect: false },
      { respuesta: "50 Minutos", isCorrect: false },
      { respuesta: "45 Minutos", isCorrect: true },
      { respuesta: "20 Minutos", isCorrect: false },
    ],
  },
  {
    pregunta: "¿Quién hace el primer movimiento en una partida de ajedrez?",
    img: "https://thezugzwangblog.com/wp-content/uploads/2017/04/reloj-ajedrez-alcanzar-objetivos.jpg",
    opciones: [
      { respuesta: "Negras", isCorrect: false },
      { respuesta: "Blancas", isCorrect: true },
      { respuesta: "Azules", isCorrect: false },
      { respuesta: "Rojas", isCorrect: false },
    ],
  },
  {
    pregunta: "¿Cuántos océanos hay en la Tierra?",
    img: "https://vetmarketportal.com.ar/uploads/ckeditor/2022/06/20220607160721_tierra.jpg",
    opciones: [
      { respuesta: "5", isCorrect: true },
      { respuesta: "2", isCorrect: false },
      { respuesta: "1", isCorrect: false },
      { respuesta: "10", isCorrect: false },
    ],
  },
  {
    pregunta: "¿Qué país es el más grande del mundo?",
    img: "https://static4.depositphotos.com/1011006/288/v/600/depositphotos_2889469-stock-illustration-multicolored-detailed-world-map.jpg",
    opciones: [
      { respuesta: "Japón", isCorrect: false },
      { respuesta: "Rusia", isCorrect: true },
      { respuesta: "Estados Unidos", isCorrect: false },
      { respuesta: "Italia", isCorrect: false },
    ],
  },
  {
    pregunta: "¿Cuál es la montaña más alta del mundo? ",
    img: "https://ep00.epimg.net/elviajero/imagenes/2019/12/06/album/1575647129_239693_1575890396_album_normal.jpg",
    opciones: [
      { respuesta: "La Cordillera de los Andes", isCorrect: false },
      { respuesta: "Monte Everest", isCorrect: true },
      { respuesta: "K2", isCorrect: false },
      { respuesta: "Kanchenjunga", isCorrect: false },
    ],
  },
  {
    pregunta: "¿Cuál es el río más largo del mundo?",
    img: "https://t2.ev.ltmcdn.com/es/posts/8/3/2/que_es_y_como_se_forma_un_rio_3238_0_600.jpg",
    opciones: [
      { respuesta: "Nilo", isCorrect: false },
      { respuesta: "Amazonas", isCorrect: true },
      { respuesta: "Río Misisipi", isCorrect: false },
      { respuesta: "Yangtze River", isCorrect: false },
    ],
  },
  {
    pregunta: "¿De dónde provienen los osos polares?",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/09/Polar_Bear_-_Alaska.jpg",
    opciones: [
      { respuesta: "Polo Norte", isCorrect: true },
      { respuesta: "Montañas", isCorrect: false },
      { respuesta: "Bosques", isCorrect: false },
      { respuesta: "Montañas Heladas", isCorrect: false },
    ],
  },
  {
    pregunta: "¿Cuál es la ciudad más poblada del mundo?",
    img: "https://www.bbva.com/wp-content/uploads/2019/01/EFE-aglomeracion-gente-personas-calle-ciudad-recurso-bbva.jpg",
    opciones: [
      { respuesta: "Ciudad de México", isCorrect: false },
      { respuesta: "Delhi", isCorrect: false },
      { respuesta: "São Paulo", isCorrect: false },
      { respuesta: "Tokio", isCorrect: true },
    ],
  },
  {
    pregunta: "¿Existen países con más de una capital?",
    img: "https://t2.up.ltmcdn.com/es/posts/7/0/5/paises_y_capitales_del_mundo_por_continentes_1507_orig.jpg",
    opciones: [
      { respuesta: "No", isCorrect: false },
      { respuesta: "Si", isCorrect: true },
    ],
  },
  {
    pregunta: "¿Cuántos estados forman parte de Estados Unidos?",
    img: "https://p4.wallpaperbetter.com/wallpaper/878/646/559/usa-flag-4k-wallpaper-preview.jpg",
    opciones: [
      { respuesta: "40", isCorrect: false },
      { respuesta: "50", isCorrect: true },
      { respuesta: "100", isCorrect: false },
      { respuesta: "20", isCorrect: false },
    ],
  },
  {
    pregunta: "¿Cuántos continentes existen?",
    img: "https://concepto.de/wp-content/uploads/2019/04/continentes-800x410.jpg",
    opciones: [
      { respuesta: "7", isCorrect: false },
      { respuesta: "2", isCorrect: false },
      { respuesta: "5", isCorrect: true },
      { respuesta: "10", isCorrect: false },
    ],
  },
  {
    pregunta: "¿El Mar Muerto es realmente un mar?",
    img: "https://ichef.bbci.co.uk/news/640/cpsprodpb/75E7/production/_89938103_deadseadrone.jpg",
    opciones: [
      { respuesta: "Si", isCorrect: false },
      { respuesta: "No, es un lago", isCorrect: true },
    ],
  },
  {
    pregunta: "¿En qué país hay un mayor número de pirámides?",
    img: "https://images.memphistours.com/large/5ac9351d081585ec86b2e35ab04c3437.jpg",
    opciones: [
      { respuesta: "Sudán", isCorrect: true },
      { respuesta: "India", isCorrect: false },
      { respuesta: "Egipto", isCorrect: false },
      { respuesta: "México", isCorrect: false },
    ],
  },
  {
    pregunta: "¿Qué país se encuentra entre dos continentes?",
    img: "https://www.clubniva.com/media/kunena/attachments/16/3_2017-10-14.jpg",
    opciones: [
      { respuesta: "China", isCorrect: false },
      { respuesta: "Bélgica", isCorrect: false },
      { respuesta: "Australia", isCorrect: false },
      { respuesta: "Turquía", isCorrect: true },
    ],
  },
  {
    pregunta: "¿Dónde encontramos el Machu Picchu?",
    img: "https://www.lavanguardia.com/files/image_948_465/uploads/2021/08/04/610a50e5efa88.jpeg",
    opciones: [
      { respuesta: "Colombia", isCorrect: false },
      { respuesta: "Argentina", isCorrect: false },
      { respuesta: "Perú", isCorrect: true },
      { respuesta: "Venezuela", isCorrect: false },
    ],
  },
  {
    pregunta: "¿Rusia pertenece a Europa o a Asia?",
    img: "https://mf.b37mrtl.ru/rbthmedia/images/2022.08/article/630308d041d99960fa0a41aa.jpg",
    opciones: [
      { respuesta: "Europa", isCorrect: false },
      { respuesta: "Asia", isCorrect: true },
    ],
  },
  {
    pregunta: "¿Cuál es la lengua más hablada del mundo?",
    img: "https://culturacientifica.com/app/uploads/2018/07/hablando.jpg",
    opciones: [
      { respuesta: "Español", isCorrect: false },
      { respuesta: "Inglés", isCorrect: true },
      { respuesta: "Chino mandarín", isCorrect: false },
      { respuesta: "Francés", isCorrect: false },
    ],
  },

  {
    pregunta: "¿Qué es la petanca?",
    img: "https://www.competize.com/blog/wp-content/uploads/2022/10/bola-petanca-boliche-pista-arena-.jpg",
    opciones: [
      { respuesta: "Un juego", isCorrect: false },
      { respuesta: "Un deporte", isCorrect: true },
      { respuesta: "Pelotas", isCorrect: false },
      { respuesta: "Una regla", isCorrect: false },
    ],
  },
  {
    pregunta:
      "¿Entre los dos equipos, cuántos jugadores hay en un partido de fútbol sala?",
    img: "https://as01.epimg.net/masdeporte/imagenes/2020/04/22/polideportivo/1587569697_160878_1587572756_noticia_normal_recorte1.jpg",
    opciones: [
      { respuesta: "5", isCorrect: false },
      { respuesta: "11", isCorrect: false },
      { respuesta: "9", isCorrect: false },
      { respuesta: "10", isCorrect: true },
    ],
  },
  {
    pregunta:
      "¿Quién metió el único gol de España en la final del Mundial de fútbol de 2010?",
    img: "https://images2.minutemediacdn.com/image/upload/c_fill,w_912,h_516,f_auto,q_auto,g_auto/shape/cover/sport/top-from-l-spain-s-striker-pedro-spai-5e92e606427ad66f5c000001.jpg",
    opciones: [
      { respuesta: "Karim Benzema", isCorrect: false },
      { respuesta: "Andrés Iniesta", isCorrect: true },
      { respuesta: "Luis Suárez", isCorrect: false },
      { respuesta: "Messi", isCorrect: false },
    ],
  },
  {
    pregunta: "¿Qué deporte de competición se practica con unas flechas?",
    img: "https://mipelason.files.wordpress.com/2009/05/tiro_con_arco_mesoncico_cehegin.jpg",
    opciones: [
      { respuesta: "Tiro con arco", isCorrect: true },
      { respuesta: "Ciclismo", isCorrect: false },
      { respuesta: "Natación", isCorrect: false },
      { respuesta: "Golf", isCorrect: false },
    ],
  },
  {
    pregunta: "¿En qué país se inventó el fútbol?",
    img: "https://fotos.perfil.com/2022/08/12/trim/720/410/pelota-adidas-1401755.jpg",
    opciones: [
      { respuesta: "Argentina", isCorrect: false },
      { respuesta: "China", isCorrect: false },
      { respuesta: "Inglaterra", isCorrect: true },
      { respuesta: "Rusia", isCorrect: false },
    ],
  },
  {
    pregunta: "¿Cuál es el país más pequeño de América?",
    img: "https://www.researchgate.net/profile/Geovany-Silva/publication/328123087/figure/fig1/AS:678731941150721@1538833713362/Figura-1-Mapa-politico-de-America-Latina-Fuente-Disponible-en-https-aofrevues_Q640.jpg",
    opciones: [
      { respuesta: "Paraguay", isCorrect: false },
      { respuesta: "Honduras", isCorrect: false },
      { respuesta: "El Salvador", isCorrect: false },
      { respuesta: "San Cristóbal", isCorrect: true },
    ],
  },
  {
    pregunta: "¿Cuántos mares existen en la Tierra?",
    img: "https://www.meteorologiaenred.com/wp-content/uploads/2019/05/mares-y-oc%C3%A9anos.jpg",
    opciones: [
      { respuesta: "50", isCorrect: false },
      { respuesta: "10", isCorrect: false },
      { respuesta: "60", isCorrect: true },
      { respuesta: "20", isCorrect: false },
    ],
  },
  {
    pregunta: "¿Qué son los icebergs?",
    img: "https://media.ambito.com/p/bd46412a683e37dcc51b5d334c73f244/adjuntos/239/imagenes/038/225/0038225634/iceberg1jpg.jpg",
    opciones: [
      { respuesta: "Montañas", isCorrect: false },
      { respuesta: "Masas de Hielo", isCorrect: true },
      { respuesta: "Cascadas", isCorrect: false },
      { respuesta: "Montañas de Hielo", isCorrect: false },
    ],
  },
  {
    pregunta: "¿Dónde está el Mar Muerto?",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Dead_Sea_by_David_Shankbone.jpg/800px-Dead_Sea_by_David_Shankbone.jpg",
    opciones: [
      { respuesta: "Rusia", isCorrect: false },
      { respuesta: "África", isCorrect: false },
      { respuesta: "Egipto", isCorrect: false },
      { respuesta: "Israel", isCorrect: true },
    ],
  },
  {
    pregunta: "¿Dónde se encuentra el Amazonas?",
    img: "https://decologia.info/wp-content/uploads/2018/09/Selva-Amazonica.jpg",
    opciones: [
      { respuesta: "Brasil", isCorrect: true },
      { respuesta: "Chile", isCorrect: false },
      { respuesta: "Bélgica", isCorrect: false },
      { respuesta: "Alemania", isCorrect: false },
    ],
  },
  {
    pregunta: "¿Cuándo se creó Google?",
    img: "https://1000marcas.net/wp-content/uploads/2020/02/Google-Logo-2013.jpg",
    opciones: [
      { respuesta: "1950", isCorrect: false },
      { respuesta: "2000", isCorrect: false },
      { respuesta: "1998", isCorrect: true },
      { respuesta: "2011", isCorrect: false },
    ],
  },
  {
    pregunta: "¿Cuándo se creó el primer celular táctil?",
    img: "https://resizer.iproimg.com/unsafe/880x/filters:format(webp)/https://assets.iprofesional.com/assets/jpg/2021/07/520026.jpg",
    opciones: [
      { respuesta: "1996", isCorrect: true },
      { respuesta: "2002", isCorrect: false },
      { respuesta: "1890", isCorrect: false },
      { respuesta: "1819", isCorrect: false },
    ],
  },
  {
    pregunta: "¿Cuándo se creó el himno nacional argentino?",
    img: "http://c.files.bbci.co.uk/D348/production/_95588045_178392703.jpg",
    opciones: [
      { respuesta: "1900", isCorrect: false },
      { respuesta: "1890", isCorrect: false },
      { respuesta: "1816", isCorrect: false },
      { respuesta: "1813", isCorrect: true },
    ],
  },
  {
    pregunta: "¿Qué país sufrió el terremoto más grande de la Historia?",
    img: "https://static.dw.com/image/55447370_303.jpg",
    opciones: [
      { respuesta: "Japón", isCorrect: false },
      { respuesta: "México", isCorrect: false },
      { respuesta: "Chile", isCorrect: true },
      { respuesta: "Uruguay", isCorrect: false },
    ],
  },
  {
    pregunta:
      "¿Qué imperio indigena fue conquistado por el español Hernán Cortés?",
    img: "https://www.elhistoriador.com.ar/wp-content/uploads/2017/11/imperioazteca-696x220.jpg",
    opciones: [
      { respuesta: "Incas", isCorrect: false },
      { respuesta: "Mayas", isCorrect: false },
      { respuesta: "Azteca", isCorrect: true },
      { respuesta: "Calimas", isCorrect: false },
    ],
  },
];

export default preguntas;
