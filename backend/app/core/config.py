import os
from pydantic import BaseModel
class Settings(BaseModel):
    SECRET_KEY: str = os.getenv("SECRET_KEY", "change-me")
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24
    DATABASE_URL: str = os.getenv("DATABASE_URL", "postgresql+psycopg2://admin:admin@db:5432/surin")
settings = Settings()

