---
title: "Generar archivo Xournal++"
---

```sh
#!/bin/bash

# Obtiene la ruta actual de la nota en Obsidian
current_dir="{{vault_path}}/{{filePath}}"
base_dir=$(dirname "$current_dir")

# Prompt para obtener el nombre del archivo
echo "Ingresa el nombre del archivo .xopp:"
read file_name

# Crea el archivo .xopp en el directorio actual
file_path="$base_dir/$file_name.xopp"
touch "$file_path"

# Abre el archivo con Xournal++
xournalpp "$file_path"
```
