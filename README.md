# React Profile & Address Components

A simple React application designed to demonstrate component-based architecture, reusable UI elements, and data passing through props. The application displays a user's profile information, including their name, home address, and work address, using modular React functional components.

## Project Overview

This project explores foundational React concepts by breaking a user profile into smaller, reusable components. Rather than hardcoding all profile information into a single component, the application uses props to pass structured data between components.

The primary focus is on writing organized, maintainable React code while understanding how components interact to build a complete user interface.

## Features

- **Reusable Components:** Implements functional React components that can be reused with different data.
- **Props-Based Data Passing:** Passes user information and address details between parent and child components.
- **Component Composition:** Combines smaller components to create a complete profile display.
- **Structured Data Rendering:** Displays home and work addresses from JavaScript objects.
- **Semantic HTML:** Uses the HTML `<address>` element to format address information.

## Technologies Used

- **React 18** — Building component-based user interfaces
- **JavaScript (ES6+)** — Application logic, objects, and destructured props
- **HTML5** — Semantic markup
- **CSS3** — Basic styling
- **Parcel** — Development server and application bundling
- **Node.js / npm** — Dependency management and development environment

## Component Structure

The application consists of three primary React components.

### App Component (`App.js`)

The root application component.

- Defines the user's profile information.
- Stores home and work addresses as JavaScript objects.
- Passes user information into the Profile component using props.

### Profile Component (`Profile.js`)

Responsible for organizing and displaying profile information.

- Receives the user's name, home address, and work address.
- Displays the user's name and address labels.
- Reuses the Address component to render both addresses.
- Demonstrates nested components and prop passing.

### Address Component (`Address.js`)

A reusable component responsible for formatting address information.

- Accepts street, city, state, and ZIP code as props.
- Displays addresses with consistent formatting.
- Uses semantic HTML to organize address details.
- Can be reused wherever address information is needed.

## How It Works

The application follows a simple component hierarchy:

```text
App
└── Profile
    ├── User Name
    ├── Home Address
    │   └── Address
    └── Work Address
        └── Address
```

The `App` component supplies profile information to `Profile`. The `Profile` component then passes the appropriate address properties to two instances of the reusable `Address` component.

This approach separates data from presentation logic and reduces duplicated code.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/avasmolls/profile-address-react.git
   ```

2. Navigate into the project directory:

   ```bash
   cd profile-address-react
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run start-dev
   ```

5. Open `http://localhost:8080` in your browser.

## Skills Demonstrated

This project strengthened my understanding of:

- Developing reusable React functional components.
- Passing and destructuring props.
- Working with nested JavaScript objects.
- Organizing applications using component composition.
- Separating component responsibilities.
- Rendering structured information with JSX.
- Building maintainable, modular front-end code.

## Future Improvements

Potential enhancements include:

- Adding interactive forms for editing profile information.
- Implementing React state management with `useState`.
- Supporting multiple user profiles.
- Improving styling and responsive layouts.
- Adding form validation and reusable input components.

## Author

**Ava Smolley**

Human-Centered Design & Development | Penn State University

[GitHub](https://github.com/avasmolls)

---

*This project was developed as a React programming exercise focused on reusable components, props, and front-end application structure.*
