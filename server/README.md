# Sree Padmanabha Event Management - Backend API

Backend service built with Node.js, Express, and MongoDB for the Sree Padmanabha Event Management system.

## Features

- RESTful API for enquiries and bookings
- MongoDB database integration
- CORS enabled for frontend communication
- Error handling middleware
- Environment variable configuration

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the server directory (already created with your MongoDB URL)

3. Start the server:
```bash
# Development mode (with nodemon)
npm run dev

# Production mode
npm start
```

## API Endpoints

### Health Check
- `GET /api/health` - Check server status

### Enquiries
- `POST /api/enquiries` - Create a new enquiry
- `GET /api/enquiries` - Get all enquiries
- `GET /api/enquiries/:id` - Get single enquiry
- `PUT /api/enquiries/:id` - Update enquiry status
- `DELETE /api/enquiries/:id` - Delete enquiry

### Bookings
- `POST /api/bookings` - Create a new booking
- `GET /api/bookings` - Get all bookings (with optional filters: status, eventType, startDate, endDate)
- `GET /api/bookings/:id` - Get single booking
- `PUT /api/bookings/:id` - Update booking
- `DELETE /api/bookings/:id` - Delete booking

## Environment Variables

- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - JWT secret key (for future authentication)
- `CLIENT_URL` - Frontend URL for CORS

## Database Models

### Enquiry
- name, email, phone (required)
- eventType, message, status, source

### Booking
- name, email, phone, eventType, eventDate, numberOfGuests, location (required)
- services, specialRequirements, status, totalAmount, advancePaid

## Example API Calls

### Create Enquiry
```bash
POST http://localhost:5000/api/enquiries
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "eventType": "wedding",
  "message": "Interested in your services"
}
```

### Create Booking
```bash
POST http://localhost:5000/api/bookings
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "eventType": "wedding",
  "eventDate": "2024-12-25",
  "numberOfGuests": 200,
  "location": "Thiruvananthapuram",
  "services": ["catering", "decoration"]
}
```

## Notes

- All routes are currently public. In production, add authentication middleware.
- Update JWT_SECRET in .env for production use.
- The MongoDB connection string is configured in .env file.
