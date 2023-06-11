from sqlalchemy import Column, Integer, String
from database import Base


class Item(Base):
    __tablename__ = "main"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    age = Column(Integer)

# QR Code model


# class QRCode(Base):
#     # __tablename__ = "main"
#     __tablename__ = "qrcodes"

#     id = Column(Integer, primary_key=True, index=True)
#     code = Column(String, unique=True)
