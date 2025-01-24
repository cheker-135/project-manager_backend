
# Project-Manager



Project management  MERN  web app built using modern web technologies to enhance productivity and collaboration.

## Technologies Used
### Frontend:
- [React JS](https://reactjs.org/) for building user interfaces
- [Redux](https://redux.js.org/) for state management
- [Material-UI](https://mui.com/) for styling

### Backend:
- [Node JS](https://nodejs.org/) for server-side logic
- [Express](https://expressjs.com/) for handling HTTP requests
- [MongoDB](http://mongodb.com/) as the database
- [Socket.IO](https://socket.io/) for real-time functionality

## [Live Demo](https://project--manager.up.railway.app/)
> You don't need to confirm your email to log in.

## Features
### General
- Fully responsive design
- Email confirmation for user authorization
- Notification system
- Real-time communication between users
- Upload profile pictures
- Create and join projects

### Projects
- Add lists and tasks
- Drag and drop lists and tasks to reorder them
- Update task, list, and project titles by clicking on them
- Invite users via username, email, or invite link
- Manage user permissions or remove users from projects
- Group chat functionality
- Archived tasks menu with options to retrieve or delete tasks
- Project settings with options to:
  - Change project theme and background (upload custom images)
  - Delete the project (available only for project creators)

### List Options
- Add new tasks to a list
- Transfer tasks between lists
- Archive tasks within a list
- Delete lists and archive tasks inside

### Task Modal
- Add rich text descriptions
- Assign users to tasks (with notifications)
- Apply, update, and create labels
- Add mini to-do lists:
  - Add, edit, delete to-do items
  - Mark items as finished
  - Hide completed to-do items
- Add deadlines to tasks
- Copy tasks
- Watch tasks to receive notifications
- Transfer tasks to different lists
- Archive or delete tasks
- Add, edit, and delete comments

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your system
- [MongoDB](https://www.mongodb.com/) installed and running locally or a connection to a MongoDB Atlas database

### Steps
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```
2. **Navigate to the project directory**:
   ```bash
   cd project-manager
   ```

3. **Install dependencies**:
   - For the backend:
     ```bash
     cd backend
     npm install
     ```
   - For the frontend:
     ```bash
     cd ../frontend
     npm install
     ```

4. **Set up environment variables**:
   - In the `backend` folder, create a `.env` file with the following variables:
    

HOST=smtp.gmail.com
EMAIL_PROVIDER=gmail
SMTP_PORT=587
EMAIL= hafoun9999@gmail.com
PASSWORD= regc cmmv lipd fgwt
URL="http://localhost:3000"``
     PORT=5000
     MONGO_URI=<your-mongodb-connection-string>
     JWT_SECRET=<your-jwt-secret>
     SOCKET_PORT=<socket-port>
     HOST=smtp.gmail.com
     EMAIL_PROVIDER=gmail
     SMTP_PORT=587
     EMAIL=<your-EMAIL>
     PASSWORD=<your-EMAIL-password>
    URL="http://localhost:3000"``
     ```
   - Replace `<your-mongodb-connection-string>` and `<your-jwt-secret>` with your actual MongoDB URI and a secret key for JWT. and other informations with yours 

5. **Start the application**:
   - Open two terminals:
     - **Terminal 1** (Backend):
       ```bash
       cd back
       npm start
       ```
     - **Terminal 2** (Frontend):
       ```bash
       cd front
       npm start
       ```

6. **Access the application**:
   - Open your browser and go to `http://localhost:3000`.

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests to enhance the project.

## License
This project is licensed under the [MIT License](LICENSE).
```

Happy coding !!