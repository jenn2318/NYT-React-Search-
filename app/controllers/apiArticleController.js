const Article = require('../models/Article');

module.exports = {
    //Created the query for the article
    index: function(req, res) {
        var query;
        if (req.query) {
            query = req.query;
        }
        else {
            query = req.params.id ? { _id: req.params.id } : {};
        }
        Article.find(query)
            .then(function(doc) {
                res.json(doc);
            }).catch(function(err) {
            res.json(err);
        });
    },
    // Here this code will handle creating new articles

    create: function(req, res) {
        //Create the article object
        const savedArticle 	= {};
        savedArticle.title 	= req.body.article.headline.main;
        savedArticle.url	= req.body.article.web_url;
        // savedArticle.date	= req.body.article.pub_date;
        savedArticle.date = Date.now();
        Article.create(savedArticle).then(function(doc) {
            res.json(doc);
        }).catch(function(err) {
            res.json(err);
        });
    },
    // Here this code will delete articles
    destroy: function(req, res) {
        Article.remove({
            _id: req.params.id
        }).then(function(doc) {
            res.json(doc);
        }).catch(function(err) {
            res.json(err);
        });
    }
};
