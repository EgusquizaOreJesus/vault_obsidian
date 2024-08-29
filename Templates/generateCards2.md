<%*
let cardContent = "";
const title = await tp.system.prompt("Introduce el titulo de tu cards")
for (let i = 0; i < 2; i++) {
  const cardTitles = await tp.system.prompt("Introduce el titulo para la carta " + (i + 1));
  cardContent += `> **${cardTitles}**\n`;
  cardContent += `> ![External Image|center|440](https://raw.githubusercontent.com/D3Ext/aesthetic-wallpapers/main/images/van.png)\n`;
  const count_links = await tp.system.prompt("Introduce el numero de links para la carta " + (i + 1));
    for (let j = 0; j < count_links; j++) {
        const link = await tp.system.prompt("Introduce el link");
        cardContent += `> **[[${link}]]**\n`;
    }
    cardContent += `> \n`;

}
const finalCard = `# <center>${title}</center>\n > [!cards|2]\n${cardContent}`;

tR += finalCard;
-%>