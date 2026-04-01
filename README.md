# 📝 Task Tracker App

A clean and responsive **Task Tracker (To-Do App)** built with React.
This application allows users to manage tasks efficiently with features like filtering, persistence, and edge-case handling.

---

## 🚀 Features

* ➕ Add new tasks
* ✅ Mark tasks as complete / undo
* 🗑️ Delete tasks
* 🔍 Filter tasks:

  * All
  * Active
  * Completed
* 📊 Active tasks counter
* 🧹 Clear completed tasks
* 💾 Persistent storage using `localStorage`
* 🎯 Responsive and clean UI

---

## ⚙️ Tech Stack

* **Frontend:** React (Functional Components + Hooks)
* **Styling:** CSS (custom, no frameworks)
* **State Management:** React `useState`
* **Persistence:** Browser `localStorage`

---

## 📂 Project Structure

```bash
taskflow/
├── src/
│   ├── components/
│   │   ├── TaskInput.jsx
│   │   ├── TaskList.jsx
│   │   └── TaskItem.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── public/
├── package.json
└── README.md
```

---

## 🧠 How It Works

* Tasks are stored as objects:

```js
{
  id: number,
  text: string,
  completed: boolean
}
```

* Filtering is implemented using:

```js
tasks.filter(task => ...)
```

* State is persisted using:

```js
localStorage.setItem("tasks", JSON.stringify(tasks));
```

---

## 🛠️ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/tshiyonzo25/taskflow.git
```

2.Navigate into the project:

```bash
cd taskflow
```

3.Install dependencies:

```bash
npm install
```

4.Run the development server:

```bash
npm run dev
```

5.Open in browser:

<http://localhost:5173>

## ⚠️ Edge Case Handling

This project explicitly handles important edge cases:

* 🚫 Prevents empty tasks from being added
* 🔁 Prevents duplicate tasks (case-insensitive)
* 📭 Displays a friendly empty state:

  > "No tasks yet"
* 💾 Ensures tasks persist after page refresh

These improvements enhance reliability and user experience.

---

## 🎯 Key Improvements & Enhancements

* Dynamic filtering system (All / Active / Completed)
* Visual feedback for active filter buttons
* Clean two-column layout for tasks and actions
* Conditional rendering for "Clear Completed" button
* Improved UI structure using CSS classes (no inline styles)

---

---

## 📌 Future Improvements

* ✏️ Edit task functionality
* 📱 Mobile responsiveness improvements
* 🌙 Dark mode
* 🔔 Notifications / reminders
* 🔄 Drag-and-drop task reordering

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 👤 Author

## Marionne Tshiyonzo

* GitHub: <https://github.com/tshiyonzo25>

---
