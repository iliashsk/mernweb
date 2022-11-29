import express from 'express';
import {address,dataForm,createPost,createRating,Login,Weather} from '../controllers/posts.js';
const router=express.Router();

router.use(function (req, res, next) {
  console.log("Middleware Called");
  next();
});

router.post("/create",createPost);
router.post("/rating",createRating);
router.get("/Home",address);
router.get("/api", dataForm);
router.post("/weath", Weather);
router.post("/login", Login);

/////////////////////////////////Ecommerce router/////////////////////////////



export default router;
