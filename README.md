# Todo List Application

A modern React-based todo list application with Redux state management, featuring a beautiful UI with animated gradient backgrounds and complete CRUD operations.

## Features

- Create, Read, Update, and Delete tasks
- Beautiful gradient background with animated blobs
- Responsive design with Tailwind CSS
- State management with Redux Toolkit
- React Router for navigation
- API integration with JSONPlaceholder

## Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (version 14.0 or higher)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone 
cd todo-list-app
```

2. Install dependencies:
```bash
npm install
```

This will install all required dependencies including:
- react
- react-redux
- @reduxjs/toolkit
- react-router-dom
- tailwindcss

## Running the Application

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to:
```
http://localhost:5173
```

## Project Structure

```
src/
├── components/
│   └── Navbar.jsx
├── features/
│   └── tasks/
│       └── taskSlice.js
├── pages/
│   ├── AddTask.jsx
│   ├── EditTask.jsx
│   └── TaskList.jsx
├── App.jsx
├── index.css
├── main.jsx
└── store.js
```

## API Integration

The application uses JSONPlaceholder as a mock API. All CRUD operations are simulated with this API. In a production environment, you would replace these endpoints with your actual API endpoints.

## Available Scripts

- `npm run dev`: Runs the app in development mode
- `npm run build`: Builds the app for production
- `npm run preview`: Serves the production build locally

## Customization

### Styling
The application uses Tailwind CSS for styling. You can customize the appearance by:

1. Modifying the Tailwind configuration file
2. Adding custom CSS in `index.css`
3. Adjusting the gradient and blob animation properties in `App.jsx`

### API Endpoints
To use your own API, update the endpoints in `taskSlice.js`. The current endpoints are:

- GET: `https://jsonplaceholder.typicode.com/todos`
- POST: `https://jsonplaceholder.typicode.com/todos`
- PUT: `https://jsonplaceholder.typicode.com/todos/${id}`
- DELETE: `https://jsonplaceholder.typicode.com/todos/${id}`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request