from flask import Flask
from dotenv import load_dotenv
import os

load_dotenv()

def create_app():
    # Serve static files and templates from the parent directory
    app = Flask(__name__, 
                static_folder=os.path.join(os.path.dirname(__file__), '..', 'static'),
                template_folder=os.path.join(os.path.dirname(__file__), '..', 'templates'))
    
    app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'dev-secret-key')
    
    from .routes import main as main_blueprint
    app.register_blueprint(main_blueprint)

    return app

app = create_app()