# 📝 React ChatGPT Interface
A modern React application that mimics a ChatGPT-style interface.  
Users can fetch advice, open dropdown menus, access help links, and log in or sign up using a stylish modal.  
This project demonstrates **component composition, conditional rendering, API integration, and responsive UI design**.

---

## 🚀 Features

- Chat input with external **Advice API** fetching  
- ChatGPT-style dropdown with card content  
- Login / Signup modal (Google, Apple, Microsoft, Phone, Email)  
- Help menu with useful quick links  
- Smooth transitions & hover effects  
- Fully responsive layout  
- Dropdowns & modals automatically close when clicking outside  

---

## 🎨 Technologies Used

- **React.js**  
- **JavaScript (ES6)**  
- **Tailwind CSS**  
- **Material-UI Icons**  
- **HTML5 & CSS3**  
- **Fetch API**  

---

## 📸 Screenshots

### 1. ChatGPT Dropdown  
<img src="https://github.com/user-attachments/assets/a7f5379e-21d6-44d7-9570-d2adc7d2f375" width="600" />

### 2. Login/Signup Modal  
<img src="https://github.com/user-attachments/assets/39f29800-52a1-431e-b5f4-e3cf94a2899c" width="600" />

### 3. Landing Page / Chat Input  
<img src="https://github.com/user-attachments/assets/68be469a-aef8-4872-9e42-f6e379a88f8c" width="600" />

### 4. Help Menu  
<img src="https://github.com/user-attachments/assets/fc30747a-c9c6-408e-9cd5-1b79efdca28d" width="600" />

### 5. Advice Response Example  
<img src="https://github.com/user-attachments/assets/5fbe95ce-290a-413c-9729-393b2e119124" width="600" />

---

## 🛠 Installation & Run

### 1. Clone the repository
```bash
git clone https://github.com/SaraSalah1/React-ChatGPT.git
```

### 2. Navigate to the project folder
```bash
cd ChatGpt
```

### 3. Install dependencies

#### Using npm:
```bash
npm install
```

#### Using yarn:
```bash
yarn install
```

### 4. Start the development server

#### Using npm:
```bash
npm start
```

#### Using yarn:
```bash
yarn start
```

### 5. Open in your browser  
```
http://localhost:3000
```

---

## 💻 Usage

- Open the dropdown to explore ChatGPT-style actions  
- Try the Login/Signup modal  
- Use the help menu  
- Type a question → press Send → receive advice  
- Hover over elements to experience animations  

---

## 🧩 Code Snippets

### Landing.js – Chat Input Handling
```js
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

Contributions are welcome! Follow these steps:

### 1. Fork the repository  
### 2. Create a feature branch:
```bash
git checkout -b feature/YourFeature
```

### 3. Commit your changes:
```bash
git commit -m "Add some feature"
```

### 4. Push to your branch:
```bash
git push origin feature/YourFeature
```

### 5. Open a Pull Request  

---

👩‍💻 **Created by [Sara Salah](https://github.com/SaraSalah1)**  
📦 **Project repository:** https://github.com/SaraSalah1/ChatGpt

---

## 📝 License
This project is licensed under the **MIT License**.
