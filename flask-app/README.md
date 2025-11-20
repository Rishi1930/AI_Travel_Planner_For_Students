# AI Travel Planner for Students - Flask Edition

An intelligent travel planning application that uses Google Gemini AI to generate personalized trip itineraries based on student budget and interests.

## Features
- AI-powered trip planning using Google Gemini API
- Student-friendly budget suggestions
- Day-wise itineraries with accommodation and food recommendations
- Cost breakdowns
- Responsive, modern UI with Tailwind CSS

## Tech Stack
- **Backend**: Flask (Python)
- **Frontend**: HTML, CSS (Tailwind), JavaScript
- **AI**: Google Gemini API
- **Deployment**: Render (free tier)
- **Database**: SQLite (optional)

## Setup Instructions

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd flask-app
   ```

2. **Create a virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your:
   - `GOOGLE_API_KEY`: Get from [Google AI Studio](https://makersuite.google.com/app/apikey)
   - `SECRET_KEY`: Generate a random secret key for Flask sessions

5. **Run the application**
   ```bash
   python -m flask run
   # or
   gunicorn wsgi:app
   ```

6. **Access the app**
   Open `http://localhost:5000` in your browser

## Deployment on Render (Free)

### Prerequisites
- GitHub account with your repository
- [Render account](https://render.com) (free signup)
- Google Gemini API key

### Step-by-Step Deployment

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Render deployment"
   git push origin main
   ```

2. **On Render Dashboard**
   - Click **+ New**
   - Select **Web Service**
   - Connect your GitHub repository
   - Select the `flask-app` directory as the root directory

3. **Configure the Web Service**
   - **Name**: `flask-trip-planner`
   - **Environment**: Python 3
   - **Region**: Oregon (free tier available)
   - **Plan**: Free
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn wsgi:app`

4. **Set Environment Variables**
   In Render dashboard, add the following:
   - `GOOGLE_API_KEY`: Your Google Gemini API key
   - `SECRET_KEY`: A random secret key
   - `FLASK_ENV`: `production`

5. **Deploy**
   - Click **Create Web Service**
   - Render will automatically deploy on each git push

## File Structure
```
flask-app/
├── app/
│   ├── __init__.py          # Flask app factory
│   ├── routes.py            # API endpoints
│   └── models.py            # Database models
├── templates/
│   └── index.html           # Main HTML template
├── static/
│   ├── script.js            # Frontend JavaScript
│   └── style.css            # Custom styles
├── wsgi.py                  # WSGI entry point (for Gunicorn)
├── requirements.txt         # Python dependencies
├── Procfile                 # Procfile for Render
├── render.yaml              # Render configuration
├── .env.example             # Example environment variables
└── README.md                # This file
```

## Environment Variables

Create a `.env` file:
```env
FLASK_ENV=production
SECRET_KEY=your-random-secret-key-here
GOOGLE_API_KEY=your-google-gemini-api-key-here
PORT=5000
```

## API Endpoints

### `GET /`
Returns the main HTML page.

### `POST /api/generate`
Generates a trip plan based on user input.

### `GET /api/data`
Returns sample data (for testing).

## Troubleshooting

1. **Import Error: No module named 'app'**
   - Ensure you're running from the `flask-app` directory

2. **GOOGLE_API_KEY not working**
   - Verify the key from [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Check environment variables are set correctly

3. **Render deployment fails**
   - Check build logs in Render dashboard
   - Verify all dependencies in `requirements.txt`

## Free Tier Limits

**Render Free Tier:**
- 0.5 vCPU, 512 MB RAM
- Auto-spins down after 15 minutes of inactivity
- Perfect for learning/personal projects

**Google Gemini API:**
- Free tier: 60 requests per minute
- 1.5 million tokens per month

## Security Notes

⚠️ **Never commit `.env` file** - It's in `.gitignore`
- Store keys only in Render environment variables
- Use strong random SECRET_KEY
- Keep API keys private

---

**Happy Trip Planning! 🚀✈️**
