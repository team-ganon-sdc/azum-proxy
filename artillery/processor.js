const faker = require("faker");

const generateRandomData = (userContext, events, done) => {
  const item = Math.floor(Math.random() * 10000000) + 1;
  const author = faker.name.firstName();
  const body = faker.lorem.paragraph();
  const rating = Math.floor(Math.random() * 10) + 1;
  const likes = Math.floor(Math.random() * 490 + 1) + 10;

  userContext.vars.item = item;
  userContext.vars.author = author;
  userContext.vars.body = body;
  userContext.vars.rating = rating;
  userContext.vars.likes = likes;

  return done();
}

const generateRandomId = (userContext, events, done) => {
  const id = Math.floor(Math.random() * 30000000) + 1;
  userContext.vars.id = id;
  return done();
}

module.exports = {
  generateRandomData,
  generateRandomId
};

