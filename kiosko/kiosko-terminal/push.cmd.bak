@echo off
set PROYECTO=ventas
set CARPETA_DESTINO=D:\cursomartin\backup\vue\front\%PROYECTO%
set CARPETA_ORIGEN=.

:: Crear carpeta si no existe
if not exist "%CARPETA_DESTINO%" mkdir "%CARPETA_DESTINO%"

:: Generar timestamp (formato: 2024-01-28_15-30-45)
for /f "tokens=1-3 delims=/ " %%a in ('date /t') do set FECHA=%%c-%%b-%%a
for /f "tokens=1-3 delims=:." %%a in ('time /t') do set HORA=%%a-%%b%%c
set TIMESTAMP=%FECHA%_%HORA%

:: Crear 7z
7z a -t7z "%CARPETA_DESTINO%\%PROYECTO%_%TIMESTAMP%.7z" "%CARPETA_ORIGEN%" -x!node_modules -mx=1

echo Backup creado en %CARPETA_DESTINO%\%PROYECTO%_%TIMESTAMP%.7z
pause