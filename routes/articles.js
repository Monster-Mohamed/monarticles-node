// all requires
const express = require("express");
const ArticleController = require("../controllers/ArticleController");
const router = express.Router();

// ----------------
// start article section
// ----------------

// get all articles
router.get("/articles", ArticleController.index_get);

// get specific article
router.get("/article/:id", ArticleController.get_article);

// add new article
router.post("/article", ArticleController.create_article);

// delete the article
router.delete("/article/:id", ArticleController.delete_article);

// ----------------
// end article section
// ----------------

module.exports = router;
