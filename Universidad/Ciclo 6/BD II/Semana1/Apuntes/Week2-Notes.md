
## File Organization
- Devolver registros dado el valor de alguno de sus campos (search- key)
	- Record[ ] search(< FieldType > key ):
		Cuanto costaria: O(n), porque debo escanear todos
		No conviene




# Heap File
- El HeapFile no soporta eliminaciones
- Usos: Archivos transaccionales
- Las operaciones de insercion son O(1)
- Para la busqueda de algun registro no es eficiente

OBS: para poder aplicar la busqueda binaria, el archivo debe estar ordenado en funcion del campo de busqueda.
En archivos tienen diferentes campos, y el archivo solamente esta ordenado con respecto a un campo, asi que solo la busqueda sera eficiente para dicho atributo
Es conveniente ordenar por la llave primaria, una vez que el archivo ya esta ordenado, ya aplicamos la busqueda binaria


# Sequential File:
search: O(log n)
insert: O(log n) + O(n) -> la insercion es cara

![[Anexos/Pasted image 20240829163717.png]]

### Optimizar el insert
#### Estrategia del espacio auxiliar:
Insertar en un heap (es decir siempre al final): Las nuevas inserciones se van almacenando en un espacio auxiliar
Mantener un limite máximo de K registros en el espacio auxiliar 
La búsqueda se debe hacer en ambos espacios.
Cada cierto tiempo el archivo de datos debe reconstruirse con los registros del espacio auxiliar.![](Pasted%20image%2020240831095516.png)
![[Pasted image 20240829164316.png | center]]

---
Manteniendo dos archivos, el auxiliar es un heap
search: O(log n) + O(k) ; k -> es el tamaño del espacio auxiliar ( $k \le lg(n)$)
insert: O(log n) + O(k) + O(1) -> k: ya que tenemos que buscar que no existe en el archivo NO ORDENADO aux.dat
OBS: cuando k supera a lg(n) -> debemos meter todos los datos del espacio auxiliar, al espacio de datos de manera ordenada
COSTO DE RECONSTRUCCION: O(log (n)) * O(n) -> es insercion de los k elementos que son log(n) y O(n) es el tiempo que demoraria en insertar ordenadamente desplazando los registros de datos.dat
Costo total: O(n log(n)) -> esto se va realizar cada k veces
MUY COSTOSO, para bajarle un poco la complejidad usaremos otra tecnica 

---
MANTENIENDO DOS ARCHIVOS ORDENADOS
search: O (log n) + O(k) => O(log n); donde ($k \le lg(n)$) 
insert: O(log n) + O(log k) +O(k) -> log k: porque tenemos buscar que no existen los archivos en el archivo aux.dat
rebuild: O(n + k) => O(n)

---
#### Inserciones enlazadas:
![[Pasted image 20240829164831.png]]
Tenica muy usada, porque minimiza los acceso a memoria secundaria, porque aumenta memoria en el disco duro, que no es costoso ya que se tiene teras de datos.
Esta tecnica no realiza movimientos, solamente jugamos con los punteros
#### Pasos:
1. Buscamos el elemento a insertar, si no se encuentra lo insertamos en donde apunte su puntero auxiliar (BUSQUEDA BINARIA)
2. Actualizamos los punteros

Utilidad, la recontruccion es menos costosa ya que se siguen noma los punteros
En este caso tenemos estos costos:
USANDO UN CAMPO EXTRA DE PUNTEROS
Search: O(log n ) + O(k)

### Trabajando con un solo archivo:
![[Pasted image 20240829172151.png | center]]

Como eliminamos?

SIGUEN SIENDO MUY COSTOSO POR EL REBUILD

OTRA FORMA DE HACERLO MAS EFICIENTE ES CON ARBOLITOS 
El desbalanceo es el principal problema de un arbol binario de busqueda

# FIJA PARA EXAMEN
Como implementaste la eliminacion reusando los espacios libres, es decir, despues de eliminar, ese espacio debe quedar libre para ser ocupado por un nuevo registro


hola mundo como estas 