const CALENDARIS = {

  "versio": "v1",
  "calendaris" : [

    {
      "centre_id": "08013329",
      "nom" : "EA Llotja",
      "curs" : "2025-2026",
      "calendari" : { 
        "batxillerat": {
          "inici":"12/09/2025",
          "final":"20/06/2026",
          "avaluacions" : {
            "ordinaria1" :"",
            "ordinaria2" :"",
            "ordinaria3" :""
          }
        },
        "EDAPC": {
          "inici":"12/09/2025",
          "final":"20/06/2026",
          "avaluacions" : {
            "ordinaria1" :"",
            "ordinaria2" :"",
            "ordinaria3" :""
          }
        },
        "CFGS" : {
          "inici":"12/09/2025",
          "final":"20/06/2026",
          "avaluacions" : {
            "ordinaria1" :"",
            "ordinaria2" :"",
            "ordinaria3" :""
          }
        },
        "CFGM" : {
          "inici":"12/09/2025",
          "final":"20/06/2026",
          "avaluacions" : {
            "ordinaria1" :"",
            "ordinaria2" :"",
            "ordinaria3" :""
          }
        }
      },

      "festius": {        
        "La Purísima" : "08/12/2025",
        "La Mercè" : "25/09/2025",
        "Pasqua" : "09/09/2025",
        "La Hispanidad" : "12/10/2026",
        "1 de Maig" : "01/05/2026",
        "Segona Pasqua" : "25/05/2026" 
      },

      "vacances": {

        "Nadal": {
          "inici":"21/12/2025",
          "final":"07/01/2026"
        },
        "Setmana Santa" : {
          "inici":"28/03/2026",
          "final":"06/04/2026"
        }
      }
    }
  
  ]};





/**
 * Funció d'ajuda per mostrar informació sobre dates del curs 2025_2026
 * @customfunction
 */
function CURS_2025_2026_AJUDA(){
  return [
    ['Dia', 'Explicació'],
    ['Inici_Curs', '12/09/2025'],
    ['Final_Curs', '20/06/2025'],
    ['Festiu_Local_Merce', '25/09/2025'],
    ['Festiu_Castanyada', '03/11/2025'],
    ['Festiu_La_Purísima', '08/12/2025'],
    ['Festiu_Local_Pasqua', '09/09/2025'],
    ['Festiu_Hispanitat', '12/10/2025'],
    ['Festiu_Carnaval', '16/02/2026'],
    ['Festiu_Nadal_inici', '21/12/2025'],
    ['Festiu_Nadal_fi', '07/01/2026'],
    ['Festiu_Setmana_Santa_inici', '28/03/2026'],
    ['Festiu_Setmana_Santa_fi', '06/04/2026'],
    ['Festiu_Segona_Pasqua', '22/05/2026'],
    ['Festiu_1_de_Maig', '01/05/2026'],
  ];
}










/**
 * Pinta el color la cel·la depenent si posa T F R.
 * @param {string} Fila inici, fila final, columna inici, columna final
 * 
 * @customfunction
 */


/**
 * Comprova si una data de naixement té exactament 18 anys d'onomàstica avui.
 * Retorna TRUE si la persona compleix 18 anys avui, FALSE si no.
 * 
 * @param {string} dataNaixement Data de naixement en format dd/mm/yyyy (exemple: "15/06/2006")
 * @return {boolean} TRUE si avui és l'onomàstica dels 18 anys, FALSE si no
 * @customfunction
 */
function ES_ONOMASTICA_18_ANYS(dataNaixement) {
  function stringAData(dataString) {
    if (!dataString) {
      throw new Error("Cal proporcionar una data en format dd/mm/yyyy");
    }
    
    var parts = dataString.toString().split('/');
    if (parts.length !== 3) {
      throw new Error("Format de data incorrecte. Utilitza dd/mm/yyyy");
    }
    
    var dia = parseInt(parts[0], 10);
    var mes = parseInt(parts[1], 10);
    var any = parseInt(parts[2], 10);
    
    if (isNaN(dia) || isNaN(mes) || isNaN(any)) {
      throw new Error("La data conté valors no numèrics");
    }
    
    var data = new Date(any, mes - 1, dia);
    
    if (data.getDate() !== dia || data.getMonth() !== (mes - 1) || data.getFullYear() !== any) {
      throw new Error("Data no vàlida: " + dataString);
    }
    
    return data;
  }
  
  try {
    // Obtenir la data actual
    var avui = new Date();
    
    // Convertir la data de naixement
    var naixement = stringAData(dataNaixement);
    
    // Validar que la data de naixement no sigui futura
    if (naixement > avui) {
      return false; // No pot haver nascut en el futur
    }
    
    // Calcular la data dels 18 anys (mateix dia i mes, però 18 anys després)
    var onomastica18 = new Date(naixement.getFullYear() + 18, naixement.getMonth(), naixement.getDate());
    
    // Comprovar si avui és exactament la data de l'onomàstica dels 18 anys
    return (avui.getDate() === onomastica18.getDate() && 
            avui.getMonth() === onomastica18.getMonth() && 
            avui.getFullYear() === onomastica18.getFullYear());
    
  } catch (error) {
    return false; // En cas d'error, retornar false
  }
}

/**
 * Calcula l'edat exacta en anys d'una persona basant-se en la seva data de naixement.
 * 
 * @param {string} dataNaixement Data de naixement en format dd/mm/yyyy
 * @return {number} Edat en anys complets
 * @customfunction
 */
function CALCULAR_EDAT(dataNaixement) {
  function stringAData(dataString) {
    var parts = dataString.toString().split('/');
    var dia = parseInt(parts[0], 10);
    var mes = parseInt(parts[1], 10);
    var any = parseInt(parts[2], 10);
    return new Date(any, mes - 1, dia);
  }
  
  try {
    var avui = new Date();
    var naixement = stringAData(dataNaixement);
    
    if (naixement > avui) {
      return 0; // No pot haver nascut en el futur
    }
    
    var edat = avui.getFullYear() - naixement.getFullYear();
    
    // Comprovar si encara no ha arribat l'aniversari aquest any
    var mesNaix = naixement.getMonth();
    var diaNaix = naixement.getDate();
    var mesActual = avui.getMonth();
    var diaActual = avui.getDate();
    
    if (mesActual < mesNaix || (mesActual === mesNaix && diaActual < diaNaix)) {
      edat--; // Encara no ha complert anys aquest any
    }
    
    return edat;
    
  } catch (error) {
    return 0;
  }
}

/**
 * Comprova si una persona és major d'edat (18 anys o més).
 * 
 * @param {string} dataNaixement Data de naixement en format dd/mm/yyyy
 * @return {boolean} TRUE si és major d'edat, FALSE si no
 * @customfunction
 */
function ES_MAJOR_EDAT(dataNaixement) {
  try {
    var edat = CALCULAR_EDAT(dataNaixement);
    return edat >= 18;
  } catch (error) {
    return false;
  }
}

/**
 * Comprova si una persona és major d'edat (18 anys o més).
 * 
 * @param {string} dataNaixement Data de naixement en format dd/mm/yyyy
 * @return {boolean} TRUE si és major d'edat, FALSE si no
 * @customfunction
 */
function ES_MENOR_EDAT(dataNaixement) {
  try {
    var edat = CALCULAR_EDAT(dataNaixement);
    return edat < 18;
  } catch (error) {
    return false;
  }
}


/**
 * Retorna la data exacta quan una persona complirà o va complir 18 anys.
 * 
 * @param {string} dataNaixement Data de naixement en format dd/mm/yyyy
 * @return {string} Data dels 18 anys en format dd/mm/yyyy
 * @customfunction
 */
function ANIVERSARI_18_ANYS(dataNaixement) {
  function stringAData(dataString) {
    var parts = dataString.toString().split('/');
    var dia = parseInt(parts[0], 10);
    var mes = parseInt(parts[1], 10);
    var any = parseInt(parts[2], 10);
    return new Date(any, mes - 1, dia);
  }
  
  function dataAString(data) {
    var dia = ("0" + data.getDate()).slice(-2);
    var mes = ("0" + (data.getMonth() + 1)).slice(-2);
    var any = data.getFullYear();
    return dia + "/" + mes + "/" + any;
  }
  
  try {
    var naixement = stringAData(dataNaixement);
    var data18 = new Date(naixement.getFullYear() + 18, naixement.getMonth(), naixement.getDate());
    return dataAString(data18);
    
  } catch (error) {
    return "Error: " + error.message;
  }
}

/**
 * Calcula quants dies falten per complir 18 anys (o quants fa que els va complir).
 * 
 * @param {string} dataNaixement Data de naixement en format dd/mm/yyyy
 * @return {number} Dies que falten (positiu) o dies transcorreguts (negatiu)
 * @customfunction
 */
function DIES_FINS_18_ANYS(dataNaixement) {
  function stringAData(dataString) {
    var parts = dataString.toString().split('/');
    var dia = parseInt(parts[0], 10);
    var mes = parseInt(parts[1], 10);
    var any = parseInt(parts[2], 10);
    return new Date(any, mes - 1, dia);
  }
  
  try {
    var avui = new Date();
    var naixement = stringAData(dataNaixement);
    var data18 = new Date(naixement.getFullYear() + 18, naixement.getMonth(), naixement.getDate());
    
    var diferencia = Math.floor((data18 - avui) / (1000 * 60 * 60 * 24));
    return diferencia;
    
  } catch (error) {
    return 0;
  }
}


/**
 * Versió que retorna un número de setmana de la data avaluada
 * @param {string} dataInici - Data d'inici 
 * @param {string} dataFinal - Data final
 * @param {string} dataAvaluar - Data a avaluar
 * @return {number} Numero de setmana
 * @customfunction
 */
function CRONOGPP_SETMANA(dataInici, dataFinal, dataAvaluar) {
  // Funció auxiliar per convertir string dd/mm/yyyy a objecte Date
  function stringAData(dataString) {
    if (!dataString) {
      throw new Error("Cal proporcionar una data en format dd/mm/yyyy");
    }
    
    const parts = dataString.split('/');
    if (parts.length !== 3) {
      throw new Error("Format de data incorrecte. Utilitza dd/mm/yyyy");
    }
    
    const dia = parseInt(parts[0], 10);
    const mes = parseInt(parts[1], 10);
    const any = parseInt(parts[2], 10);
    
    if (isNaN(dia) || isNaN(mes) || isNaN(any)) {
      throw new Error("La data conté valors no numèrics");
    }
    
    const data = new Date(any, mes - 1, dia);
    
    if (data.getDate() !== dia || data.getMonth() !== (mes - 1) || data.getFullYear() !== any) {
      throw new Error("Data no vàlida: " + dataString);
    }
    
    return data;
  }
  
  try {
    // Convertir strings a objectes Date
    const objDataInici = stringAData(dataInici);
    const objDataFinal = stringAData(dataFinal);
    const objDataAvaluar = stringAData(dataAvaluar);
    
    // Validar que la data inicial sigui anterior a la final
    if (objDataInici > objDataFinal) {
      throw new Error("La data inicial ha de ser anterior a la data final");
    }
    
    // Validar que la data a avaluar estigui dins l'interval
    if (objDataAvaluar < objDataInici || objDataAvaluar > objDataFinal) {
      throw new Error("La data a avaluar ha d'estar dins l'interval especificat");
    }
    
    // Calcular la diferència en dies entre la data inicial i la data a avaluar
    const diferenciaDies = Math.floor((objDataAvaluar - objDataInici) / (1000 * 60 * 60 * 24));
    
    // Calcular el número de setmana: 
    // Dies 0-6 = setmana 1, dies 7-13 = setmana 2, etc.
    const numeroSetmana = Math.floor(diferenciaDies / 7) + 1;
    
    return numeroSetmana;
    
  } catch (error) {
    throw new Error("Error en CRONOGPP_SETMANA: " + error.message);
  }
}


/**
 * Versió que retorna un objecte Data en format de dia de la setmana 
 * @param {string} dataInici - Data d'inici 
 * @return {data} Objecte Date en format
 * @customfunction
 */

function CRONOGPP_DIA(dataString) {
  // Verificar que el paràmetre no estigui buit
  if (!dataString) {
    throw new Error("Cal proporcionar una data en format dd/mm/yyyy");
  }
  
  // Separar la data en components
  const parts = dataString.split('/');
  
  // Verificar que tenim 3 parts
  if (parts.length !== 3) {
    throw new Error("Format de data incorrecte. Utilitza dd/mm/yyyy");
  }
  
  const dia = parseInt(parts[0], 10);
  const mes = parseInt(parts[1], 10);
  const any = parseInt(parts[2], 10);
  
  // Verificar que són números vàlids
  if (isNaN(dia) || isNaN(mes) || isNaN(any)) {
    throw new Error("La data conté valors no numèrics");
  }
  
  // Crear objecte Date (mes - 1 perquè JavaScript compta els mesos des de 0)
  const data = new Date(any, mes - 1, dia);
  
  // Verificar que la data sigui vàlida
  if (data.getDate() !== dia || data.getMonth() !== (mes - 1) || data.getFullYear() !== any) {
    throw new Error("Data no vàlida");
  }
  
  // Array amb els dies de la setmana abreujats en català
  const diesSetmana = ['dg', 'dl', 'dm', 'dc', 'dj', 'dv', 'ds'];
  
  // Retornar el dia de la setmana abreujat
  return diesSetmana[data.getDay()];
}
// Exemples d'ús:
function exemples() {
  console.log(obtenirDiaSetmana("25/12/2024")); // Dc (dimecres)
  console.log(obtenirDiaSetmana("01/01/2025")); // Dc (dimecres)
  console.log(obtenirDiaSetmana("14/02/2025")); // Dv (divendres)
}


/**
 * Retorna totes les dates coincidents entre una data inicial i una final i a partir del dia de la setmana: 1 = dilluns, 2 = dimarts, etc 
 * @param {string} dataInici - Data d'inici
 * @param {string} dataFinal - Data final
 * @param {string[]} dies - Dies trobats [1,2,3,4,5,6,7]
 * @return Les dates en una filera en format dd/mm/yyyy
 * @customfunction
 */
function CRONOGPP(dataInici, dataFi, diesSetmana) {
  try {
    // Validar paràmetres
    if (!dataInici || !dataFi || !diesSetmana) {
      throw new Error('Tots els paràmetres són obligatoris');
    }
    
    // Convertir strings a objectes Date
    let dateInici, dateFi;
    
    // Intentar diferents formats de data
    if (typeof dataInici === 'string') {
      // Format DD/MM/YYYY
      if (dataInici.includes('/')) {
        const parts = dataInici.split('/');
        if (parts.length === 3) {
          dateInici = new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
        }
      } 
      // Format YYYY-MM-DD
      else if (dataInici.includes('-')) {
        dateInici = new Date(dataInici);
      }
    } else if (dataInici instanceof Date) {
      dateInici = dataInici;
    }
    
    if (typeof dataFi === 'string') {
      // Format DD/MM/YYYY
      if (dataFi.includes('/')) {
        const parts = dataFi.split('/');
        if (parts.length === 3) {
          dateFi = new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
        }
      } 
      // Format YYYY-MM-DD
      else if (dataFi.includes('-')) {
        dateFi = new Date(dataFi);
      }
    } else if (dataFi instanceof Date) {
      dateFi = dataFi;
    }
    
    // Validar que les dates siguin vàlides
    if (!(dateInici instanceof Date) || isNaN(dateInici.getTime())) {
      throw new Error('Data d\'inici no vàlida. Utilitza format DD/MM/YYYY o YYYY-MM-DD');
    }
    
    if (!(dateFi instanceof Date) || isNaN(dateFi.getTime())) {
      throw new Error('Data final no vàlida. Utilitza format DD/MM/YYYY o YYYY-MM-DD');
    }
    
    if (dateInici > dateFi) {
      throw new Error('La data d\'inici ha de ser anterior o igual a la data final');
    }
    
    // Convertir dies de la setmana a array si cal
    if (!Array.isArray(diesSetmana)) {
      if (typeof diesSetmana === 'string') {
        // Acceptar formats: "1,5", "[1,5]", "1;5"
        try {
          diesSetmana = diesSetmana
            .replace(/[\[\]]/g, '') // Eliminar claudàtors
            .replace(/;/g, ',')     // Canviar ; per ,
            .split(',')
            .map(n => parseInt(n.trim()))
            .filter(n => !isNaN(n));
        } catch (e) {
          throw new Error('Format dels dies de la setmana no vàlid');
        }
      } else if (typeof diesSetmana === 'number') {
        // Si és un sol número
        diesSetmana = [diesSetmana];
      } else {
        // Intentar convertir range de Google Sheets
        try {
          diesSetmana = diesSetmana.flat ? diesSetmana.flat() : [diesSetmana];
        } catch (e) {
          throw new Error('Els dies de la setmana han de ser un array o números separats per comes');
        }
      }
    }
    
    // Validar valors dels dies
    for (let dia of diesSetmana) {
      if (dia < 1 || dia > 7) {
        throw new Error('Els dies de la setmana han d\'estar entre 1 (dilluns) i 7 (diumenge)');
      }
    }
    
    // Array per emmagatzemar les dates vàlides
    const datesValides = [];
    
    // Iterar dia a dia des de la data d'inici fins la final
    const dataActual = new Date(dateInici);
    
    while (dataActual <= dateFi) {
      // Obtenir el dia de la setmana (0=diumenge, 1=dilluns, ..., 6=dissabte)
      let diaSetmana = dataActual.getDay();
      
      // Convertir a format 1=dilluns, 2=dimarts, ..., 7=diumenge
      if (diaSetmana === 0) {
        diaSetmana = 7; // Diumenge
      }
      
      // Comprovar si aquest dia està en la llista de dies desitjats
      if (diesSetmana.includes(diaSetmana)) {
        // Afegir la data formatada a l'array
        const dataFormatada = formatarData(new Date(dataActual));
        datesValides.push(dataFormatada);
      }
      
      // Avançar al següent dia
      dataActual.setDate(dataActual.getDate() + 1);
    }
    
    // Si no hi ha dates vàlides, retornar array buit
    if (datesValides.length === 0) {
      return [['Cap data trobada']];
    }
    
    // Determinar si cada data és festiva.
    // Repassa les dates de



    // Retornar com array bidimensional horitzontal (una sola filera)
    return [datesValides];
    
  } catch (error) {
    // Retornar error en format que Google Sheets pugui mostrar
    return [['ERROR: ' + error.message]];
  }
}

/**
 * Funció auxiliar per formatar dates
 * @param {Date} data - Data a formatar
 * @return {string} Data formatada com DD/MM/YYYY
 */
function formatarData(data) {
  const dia = data.getDate().toString().padStart(2, '0');
  const mes = (data.getMonth() + 1).toString().padStart(2, '0');
  const any = data.getFullYear();
  return `${dia}/${mes}/${any}`;
}

/**
 * Versió alternativa que retorna objectes Date (útil per càlculs posteriors)
 * @param {string} dataInici - Data d'inici 
 * @param {string} dataFi - Data final
 * @param {Array} diesSetmana - Dies de la setmana
 * @return {Array} Array amb objectes Date
 * @customfunction
 */
function CRONOGPP_DATES(dataInici, dataFi, diesSetmana) {
  try {
    // Reutilitzar la lògica de CRONOGPP però retornar dates
    const resultat = CRONOGPP(dataInici, dataFi, diesSetmana);
    
    if (resultat[0][0].startsWith('ERROR') || resultat[0][0] === 'Cap data trobada') {
      return resultat;
    }
    
    // Convertir strings de data a objectes Date
    const datesObjecte = resultat[0].map(dataStr => {
      const parts = dataStr.split('/');
      return new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
    });
    
    return [datesObjecte];
    
  } catch (error) {
    return [['ERROR: ' + error.message]];
  }
}



/**
 * Determina si una data és festiva segons el calendari especificat
 * @param {string} data - Data en format DD/MM/YYYY
 * @param {string} centreId - ID del centre (opcional, per defecte agafa el primer)
 * @returns {boolean} - True si és festiu, false si no ho és
 * @customfunction
 */
function ES_FESTIU(data, centreId) {

  // Validar entrada
  if (!data || !CALENDARIS || !CALENDARIS.calendaris) {
    console.log(data);
    console.log("Paràmetres invàlids");
    return false;
  }

  // Obtenir el calendari apropiat
  let CALENDARI; // Declarar correctament la variable
  if (centreId) {
    CALENDARI = CALENDARIS.calendaris.find(c => c.centre_id === centreId);
  } else {
    CALENDARI = CALENDARIS.calendaris[0]; // Agafar el primer si no s'especifica
  }

  if (!CALENDARI) {
    console.log("Calendari no trobat");
    return false;
  }


// Variable per determinar si és festiu
  let esFestiu = false;
  
  
  // Convertir la data d'entrada a objecte Date per comparacions
  const [dia, mes, any] = data.split('/').map(Number);
  const dataEntrada = new Date(any, mes - 1, dia);

  // Comprovar si és un dia festiu específic
  if (CALENDARI.festius) { // Usar CALENDARI en lloc de calendari
    for (const [nomFestiu, dataFestiu] of Object.entries(CALENDARI.festius)) {
      if (dataFestiu === data) {
        console.log("Festiu trobat: " + nomFestiu + " - " + dataFestiu);
        esFestiu =  true;

        break;


      }
    }
  }

  // Comprovar si està dins d'un període de vacances
  if (!esFestiu && CALENDARI.vacances) { // Usar CALENDARI en lloc de calendari
    for (const [nomVacances, periode] of Object.entries(CALENDARI.vacances)) {
      const [diaInici, mesInici, anyInici] = periode.inici.split('/').map(Number);
      const [diaFinal, mesFinal, anyFinal] = periode.final.split('/').map(Number);
      
      const dataInici = new Date(anyInici, mesInici - 1, diaInici);
      const dataFinal = new Date(anyFinal, mesFinal - 1, diaFinal);

      if (dataEntrada >= dataInici && dataEntrada <= dataFinal) {
        console.log("Vacances trobades: " + nomVacances);
        esFestiu = true;
        break;
      }
    }
  }

  // Comprovar si és cap de setmana (dissabte = 6, diumenge = 0)
  const diaSemana = dataEntrada.getDay();
  if (diaSemana === 0 || diaSemana === 6) {
    console.log("Cap de setmana: " + (diaSemana === 0 ? "diumenge" : "dissabte"));
    esFestiu = true;
  }


  // Missatge final
  if (!esFestiu) {
    console.log("Dia lectiu: " + data);
  }

  return esFestiu;
}
