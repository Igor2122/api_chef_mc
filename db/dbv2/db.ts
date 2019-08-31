import mysql from 'mysql';

export const mysqlDb = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'chefmcapp',
  port: 8889
});
//   host: '192.168.64.2',
//   user: 'username',
//   password: 'password',
//   database: 'chefmcapp'
// });
