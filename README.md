# MERN Stack Project

This project is a full-stack application built using the **MERN stack** — MongoDB, Express.js, React, and Node.js. It demonstrates modern web development best practices, including RESTful API design, JWT authentication, and responsive UI.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About

Describe your project here.  
_For example:_  
This project is a [movie rental platform/blog/e-commerce/management system] that allows users to [register, browse items, rent, purchase, etc.]. It features user authentication, CRUD operations, and a modern, intuitive user interface.

## Features

- User authentication with JWT
- CRUD operations for main resources
- Responsive React UI
- RESTful API built with Express.js
- MongoDB for data persistence
- Error handling and validation
- Customer Management
  - Create new customer profiles.
  - Edit existing customer details.
  - Delete customers from the system.
- Movie & Genre Management
  - Maintain a list of movie genres.
  - Add, edit, and delete movies.
- Rental Management
  - Create new rentals by selecting a customer and a movie from the list.
  - Track rental return dates.
  - Automatically calculate rental fees based on daily rental rate and return date.

## Tech Stack

- **Frontend:** React,Vite,Axios,Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT, bcrypt ,lodash
- **Other:**nodemon, cors , winston , winston-mongodb , config , fawn , joi , joi-objectid , jsonwebtoken , moment 

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB (local or Atlas cloud)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ethio-man/Vidly.git
   cd Vidly
   ```

2. **Backend setup:**
   ```bash
   cd Vidly-back
   npm install
   ```

3. **Frontend setup:**
   ```bash
   cd ../Vidly_front
   npm install
   ```

### Running the App

1. **Start the backend:**
   ```bash
   cd Vidly-back
   export vidly_jwtPrivateKey=...(e.g securedKey123)
   node index.js
   ```

2. **Start the frontend (in a new terminal):**
   ```bash
   cd Vidly_front
   npm run dev
   ```

The app should now be running at `http://localhost:3000` (React frontend) and the API at `http://localhost:5000` (Express backend).


## API Endpoints

| Method | Endpoint            | Description            |
|--------|---------------------|------------------------|
| GET    | /api/items          | Get all items          |
| POST   | /api/items          | Create a new item      |
| PUT    | /api/items/:id      | Update an item         |
| DELETE | /api/items/:id      | Delete an item         |
| POST   | /api/users          | Register a new user  |
| POST   | /api/auth           | Login                |

items ≈ users , customers ,genres ,movies ,rentals ,returns

## Contributing

1. Fork the repo
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Created by [Dagmawi Antehun](https://github.com/ethio-man) — feel free to contact me!