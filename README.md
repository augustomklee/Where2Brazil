# Where2Brazil 🌎

A personalized travel recommendation app that helps users discover the perfect destinations in Brazil through an intelligent quiz-based interface.

## Overview

Where2Brazil is a modern React application that combines user preferences with AI-powered recommendations to suggest ideal Brazilian travel destinations. The app features an interactive quiz system that collects user preferences and generates personalized travel suggestions using Google's Generative AI.

## Features

- **Interactive Quiz Interface**: Multi-step questionnaire covering travel preferences, climate choices, activities, and accommodation styles
- **AI-Powered Recommendations**: Integration with Google Generative AI (Gemini 1.5 Flash) for intelligent destination matching
- **Progressive State Management**: Seamless navigation between quiz questions with ability to go back and modify answers
- **Responsive Design**: Clean, mobile-friendly interface optimized for all device sizes
- **Error Handling**: Robust fallback system ensuring users always receive recommendations
- **Loading States**: Professional loading animations during AI processing

## Tech Stack

### Frontend Framework
- **React 19.1.1**: Latest React with modern hooks and concurrent features
- **React DOM 19.1.1**: For efficient DOM rendering and updates

### Build Tools & Development
- **Vite 7.1.2**: Lightning-fast build tool and development server
- **@vitejs/plugin-react 5.0.0**: Official Vite plugin for React support

### AI Integration
- **@google/generative-ai 0.24.1**: Official Google AI SDK for Gemini integration

### Code Quality & Linting
- **ESLint 9.33.0**: Modern JavaScript/React linting
- **eslint-plugin-react-hooks 5.2.0**: React Hooks specific linting rules
- **eslint-plugin-react-refresh 0.4.20**: Hot reload optimization rules

### TypeScript Support
- **@types/react 19.1.10**: TypeScript definitions for React
- **@types/react-dom 19.1.7**: TypeScript definitions for React DOM

## Project Structure

```
src/
├── pages/
│   ├── StartPage.jsx      # Landing page with app introduction
│   ├── QuizPage.jsx       # Interactive quiz interface
│   └── ResultPage.jsx     # AI-generated recommendations display
├── data/
│   └── questions.js       # Quiz questions and options configuration
├── utils/
│   ├── googleai.js        # Google AI integration and response formatting
│   └── promptHelper.js    # Quiz response processing utilities
├── constants/
│   └── index.js          # Fallback data and app constants
├── assets/               # Static assets (logo, images)
├── App.jsx              # Main application component and routing logic
├── App.css              # Global styles and component styling
└── main.jsx             # React application entry point
```

## React Architecture Highlights

### State Management
- **useState**: Component-level state for quiz progression, user answers, and UI states
- **useEffect**: Side effects for AI recommendation generation
- **useRef**: Preventing duplicate API calls during React strict mode

### Component Design
- **Functional Components**: Modern React functional components with hooks
- **Props-based Communication**: Clean parent-child component communication
- **Conditional Rendering**: Dynamic UI based on application state

### Form Handling
- **Native Form API**: Leveraging HTML5 FormData for efficient form processing
- **Controlled Components**: React-controlled radio button groups
- **Form Validation**: Client-side validation with user feedback

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager
- Google AI API key

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd Where2Brazil
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
# Add your Google AI API key to .env
echo "VITE_GOOGLE_AI_API_KEY=your_api_key_here" > .env
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production-ready application
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## AI Integration Details

The application integrates with Google's Generative AI (Gemini 1.5 Flash) to provide intelligent travel recommendations:

- **Temperature**: 0.7 for balanced creativity and accuracy
- **Max Tokens**: 1000 for detailed recommendations
- **Response Format**: JSON for structured data processing
- **Error Handling**: Graceful fallbacks to ensure user experience continuity

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Environment Variables

```env
VITE_GOOGLE_AI_API_KEY=your_google_ai_api_key
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Google Generative AI for powering intelligent recommendations
- React team for the excellent framework and developer experience
- Vite team for the incredibly fast build tool