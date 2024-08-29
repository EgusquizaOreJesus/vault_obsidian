module.exports = (tp) => {
    console.log("Ejecutando daily_note.js");
    const day = tp.date.now("dddd");  // Obtiene el día de la semana
    let template = "";
    console.log(day);
    switch(day) {
        case "Monday":
            template = "Lunes.md";
            break;
        case "Tuesday":
            template = "Martes";
            break;
        // Agrega más casos para los otros días de la semana
        default:
            template = "General";  // Una plantilla general en caso de error
    }

    return tp.file.include(`Templates/${template}`);
};


