const router = require("express").Router();
const blogRoutes = require("./blogRoutes");
const homeRoutes = require("./homeRoutes");

router.use("/blog", blogRoutes);
router.use("/", homeRoutes);

module.exports = router;