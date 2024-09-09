---
banner: "[[banner.jpg]]"
banner_y: 0.669
cssclasses:
  - dashboard
---

- ### Tareas
  ```dataview
  TABLE
  length(filter(file.tasks, (t) => !t.completed)) as "Pendientes",
  length(filter(file.tasks, (t) => t.completed)) as "Completadas",
  round(length(filter(file.tasks, (t) => t.completed)) / length(file.tasks) * 100, 2) + "%" as "Progreso"
	FROM "Universidad/Ciclo 6/ADA/Ejercicios"
	WHERE length(file.tasks) > 0
  ```
- ### Resumen General
  ```dataviewjs
	const allPages = dv.pages('"Universidad/Ciclo 6/ADA/Ejercicios"');
	let totalTasksCount = 0;
	let completedTasksCount = 0;
	
	for (const page of allPages) {
	    const tasks = page.file.tasks || [];
	    totalTasksCount += tasks.length;
	    completedTasksCount += tasks.filter(task => task.completed).length;
	}
	
	const overallProgress = totalTasksCount > 0 ? (completedTasksCount / totalTasksCount * 100) : 100;
	
	function progress(value) {
	    return `<progress value="${parseInt(value)}" max="100" class="barra_custom" id="barra_custom"></progress>`;
	}
	
	dv.table(["", "Progress", "Percentage"], [
	    ["**Tareas**", progress(overallProgress), `${parseInt(overallProgress)} %`]
	]);
	```


