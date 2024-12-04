from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db

router = APIRouter()

@router.get("/data")
def get_data(db: Session = Depends(get_db)):
    return {"data": "Sample Data"}
