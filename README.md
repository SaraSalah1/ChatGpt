# 📝 React ChatGPT Interface
A modern React application that mimics a ChatGPT-style interface. Users can interact with an advice API, open dropdown menus, access help links, and log in or sign up using a stylish modal. The project demonstrates React component composition, conditional rendering, and responsive UI design.

---

## 🚀 Features

- Interactive Chat Input with advice fetching.
- ChatGPT dropdown menu with card-style content.
- Login/Signup modal with multiple options (Google, Apple, Microsoft, Phone, Email).
- Help menu with icon-based links.
- Responsive layout for desktop and mobile devices.
- Smooth hover effects and UI transitions.
- Dropdowns and modals close when clicking outside.

---

## 🎨 Technologies Used

- **React.js**  
- **JavaScript (ES6)**  
- **Tailwind CSS**  
- **Material-UI Icons**  
- **HTML5 & CSS3**  
- **Fetch API** for external requests  

---

## 📸 Screenshots


### 1. ChatGPT Dropdown
<img src="https://github.com/user-attachments/assets/a7f5379e-21d6-44d7-9570-d2adc7d2f375"   alt="ChatGPT Dropdown" width="600" />

*Shows the dropdown menu with card content and "Try advanced features for free".*

### 2. Login/Signup Modal
<img src="https://github.com/user-attachments/assets/39f29800-52a1-431e-b5f4-e3cf94a2899c"   alt="Login/Signup Modal" width="600" />

*Shows the modal with options to log in via Google, Apple, Microsoft, Phone, or Email.*

### 3. Landing Page / Chat Input
<img src="https://github.com/user-attachments/assets/68be469a-aef8-4872-9e42-f6e379a88f8c"   alt="Landing Page / Chat Input" width="600" />

*Shows the main landing page with input field, arrow send button, and displayed advice.*

### 4. Help Menu
<img src="https://github.com/user-attachments/assets/fc30747a-c9c6-408e-9cd5-1b79efdca28d"   alt="Help Menu" width="600" />

*Shows the help icon dropdown with links to Plans, Settings, Help Center, Release Notes, Terms & Policies.*

### 5. Advice Response Example
<img src="https://github.com/user-attachments/assets/5fbe95ce-290a-413c-9729-393b2e119124"   alt="Advice Response Example" width="600" />

*Shows an example of a user question and the advice fetched from the API.*

---

## 🛠 Installation & Run

- ### Clone the repository

  git clone https://github.com/SaraSalah1/React-ChatGPT.git


- ### Navigate to the project folder
      cd ChatGpt

- ### Install dependencies
      npm install

- ### Start the development server
      npm start

- ### Open in your browser
      http://localhost:3000

    ---

## 💻 Usage

- Click the ChatGPT dropdown to see advanced features.

- Click Log in or Sign up to open the modal.

- Click the Help icon to view help links.

- Type a question in the input field and press the arrow button to get advice.

- Hover over buttons and cards to see smooth transitions.

   ---

##🧩 Code Snippets

Landing.js - Chat Input Handling

```
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

- #### Fork the repository

- #### Create a feature branch

      git checkout -b feature/YourFeature


- #### Commit your changes

      git commit -m "Add some feature"


- #### Push to the branch

      git push origin feature/YourFeature
  
- #### Open a Pull Request

- ---

👩‍💻 **Created by [Sara Salah](https://github.com/SaraSalah1)**  
📦 [View the project on GitHub](https://github.com/SaraSalah1/To_Do_List)

---

## 📝 License

This project is licensed under the MIT License
