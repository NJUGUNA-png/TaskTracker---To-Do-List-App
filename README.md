The app is live @ https://task-tracker-to-do-list-app-two.vercel.app/

# TaskTrackr - To-Do List App

TaskTrackr is a simple, modern React-based task management application designed to help developers track their daily tasks efficiently.

## Features

- Create new tasks with titles and due dates
- Edit existing tasks
- Delete tasks when completed
- View all tasks in a clean, organized table
- Pre-loaded with common developer tasks as examples

## Components

The application consists of the following React components:

- **App**: The main component that manages state and renders the application
- **TaskForm**: Allows users to add new tasks with title and due date
- **TaskList**: Displays all tasks in a table format
- **TaskItem**: Represents individual task items with edit and delete functionality

## Technology Stack

- React (with Hooks)
- CSS for styling
- JavaScript ES6+

## Installation

1. Clone the repository:
```
git clone git@github.com:NJUGUNA-png/TaskTracker---To-Do-List-App.git
```

2. Navigate to the project directory:
```
cd tasktrackr
```

3. Install dependencies:
```
npm install
```

4. Start the development server:
```
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## Usage

1. **Adding a Task**: 
   - Enter the task title in the input field
   - Select a due date (optional)
   - Click "Add Task"

2. **Editing a Task**:
   - Click the "Edit" button next to a task
   - Modify the task title
   - Click "Save" to confirm changes

3. **Deleting a Task**:
   - Click the "Delete" button next to a task

## Project Structure

```
tasktrackr/
├── src/
│   ├── Components/
│   │   ├── TaskForm.jsx
│   │   ├── TaskList.jsx
│   │   └── TaskItem.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── public/
├── index.html
└── README.md
```

## Future Enhancements

- Task categories or tags
- Task priority levels
- Filtering and sorting options
- Task completion status
- User authentication
- Data persistence with backend API

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.