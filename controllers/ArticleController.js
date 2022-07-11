// all requires
const Article = require("../models/articleSchema");

// get all articles
const index_get = (req, res) => {
  Article.find()
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      res.status(400).send({
        message: err.message,
      });
    });
};

// get specific article
const get_article = (req, res) => {
  Article.findById(req.params.id)
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      res.status(400).send({
        message: err.message,
      });
    });
};

// add new article
const create_article = (req, res) => {
  try {
    const article = new Article(req.body);

    article
      .save()
      .then((result) => {
        // return the success message
        res.send({ message: "The article has been created successfully" });
      })
      .catch((err) => {
        res.status(400).send({
          message: err.message,
        });
      });
  } catch (error) {
    res.status(400).send({
      message: err.message,
    });
  }
};

// delete the article
const delete_article = (req, res) => {
  Article.findByIdAndDelete(req.params.id)
    .then((results) => {
      res.send({
        message: "Article was deleted successfully!",
      });
    })
    .catch((err) => {
      res.status(400).send({
        message: err.message,
      });
    });
};

module.exports = { index_get, get_article, create_article, delete_article };
