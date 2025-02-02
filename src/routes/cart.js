const express = require('express');
const { requireSignin, userMiddleware } = require('../common-middleware');
const router = express.Router();
const { addItemToCart } = require('../controller/cart');

router.post('/user/cart/addtocart',requireSignin, userMiddleware, addItemToCart);
//router.get('/cart/getcategory', getCategories);

module.exports = router;