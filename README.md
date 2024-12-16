# VoteWave - Youth Voter Registration Platform

VoteWave is a modern, user-friendly web application designed to increase youth voter participation by simplifying the voter registration process. The platform provides state-specific registration guidance, demographic insights, and a step-by-step registration assistant.

## Features

- 📊 Interactive demographic visualization showing youth voter participation
- 📅 Dynamic election timeline with important deadlines
- 🗺️ State-specific registration requirements and methods
- 🌐 Multi-language support (English, Spanish, Filipino, Chinese, Arabic, and Farsi)
- 📝 Guided registration form with real-time assistance
- 📱 Fully responsive design for all devices

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/votewave.git
cd votewave
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be available in the `dist` directory.

## Technology Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide Icons

## Project Structure

```
src/
├── components/        # Reusable UI components
├── data/             # Mock data and constants
├── pages/            # Page components
├── translations/     # Internationalization files
├── types/           # TypeScript type definitions
└── App.tsx          # Main application component
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Thanks to all contributors who have helped shape VoteWave
- Special thanks to the open-source community for the amazing tools and libraries
- Inspired by the need to increase youth voter participation in democratic processes