# Boldclay WEB

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.7.

Versiones: node/npm 16.13.0

## Development server

Correr el comando "npm install" en la raíz del proyecto y luego "npm start"

## Code scaffolding

Correr `ng generate component component-name` para generer un nuevo componentclass|guard|interface|enum|module`.

## Build

Correr "ng build --prod" para hacer un compilado que se envía a produccion
Si se hace un despliegue a google cloud se puede usar el script "deploy.sh", firmandose primero con un usuario autorizado en la terminal usando las herramientas SDK de Google Cloud

Gcloud test url: https://boldclay.uc.r.appspot.com

## ML token

Primero entrar a: 

https://auth.mercadolibre.com.mx/authorization?response_type=code&client_id={APP_ID}&redirect_uri=https://api-dot-ml-lighthouse.uc.r.appspot.com/

Al hacer login, se dará un "code" en la redirect uri, usar este code para cambiarlo por un access token con un post a:

https://api.mercadolibre.com/oauth/token

grant_type: authorization_code
client_id: {{APP_ID}}
client_secret: {{APP_CLIENT_SECRET}}
code: {{CODE}}
redirect_uri: {{REDIRECT_URI}}

El response debe ser algo como:

{
    "access_token": "APP_USR-8600561254593179-081301-e4c3a2370a3f2a1455140e5fe70372f3-206722938",
    "token_type": "Bearer",
    "expires_in": 21600,
    "scope": "offline_access read write",
    "user_id": 206722938,
    "refresh_token": "TG-66bae97442742200010e2684-206722938"
}