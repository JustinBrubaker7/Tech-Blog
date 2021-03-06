const router = require("express").Router();
const { User, Post } = require("../models");
const withAuth = require("../utils/auth");


//render home page
router.get("/", async (req, res) => {
  try {
    const allBlogPosts = await Post.findAll({ include: User});
    const posts = allBlogPosts.map((postInfo) => postInfo.get({ plain: true }));
    const userId = await User.findAll();
    console.log(req.user)
    res.render("home", {
      posts,
      id: req.user,
      loggedIn: req.session.loggedIn,
      // layout: "main.handlebars",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//render login view
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

//render register view
router.get("/register", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("register");
});


//register
router.post("/register", async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Login
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUserData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
