# Management System Documentation

## Overview
Complete management dashboard for Sree Padmanabha Event Management system accessible at `/private` route.

## Access
- **URL**: `http://localhost:3000/private`
- **Note**: Currently no authentication required (should be added for production)

## Features

### 1. Dashboard
- Overview statistics
- Quick view of all data counts

### 2. Gallery Management
- Upload and manage photos
- Categories: wedding, corporate, festival, birthday, sadhya, decoration, venue
- Features: title, description, image URL, tags, featured status

### 3. Dish Management
- Add/Edit/Delete dishes
- Fields: name, description, image, category, ingredients, cooking time, spice level, price
- Categories: main-dish, vegetable-dish, pickle, dessert, snack, drink

### 4. Event Management
- Create and manage events
- Track: client details, event date, venue, number of guests, services, team members
- Status tracking: planning, confirmed, in-progress, completed, cancelled

### 5. Team Management
- Manage team members
- Roles: chef, manager, coordinator, decorator, photographer, videographer, waiter, driver
- Track: contact info, specialization, experience, availability

### 6. Settings
- Configuration options (coming soon)

## MongoDB Models Created

### 1. Gallery
- title, description, imageUrl, category, tags, isFeatured, displayOrder

### 2. Dish
- name, description, image, category, ingredients, cookingTime, spiceLevel, price, isAvailable

### 3. Event
- title, eventType, eventDate, venue, client, numberOfGuests, services, teamMembers, status, budget, timeline, photos

### 4. Team
- name, role, email, phone, specialization, experience, photo, bio, availability, rating

### 5. Service
- name, description, category, image, price, features, isAvailable, duration, teamRequired

### 6. Admin
- username, email, password (hashed), role, name, phone, isActive

## API Endpoints

### Gallery
- `GET /api/gallery` - Get all gallery items
- `POST /api/gallery` - Create gallery item
- `PUT /api/gallery/:id` - Update gallery item
- `DELETE /api/gallery/:id` - Delete gallery item

### Dishes
- `GET /api/dishes` - Get all dishes
- `POST /api/dishes` - Create dish
- `PUT /api/dishes/:id` - Update dish
- `DELETE /api/dishes/:id` - Delete dish

### Events
- `GET /api/events` - Get all events
- `POST /api/events` - Create event
- `PUT /api/events/:id` - Update event
- `DELETE /api/events/:id` - Delete event

### Team
- `GET /api/team` - Get all team members
- `POST /api/team` - Create team member
- `PUT /api/team/:id` - Update team member
- `DELETE /api/team/:id` - Delete team member

### Services
- `GET /api/services` - Get all services
- `POST /api/services` - Create service
- `PUT /api/services/:id` - Update service
- `DELETE /api/services/:id` - Delete service

### Authentication
- `POST /api/auth/register` - Register admin
- `POST /api/auth/login` - Login admin

## Setup Instructions

### 1. Backend Setup
```bash
cd server
npm install
npm run dev
```

### 2. Frontend Setup
The management dashboard is already integrated. Just ensure:
- Backend is running on `http://localhost:5000`
- Set `NEXT_PUBLIC_API_URL=http://localhost:5000/api` in `.env.local` (optional, defaults to localhost:5000)

### 3. Access Dashboard
Navigate to: `http://localhost:3000/private`

## Environment Variables

### Server (.env)
```
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:3000
```

### Client (.env.local) - Optional
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## Security Notes

⚠️ **Important for Production:**
1. Add authentication middleware to protect `/private` route
2. Implement JWT token validation
3. Add role-based access control
4. Secure file uploads (currently using URLs)
5. Add rate limiting
6. Enable HTTPS

## Next Steps

1. **Add Authentication**: Protect the `/private` route with login
2. **File Upload**: Implement actual image upload instead of URLs
3. **Image Optimization**: Add image compression and CDN
4. **Notifications**: Add email/SMS notifications for events
5. **Reports**: Add analytics and reporting features
6. **Export**: Add data export functionality

## Usage Example

### Adding a Gallery Item
1. Go to `/private`
2. Click "Gallery" tab
3. Click "Add Photo"
4. Fill in: Title, Description, Image URL, Category
5. Click "Save"

### Managing Dishes
1. Go to "Dishes" tab
2. Click "Add Dish"
3. Fill in all dish details
4. Save and it will appear in the list

All changes are saved to MongoDB and will be reflected immediately.
