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
import {registerUser,getMe} from '../controllers/userController.js';

//import protect from '../middleware/authMiddleware.js'

router.post('/apis/users', registerUser)
//router.post('/apis/users/login', loginUser)
router.get('/apis/users/marks', getMe)



export default router;
