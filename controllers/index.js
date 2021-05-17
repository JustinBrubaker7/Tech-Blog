const router = require("express").Router();
const blogRoutes = require("./blog");
const userRoutes = require("./user");
const homeRoutes = require("./homeRoutes");

router.use("/user", userRoutes);
router.use("/blog", blogRoutes);
router.use("/", homeRoutes);

module.exports = router;
