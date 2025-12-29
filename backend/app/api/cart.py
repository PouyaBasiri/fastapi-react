from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from pydantic import BaseModel
from app.db.session import SessionLocal
from app.db.models import CartItem

router = APIRouter()
def get_db(): 
    db = SessionLocal()
    try: yield db
    finally: db.close()

class CartDTO(BaseModel):
    product_id: int
    quantity: int

@router.get("/")
def get_cart(user_id: int, db: Session = Depends(get_db)):
    return db.query(CartItem).filter(CartItem.user_id == user_id).all()

@router.post("/add")
def add_to_cart(user_id: int, dto: CartDTO, db: Session = Depends(get_db)):
    item = db.query(CartItem).filter(
        CartItem.user_id == user_id, CartItem.product_id == dto.product_id
    ).first()
    if item:
        item.quantity += dto.quantity
    else:
        item = CartItem(user_id=user_id, product_id=dto.product_id, quantity=dto.quantity)
        db.add(item)
    db.commit(); db.refresh(item)
    return item

@router.post("/remove")
def remove_from_cart(user_id: int, product_id: int, db: Session = Depends(get_db)):
    db.query(CartItem).filter(
        CartItem.user_id == user_id, CartItem.product_id == product_id
    ).delete()
    db.commit()
    return {"ok": True}
