from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from app.db.session import SessionLocal
from app.db.models import Product

router = APIRouter()
def get_db():
    db = SessionLocal()
    try: yield db
    finally: db.close()

@router.get("/")
def list_products(q: str | None = None, category: str | None = None,
                  db: Session = Depends(get_db)):
    query = db.query(Product)
    if q: query = query.filter(Product.title.ilike(f"%{q}%"))
    if category: query = query.filter(Product.category == category)
    return query.order_by(Product.id.desc()).all()

@router.get("/{product_id}")
def get_product(product_id: int, db: Session = Depends(get_db)):
    return db.query(Product).get(product_id)
 
