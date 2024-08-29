---
cssclasses:
  - dashboard
banner: "[[banner.jpg]]"
banner_y: 0.597
banner_x: 0
---
---
- ### ❇️Projects
	- [[Project-BDII]]
- ### 📚Ciclos
	- [[Ciclo5]]
	- [[Ciclo 6]]
	- [[🧘Realization Note]]
- ### 🚧Life Progress
	```dataviewjs
	
	const today = DateTime.now()
	const endOfYear = {
	    year: today.year,
	    month: 12,
	    day: 1
	}
	
	const lifespan = { year: 80 } 
	const birthday = DateTime.fromObject({
	    year: 2001,
	    month: 6,
	    day: 9
	});
	const deathday = birthday.plus(lifespan)
	
	function progress(type) {
	    let value;
	    
	    switch(type) {
	        case "lifespan": 
	            value = (today.year - birthday.year) / lifespan.year * 100;
	            break;
	        case "year":
	            value = today.month / 12 * 100
	            break;
	        case "month":
	            value = today.day / today.daysInMonth * 100
	            break;
	        case "day":
	            value = today.hour / 24 * 100
	            break;
	    }
	    return `<progress value="${parseInt(value)}" max="100"></progress> | ${parseInt(value)} %`
	}
	
	
	dv.span(`
	|  | Progress  | Percentage |
	| --- | --- |:---:|
	| **Year** | ${progress("year")}
	| **Month**| ${progress("month")}
	| **Day**| ${progress("day")}
	| **Life** | ${progress("lifespan")}
	`)
	
	```

---

- ## 🕰️Recent
	 ```dataview
	table file.mtime as "Fecha de modificación"
	from ""
	sort file.mtime desc
	limit 5
	```
- ## 👇🏻Books
	- UWU

- ## 📊Stats
	- Notes:  `$=dv.pages().length`
---
- ### Registro de Estudios
	```dataview  
			TABLE WITHOUT ID
			file.link as Date,  
			choice(ADA > 2, "🟩", choice(ADA > 0, "🟨", "🟥")) as ADA💀,
			choice(BDII > 2, "🟩", choice(BDII > 0, "🟨", "🟥")) as "BD II🗄️",  
			choice(PC > 2, "🟩", choice(PC > 0, "🟨", "🟥")) as "PC 🫠",  
			choice(Software > 3, "🟩", choice(Software > 0, "🟨", "🟥")) as "Software 💻"
			FROM "Daily_Notes"  
			WHERE file.day <= date(now) AND file.day >= date(now) - dur(7days)  
			SORT file.day ASC 
	```
- ### Avances
	```tracker
	searchType: dvField
	searchTarget: ADA,PC,Software,BDII
	folder: "Daily_Notes"
	datasetName: ADA,PC,Software,BDII
	line:
		title: "Avances"
		yMax: 10
		showLegend: true
		yAxisLabel: Horas
		lineColor: red,blue,yellow,green
	```
----
## ⌛[[Notes to Process]]
```dataview 
TABLE file.ctime as "Created" 
FROM #todevelop and -"004 TEMPLATES"
Limit 20
sort file.ctime
```
---
## Notas




