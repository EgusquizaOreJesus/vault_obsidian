```dataview
table
  ADA as "ADA",
  Algoritmos as "Algoritmos"
from "Daily_Notes"
where ADA or Algoritmos
 ```


```dataviewjs
// Obtén la fecha actual
const today = new Date();
const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

// Filtra las notas de este mes
const pages = dv.pages('"Daily_Notes"').where(page => {
    const date = page.file.name;  // Suponiendo que el nombre del archivo tiene la fecha
    const parsedDate = date ? new Date(date) : null;
    return parsedDate && parsedDate >= startOfMonth && parsedDate <= endOfMonth;
});

// Inicializa el acumulador de horas
const result = {
    ADA: 0,
    Algoritmos: 0
};

// Acumula las horas de estudio
for (const page of pages) {
    result.ADA += page.ADA || 0;
    result.Algoritmos += page.Algoritmos || 0;
}

// Muestra los resultados en una tabla
dv.table(["Curso", "Horas"], [
    ["ADA", result.ADA],
    ["Algoritmos", result.Algoritmos]
]);


```

``` dataview
table ADA as "ADA", Algoritmos as "Algoritmos", dateformat(file.day, "yyyy-MM-dd") as "Fecha" from "Daily_Notes" where ADA or Algoritmos sort file.day asc
```

```tracker
- chart: line
  xDataset: date
  datasets:
    - name: ADA
      data:
        type: dvField
        query: |
          ```dataview
          TABLE ADA AS "ADA"
          FROM "Daily_Notes"
          WHERE ADA
          FLATTEN ADA
          ```
    - name: Algoritmos
      data:
        type: dvField
        query: |
          ```dataview
          TABLE Algoritmos AS "Algoritmos"
          FROM "Daily_Notes"
          WHERE Algoritmos
          FLATTEN Algoritmos
          ```
