module.exports = `
  id              int NOT NULL AUTO_INCREMENT,
  name            varchar(100) NOT NULL,
  date            timestamp default current_timestamp,
  PRIMARY KEY (ID)
`
