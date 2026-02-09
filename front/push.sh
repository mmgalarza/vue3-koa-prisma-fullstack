#!/bin/bash

# --- CONFIGURACIÓN ---
IP_SERVIDOR="192.168.1.109"
RECURSO_SAMBA="cursomartin"
PUNTO_MONTAJE="/mnt/cursomartin"
USUARIO_SMB="mmgalarza"
CLAVE_SMB="kiosko1973"

PROYECTO="ventas"
# La carpeta destino ahora está dentro del punto de montaje
CARPETA_DESTINO="$PUNTO_MONTAJE/backup/vue/front/$PROYECTO"
CARPETA_ORIGEN="."

# --- 1. MONTAR LA UNIDAD ---
echo "Conectando con el servidor de backup..."
# Creamos el directorio de montaje si no existe
sudo mkdir -p "$PUNTO_MONTAJE"

# Montamos la unidad
sudo mount -t cifs "//$IP_SERVIDOR/$RECURSO_SAMBA" "$PUNTO_MONTAJE" -o username=$USUARIO_SMB,password=$CLAVE_SMB,uid=$(id -u),gid=$(id -g),vers=3.0

# Verificar si el montaje fue exitoso
if [ $? -ne 0 ]; then
    echo "ERROR: No se pudo montar la unidad de red."
    exit 1
fi

# --- 2. EJECUTAR EL BACKUP ---
# Crear carpeta de destino en la unidad de red si no existe
mkdir -p "$CARPETA_DESTINO"

TIMESTAMP=$(date +"%Y-%m-%d_%H-%M%S")

echo "Creando archivo comprimido..."
7z a -t7z "$CARPETA_DESTINO/${PROYECTO}_${TIMESTAMP}.7z" "$CARPETA_ORIGEN" -x!node_modules -mx=1

if [ $? -eq 0 ]; then
    echo "Backup creado con éxito en: $CARPETA_DESTINO/${PROYECTO}_${TIMESTAMP}.7z"
else
    echo "Hubo un error al crear el backup."
fi

# --- 3. DESMONTAR LA UNIDAD ---
echo "Desconectando servidor..."
cd ~ # Salimos de la carpeta por si acaso para evitar errores de 'target is busy'
sudo umount "$PUNTO_MONTAJE"

read -p "Presiona Enter para finalizar..."