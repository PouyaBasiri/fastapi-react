📦 FastAPI + React Full‑Stack Application

A modern full‑stack web application built with FastAPI, React + TypeScript, TailwindCSS, Docker, and Docker Compose.
This project includes a clean backend architecture, a modular frontend, and a production‑ready containerized setup.

🚀 Features
Backend (FastAPI)
Modular API structure (auth, products, cart, orders, admin)

JWT authentication

SQLAlchemy models & database session management

Centralized configuration & security utilities

Dockerized backend service

Ready for CI/CD pipelines

Frontend (React + TypeScript)
Modern SPA architecture      

TailwindCSS for styling

Context API for Auth & Cart state management

Axios wrapper for API calls

Reusable components (Navbar, Hero, ProductCard, etc.)

Dockerized frontend service

DevOps
Dockerfiles for backend & frontend

Docker Compose for local orchestration

Clean folder structure for future CI/CD workflows

Ready for deployment to any container platform


🐳 Running with Docker Compose
Make sure Docker is installed, then run:

🧩 Running Frontend Locally (Without Docker)
docker compose up --build
Services:
Backend: http://localhost:8000
Frontend: http://localhost:3000

🧪 Running Backend Locally (Without Docker)
bash
cd backend
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
Backend will run at:
http://localhost:8000

🧩 Running Frontend Locally (Without Docker)
cd frontend
npm install
npm run dev
Frontend will run at:
http://localhost:5173

Code
SECRET_KEY=your-secret-key
DATABASE_URL=postgresql://user:password@db:5432/ecommerce
ACCESS_TOKEN_EXPIRE_MINUTES=30
(Do not commit .env files.)

🔧 Future Improvements
Add GitHub Actions CI/CD

Add PostgreSQL migrations (Alembic)

Add unit tests for backend & frontend

Add Nginx reverse proxy for production

Deploy to Render / Railway / VPS

📄 License
This project is open‑source and available under the MIT License.

