// const jsonServer = require('json-server');
// const cors = require('cors');

// const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();

// server.use(cors());
// server.use(middlewares);
// server.use(router);

// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => {
//   console.log(`JSON Server is running on port ${PORT}`);
// });

const jsonServer = require('json-server');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);
server.use(router);

// تصدير الوظيفة للعمل مع Vercel
module.exports = (req, res) => {
  server(req, res);  // هذا يقوم بتشغيل السيرفر في بيئة غير متزامنة
};