# My Node.js REST API

Node.js REST API boilerplate with full features:
- MongoDB with Mongoose
- MySQL with Sequelize
- User authentication (JWT)
- Data validation (Joi)
- API documentation (Swagger)

## 🚀 Technologies

- Node.js + Express
- MongoDB + Mongoose
- MySQL + Sequelize
- JWT Authentication
- Joi Validation
- Swagger UI

## 🗂️ Project Structure

```
my-api
├── config
│   ├── db.js
│   └── jwt.js
├── controllers
│   ├── authController.js
│   └── userController.js
├── middlewares
│   ├── authMiddleware.js
│   └── validateMiddleware.js
├── models
│   ├── index.js
│   ├── mongoUser.js
│   └── mysqlUser.js
├── routes
│   ├── auth.js
│   └── users.js
├── swagger
│   └── swagger.js
├── .env
├── index.js
├── package.json
└── README.md
```

## 📦 Setup

### 1️⃣ Clone repository

```bash
git clone https://github.com/yourname/my-nodejs-api.git
cd my-nodejs-api
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure environment variables

Create `.env` file:

```ini
PORT=3000
MONGO_URI=mongodb://localhost:27017/mydb
MYSQL_DB=mydb
MYSQL_USER=root
MYSQL_PASSWORD=your_mysql_password
MYSQL_HOST=127.0.0.1
MYSQL_PORT=3306
JWT_SECRET=your_secret_key
```

### 4️⃣ Start database servers

- MongoDB must be running (`mongod`)
- MySQL must be running and accessible at defined host/port

### 5️⃣ Start API

```bash
npm start
```

## 📋 Available Scripts

```bash
npm start      # Start app in production mode
```

## 🔐 Authentication

- Register: `POST /api/auth/register`
- Login: `POST /api/auth/login`

Use `Authorization: Bearer <token>` in headers for protected routes.

## 📝 API Documentation

Swagger UI available at:
```
http://localhost:3000/api-docs
```

## 💡 Notes

- User data is stored both in MongoDB and MySQL (example purpose).
- All endpoints use Joi for request validation.
- JWT is used for stateless session management.

## 📄 License

MIT License

---

## 💻 Author

TomanDesign / AIHouse
[https://github.com/TomanDesign](https://github.com/TomanDesign)
