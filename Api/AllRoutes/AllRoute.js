let router = require('express').Router()

router.use("/api/v1/signup",require('../Controllers/SignUpController'))
router.use("/api/v1/city",require('../Controllers/CityStateController'))
router.use("/api/v1/login",require('../Controllers/AuthController'))
router.use("/api/v1/users",require('../Controllers/UsersController'))
router.use("/api/v1/category",require('../Controllers/CategoryController'))
router.use("/api/v1/subcategory",require('../Controllers/SubCategoryController'))
router.use("/api/v1/product",require('../Controllers/ProductController'))
router.use("/api/v1/adminauth",require('../Controllers/AdminAuthController'))
router.use("/api/v1/customadmin",require('../Controllers/AdminCustom'))
router.use("/api/v1/order",require('../Controllers/OrderController'))
router.use("/api/v1/invoice",require('../Controllers/InvoiceController'))
router.use("/api/v1/payment",require('../Controllers/PaymentController'))

module.exports = router