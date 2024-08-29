# <% tp.date.now("dddd, MMMM Do YYYY") %>

<%*
// Obtener el día de la semana
const day = tp.date.now("dddd");
let tasks = "";

// Seleccionar las tareas en función del día de la semana
switch(day) {
    case "lunes":
        tasks = "- [ ] Estudiar algoritmos 3 horas\n- [ ] Revisar notas de clase\n";
        break;
    case "martes":
        tasks = "- [ ] Leer 2 capítulos del libro\n- [ ] Practicar ejercicios de programación\n";
        break;
    case "miércoles":
        tasks = "- [ ] Asistir a la clase de matemáticas\n- [ ] Hacer la tarea de física\n";
        break;
    case "jueves":
        tasks = "- [ ] Revisar el proyecto de software\n- [ ] Hacer una caminata\n";
        break;
    case "viernes":
        tasks = "- [ ] Estudiar para el examen de historia\n- [ ] Salir a correr\n";
        break;
    case "sábado":
        tasks = "- [ ] Hacer la compra semanal\n- [ ] Limpiar la casa\n";
        break;
    case "domingo":
        tasks = "- [ ] Descansar\n- [ ] Preparar la semana\n";
        break;
    default:
        tasks = "- [ ] Sin tareas específicas para hoy.\n";
}

// Insertar las tareas seleccionadas
tR += tasks;

-%>

## Tareas del día
