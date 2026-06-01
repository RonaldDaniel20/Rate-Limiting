FROM nginx:1.25-alpine

# 1. Eliminar el archivo de configuración maestro por defecto de Nginx
RUN rm /etc/nginx/nginx.conf

# 2. Copiar el archivo de configuración personalizado como el nuevo maestro
COPY nginx.conf /etc/nginx/nginx.conf

# 3. Crear el directorio para los logs de rate limiting 
RUN mkdir -p /var/log/nginx

# 4. Exponer el puerto 80 
EXPOSE 80

# 5. Arrancar Nginx en primer plano 
CMD ["nginx", "-g", "daemon off;"]