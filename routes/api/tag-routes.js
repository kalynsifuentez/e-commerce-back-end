const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag }],
    });
    if (!tagData) {
      res.status(404).json({ message: "No tag found!" });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // Create a new tag
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json({ message: "Tag not created, try again." });
  }
});

router.put("/:id", async (req, res) => {
  // Update tag `id`
  try {
    const tagUpdated = await Tag.update(req.body, {
      where: { id: req.params.id },
    });
    //  Error message if tag id cannot be found
    if (!tagUpdated) {
      res.status(404).json({ message: "Tag Not Found." });
      return;
    }
    res.status(200).json(tagUpdated);
  } catch (err) {
    res.status(500).json(tagUpdated);
  }
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deleteTag = await Tag.destroy({ where: { id: req.params.id } });
    //  Error message if tag id cannot be found
    if (!deleteTag) {
      res.status(404).json({ message: "Tag Not Found." });
      return;
    }
    res.status(200).json(deleteTag);
  } catch (err) {
    res.status(500).json(deleteTag);
  }
});

module.exports = router;
