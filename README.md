## Core UI Random Backend API

### Backend Setup
- `cd server`
- `npm install`
- `setup .env file` with content like this:
```
PORT=8080
```
- `npm dev`

### Frontend Setup
- `cd client`
- `npm install`
- `setup .env file` with content like this:

```
PORT=3000
CHOKIDAR_USEPOLLING=true
REACT_APP_API_BASE_URL=https://random-backend-express-api.herokuapp.com
```

- `npm start`


### This is hosted on Heroku
Here are the links:
Frontend: https://stormy-depths-11370.herokuapp.com/#/dashboard
Backend: https://random-backend-express-api.herokuapp.com