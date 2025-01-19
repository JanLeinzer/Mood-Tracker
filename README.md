# Mood Tracker

A real-time mood tracking application built with Svelte and NestJS that allows users to log their emotional states with emojis and notes. Features a beautiful animated gradient background, dark mode support, and a clean, responsive interface.

![Mood Tracker Demo](https://www.dropbox.com/scl/fi/g2dttoaixaslv9lzg4cfj/Opera-Snapshot_2025-01-19_205639_localhost.png?rlkey=h9mk7kwo52ybck8mu0bxsrcux&st=lqbg0ars&dl=0)

## 🌟 Features

- Track moods using emoji reactions
- Add notes to mood entries
- Dark/Light mode toggle
- Animated gradient background
- Real-time mood statistics
- Responsive design
- Custom scrollbar styling
- MongoDB Atlas integration
- Clean and intuitive UI

## 🔧 Tech Stack

### Frontend
- Svelte
- Vite
- TailwindCSS
- Svelte SPA Router

### Backend
- NestJS
- MongoDB Atlas
- Mongoose
- TypeScript

## 📋 Prerequisites

- Node.js (v16 or later)
- MongoDB Atlas Account
- npm or yarn
- Git

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mood-tracker.git
cd mood-tracker
```

### 2. Backend Setup

```bash
cd mood-tracker-backend

# Install dependencies
npm install

# Create a .env file in the root directory
touch .env
```

Add the following to your .env file:
```env
MONGODB_URI=your_mongodb_atlas_connection_string
PORT=3000
```

```bash
# Start the development server
npm run start:dev
```

The backend will be running on http://localhost:3000

### 3. Frontend Setup

```bash
cd mood-tracker-frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend will be running on http://localhost:5173

## 🏗️ Project Structure

```
mood-tracker/
├── mood-tracker-frontend/
│   ├── src/
│   │   ├── lib/
│   │   │   ├── stores.js          # Svelte stores for state management
│   │   │   └── api.js             # API integration functions
│   │   ├── routes/
│   │   │   ├── Home.svelte        # Main mood tracking interface
│   │   │   └── index.js           # Route definitions
│   │   ├── App.svelte             # Root component
│   │   ├── main.js                # Application entry point
│   │   └── app.css                # Global styles
│   └── package.json
│
└── mood-tracker-backend/
    ├── src/
    │   ├── mood/
    │   │   ├── dto/
    │   │   │   └── create-mood.dto.ts    # Data transfer object
    │   │   ├── mood.schema.ts            # MongoDB schema
    │   │   ├── mood.controller.ts        # API endpoints
    │   │   ├── mood.service.ts           # Business logic
    │   │   └── mood.module.ts            # Module configuration
    │   ├── app.module.ts                 # App configuration
    │   └── main.ts                       # Server entry point
    └── package.json
```

## 💻 Code Overview

### Frontend Architecture

The frontend uses Svelte with a clean component structure:

1. **State Management**: Uses Svelte's built-in store system (`stores.js`) for managing mood entries
2. **API Integration**: Centralized API calls in `api.js`
3. **UI Components**: Main interface in `Home.svelte` with:
   - Mood selection
   - Note input
   - Statistics display
   - Entries list
4. **Styling**: Combines Tailwind CSS with custom animations and dark mode support

### Backend Architecture

The backend follows NestJS's modular architecture:

1. **Data Model**: Uses Mongoose schema for mood entries
2. **Controllers**: RESTful endpoints for CRUD operations
3. **Services**: Business logic layer
4. **DTOs**: Type-safe data transfer objects

## 🔄 API Endpoints

```typescript
GET    /moods      // Retrieve all mood entries
POST   /moods      // Create a new mood entry
DELETE /moods/:id  // Delete a specific mood entry
```

## 🚀 Suggested Improvements

### Frontend Enhancements

1. **Authentication**
   - Implement user authentication
   - Add personal mood tracking
   - Enable private/public mood entries

2. **Data Visualization**
   - Add mood trends charts
   - Implement calendar view
   - Show weekly/monthly statistics

3. **Features**
   - Custom emoji support
   - Categories for mood entries
   - Image attachments
   - Social sharing options
   - Export data functionality

4. **Performance**
   - Implement pagination for mood entries
   - Add loading states
   - Optimize animations
   - Add offline support with PWA

### Backend Enhancements

1. **Security**
   - Add rate limiting
   - Implement JWT authentication
   - Add input validation
   - Set up proper CORS policies

2. **Database**
   - Add data caching
   - Implement soft delete
   - Add data backup strategy
   - Optimize queries

3. **Features**
   - Add user management
   - Implement mood analytics
   - Add notification system
   - Create API documentation

4. **Infrastructure**
   - Add Docker support
   - Implement CI/CD pipeline
   - Add automated testing
   - Set up monitoring

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
