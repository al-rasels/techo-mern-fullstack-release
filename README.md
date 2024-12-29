
# E-commerce Backend API

This project is a comprehensive e-commerce backend API developed as part of the Ostad MERN Batch-7 curriculum. It serves as a practical implementation of real-world project experience, focusing on the backend functionalities of an e-commerce platform.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Seeding the Database](#seeding-the-database)
  - [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication & Authorization**: Secure login and registration with role-based access control.
- **Product Management**: CRUD operations for products, including categories and inventory management.
- **Order Processing**: Manage customer orders, order statuses, and payment processing.
- **Shopping Cart**: Handle user shopping cart functionalities.
- **Wishlist**: Allow users to add products to their wishlist.
- **Reviews & Ratings**: Users can leave reviews and ratings for products.
- **Admin Dashboard**: Administrative access to manage users, products, and orders.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **JWT**: JSON Web Tokens for authentication.
- **bcrypt.js**: Library for hashing passwords.

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js**: [Download and install](https://nodejs.org/).
- **MongoDB**: [Download and install](https://www.mongodb.com/try/download/community).

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/shant0786/e-commerce-mern-app.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd e-commerce-mern-app
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

### Configuration

1. **Environment Variables**:

   Create a `.env` file in the root directory and add the following variables:

   ```env
   PORT=8000
   MONGO_URI=mongodb://localhost:27017/ecommerce
   JWT_SECRET=your_jwt_secret
   ```

   Replace `your_jwt_secret` with a secure secret key of your choice.

### Seeding the Database

To populate the database with initial data, run:

```bash
npm run seed
```

This will add sample users, products, and other necessary data to your MongoDB database.

### Running the Application

Start the development server with:

```bash
npm run dev
```

The server will run on `http://localhost:8000`.

## API Endpoints

The API provides the following endpoints:

- **User Routes**:
  - `POST /api/users/register`: Register a new user.
  - `POST /api/users/login`: Authenticate a user.
  - `GET /api/users/profile`: Retrieve user profile (requires authentication).

- **Product Routes**:
  - `GET /api/products`: Retrieve all products.
  - `GET /api/products/:id`: Retrieve a single product by ID.
  - `POST /api/products`: Create a new product (admin only).
  - `PUT /api/products/:id`: Update a product by ID (admin only).
  - `DELETE /api/products/:id`: Delete a product by ID (admin only).

- **Order Routes**:
  - `POST /api/orders`: Create a new order.
  - `GET /api/orders/:id`: Retrieve order by ID.
  - `GET /api/orders/user/:userId`: Retrieve orders for a specific user.
  - `PUT /api/orders/:id`: Update order status (admin only).

- **Cart Routes**:
  - `GET /api/cart`: Retrieve user's cart.
  - `POST /api/cart`: Add item to cart.
  - `PUT /api/cart/:itemId`: Update cart item quantity.
  - `DELETE /api/cart/:itemId`: Remove item from cart.

- **Wishlist Routes**:
  - `GET /api/wishlist`: Retrieve user's wishlist.
  - `POST /api/wishlist`: Add item to wishlist.
  - `DELETE /api/wishlist/:itemId`: Remove item from wishlist.

- **Review Routes**:
  - `POST /api/products/:id/reviews`: Add a review to a product.
  - `GET /api/products/:id/reviews`: Retrieve reviews for a product.

For detailed information on request and response structures, refer to the API documentation or the source code.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## License

