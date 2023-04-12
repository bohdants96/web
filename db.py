from sqlalchemy import create_engine, MetaData
from sqlalchemy.orm import sessionmaker, Session
from models import *

engine = create_engine("postgresql://postgres:30062003@localhost:5432/booking", echo=True)

Session = sessionmaker(bind=engine)
session = Session()