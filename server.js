const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.post("/api/articles", (req, res) => {
  try {
    const { title, content, author, category, imageUrl } = req.body;

    const newPost = {
      id: Date.now().toString(),
      title,
      content,
      author,
      category,
      imageUrl,
    };

    console.log("New Post Data:", newPost);
    res.status(200).json(newPost);
  } catch (error) {
    console.error("Error handling POST /api/articles:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
