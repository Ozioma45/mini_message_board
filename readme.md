# Mini Message Board

A simple message board application built with Node.js and Express, using EJS as the templating engine. This application allows users to view, add, and read messages. The project includes basic CRUD functionality with a user-friendly interface and is styled with custom CSS.

-- live preview [click here](https://mini-message-board-0k32.onrender.com/)

## Features

- View a list of messages on the homepage.
- Add new messages via a form.
- View message details on a separate page.
- Clean, responsive design with basic styling.

## Tech Stack

- **Node.js**: Server-side JavaScript runtime.
- **Express**: Web framework for Node.js.
- **EJS**: Templating engine for rendering dynamic content.
- **CSS**: Custom styles for the UI.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Ozioma45/mini_message_board
   ```

2. Navigate to the project folder:

   ```bash
   cd mini-message-board
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. Open your browser and visit [http://localhost:3000](http://localhost:3000).

## Project Structure

```
mini-message-board/
│
├── public/                  # Static files (CSS, images, etc.)
│   └── styles.css           # Custom CSS for styling
│
├── views/                   # EJS templates
│   ├── index.ejs            # Homepage displaying messages
│   ├── message.ejs          # Message details page
│   ├── form.ejs             # Form for adding new messages
│   └── navbar.ejs           # Navbar template
│
├── app.js                   # Main application file (server setup)
├── package.json             # NPM dependencies and scripts
└── README.md                # Project documentation
```

## Routes

- `/`: Displays the list of messages.
- `/new`: Displays the form to add a new message.
- `/message/:id`: Displays the details of a specific message.

## Styling

The project includes custom styling in the `public/styles.css` file. It features a clean, modern design with hover effects, responsive layout, and minimalistic colors.

## Future Enhancements

- Implement message deletion functionality.
- Add user authentication for message posting.
- Implement message editing functionality.
- Use a database (e.g., MongoDB or MySQL) for persistent storage.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

[Ozioma45](https://github.com/ozioma45)

```

```
