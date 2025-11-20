# 🌍 AI Travel Planner for Students

An intelligent travel planning application powered by Google's Gemini AI, designed specifically for students to create budget-friendly, customized travel itineraries.

## ✨ Features

- **AI-Powered Itineraries**: Generate personalized travel plans using Google Gemini AI
- **Student-Focused**: Budget-friendly recommendations tailored for students
- **Interactive UI**: Clean and intuitive interface for easy trip planning
- **Real-time Generation**: Get instant travel suggestions and itineraries

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- Google Gemini API Key

### Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rishi1930/AI_Travel_Planner_For_Students.git
   cd AI_Travel_Planner_For_Students
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root directory:
   ```env
   GOOGLE_API_KEY=AIzaSyDvGBMVg7VQVX277MWbHRCQacg0mDdDEC0
   PORT=3000
   ```

4. **Run the application**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📦 Project Structure

```
├── index.html          # Main HTML file
├── style.css           # Styling
├── script.js           # Frontend JavaScript
├── server.js           # Express backend server
├── package.json        # Node.js dependencies
├── render.yaml         # Render deployment config
├── netlify.toml        # Netlify deployment config
└── flask-app/          # Alternative Flask implementation
```

## 🌐 Deployment

### Deploy to Render

1. **Connect your GitHub repository** to Render
2. **Select "Web Service"** as the deployment type
3. **Render will automatically detect** the `render.yaml` configuration
4. **Add environment variable**: `GOOGLE_API_KEY` in Render dashboard
5. **Deploy!** Render will build and deploy automatically

### Deploy to Netlify (Static Frontend Only)

1. **Connect your GitHub repository** to Netlify
2. **Build settings are configured** in `netlify.toml`
3. **For full functionality**, you'll need to deploy the backend separately (use Render for backend)
4. **Update API endpoint** in `script.js` to point to your backend URL

### Environment Variables

Make sure to set the following environment variable in your deployment platform:

- `GOOGLE_API_KEY`: Your Google Gemini API key

## 🔑 Getting a Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the key and add it to your `.env` file

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js, Express.js
- **AI**: Google Gemini API
- **HTTP Client**: node-fetch
- **Environment Management**: dotenv

## 📝 API Endpoints

- `POST /api/generate`: Generate travel itinerary
  - Request body: `{ "prompt": "your travel query" }`
  - Response: `{ "text": "generated itinerary" }`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Rishi**
- GitHub: [@Rishi1930](https://github.com/Rishi1930)

## 🙏 Acknowledgments

- Google Gemini AI for powering the intelligent itinerary generation
- All contributors and users of this project

---

**Note**: This application requires a valid Google Gemini API key to function. The API key should never be committed to version control.

