module.exports = async (tp) => {
  // Obtener el día de la semana en minúsculas
  console.log("tp",tp.file.title);
  //const day = tp.date.now("dddd").toLowerCase();
  fecha = tp.file.title;
  const dateObject = new Date(fecha);
  const daysOfWeek = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
  const day = daysOfWeek[dateObject.getUTCDay()];  // obtener el día de la semana a partir de la fecha

  //const fecha = tp.date.now("YYYY-MM-DD");
  console.log("day", day);
  console.log("fecha", fecha);
  const format_fecha = "📅" +fecha
  // Definir las tareas para cada día
  const tasksByDay = {
    lunes: [
      "09:00 - 12:00 Estudiar ADA" + format_fecha,
      "Hacer ejercicio durante 30 minutos",
      "16:00 - 19:00 Estudiar Base de Datos" + format_fecha,
      "19:00 - 20:00 Hacer Programacion Competitiva" + format_fecha
    ],
    martes: [
      "09:00 - 11:00 Estudiar ADA" + format_fecha,
      "Base de Datos | Programacion Competitiva" + format_fecha,
    ],
    miércoles: [
      "16:00 - 18:00 Estudiar ADA" + format_fecha,
      "Hacer ejercicio durante 30 minutos",
      "19:00 - 20:00 Base de Datos | Programacion Competitiva" + format_fecha,
    ],
    jueves: [
      "20:00 - 21:00 Estudiar ADA" + format_fecha,
    ],
    viernes: [
      "10:00 - 11:30 ADA | Base de Datos" + format_fecha,
    ],
    sábado: [
      "09:00 - 12:00 Estudiar ADA" + format_fecha,
      "Hacer ejercicio durante 30 minutos",
      "16:00 - 18:00 Estudiar Base de Datos" + format_fecha,
      "18:00 - 20:00 Hacer Programacion Competitiva | Relax | Software" + format_fecha
    ],
    domingo: [
      "09:00 - 12:00 Estudiar ADA" + format_fecha,
      "Hacer ejercicio durante 30 minutos",
      "16:00 - 18:00 Estudiar Base de Datos" + format_fecha,
      "18:00 - 20:00 Hacer Programacion Competitiva | Relax | Software" + format_fecha
    ]
  };
  
  // Obtener las tareas correspondientes al día actual
  const tasks = tasksByDay[day] || ["No hay tareas programadas para hoy."];
  
  // Formatear las tareas como una lista de verificación en Markdown
  const formattedTasks = tasks.map(task => `- [ ] ${task}`).join('\n');
  
  // Devolver las tareas formateadas
  return formattedTasks;
};
