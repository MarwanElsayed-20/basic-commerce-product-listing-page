# Writing the README content into a README.md file

# Basic Commerce Product Listing Page

This project is a simple e-commerce product listing page built with Next.js (App Router), TailwindCSS, and the Fake Store API. The application displays a list of products in a clean and responsive UI, showcasing key product information including the image, title, price, and rating. The goal of this project is to demonstrate front-end development skills by creating a mobile-friendly and visually appealing interface using modern web technologies.

## Features
- **Data Fetching**: Products are fetched from the Fake Store API and displayed dynamically.
- **Responsive Design**: Utilizes TailwindCSS to create a responsive, mobile-friendly layout using Flexbox and CSS Grid.
- **Loading and Error Handling**: Includes a loading skelton while fetching data and basic error handling to inform users if the data cannot be retrieved.
- **Product Card UI**: Each product is displayed in a card format, showcasing its image, title, price, and rating.

## Technologies Used
- **Next.js (App Router)**: Leveraging the latest Next.js app routing architecture for optimized server-side rendering and efficient routing.
- **TailwindCSS**: For styling and creating a responsive layout quickly and efficiently.
- **Fake Store API**: An API to provide product data including images, titles, prices, and ratings.

## Approach
1. **Setting Up Next.js**: Started with a Next.js project using the App Router for better organization and optimized data handling.
2. **API Integration**: Fetched product data using the Fake Store API and implemented server-side rendering (SSR) to improve performance and SEO.
3. **Component-Based Architecture**: Created reusable components like `CategoryProducts`, `Sidebar`, and other UI elements to keep the code modular and maintainable.
4. **Styling with TailwindCSS**: Styled the application using TailwindCSS for fast development and to achieve a clean, responsive layout with minimal custom CSS.
5. **Error Handling**: Added basic error handling to display an error message when the API call fails, and a loading skelton while data is being fetched.
6. **Responsive Design**: Ensured the layout is fully responsive using Flexbox and CSS Grid, making the design adaptable across various screen sizes.

## Challenges Faced
- **Data Fetching**: Integrating the Fake Store API and handling errors gracefully was a key focus. Handling different loading states and making sure the data was updated correctly in the UI was a critical part of the development.
- **Styling Consistency**: While using TailwindCSS made styling efficient, ensuring consistency across different screen sizes and testing the responsiveness required some fine-tuning.

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or yarn

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/your-username/basic-commerce-product-listing.git
    ```
2. Navigate into the project directory
    ```
   cd basic-commerce-product-listing
   ```
3. Install dependencies:
   ``` 
   npm install
   # or
   yarn install
   ```
4. Set up environment variables:
  Create a .env.local file in the root of the project.
  Add BASE_URL = "https://fakestoreapi.com/"

### Running the Application
To start the development server, run:
``` 
npm run dev
# or
yarn dev
```
Open http://localhost:3000 in your browser to view the application.

### Building for Production
To build the application for production, run:
``` 
npm run build
# or
yarn build
```
Start the server:
``` 
npm start
# or
yarn start
```

### Live Demo
https://basic-commerce-product-listing-page.vercel.app/








