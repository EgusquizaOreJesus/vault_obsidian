** Tabla de Contenido**
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
        // eliminar todos los simbolos "#" y los espacios adicionales
        const headerText = header.replace(/#/g, "").trim();
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

# Plantilla:  
```pdf
url: [[ejercicios-intro.pdf]]
fit: false
```
# Ejercicios:
## Bloque 1:
El piso de un número real x, denotado por  $\lfloor x \rfloor$, es el entero máximo que es menor o igual que x. El techo de un número real x, denotado por $\lceil x \rceil$, es el entero mínimo que es mayor o igual que x. 
Demuestre las siguientes desigualdades, dado que x, y son números reales arbitrarios, n es un número entero arbitrario, y a, b son enteros arbitrarios distintos de cero. xzzzxzczzxzgsgasgasg
### Ejercicio a:
$$ \lfloor x \rfloor + \lfloor y \rfloor \le \lfloor x + y \rfloor \le \lfloor x \rfloor + \lfloor y \rfloor + 1$$
- [x] completado ✅ 2024-08-27
#### Solucion:
![](ANEXOS/Pasted%20image%2020240909101250.png)

---
### Ejercicio b:
$$  \lceil x \rceil + \lceil y \rceil  - 1 \le \lceil x + y \rceil \le \lceil x \rceil + \lceil y \rceil$$
- [x] completado ✅ 2024-08-27
#### Solucion:
![](ANEXOS/Pasted%20image%2020240909101330.png)
#### Solucion Mejor:
![](ANEXOS/Pasted%20image%2020240909101347.png)
### Ejercicio c:
$$ \frac{(n-1)}{2} \le \left\lfloor \frac{n}{2} \right\rfloor \le \frac{n}{2}$$
- [x] completado ✅ 2024-08-28
#### Solucion:
![](ANEXOS/Pasted%20image%2020240909101431.png)
### Ejercicio d:
$$  \frac{n}{2} \le \left\lceil \frac{n}{2} \right\rceil \le \frac{(n+1)}{2} $$
- [x] completado ✅ 2024-08-28
#### Solucion:
![](ANEXOS/Pasted%20image%2020240909101519.png)
### Ejercicio e:
$$ n = \left\lfloor \frac{n}{2} \right\rfloor + \left\lceil \frac{n}{2} \right\rceil$$
- [x] completado ✅ 2024-08-28
#### Solucion:
![](ANEXOS/Pasted%20image%2020240909101547.png)
### Ejercicio f:
- Dado que ${ x \in \mathbb{R} ; \hspace{1mm} a,b \in \mathbb{Z} }$, mostrar que:
  $$ \left\lceil \frac{\left\lceil\frac{x}{a}\right\rceil}{b} \right\rceil = \left\lceil \frac{x}{ab} \right\rceil$$
- [x] completado ✅ 2024-08-28
#### Solucion:
![](ANEXOS/Pasted%20image%2020240909101625.png)
![](ANEXOS/Pasted%20image%2020240909101640.png)
## Bloque 2:
### Ejercicio a:
- Omitido por trivial
### Ejercicio b:
- Omitido por trivial
### Ejercicio c:
Demostrar que:
$$ n \le 2^{\frac{n}{2}} \hspace{5mm} \forall \hspace{1mm} n \ge 4, n \in \mathbb{z^+}$$
- [x] completado ✅ 2024-08-27
#### Solucion:
![](ANEXOS/Pasted%20image%2020240909101716.png)
## Bloque 3:
### Ejercicio a:
Buscar una forma simple de la suma:
$$\sum_{k=1}^n(2k-1)$$
- [x] completado ✅ 2024-08-26
#### Solucion;
![](ANEXOS/Pasted%20image%2020240909101737.png)

---
### Ejercicio b:
Muestra que:
$$ \sum_{k=1}^{\infty}(kx^k) = \frac{x}{(1-x)^2} \hspace{5mm} when \hspace{1mm}|x| < 1 $$
- [x] completado ✅ 2024-08-27
#### Solucion;
![](ANEXOS/Pasted%20image%2020240909101754.png)

---
### Ejercicio c:
Muestra que:
$$ \sum_{k=0}^{\infty}(k^2x^k) = \frac{x(1+x)}{(1-x)^3} \hspace{5mm} when \hspace{1mm} |x|<1$$
- [x] completado ✅ 2024-08-27
#### Solucion:
![](ANEXOS/Pasted%20image%2020240909101816.png)

---
### Ejercicio d:
Muestra que:
$$ \sum_{k=0}^{\infty}\frac{(k-1)}{2^k} = 0$$
- [x] completado ✅ 2024-08-27
#### Solucion:
![](ANEXOS/Pasted%20image%2020240909101835.png)

---
### Ejercicio e:
Encuentra una forma simple de:
$$ \prod_{k=2}^n \left(1-\frac{1}{k^2}\right)$$
- [x] completado ✅ 2024-08-26
#### Solucion:
![](ANEXOS/Pasted%20image%2020240909101932.png)
#### Demostracion:
Demostraremos que:
	$$  \prod_{k=2}^n \left(1-\frac{1}{k^2}\right) = \frac{n+1}{2n} $$
	![](ANEXOS/Pasted%20image%2020240909102009.png)
---
## Bloque 4:
### Ejercicio a:
Probar que existe una constante c que cumpla:
$$ \sum_{k=0}^n(3^k) \le c3^n \hspace{5mm} \forall \hspace{1mm} n \in \mathbb{Z^+}$$
- [x] completado ✅ 2024-08-26
#### Solucion:
El ejercicio ya esta resuelto: [[Week1-Exercises#Ejercicio 5 | Solucion]]

---
### Ejercicio b:
Muestra que:
$$\sum_{k=1}^{\infty}\left(\frac{k}{3^k}\right) \le 1$$
- [x] completado ✅ 2024-08-27
#### Solucion:
![](ANEXOS/Pasted%20image%2020240909102048.png)

---
### Ejercicio c:
Muestra que:
$$\sum_{k=1}^n k \ge \left(\frac{n}{2}\right)^2$$
- [x] completado ✅ 2024-08-26
#### Solucion:
	![[Ejercicios - Plantilla 2024-08-26 19.15.54.excalidraw]]
---
### Ejercicio d:
Muestra que existe una constante c, tal que:
$$ \sum_{k=1}^n \left(\frac{1}{k^2}\right) \le c \hspace{5mm} \forall \hspace{1mm}n \in \mathbb{Z}^+$$
- [x] completado ✅ 2024-08-27
#### Solucion:
 ![](ANEXOS/Pasted%20image%2020240909102117.png)
---
### Ejercicio e:
Buscar un upper bound para la suma:
$$ \sum_{k=0}^{\lfloor lg(n) \rfloor} \left\lceil \frac{n}{2^k} \right\rceil$$
- [x] completado ✅ 2024-08-29
#### Solucion:
![](ANEXOS/Pasted%20image%2020240909102135.png)
## Bloque 5:
<span style="font-size: 30px">Cuantas hojas tiene un arbol binario completo con "n" nodos. Demostrar por inducción</span>
- [ ] completado
### Solucion:

---
## Bloque 6:
<span style= "font-size: 30px" >Demuestre que la altura de un arbol binario completo de k hojas es lg k</span>
- [ ] completado
### Solucion

---


