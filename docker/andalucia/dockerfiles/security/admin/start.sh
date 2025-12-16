#!/bin/bash

# 1. Función propia de esta capa: Aquí pegas el script del maestro
config_security() {
    echo "--- Configurando Capa de Seguridad ---"
    
    # === AQUI VA EL CODIGO DEL EXAMEN ===
    # Cuando el maestro te de el script, borras este comentario
    # y pegas su código aquí dentro.
    
    echo "--- Seguridad aplicada correctamente ---"
}

# 2. Función para cargar la capa anterior (Ubbase)
# Esta ruta apunta al start.sh de la imagen 'vila/ubbase'
load_entrypoint_base(){
    bash /root/admin/base/start.sh
}

# 3. Función Main: Orquesta la cadena
main(){
    load_entrypoint_base  # Primero ejecuta lo de la capa ubbase
    config_security       # Después ejecuta tu capa de seguridad
}

# Ejecutamos el main
main