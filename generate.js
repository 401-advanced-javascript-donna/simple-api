module.exports = function() {
  const faker = require('faker');
  const _ = require('lodash');
  return {
    categories: _.times(10, catId => {
      return {
        _id: catId, 
        name: faker.random.word(),
        display_name: faker.random.word(),
        description: faker.random.words()
      }
    }),
    products: _.times(30, prodId => {
      return {
        _id: prodId,
        category: faker.commerce.productMaterial(),
        name: faker.commerce.product(),
        display_name: faker.commerce.productName(),
        description: faker.commerce.productAdjective()
      }
    })

  }
}