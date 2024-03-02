const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
  // find all categories
  // be sure to include its associated Products
  const categories = await Category.findAll({ include: [{ model: Product }] });
    res.status(200).json(categories);
  } catch (err) {
    // Handle errors by sending a 500 status with a custom message
    res.status(500).json({ message: 'not found!' });
  }
});

router.get('/:id', async (req, res) => {
  try {
  // find one category by its `id` value
  // be sure to include its associated Products
  const category = await Category.findByPk(req.params.id, { include: [{ model: Product }] });

    // If the category is not found, send a 404 status with a custom message
    if (!category) {
      res.status(404).json({ message: 'id not found' });
      return;
    }

    res.status(200).json(category);
  } catch (err) {
    // Handle errors by sending a 500 status with a custom message
    res.status(500).json({ message: 'not found!' });
  }
});

router.post('/', async (req, res) => {
  try {
  // create a new category
  const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    // Handle errors by sending a 400 status with a custom message
    res.status(400).json({ message: 'creation failed' });
  }
});

router.put('/:id', async (req, res) => {
  try {
  // update a category by its `id` value
  const updated = await Category.update(req.body, { where: { id: req.params.id } });

  // If the category is not found, send a 404 status with a custom message
  // Otherwise, return the updated data
  !updated[0] ? res.status(404).json({ message: 'id not found' }) : res.status(200).json(updated);
} catch (err) {
  // Error message sends a 500 status
  res.status(500).json({ message: 'Retry update' });
}
});

router.delete('/:id', async(req, res) => {
  try {
  // delete a category by its `id` value
  const deleted = await Category.destroy({ where: { id: req.params.id } });

    // If the category is not found, send a 404 status with a custom message
    // Otherwise, return the deleted data
    !deleted ? res.status(404).json({ message: 'id not found' }) : res.status(200).json(deleted);
  } // If there is an error, send a 500 status with the error
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
