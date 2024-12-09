Here’s your updated README file with improved clarity and structure, ensuring it accurately reflects the features and functionality of your Mini Message Board project:

---

# Mini Message Board

A simple message board application built with **Node.js** and **Express**, using **EJS** as the templating engine. This application allows users to view, add, and read messages. It includes basic CRUD functionality, a user-friendly interface, and custom styling.

👉 **Live Preview:** [Mini Message Board](https://mini-message-board-24gd.onrender.com/)

---

## Features

- **View Messages**: Displays all messages on the homepage.
- **Add New Messages**: Users can add messages via a form.
- **Message Details**: View individual messages on dedicated pages.
- **Responsive Design**: Clean and modern layout optimized for all devices.

---

## Tech Stack

- **Node.js**: Server-side JavaScript runtime.
- **Express**: Web application framework.
- **EJS**: Templating engine for rendering dynamic views.
- **PostgreSQL**: Relational database for persistent message storage.
- **CSS**: Custom styles for the user interface.

---

## Installation

To run the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Ozioma45/mini_message_board.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd mini-message-board
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Set up the database**:

   - Ensure you have PostgreSQL installed and running.
   - Create a database for the project and configure it in the `db/db.js` file.

5. **Start the server**:

   ```bash
   npm start
   ```

6. **Open in your browser**:
   Visit [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
mini-message-board/
│
├── db/                      # Database configuration
│   └── db.js                # PostgreSQL connection setup
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
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
```

---

## Routes

| HTTP Method | Route          | Description                             |
| ----------- | -------------- | --------------------------------------- |
| GET         | `/`            | Displays the list of messages.          |
| GET         | `/new`         | Displays the form to add messages.      |
| POST        | `/new`         | Handles form submissions.               |
| GET         | `/message/:id` | Displays details of a specific message. |

---

## Styling

The project uses custom CSS located in the `public/styles.css` file. Features include:

- **Responsive Layout**: Works seamlessly on mobile, tablet, and desktop devices.
- **Minimalist Design**: Focused on readability and user experience.
- **Hover Effects**: Enhances interactivity.

---

## Future Enhancements

- **Delete Messages**: Add functionality for removing messages.
- **Edit Messages**: Allow users to modify their messages.
- **User Authentication**: Secure message posting with user accounts.
- **API Integration**: Provide a REST API for external access.
- **Rich Text Support**: Enable rich text formatting in messages.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Author

👤 **Ozioma Egole**  
🔗 [GitHub Profile](https://github.com/ozioma45)
