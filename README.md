# vue-mock-account

## Запуск проекта

Для реализации аутентификации и БД используются mock данные (https://github.com/typicode/json-server)

Установить локальный JSON сервер
```
npm install -g json-server
```
В папке с проектом запустить JSON сервер
```
json-server --watch db.json
```
Открыть https://thebooo.github.io/vue-mock-account/dist

### для dev версии:
```
npm install -g json-server
json-server --watch db.json
npm install
npm run serve
```
