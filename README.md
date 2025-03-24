Netflix Clone 🎬
A fully responsive Netflix Clone built using React.js for the frontend and Firebase for authentication and backend services. This project replicates Netflix’s UI and core functionalities like user authentication, movie browsing, and trailer playback.

🚀 Features
✔️ User Authentication (Sign up, Login, Logout) using Firebase
✔️ Dynamic Movie & TV Show Listings (Fetched from an API)
✔️ Responsive Design (Works on mobile & desktop)
✔️ Search Functionality
✔️ Dark Mode Navigation Bar (Changes on scroll)
✔️ Trailer Playback via YouTube Embed
✔️ My List Section (User can add favorite shows/movies)

🛠️ Tech Stack
Frontend:
React.js (Functional Components + Hooks)

CSS for styling

React Router for navigation

Backend:
Firebase Authentication (Email/Password Login)

Firestore Database (For storing user preferences)

📂 Project Structure
csharp
Copy
Edit
Netflix-Clone/
│── src/
│   ├── assets/           # Images & icons
│   ├── components/       # Reusable React components
│   ├── pages/            # Main pages (Home, Login, Profile)
│   ├── firebase.js       # Firebase configuration
│   ├── App.js            # Main App Component
│   ├── index.js          # ReactDOM entry point
│── public/
│── package.json          # Dependencies
│── README.md             # Project documentation
🔧 Installation & Setup
1️⃣ Clone the repository

sh
Copy
Edit
git clone https://github.com/Rahul-Kumar-Ram/Netflix-Clone.git
cd netflix-clone
2️⃣ Install dependencies

sh
Copy
Edit
npm install
3️⃣ Set up Firebase

Create a Firebase project at Firebase Console

Enable Authentication (Email/Password)

Create a Firestore Database

Get your Firebase config keys and replace them in firebase.js

4️⃣ Start the development server

sh
Copy
Edit
npm start
The project will run at http://localhost:3000

📸 Screenshots
📌 Home Page:

📌 Movie Details Page:

🌍 Deployment
This project can be deployed on Firebase Hosting, Vercel, or Netlify.

Deploy on Firebase:

sh
Copy
Edit
npm run build
firebase deploy
🙌 Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

📜 License
This project is licensed under the MIT License.
