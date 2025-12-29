from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from pydantic import BaseModel
from app.db.session import SessionLocal
from app.db.models import User
from app.core.security import verify_password, hash_password, create_access_token

router = APIRouter()

def get_db():
    db = SessionLocal()
    try: yield db
    finally: db.close()

class LoginDTO(BaseModel):
    email: str
    password: str

class RegisterDTO(BaseModel):
    email: str
    password: str

@router.post("/register")
def register(dto: RegisterDTO, db: Session = Depends(get_db)):
    if db.query(User).filter(User.email == dto.email).first():
        raise HTTPException(status_code=400, detail="Email exists")
    user = User(email=dto.email, password_hash=hash_password(dto.password))
    db.add(user); db.commit(); db.refresh(user)
    token = create_access_token({"sub": str(user.id), "role": user.role})
    return {"access_token": token, "token_type": "bearer"}

@router.post("/login")
def login(dto: LoginDTO, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == dto.email).first()
    if not user or not verify_password(dto.password, user.password_hash):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    token = create_access_token({"sub": str(user.id), "role": user.role})
    return {"access_token": token, "token_type": "bearer"}
