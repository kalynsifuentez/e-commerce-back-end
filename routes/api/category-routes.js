const router = require("express").Router();
const { Category, Product } = require("../../models");

// Get Categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get SPECIFIC category
router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

  //  Error message if category is not found
    if (!category) {
      res.status(404).json({ message: "Category not found!" });
      return;
    }
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new category
router.post("/", async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
  //  Error message if category cannot be created
  res.status(400).json({ message: "Category not created, try again." });
  }
});

// Update a category by the `id` of the category
router.put("/:id", async (req, res) => {
  try {
    const categoryUpdated = await Category.update(req.body, {
      where: { id: req.params.id },
    });

    //  Error message if category id cannot be found
    if (!categoryUpdated) {
      res.status(404).json({ message: "Category Not Found." });
      return;
    }
    res.status(200).json({ message: "Category has been updated." });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    // Delete a category by the category `id`
    const categoryDeleted = await Category.destroy({ where: { id: req.params.id } });
    if (!categoryDeleted) {
      res.status(404).json({ message: "Category Not Found." });
      return;
    }
    res.status(200).json({message: "Category deleted."});
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
