from typing import Optional
from fastapi import FastAPI, HTTPException, Depends
from starlette.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import models
from database import engine, SessionLocal, Base
from sqlalchemy.orm import Session
from models import Item

app = FastAPI()


class Person(BaseModel):
    id: str
    name: str
    age: int

    class Config:
        orm_mode = True


class ScanResult(BaseModel):
    id: str
    # name: Optional[str] = None


models.Base.metadata.create_all(bind=engine)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close


# Configure CORS
origins = [
    "http://localhost:3000",  # Add the URL of your ReactJS frontend
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)


# DB: List[Person] = [
#     Person(id=1, name="Ravi", age=22),
#     Person(id=2, name="Shankar", age=23),
#     Person(id=3, name="Yadav", age=24)
# ]

# Persons = []


# @app.get("/")
# def read_root():
#     return {"hello"}


@app.get("/")
def read_api(db: Session = Depends(get_db)):
    return db.query(models.Item).all()


@app.post("/", response_model=Person)
def create_person(person: Person, db: Session = Depends(get_db)):
    person_model = Item()
    person_model.name = person.name
    person_model.age = person.age
    db.add(person_model)
    # db = SessionLocal()
    db.commit()
    # db.refresh(person)
    return person_model


# API endpoint to check the QR code


# @app.post("/check_qr_code")
# def check_qr_code(scan_result: ScanResult, db: Session = Depends(get_db)):
#     qr_code = db.query(QRCode).filter(
#         QRCode.code == scan_result.scan_result).first()
#     if qr_code:
#         return {"scan_status": "yes"}
#     else:
#         return {"scan_status": "no"}

# @app.post("/check_qr_code")
# def check_qr_code(scan_result: ScanResult, db: Session = Depends(get_db)):
#     person = db.query(Item).filter(
#         Item.id == int(scan_result.scan_result)).first()
#     if person:
#         return {"status": "present"}
#     else:
#         return {"status": "not present"}

# @app.post("/check_qr_code")
# def check_qr_code(scan_result: ScanResult, db: Session = Depends(get_db)):
#     scan_result_id = scan_result.id
#     if item_id in database:
#         return JSONResponse(content=database[item_id])
#     else:
#         return JSONResponse(content={"error": "Data not found"})


@app.post("/check_qr_code", response_model=ScanResult)
def check_qr_code(scan_result: ScanResult, db: Session = Depends(get_db)):
    item = db.query(Item).filter(Item.id == scan_result.id).first()
    if item:
        scan_result.name = item.name
        scan_result.status = "present"
    else:
        scan_result.status = "not present"
    return scan_result
