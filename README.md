<<<<<<< HEAD
# Easy Generator - AI-powered e-learning creation tool for enterprises

Transform your documents into engaging e-learning or create company-tailored courses from scratch in minutes. Made for subject-matter experts and L&D alike.

## 🚀 Features

- **User Authentication**
  - Secure login and registration
  - Protected routes
  - JWT token-based authentication
  - Persistent sessions

- **Modern UI/UX**
  - Responsive design
  - Mobile-first approach
  - Clean and intuitive interface
  - Toast notifications for user feedback

- **Error Handling**
  - Custom error boundaries
  - 404 page handling
  - Form validation
  - API error management

## 🛠️ Tech Stack

- **Frontend**
  - React 18
  - TypeScript
  - React Router v6
  - Tailwind CSS
  - React Hook Form
  - Yup Validation
  - Axios
  - React Toastify

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/easy-generator.git
cd easy-generator/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
REACT_APP_BACKEND_BASEURL=http://localhost:8000
```

4. Start the development server:
```bash
npm run dev
```

## 🏗️ Project Structure

```
src/
├── Components/         # Reusable UI components
│   ├── Navbar/        # Navigation component
│   └── ErrorBoundary/ # Error handling component
├── Context/           # React context providers
├── Helpers/           # Utility functions and helpers
├── Pages/             # Page components
├── Routes/            # Route configurations
├── Services/          # API services
└── Types/             # TypeScript type definitions
```

## 🔒 Authentication

The application uses JWT (JSON Web Tokens) for authentication. The token is stored in localStorage and is automatically included in API requests.

### Protected Routes

Protected routes are implemented using the `ProtectedRoute` component, which checks for user authentication before rendering the protected content.

## 🎨 Styling

The project uses Tailwind CSS for styling, with custom configurations in `tailwind.config.js`. Common styles are managed through the `StyleHelper.ts` file.

## 🚨 Error Handling

- Custom error boundary for runtime errors
- 404 page for non-existent routes
- Form validation using Yup
- API error handling with toast notifications

## 📱 Responsive Design

The application is fully responsive and works on:
- Mobile devices
- Tablets
- Desktop computers

## 🔄 API Integration

The frontend communicates with the backend API using Axios. API calls are organized in the `Services` directory.

## 🧪 Development

To run the development server:

```bash
npm run dev
```

To build for production:

```bash
npm run build
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/easy-generator](https://github.com/yourusername/easy-generator)
=======
# eazy_gen_frontend_task
>>>>>>> d2fa3e737c9659a8f790cb3ff8d498204c8f6c99
