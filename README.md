# B3 Devops - TP 2
## Info
mail: florian.berrot@ynov.com

github​_username: [Florian](https://github.com/Flours06)


### Les fichiers du repo

- Readme (ce fichier)
- [ChangeLog](./changelog.md) - _Changements effectués au long des releases_ 
- [package.json](./package.json) - Fichier de NPM.
- .cicleci
    - [config.yml](./.circleci/config.yml) - Fichier de configuration de circleci
- [docker](./docker/) - Contient les containers docker.
    - [docker-compose](./docker/docker-compose.yml) - docker compose du projet.
        - [api](./docker/api/Dockerfile) - Dockerfile de NodeJs.
        - [nginx](./docker/nginx/Dockerfile) - Dockerfile de Nginx.
            - [nginx.conf](./docker/nginx/nginx.conf) - configuration de Nginx.   

### Pré-requis
* Docker
* Node.js
