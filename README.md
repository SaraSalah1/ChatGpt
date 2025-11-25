# 📝 React ChatGPT Interface

A modern React application that mimics a ChatGPT-style interface.  
Users can fetch advice from an API, interact with dropdown menus, open help links, and log in/sign up using a stylish modal.  
The project demonstrates **React Hooks**, **component composition**, **conditional rendering**, **API integration**, and **responsive UI design**.

---

## 🚀 Key Features

### Chat & Advice
- Chat input with external Advice API fetching.
- Displays advice dynamically after user input.

### UI Interactions
- ChatGPT-style dropdown menu with card content.
- Login/Signup modal supporting Google, Apple, Microsoft, Phone, and Email.
- Help menu with links to Plans, Settings, Help Center, Release Notes, Terms & Policies.
- Smooth hover effects, transitions, and fully responsive layout.
- Dropdowns and modals close automatically when clicking outside.

---

## 🎨 Technology Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| Frontend Framework | React.js | Component-based UI |
| Styling | Tailwind CSS + Material-UI Icons | Responsive, modern styling |
| Logic | JavaScript (ES6+) | Async operations and DOM manipulation |
| API Integration | Fetch API | Fetch external advice data |
| State Management | React Hooks (useState, useEffect) | Local component state |

---

## 📸 Screenshots

### ChatGPT Dropdown
<img src="https://github.com/user-attachments/assets/a7f5379e-21d6-44d7-9570-d2adc7d2f375" alt="ChatGPT Dropdown" width="600" />

### Login/Signup Modal
<img src="https://github.com/user-attachments/assets/39f29800-52a1-431e-b5f4-e3cf94a2899c" alt="Login/Signup Modal" width="600" />

### Landing Page / Chat Input
<img src="https://github.com/user-attachments/assets/68be469a-aef8-4872-9e42-f6e379a88f8c" alt="Landing Page / Chat Input" width="600" />

### Help Menu
<img src="https://github.com/user-attachments/assets/fc30747a-c9c6-408e-9cd5-1b79efdca28d" alt="Help Menu" width="600" />

### Advice Response Example
<img src="https://github.com/user-attachments/assets/5fbe95ce-290a-413c-9729-393b2e119124" alt="Advice Response Example" width="600" />

---

## 🛠 Installation

### Clone Repository
```bash
git clone https://github.com/SaraSalah1/React-ChatGPT.git
```

### Navigate to Project
```bash
cd React-ChatGPT
```

### Install Dependencies
```bash
# Using npm
npm install

# Using yarn
yarn install
```

### Start Development Server
```bash
# Using npm
npm start

# Using yarn
yarn start
```

### Access in Browser
```
http://localhost:3000
```

---

## 💻 Usage

- Click **ChatGPT dropdown** to explore card features.  
- Click **Login/Signup** to open authentication modal.  
- Click **Help icon** to view links.  
- Type a question → click **send** → see advice fetched from API.  
- Hover over buttons/cards to see smooth UI transitions.

---

## 🧩 Code Snippets

### Fetch Advice
```javascript
const handleSend = async () => {
  if (!text.trim()) return;

  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setReply(`Advice for "${text}": ${data.slip.advice}`);
    setText("");
  } catch (error) {
    setReply("Error fetching advice.");
    console.error(error);
  }
};
```

---

## 🤝 Contributing

1. Fork repository.  
2. Create feature branch:
```bash
git checkout -b feature/YourFeature
```
3. Commit changes:
```bash
git commit -m "Add some feature"
```
4. Push branch:
```bash
git push origin feature/YourFeature
```
5. Open Pull Request.

---

👩‍💻 **Author:** [Sara Salah](https://github.com/SaraSalah1)  
📦 **Project Repository:** [React-ChatGPT](https://github.com/SaraSalah1/React-ChatGPT)

---

## 📝 License

MIT License
