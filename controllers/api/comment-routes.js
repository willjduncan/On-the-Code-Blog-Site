const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//GET ALL COMMENTS
router.get('/', (req, res) => {
    Comment.findAll({
        //order by most recent
        order: [['created_at', 'DESC']], 
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

//ADD A COMMENT
router.post('/', withAuth, (req, res) => {
    Comment.create({
      comment_text: req.body.comment_text,
      post_id: req.body.post_id,
      // use the id from the session
      user_id: req.session.user_id
    })
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
});

//DELETE A COMMENT
router.delete('/:id', withAuth, (req, res) => {
    Comment.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No comment found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;