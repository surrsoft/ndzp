* проект-образец
* это просто веб-сервер для статического контента, завёрнутый в docker-контейнер
* статический контент раздаётся из папки `public`
* места кастомизации:
  * переменные `name`, `description`, `author` файла `package.json`
  * переменная`PROJECT_NAME` файла `.env`
* запуск
  * `docker-compose up -d --remove-orphans`


# Далее
* [ndzp] - условное название текущего проекта
* изначально сделано по этому образцу https://nodejs.org/ru/docs/guides/nodejs-docker-webapp/
