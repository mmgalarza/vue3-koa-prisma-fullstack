#!/bin/bash

# --- CONFIGURACIÓN ---
IP_SERVIDOR="192.168.1.109"
RECURSO_SAMBA="cursomartin"
PUNTO_MONTAJE="/mnt/backup_martin"
USUARIO_SMB="mmgalarza"
CLAVE_SMB="kiosko1973"

PROYECTO="kiosko"
CARPETA_BACKUPS="$PUNTO_MONTAJE/backup/react/$PROYECTO"

# 1. CONFIRMACIÓN INICIAL
echo "ATENCIÓN: Vas a iniciar el proceso de restauración para el proyecto: $PROYECTO"
read -p "¿Estás seguro de que quieres continuar? (s/n): " CONFIRMACION
if [[ ! $CONFIRMACION =~ ^[sS]$ ]]; then
    echo "Operación cancelada."
    exit 0
fi

# MONTAJE DE LA UNIDAD
sudo mkdir -p "$PUNTO_MONTAJE"
sudo mount -t cifs "//$IP_SERVIDOR/$RECURSO_SAMBA" "$PUNTO_MONTAJE" -o username=$USUARIO_SMB,password=$CLAVE_SMB,uid=$(id -u),gid=$(id -g),vers=3.0

if [ $? -ne 0 ]; then
    echo "ERROR: No se pudo conectar con el servidor de backups."
    exit 1
fi

# 2. BUSCAR EL ÚLTIMO BACKUP
# Buscamos el archivo .7z más reciente en la carpeta de destino
ULTIMO_BACKUP=$(ls -t "$CARPETA_BACKUPS"/*.7z 2>/dev/null | head -n 1)

if [ -z "$ULTIMO_BACKUP" ]; then
    echo "No se encontraron archivos de backup en $CARPETA_BACKUPS"
    sudo umount "$PUNTO_MONTAJE"
    exit 1
fi

ARCHIVO_NOMBRE=$(basename "$ULTIMO_BACKUP")
echo "---------------------------------------------------"
echo "Último backup detectado: $ARCHIVO_NOMBRE"
echo "---------------------------------------------------"

# PREGUNTAR SI QUIERE RECUPERAR ESE
read -p "¿Quieres recuperar este archivo en el directorio actual? (s/n): " RESPUESTA

if [[ $RESPUESTA =~ ^[sS]$ ]]; then
    echo "Extrayendo archivos..."
    # 3. EXTRAER (7z x sobreescribe por defecto si no se indica lo contrario)
    7z x "$ULTIMO_BACKUP" -o"." -y
    
    if [ $? -eq 0 ]; then
        echo "Restauración completada con éxito."
    else
        echo "Hubo un error durante la extracción."
    fi
else
    echo "Restauración cancelada por el usuario."
fi

# DESMONTAR
echo "Desconectando servidor..."
sudo umount "$PUNTO_MONTAJE"

read -p "Presiona Enter para finalizar..."