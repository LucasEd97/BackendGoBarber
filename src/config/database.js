module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  user: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
