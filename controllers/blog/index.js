const router = require("express").Router();
const blogRoutes = require("./blogRoutes");


router.use("/", blogRoutes);


module.exports = router;
