# Medsetra Medical Query Engine

A simple MERN-style project for medical queries and hospital resource prediction.
Frontend uses React. Backend uses Node and Express with MongoDB.

## Features
- Boolean-like search endpoint
- Simple React UI for queries
- MongoDB stores medical documents

## Setup

Backend
1. cd backend
2. npm install
3. Ensure MongoDB is running locally at mongodb://localhost:27017
4. Create sample collection and docs in database medsetra_db, collection medical_docs
   Example document:
   { "symptom": "headache high BP pregnant", "summary": "Possible gestational hypertension related headache" }
5. npm start

Frontend
1. cd frontend
2. npm install
3. npm start

The frontend runs on http://localhost:3000 and backend on http://localhost:4000
