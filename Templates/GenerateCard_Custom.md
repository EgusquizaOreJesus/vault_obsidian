<%*
let cardContent = "";
const title = await tp.system.prompt("Introduce el titulo de tu cards");

// Generating the first column with exercise links
let dataviewResult = await tp.dataview.query(`
  TABLE file.link
  FROM "Universidad/Ciclo 6/ADA/Ejercicios"
  WHERE length(file.tasks) > 0
`);

let exerciseLinks = dataviewResult.values.map(row => row[0]);

cardContent += "> **Ejercicios**\n";
for (let link of exerciseLinks) {
  cardContent += `> **[[${link.path}]]**\n`;
}
cardContent += `> \n`;

const finalCard = `# <center>${title}</center>\n > [!cards|2]\n${cardContent}`;

tR += finalCard;
-%>

```dataviewjs
let exerciseLinks = dv.pages('"Universidad/Ciclo 6/ADA/Ejercicios"')
    .where(p => p.file.tasks.length > 0)
    .map(p => p.file.link);


let cardContent = `> **Ejercicios**\n`;
for (let link of exerciseLinks) {
    cardContent += `> **${link}**\n`;
}
cardContent += `> \n`;
cardContent += `> **Apuntes**\n`

const finalCard = `# <center>zzz</center>\n > [!cards|2]\n${cardContent}`;

dv.span(finalCard);
```