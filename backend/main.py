from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request schema
class ChatRequest(BaseModel):
    message: str

# Test route
@app.get("/")
def root():
    return {
        "message": "Local AI Backend Running"
    }

# Chat route
@app.post("/chat")
def chat(req: ChatRequest):

    try:
        response = requests.post(
            "http://localhost:11434/api/generate",
            json={
                "model": "llama3",
                "prompt": req.message,
                "stream": False
            }
        )

        data = response.json()

        return {
            "reply": data["response"]
        }

    except Exception as e:
        return {
            "reply": str(e)
        }