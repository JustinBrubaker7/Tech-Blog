const router = require("express").Router();
const { User, Post } = require("../../models");
const withAuth = require("../../utils/auth");


router.get('/:id', async (req,res) => {
    try {
      const userBlogPosts = await Post.findAll({
          where: {
              user_id: req.params.id
          }
      });
      const posts = userBlogPosts.map((postInfo) => postInfo.get({ plain: true }));

        res.render("user-posts", {
            posts,
            id: req.user.id
            });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;
