@echo off
setlocal enabledelayedexpansion

set PROYECTO=ventas
set CARPETA_BACKUPS=D:\cursomartin\backup\vue\back\%PROYECTO%

:: 1. CONFIRMACIÓN INICIAL
echo ATENCION: Vas a restaurar archivos para el proyecto: %PROYECTO%
set /p CONFIRM="¿Estas seguro de que quieres continuar? (S/N): "
if /i not "%CONFIRM%"=="S" (
    echo Operacion cancelada.
    pause
    exit /b
)

:: 2. BUSCAR EL ULTIMO BACKUP RECIENTE
:: 'dir /b /o-d' lista archivos en orden descendente por fecha (el mas nuevo primero)
if not exist "%CARPETA_BACKUPS%" (
    echo ERROR: No se encuentra la carpeta de backups en %CARPETA_BACKUPS%
    pause
    exit /b
)

for /f "delims=" %%a in ('dir "%CARPETA_BACKUPS%\*.7z" /b /o-d') do (
    set ULTIMO_BACKUP=%%a
    goto :encontrado
)

:encontrado
if "%ULTIMO_BACKUP%"=="" (
    echo No se encontraron archivos .7z en %CARPETA_BACKUPS%
    pause
    exit /b
)

echo.
echo ---------------------------------------------------
echo Ultimo backup detectado: %ULTIMO_BACKUP%
echo ---------------------------------------------------
echo.

:: 3. PREGUNTAR Y EXTRAER
set /p RESPUESTA="¿Quieres recuperar este archivo en la carpeta actual? (S/N): "

if /i "%RESPUESTA%"=="S" (
    echo Extrayendo archivos...
    :: Usa "x" para extraer con estructura de carpetas, "-y" para sobreescribir
    7z x "%CARPETA_BACKUPS%\%ULTIMO_BACKUP%" -o"." -y
    
    if %ERRORLEVEL% equ 0 (
        echo.
        echo Restauracion completada con exito.
    ) else (
        echo.
        echo Hubo un error durante la extraccion. Comprueba que 7z este en el PATH.
    )
) else (
    echo Restauracion cancelada.
)

pause