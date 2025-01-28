# Chennai Trail Club Frontend
Welcome to the developer documentation for the Chennai Trail Club website Frontend. This document provides an overview of the website's Frontend architecture, setup instructions, and guidelines for maintaining and updating the site.

**Table of contents :**  
1. [Project Overview](#overview)
2. [Key Features](#key-features)
3. [Technoloy Stack](#technology-stack)
4. [Getting Started](#getting-started)
5. [Development](#development) 
6. [Project Structure](#project-structure)
7. [Core Components](#core-components)
8. [API Integration](#api-integration)
9.  [Performance Features](#performance-features)
10. [Contributing](#contributing)
11. [Best Practices](#best-practices)
12. [Deployment](#deployment)

## Project Overview

Chennai Trail Club's frontend application is a modern, responsive web platform built with Next.js that connects outdoor enthusiasts with trail running and hiking activities. The platform offers event registration, club membership, photo galleries,and provides a display of Past and Upcoming events with all details.

## Key Features

- **Event Management**
  - Dynamic events
  - Online registration system
  - Past and upcoming events showcase
  - Photo gallery integration
  - Year-wise event sorting
  
- **User Features**
  - Online club membership registration
  - Secure payment integration via Razorpay
  - Email notifications
  - Interactive event browsing
  
- **Technical Features**
  - Server-side rendering (SSR) for optimal performance
  - Client-side interactivity
  - Image lazy loading
  - API request caching (1 hour)
  - Dynamic component imports
  - OpenGraph protocol integration
  - Pre-rendering with speculation rules
  - Responsive design
  - Framer Motion animations

## Technology Stack

- **Framework**: Next.js (v14+)
- **Styling**: TailwindCSS
- **Animation**: Framer Motion
- **Payment**: Razorpay
- **Backend**: REST API Integration
- **Cloud Storage**: AWS S3
- **Version Control**: Git



## Getting Started

## Prerequisites

- Node.js (compatible with Next.js v14+)
- npm or yarn package manager
- Access to backend API server
- AWS S3 bucket access

### Installation

1. Clone the repository:
```bash
git clone https://calib.dev/chennai-trail-club/frontend.git
cd chennai-trail-club
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Configure environment variables:
Create a `.env` file in the root directory:
```env
NEXT_PUBLIC_API_URL=your_backend_server_url
NEXT_PUBLIC_S3_BUCKET=your_aws_bucket_url
```

### Development

Start the development server:
```bash
npm run dev
# or
yarn dev
```

## Project Structure

```
├── public/                 # Static files
├── src/
│   ├── app/               # Next.js pages and routes
│   ├── components/        # React components
│   │   ├── AboutUs/      # About page components
│   │   ├── Button/       # Reusable buttons
│   │   ├── Event/        # Event-related components
│   │   ├── Footer/       # Footer components
│   │   ├── Headers/      # Header components
│   │   ├── Home/         # Homepage components
│   │   ├── JoinUs/       # Membership components
|   |   ├── PastEvents    # PastEvents-related components
│   │   ├── Register/     # Registration components
|   |   ├── Upcomingevents # Upcomingevents-related components
│   │   └── ...          # Other component directories
│   ├── Schema/           # Validation schemas
│   └── Utils/            # Utility functions
└── configuration files   # Config files (.env, next.config.js, etc.)
```

## Core Components

### Navigation
- Responsive navbar with scroll-based color changes
- Mobile-friendly menu

### Home Page
- Hero section with a background image and  recent event showcase
- Feature highlights
- Recent activities gallery
- Error boundary integration

### Event Pages
- Dynamic event routing
- Detailed event information
- Registration system integration
- Past and Upcoming Events showcase 
- Year-based event filtering
- Result linking for past events

### Registration System
- Multi-step form validation using formik and yup
- Double registration prevention
- Razorpay payment integration
- Email notification system
- Toast notifications

### Club Membership
- Online registration form
- Email confirmation system
- Validation integration

## API Integration

The application integrates with the following endpoints:

## General 
- `/adminservices/aboutusheroimage` - About page hero image
- `/adminservices/aboutus` - About page content
- `/adminservices/heroimage` - Homepage hero image
- `/adminservices/ourfeatures` - Club features
- `/adminservices/recentactivities` - Recent activities gallery

### Events
- `/events/recentevent` - Most recent event
- `/events/event/${eventId}` - Specific event details
- `/events/pastevents` - Past events listing
- `/events/upcomingevents` - Upcoming events

### User Services
- `/users/joinus` - Club membership registration
- `/payment` - Payment processing

## Performance Features

1. **Server-Side Rendering**
   - Improved initial load time
   - Better SEO optimization
   - Reduced client-side processing

2. **Optimization Techniques**
   - API request caching (1-hour duration)
   - Lazy image loading
   - Dynamic component imports
   - Custom Tailwind configurations

3. **User Experience**
   - Framer Motion animations
   - Responsive design
   - Interactive elements
   - Toast notifications

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Best Practices

1. **Code Organization**
   - Component-based architecture
   - Separation of concerns
   - Reusable components
   - Utility-first CSS

2. **Performance**
   - Server-side rendering where appropriate
   - Optimized images and assets
   - Efficient API integration
   - Proper caching implementation

3. **Error Handling**
   - Error boundaries
   - Form validation
   - API error handling

## Deployment

Deployment documentation to be added.

