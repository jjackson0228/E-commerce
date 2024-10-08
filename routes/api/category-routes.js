const router = require('express').Router();
const { up } = require('inquirer/lib/utils/readline');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({
      //find all categories and include product from model
      include: [{ model: Product }],
    });
    res.status(200).json(categories); //return data for categories
  } catch (err) {
    res.status(500).json(err); //throw error if issue is there
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const category = await Category.findOne({
      where: { id: req.params.id }, //find one product and category by id including product name
      include: [{ model: Product }],
    });

    if (!category) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.status(200).json(category); //returns data in response
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body); //creates new category using request body

    res.status(200).json(newCategory); //sensds data for post category
  } catch (e) {
    res.status(400).json(e); // throw error if one exists
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updatedCategory = await Category.update(req.body, {
      where: { id: req.params.id },
    });

    if (!updatedCategory[0]) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value finished sun Aug 25
  try {
    const deletedCategory = await Category.destroy({
      where: { id: req.params.id },
    });

    if (!deletedCategory) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res
      .status(200)
      .json({
        message: 'Category deleted successfully!',
        status: deletedCategory,
      });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
