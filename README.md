# Anime-Wear-Closets

Anime-Wear-Closets is an e-commerce platform for anime-themed clothing, accessories, and costumes. This project is built using Node.js, Express, and MongoDB.

## Project Structure

- `app.js`: The main entry point of the application.
- `config/`: Configuration files for the application.
  - `development.json`: Contains the MongoDB URI.
  - `keys.js`: Contains the JWT key.
  - `mongoose-connection.js`: Sets up the MongoDB connection.
  - `multer-config.js`: Configures multer for file uploads.
- `controllers/`: Contains the controllers for handling requests.
  - `authController.js`: Handles user authentication.
- `middleware/`: Middleware functions.
  - `isLoggedIn.js`: Middleware to check if a user is logged in.
- `models/`: Mongoose models for the application.
  - `owner-model.js`: Model for the owner.
  - `product-model.js`: Model for the products.
  - `user-model.js`: Model for the users.
- `public/`: Static files (images, JavaScript, CSS).
- `routes/`: Express route handlers.
  - `index.js`: Routes for the home page and shop.
  - `ownerRouter.js`: Routes for the owner.
  - `productRouter.js`: Routes for the products.
  - `userRouter.js`: Routes for the users.
- `utils/`: Utility functions.
  - `generateToken.js`: Generates JWT tokens.
- `views/`: EJS templates for rendering HTML.
  - `partials/`: Contains partial EJS templates like header and footer.
  - `admin.ejs`: Admin panel for creating products.
  - `cart.ejs`: Cart page.
  - `createproducts.ejs`: Page for creating new products.
  - `index.ejs`: Home page.
  - `owner-login.ejs`: Owner login page.
  - `shop.ejs`: Shop page.

## Endpoints

### User Routes

- `POST /users/register`: Register a new user. Handled by [`authController.registerUser`](controllers/authController.js).
- `POST /users/login`: Login a user. Handled by [`authController.loginUser`](controllers/authController.js).
- `GET /users/logout`: Logout a user. Handled by [`authController.logout`](controllers/authController.js).

### Product Routes

- `POST /products/create`: Create a new product (requires image upload). Handled by [`productRouter`](routes/productRouter.js).

### Owner Routes

- `POST /owners/create`: Create a new owner (only in development mode). Handled by [`ownerRouter`](routes/ownerRouter.js).
- `GET /owners/admin`: Admin panel for creating products. Handled by [`ownerRouter`](routes/ownerRouter.js).

### Index Routes

- `GET /`: Home page. Handled by [`indexRouter`](routes/index.js).
- `GET /shop`: Shop page (requires login). Handled by [`indexRouter`](routes/index.js).
- `GET /cart`: Cart page (requires login). Handled by [`indexRouter`](routes/index.js).
- `GET /addtocart/:productid`: Add a product to the cart (requires login). Handled by [`indexRouter`](routes/index.js).

## Sensitive Information

- **Environment Variables**: Sensitive information such as `JWT_KEY` and `EXPRESS_SESSION_SECRET` are stored in environment variables. Make sure to create a `.env` file with the necessary keys.
- **Database Connection**: The MongoDB URI is stored in [`config/development.json`](config/development.json). Ensure that this file is not exposed publicly.
- **JWT Secret**: The JWT secret key is used for signing tokens and is stored in the `.env` file.

## Installation

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file with the following variables:
    ```
    JWT_KEY=your_jwt_secret_key
    EXPRESS_SESSION_SECRET=your_session_secret_key
    ```
4. Start the application using `npm start`.

## License

This project is licensed under the ISC License.
