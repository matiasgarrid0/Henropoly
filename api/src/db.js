const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME
} = process.env;
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);
const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Box, CardProperty, CommunalArch, FortuneCard, Game, Permission, Player, Railway, Role, TableMaster, Token, User, UserStatistics } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Game.hasMany(Box)
Box.belongsTo(Game)
Game.hasOne(UserStatistics)
UserStatistics.belongsTo(Game)
UserStatistics.hasMany(Player)
Player.belongsTo(UserStatistics)
Player.hasOne(User)
User.belongsTo(Player)
Role.belongsToMany(User, {through: "user_has_role"})
User.belongsToMany(Role, {through: "user_has_role"})
Role.belongsToMany(Permission, {through: "role_has_permission"})
Permission.belongsToMany(Role, {through: "role_has_permission"})
Player.hasOne(Token)
Token.belongsTo(Player)
TableMaster.hasMany(Token)
Token.belongsTo(TableMaster)
TableMaster.hasMany(CardProperty)
CardProperty.belongsTo(TableMaster)
// TableMaster.hasMany(Railway)
// Railway.belongsTo(TableMaster)
TableMaster.hasMany(CommunalArch)
CommunalArch.belongsTo(TableMaster)
TableMaster.hasMany(FortuneCard)
FortuneCard.belongsTo(TableMaster)

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
