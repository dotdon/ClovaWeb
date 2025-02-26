# ClovaLink Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [System Architecture](#system-architecture)
3. [Database Schema](#database-schema)
4. [Project Structure](#project-structure)
5. [Authentication & Authorization](#authentication--authorization)
6. [Core Features](#core-features)
7. [API Endpoints](#api-endpoints)
8. [Deployment](#deployment)
9. [Development Guide](#development-guide)
10. [Troubleshooting](#troubleshooting)

## Introduction

ClovaLink is a secure document management and sharing platform designed for businesses to safely store, organize, and share documents. The platform provides role-based access control, temporary sharing links, and company-based data isolation to ensure security and privacy.

### Key Features

- **Secure Document Management**: Upload, store, and manage documents with encryption and access controls
- **Role-Based Access Control**: Different permission levels for administrators, managers, and regular users
- **Temporary Sharing Links**: Create time-limited links for document downloads and uploads
- **Folder Organization**: Organize documents in hierarchical folders
- **Activity Tracking**: Comprehensive logging of all user activities
- **Company Isolation**: Data segregation between different companies
- **Email Notifications**: Automated notifications for important events

## System Architecture

ClovaLink is built using the following technologies:

- **Frontend**: Next.js (React framework)
- **Backend**: Next.js API routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **File Storage**: Local file system (configurable)
- **Containerization**: Docker and Docker Compose

The application follows a modern full-stack architecture with server-side rendering capabilities and API routes for backend functionality.

## Database Schema

The database schema consists of the following main entities:

### Company
- Represents an organization using the platform
- Has many employees, documents, folders, and activities

### Employee
- Users of the system with different roles (ADMIN, MANAGER, USER)
- Belongs to a company
- Can create and access documents, folders, and sharing links

### Document
- Represents a file uploaded to the system
- Contains metadata like name, path, size, and MIME type
- Belongs to a company and can be organized in folders

### Folder
- Hierarchical organization structure for documents
- Can contain documents and other folders (parent-child relationship)
- Belongs to a company

### Activity
- Logs user actions within the system
- Records details like action type, timestamp, IP address, and user agent
- Linked to employees, documents, and companies

### DownloadLink
- Temporary link for sharing documents or folders
- Has expiration date and usage tracking
- Can be associated with a document or folder

### UploadLink
- Temporary link allowing external users to upload documents
- Has expiration date and usage limits
- Created by an employee

## Project Structure

```
clovalink/
├── src/
│   ├── app/                  # Next.js app router pages and layouts
│   │   ├── api/              # API routes
│   │   ├── auth/             # Authentication pages
│   │   ├── dashboard/        # Dashboard pages
│   │   ├── download/         # Download link pages
│   │   └── upload/           # Upload link pages
│   ├── components/           # React components
│   ├── lib/                  # Utility functions and services
│   │   ├── services/         # Business logic services
│   │   ├── auth.ts           # Authentication utilities
│   │   ├── permissions.ts    # Permission checking utilities
│   │   ├── prisma.ts         # Prisma client initialization
│   │   └── utils.ts          # General utilities
│   ├── types/                # TypeScript type definitions
│   └── middleware.ts         # Next.js middleware for auth and routing
├── prisma/
│   ├── migrations/           # Database migrations
│   ├── schema.prisma         # Prisma schema definition
│   └── seed.ts               # Database seeding script
├── public/                   # Static assets
├── .env                      # Environment variables
├── .env.prod.example         # Example production environment variables
├── docker-compose.yml        # Docker Compose for development
├── docker-compose.prod.yml   # Docker Compose for production
├── Dockerfile                # Docker image definition
├── nginx.conf                # Nginx configuration for production
├── next.config.js            # Next.js configuration
├── package.json              # Project dependencies and scripts
└── tsconfig.json             # TypeScript configuration
```

## Authentication & Authorization

ClovaLink uses NextAuth.js for authentication with a custom credential provider that validates against the database. The system implements:

### Authentication Flow
1. User enters email and password
2. Credentials are validated against the database
3. If valid, a session is created with user information
4. Session token is stored in cookies

### Authorization System
- **Role-Based Access Control**: Different permissions for ADMIN, MANAGER, and USER roles
- **Company Isolation**: Users can only access data within their company
- **Resource-Level Permissions**: Controls for documents, folders, and sharing links

The permissions system is implemented in `src/lib/permissions.ts` and enforced throughout the application.

## Core Features

### Document Management
- Upload documents with metadata
- Organize documents in folders
- Search and filter documents
- Preview documents (PDF, images, etc.)
- Download documents

### Sharing System
- Create temporary download links for documents or folders
- Generate upload links for external users to contribute documents
- Set expiration dates and usage limits for links
- Track usage of sharing links

### Activity Tracking
- Log all user actions (uploads, downloads, sharing, etc.)
- Record metadata like IP address and user agent
- View activity history filtered by user, document, or action type

## API Endpoints

ClovaLink provides the following API endpoints:

### Authentication
- `POST /api/auth/[...nextauth]` - NextAuth.js authentication endpoints

### Documents
- `GET /api/documents` - List documents
- `POST /api/documents` - Upload a document
- `GET /api/documents/:id` - Get document details
- `DELETE /api/documents/:id` - Delete a document
- `GET /api/documents/:id/download` - Download a document

### Folders
- `GET /api/folders` - List folders
- `POST /api/folders` - Create a folder
- `GET /api/folders/:id` - Get folder details
- `PUT /api/folders/:id` - Update a folder
- `DELETE /api/folders/:id` - Delete a folder

### Sharing
- `POST /api/links/download` - Create a download link
- `POST /api/links/upload` - Create an upload link
- `GET /api/links/:token` - Validate a link
- `POST /api/links/:token/upload` - Upload to a link

### Activities
- `GET /api/activities` - List activities

## Deployment

ClovaLink can be deployed using Docker in both development and production environments.

### Development Deployment
```bash
# Clone the repository
git clone https://github.com/yourusername/clovalink.git
cd clovalink

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Start the development containers
docker-compose up -d

# Initialize the database
docker-compose exec app npx prisma db push
docker-compose exec app npx prisma db seed
```

### Production Deployment
```bash
# Clone the repository
git clone https://github.com/yourusername/clovalink.git
cd clovalink

# Set up environment variables
cp .env.prod.example .env
# Edit .env with your production configuration

# Start the production containers
docker-compose -f docker-compose.prod.yml up -d

# Set up SSL certificates (if needed)
./setup-ssl.sh

# Initialize the database
docker-compose -f docker-compose.prod.yml exec app npx prisma db push
docker-compose -f docker-compose.prod.yml exec app npx prisma db seed
```

For detailed Linode deployment instructions, refer to the `linode-setup.md` file.

## Development Guide

### Prerequisites
- Node.js 20.x or later
- PostgreSQL 15.x or later
- Docker and Docker Compose (optional)

### Local Setup
```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Set up the database
npx prisma db push
npx prisma db seed

# Start the development server
npm run dev
```

### Database Management
- Generate Prisma client: `npx prisma generate`
- Push schema changes: `npx prisma db push`
- Reset database: `npx prisma db push --force-reset`
- View database: `npx prisma studio`

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run linter
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:push` - Push schema changes
- `npm run prisma:reset` - Reset database
- `npm run prisma:seed` - Seed database
- `npm run prisma:studio` - Open Prisma Studio
- `npm run setup` - Run setup script

## Troubleshooting

### Common Issues

#### Database Connection Issues
- Ensure PostgreSQL is running
- Verify DATABASE_URL in .env is correct
- Check network connectivity between app and database

#### File Upload Problems
- Verify UPLOAD_DIR exists and has proper permissions
- Check MAX_FILE_SIZE and ALLOWED_FILE_TYPES settings
- Ensure disk space is available

#### Authentication Problems
- Verify NEXTAUTH_URL and NEXTAUTH_SECRET are set correctly
- Check email configuration for password reset functionality
- Ensure database contains valid user credentials

#### Docker Deployment Issues
- Check Docker and Docker Compose versions
- Verify port mappings and volume mounts
- Ensure environment variables are properly set

For additional support, please open an issue on the GitHub repository or contact the development team. 