from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.db.models import Base
from app.db.session import engine
from app.api import auth, products, cart, orders, admin

app = FastAPI()
origins = [ "http://localhost:5174", "http://127.0.0.1:5174" ]
app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,  # Vite default
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(products.router, prefix="/api/products", tags=["products"])
app.include_router(cart.router, prefix="/api/cart", tags=["cart"])
#app.include_router(orders.router, prefix="/api/orders", tags=["orders"])
#app.include_router(admin.router, prefix="/api/admin", tags=["admin"])
