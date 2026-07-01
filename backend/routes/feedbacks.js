const router = require("express").Router();
const Feedback = require("../models/Feedback")


router.get("/", async (req, res) => {
  try {
    const feedbacks = await Feedback.find()
      .populate("author", "name photo email") 
      .sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

router.post("/", async (req, res) => {
  
  if (!req.user) {
    return res
      .status(401)
      .json({ message: "Войди через Google чтобы оставить комментарий" });
  }

  try {
    const feedback = await Feedback.create({
      text: req.body.text,
      author: req.user._id,
    });

    const populated = await feedback.populate("author", "name photo email");
    res.json(populated);
  } catch (err) {
    res.status(500).json({ message: "Ошибка сервера" });
  }
});


router.delete("/:id", async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Не авторизован" });
  }

  try {
    const feedback = await Feedback.findById(req.params.id);

    if (feedback.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Нет доступа" });
    }

    await feedback.deleteOne();
    res.json({ message: "Удалено!" });
  } catch (err) {
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

module.exports = router;
