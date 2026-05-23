# AI Chatbot using React + FastAPI + Ollama
A modern AI chatbot built using React, FastAPI, TailwindCSS, and Ollama with the llama3 model. This project demonstrates a complete full-stack AI application with a React frontend, FastAPI backend, and a locally running language model through Ollama.

---

## Features
- Modern chatbot UI
- Local AI using Ollama
- FastAPI backend API
- React frontend with Vite
- TailwindCSS styling
- Smooth UI animations using Framer Motion
- Real-time message updates
- No API billing required
- Runs locally on your machine

---

## Tech Stack

### Frontend
- React
- Vite
- TailwindCSS
- Axios
- Framer Motion
- Lucide React

### Backend
- FastAPI
- Uvicorn
- Requests
- Pydantic

### AI
- Ollama
- llama3 model

---

## Project Architecture
User
 ↓
React Frontend (UI)
 ↓
FastAPI Backend (API)
 ↓
Ollama (Local AI Runtime)
 ↓
llama3 Model (Response Generation)

---

## Prerequisites
Before running this project, install:

- Python
- Node.js
- Git
- Ollama

### Install Ollama
Download and install:

https://ollama.com/

---

## Setup Instructions
### 1. Clone Repository

```bash
git clone https://github.com/nasriiin111/ai_chatbot.git
```
Move into project folder:

```bash
cd ai_chatbot
```

---

### 2. Install AI Model
Pull the 'llama3' model:

```bash
ollama pull llama3
```

Start Ollama:

```bash
ollama serve
```

Keep this terminal running.

---

### 3. Backend Setup
Move into backend folder:

```bash
cd backend
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run backend:

```bash
python -m uvicorn main:app --reload
```

Backend runs at:

http://127.0.0.1:8000

---

### 4. Frontend Setup
Open a new terminal.

Move into frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start frontend:

```bash
npm run dev
```

Frontend runs at:

http://localhost:5173

---


## How It Works
1. User enters a message in the React frontend  
2. Axios sends a POST request to FastAPI backend  
3. FastAPI receives the request  
4. Backend sends the prompt to Ollama  
5. llama3 model generates a response  
6. FastAPI returns the response as JSON  
7. React updates the chat UI

---

## Example Workflow
User → React → FastAPI → Ollama → llama3 → FastAPI → React

---

## Install Backend Dependencies
Example 'requirements.txt':

fastapi
uvicorn
requests
pydantic
python-dotenv

Install using:

```bash
pip install -r requirements.txt
```

---

## Environment Setup
No API keys required.

This project runs completely locally using Ollama.

---

## Future Improvements
- Chat history
- Conversation memory
- Markdown rendering
- Code syntax highlighting
- Streaming responses
- Authentication
- Database storage
- File upload support
- Voice assistant integration
- Dark/light themes

---

## Learning Outcomes
This project demonstrates:

- Frontend development with React
- Backend API development with FastAPI
- HTTP communication
- REST APIs
- AI integration
- Local LLM execution
- State management
- Full-stack architecture

---

## Author
Built by Nasrin

GitHub: https://github.com/nasriiin111

---

## License
MIT License
