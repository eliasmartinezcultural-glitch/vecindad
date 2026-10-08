window.VECINDAD_DATA = {
  meta:{version:"1.0",concept:"Entender. Preguntar. Participar.",territory:"San Patricio del Chañar",rule:"Cada afirmación importante debe poder rastrearse hasta una fuente o quedar marcada como pregunta abierta."},
  method:[
    ["01","Pregunta","¿Qué queremos saber?"],
    ["02","Contexto","¿Qué necesitamos conocer primero?"],
    ["03","Actores","¿Quiénes intervienen?"],
    ["04","Competencia","¿Quién puede decidir?"],
    ["05","Norma","¿Qué regla corresponde?"],
    ["06","Evidencia","¿Qué documento lo demuestra?"],
    ["07","Escenarios","¿Qué puede pasar?"],
    ["08","Acción","¿Qué puede hacer un vecino?"]
  ],
  evidence:[
    {id:"verified",label:"SABEMOS",text:"Hay una fuente que lo respalda.",tone:"green"},
    {id:"research",label:"ESTAMOS BUSCANDO",text:"La pregunta existe; la evidencia todavía está incompleta.",tone:"yellow"},
    {id:"contested",label:"HAY VERSIONES DIFERENTES",text:"Hay interpretaciones o relatos que deben compararse.",tone:"orange"},
    {id:"unproven",label:"NO ESTÁ COMPROBADO",text:"No presentamos una afirmación como hecho sin evidencia suficiente.",tone:"red"},
    {id:"historical",label:"HISTÓRICO",text:"Se analiza como hecho, proceso o documento del pasado.",tone:"blue"}
  ],
  doors:[
    {id:"municipio",icon:"🏛️",title:"Cómo funciona el municipio",desc:"Quién decide, quién controla y cómo se organiza.",tags:["instituciones","competencias","carta orgánica"]},
    {id:"dinero",icon:"💰",title:"Cómo se usa la plata pública",desc:"Presupuesto, recursos, gastos, compras y rendición.",tags:["presupuesto","compras","rendición"]},
    {id:"obras",icon:"🏗️",title:"Cómo se hacen las obras",desc:"De la necesidad al proyecto, contratación, ejecución y control.",tags:["obra pública","contratos","control"]},
    {id:"territorio",icon:"🗺️",title:"Cómo se ordena el territorio",desc:"Suelo, urbanización, espacios y reglas para crecer.",tags:["urbanismo","suelo","planificación"]},
    {id:"vivienda",icon:"🏠",title:"Vivienda",desc:"Qué puede hacer el municipio y qué depende de otros niveles.",tags:["hábitat","vivienda","provincia"]},
    {id:"ambiente",icon:"🌱",title:"Ambiente",desc:"Residuos, agua, territorio y responsabilidades compartidas.",tags:["ambiente","residuos","agua"]},
    {id:"pueblos",icon:"🪶",title:"Pueblos originarios",desc:"Historia, territorio, derechos, fuentes y memoria.",tags:["historia","territorio","derechos"]},
    {id:"historia",icon:"📜",title:"Historia",desc:"Cómo reconstruir el pasado sin mezclar memoria, relato y evidencia.",tags:["historia","documentos","memoria"]},
    {id:"patrimonio",icon:"🏺",title:"Patrimonio",desc:"Qué se protege, por qué y con qué instrumentos.",tags:["patrimonio","cultura","historia"]},
    {id:"cultura",icon:"🎭",title:"Cultura",desc:"Instituciones, espacios, políticas y vida cultural.",tags:["cultura","comunidad","espacios"]},
    {id:"educacion",icon:"🏫",title:"Educación",desc:"Qué corresponde al municipio y qué corresponde a la provincia.",tags:["escuelas","provincia","municipio"]},
    {id:"salud",icon:"❤️",title:"Salud",desc:"Competencias locales, provinciales y nacionales.",tags:["salud","competencias","servicios"]},
    {id:"servicios",icon:"🗑️",title:"Servicios",desc:"Qué servicio existe, quién lo presta y cómo se controla.",tags:["residuos","servicios","contratos"]},
    {id:"faltas",icon:"⚖️",title:"Faltas y multas",desc:"Qué se considera falta, quién juzga y qué procedimiento existe.",tags:["faltas","justicia","procedimiento"]},
    {id:"derechos",icon:"🙋",title:"Derechos del vecino",desc:"Información, participación, reclamos y herramientas ciudadanas.",tags:["derechos","información","participación"]},
    {id:"participacion",icon:"🗣️",title:"Participación",desc:"Cómo pasar de la opinión a una participación documentada.",tags:["participación","consejos","audiencias"]},
    {id:"investigar",icon:"🔎",title:"Quiero investigar algo",desc:"Convertí una duda cotidiana en una investigación ordenada.",tags:["pregunta","evidencia","fuentes"]}
  ],
  topics:{
    municipio:{question:"¿Quién puede decidir sobre un tema municipal?",route:["Pregunta","Contexto","Actores","Competencia","Norma","Evidencia","Acción"],questions:["¿Qué órgano interviene?","¿Es una competencia municipal, provincial, nacional o compartida?","¿Qué norma define esa competencia?","¿Qué documento permite comprobarlo?"]},
    dinero:{question:"¿Cómo sé en qué se usa el dinero público?",route:["Pregunta","Presupuesto","Ejecución","Contratación","Rendición","Evidencia","Acción"],questions:["¿Qué presupuesto corresponde?","¿Se trata de presupuesto aprobado o gasto efectivamente ejecutado?","¿Existe contratación, orden de compra o acto administrativo?","¿Qué rendición o documento de control corresponde?"]},
    obras:{question:"¿Cómo se puede seguir una obra pública?",route:["Necesidad","Proyecto","Contratación","Ejecución","Control","Evidencia","Acción"],questions:["¿Qué obra se anuncia?","¿Con qué fondos?","¿Quién contrata?","¿Qué empresa o modalidad aparece en el expediente?","¿Qué documento permite verificar avance y pago?"]},
    territorio:{question:"¿Quién decide qué se puede hacer en un lugar?",route:["Lugar","Norma territorial","Competencia","Permiso","Evidencia","Escenarios","Acción"],questions:["¿Qué uso del suelo corresponde?","¿Qué instrumento territorial aplica?","¿Qué autoridad tiene competencia?","¿Existe permiso, habilitación o acto administrativo?"]},
    ambiente:{question:"¿Quién responde por un problema ambiental?",route:["Problema","Territorio","Competencia","Norma","Evidencia","Escenarios","Acción"],questions:["¿Dónde ocurre?","¿Qué autoridad tiene competencia?","¿Existe norma específica?","¿Qué evidencia permite describir el problema sin exagerarlo?"]},
    pueblos:{question:"¿Cómo investigar la historia y los derechos de los pueblos originarios?",route:["Historia","Territorio","Actores","Normas","Fuentes","Contrastes","Acción"],questions:["¿Qué documento histórico estamos usando?","¿Qué institución o archivo conserva la fuente?","¿Qué normativa provincial/nacional corresponde?","¿Qué diferencia hay entre memoria, relato e información documentada?"]},
    historia:{question:"¿Cómo sabemos que algo ocurrió?",route:["Pregunta","Fuente","Contexto","Contraste","Evidencia","Conclusión"],questions:["¿Cuál es la fuente más cercana al hecho?","¿Quién la produjo?","¿Cuándo?","¿Qué otras fuentes la confirman o contradicen?"]},
    derechos:{question:"¿Qué puede pedir, preguntar o reclamar un vecino?",route:["Problema","Derecho","Autoridad","Procedimiento","Documento","Seguimiento"],questions:["¿Qué quiero obtener?","¿Quién tiene la información?","¿Qué norma o procedimiento corresponde?","¿Cómo dejo constancia del pedido?"]},
    investigar:{question:"¿Tenés una duda concreta?",route:["Pregunta","Contexto","Actores","Competencia","Norma","Evidencia","Escenarios","Acción"],questions:["Escribí la afirmación exacta.","Separá dato, opinión y rumor.","Preguntá quién decide.","Buscá el documento primario.","Anotá qué todavía no se puede afirmar."]}
  },
  sourceTypes:[
    {id:"carta",label:"Carta Orgánica Municipal",kind:"Fuente primaria",role:"Marco institucional central."},
    {id:"ordenanza",label:"Ordenanzas y reglamentos",kind:"Fuente primaria",role:"Reglas municipales concretas."},
    {id:"decreto",label:"Decretos y actos administrativos",kind:"Fuente primaria",role:"Decisiones y actuaciones del gobierno municipal."},
    {id:"presupuesto",label:"Presupuesto y rendición",kind:"Fuente primaria",role:"Permiten estudiar recursos, gastos y control."},
    {id:"provincial",label:"Normativa provincial",kind:"Fuente primaria",role:"Reglas y competencias que exceden al municipio."},
    {id:"nacional",label:"Normativa nacional",kind:"Fuente primaria",role:"Marco nacional aplicable según el tema."},
    {id:"control",label:"Organismos de control",kind:"Institucional",role:"Fuentes de fiscalización y control."},
    {id:"historica",label:"Archivos y fuentes históricas",kind:"Fuente histórica",role:"Documentos para reconstruir procesos y memoria."},
    {id:"secundaria",label:"Investigación y fuentes secundarias",kind:"Fuente secundaria",role:"Contexto y análisis que debe poder contrastarse."},
    {id:"interpretacion",label:"Interpretación VECINDAD",kind:"Interpretación",role:"Explicación pedagógica; no reemplaza el documento original."}
  ],
  rules:[
    "La Carta Orgánica es el ADN institucional, no la protagonista visual.",
    "No se inventan artículos, competencias, cifras ni procedimientos.",
    "Si falta evidencia, se dice que falta evidencia.",
    "Toda afirmación importante debe poder rastrearse a una fuente.",
    "Municipio, Provincia, Nación y Justicia no son lo mismo.",
    "Los ejemplos ficticios deben estar rotulados como ficticios.",
    "Una explicación sencilla no debe deformar el contenido jurídico."
  ]
};