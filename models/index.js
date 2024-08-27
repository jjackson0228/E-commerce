// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  //parent has many child
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  //child only has one parent
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id', // Corrected foreign key
  otherKey: 'tag_id',
  onDelete: 'CASCADE',
});

// Tags belongToMany Products (through ProductTag) finished these 25 Aug 8:05
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
  otherKey: 'product_id',
  onDelete: 'CASCADE',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
