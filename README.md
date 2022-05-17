# Project Atelier

## Table of Contents

1. [Description](#description)
1. [Requirements](#requirements)
1. [Usage](#usage)
1. [Technologies](#technologies)

## Description

Create a modern client facing retail web-portal that improves the user experience and increase sales for the company.  The website consists of four main components including the **Overview** section, **Related Items**, **Questions and Answers** and **Ratings and Reviews**.

Upon entering the website, users will have the ability to interact with current item , view different styles in an image gallery, select styles and add to cart.
<br>Following the Overview section is the Related Items carousel where users will see additional items realted to the current overview in a carousel style layout and be able to add items to their personal Your Outfit section.
<br>In addition, each item will have a questions and answers section where users will be able to interact with other users to gain more information about a particualr product as well as share their current experiences.
<br>Lastly, Users have the ability to share any reviews on a product that they have already purchased with other users and rate the item on a number of features.

<details>
<summary>Main Components</summary>

  - Overview
    - Product Details
    - Image Gallery
    - Style Selector
    - Add to cart
  - Related Products
    - Carousel
      - Related Items
      - Your Outfit
  - Questions and Answers
    - Search and Filter
    - Q & A List
      - Question
      - Answer
    - Add a Question or Answer
  - Ratings and Reviews
    - Ratings Breakdown
      - Average Review
      - Breakdown by star rating
      - Recommendation percentage
    - Product Beakdown
      - Spectrums
        - Size
        - Comfort
    - Review List
      - Sorter/Info Bar
      - Individual Reviews

</details>

<br>

Product Overview: The first widget on the page which provides detailed information on the current product being shown.  Current users will be able to select differnt styles, colors, sizes and quantities from a selection menu and add that to their shopping cart.

![Overview](/screenshots/Overview.png)

Related Products: This widget will display a carsosel of images of related items as well as a user created outfit which will be a collection of items the user selects to build out an outfit of their desire.

![Related Products](/screenshots/RelatedItems.png)

Questions and Answers: Provides users with the ability to ask questions and receive answers from the current product displayed in the overview widget.  Questions will be searchable and users will have the ability to upload their own photos and provide feedback.

![Questions and Answers](/screenshots/QuestionAndAnswers.png)

Ratings & Reviews: In this section will allow users to view and submit reviews for the product selected. This component extends the ability to write, read and browse through reviews for current product.

![Ratings and Reviews](/screenshots/RatingAndReview.png)

### Team Members

| Name | Component | Repository |
|---|---|---|
| Alisha | Overview | [Alisha's Fork](https://github.com/akb3y/front-end-capstone) |
| Will | Related Items | [Will's Fork](https://github.com/Acid-Override/front-end-capstone) |
| Addison | Questions and Answers | [Addison's Fork](https://github.com/addisonhernandez/front-end-capstone) |
| Stephanie | Ratings and Reviews | [Stephanie's Fork](https://github.com/positivefx/front-end-capstone) |

## Requirements

This project uses the [dotenv](https://www.npmjs.com/package/dotenv) package to manage environment variables.

To create a working instance for yourself, modify the `sample.env` provided, filling in a valid github token and firebase API token.

An `nvmrc` file is included if using [nvm](https://github.com/nvm-sh/nvm).
This project was built using Node.js 16.13.2

## Usage

### Available Scripts

In the project directory, you can run:

#### `npm run client-dev`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

#### `npm run server-dev`

Launches the server and uses Nodemon to monitor for any file changes. If any file changes are detected with Nodemon, it will automatically restart the node server.
Server will be listening on (http://localhost:3000)
(https://facebook.github.io/create-react-app/docs/deployment)

#### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Amazon EC2 Deployment

- Launch a new t2.micro
  - Ubuntu 20.04 LTS
  - 64-bit (x86)
  - Create a new RSA pem key pair
  - Allow SSH, HTTP, Port 3000
- Install NVM, Node and NPM
- Git clone Repo into EC2
- Build and Run Webpack
  - `npm run build`
  - `npm run start`


## Technologies

|   |   |   |   |
|---|---|---|---|
| **Bundler** | Webpack | Babel Transpiler |
| **Front End** | React | Styled-Components| CSS Modules |
| **Back End** | Node | Express | Firebase |
| **Dev Ops** | ESLint | Airbnb Style Guide |
| **Deployment** | AWS EC2 |
