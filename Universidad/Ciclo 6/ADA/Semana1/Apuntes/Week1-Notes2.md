---
banner: "[[banner.jpg]]"
banner_y: 0.5
cssclasses:
  - custom-hr
---
<hr class ="normal">

# INDUCCION
## Example 1
Tengo 2 computadoras, donde insertion sort tiene $8n^2$y merge sort tiene $64nlg_n$ complejidad. Para que valor de n, el algoritmo **INSERTION SORT** es más eficiente?
- Parafraseando: Para que n° de instrucciones el **INSERTION SORT** es menor que el **MERGE SORT**
  -> <span style="font-size: 50px;">$\frac{n}{lg_n} \lt 8$ </span>
---
## Example 2
Cual es el mínimo valor de n, tal que un algoritmo con tiempo de ejecución de $100n^2$ 
- Parafraseando: Nos piden el min:
	<span style="font-size: 30px;" class = "center-text">min{$100n^2 \lt 2^n$}</span>
	Osea: 
	<span style="font-size: 30px;" class = "center-text">min{$\frac{2^n}{n^2} > 100$}</span>
	Esto significa:
	Que deberiamos mostrar que la funcion es creciente
	- Ruta1:
	  Usar calculo:
	  ![[Week1-Notes2 2024-08-26 10.35.14.excalidraw]]
	- Ruta 2:
	  Usar Induccion:
	  ![[Week1-Notes2 2024-08-26 10.42.08.excalidraw]]
	  