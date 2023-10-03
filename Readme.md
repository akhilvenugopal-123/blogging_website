# Blogging Website Project

This is a blogging website project built using React for the frontend and Django for the backend. It allows users to read and create blog posts.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed (for the frontend)
- Python and pip installed (for the backend)
- XAMPP or another MySQL database server installed and running

## Frontend (React)

### Installation

1. Clone the repository :

   ```bash
   git clone <https://github.com/akhilvenugopal-123/blogging_website>
   cd Blogging_Website

2. Navigate to  the frontend directory :
    cd Frontend

3. Install dependencies :
    npm install

Configuration

Create a .env file in the frontend directory and set the following environment variables :

1. REACT_APP_API_URL= http://127.0.0.1:8000

Usage

1. Start the React development server :
    npm start

2. Open your web browser and visit http://localhost:3000 to access the      frontend.


## Backend (Django)

Installation

1. Navigate to the backend directory :
    cd ../Backend

2. Create a virtual environment (optional but recommended) :
    python -m venv venv

3. Activate the virtual environment :
    On Windows : venv\Scripts\activate
    On macOS and Linux : source venv/bin/activate

4. Install backend dependencies :
    pip install -r requirements.txt

Configuration

1. Create a MySQL database and configure the database settings in backend/settings.py :
    DATABASES = {
	'default': {
	    'ENGINE': 'django.db.backends.mysql',#MySQL engine will be used as the db engine
	    'NAME': 'blog_db',#Name of the database created for this project
	    'USER': 'root',#Enter your mysql username
	    'PASSWORD': '',#Enter your mysql password
	    'HOST': 'localhost',
	    'PORT': '3306',
	}
}

2. Apply database migrations :
    python manage.py migrate

Usage

1. Start the Django development server :
    python manage.py runserver

2. Open your web browser and visit http://127.0.0.1:8000 to access the backend API.



