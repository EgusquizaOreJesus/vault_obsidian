```dataviewjs
const filePath = dv.current().file.path;

// Lee el contenido del archivo usando la API de Obsidian
const content = await app.vault.read(app.vault.getAbstractFileByPath(filePath));

// Utiliza una expresión regular para encontrar todos los encabezados de nivel 1 (un solo "#")
const headers = content.match(/^(#{1,3})\s.+$/gm);

if (headers && headers.length > 0) {
    let toc = ""; // Variable para almacenar la tabla de contenidos

    // Genera la tabla de contenidos con los encabezados
    headers.forEach((header) => {
        const level = header.match(/#/g).length; // Obtiene el nivel del encabezado
        console.log(level);
        // eliminar todos los simbolos "#" y los espacios adicionales
        const headerText = header.replace(/#/g, "").trim();
        console.log(headerText);
        if (level === 1) {
            // Crea el enlace para el índice de contenidos y añade las líneas de subniveles
            toc += `1. [[#${headerText}|${headerText}]]\n`;
        } 
        else if (level === 2) {
            toc += `   1. [[#${headerText}|${headerText}]]\n`;
        }
        else {
            toc += `      1. [[#${headerText}|${headerText}]]\n`;
        }
    });

    dv.paragraph(toc); // Muestra la tabla de contenidos
} else {
    dv.paragraph("No se encontraron encabezados de nivel 1 en esta nota.");
}
```
