# ClovaLink Technical Guide

This guide provides technical details for developers working on the ClovaLink project.

## Development Environment Setup

### Prerequisites
- Node.js 20.x (see .nvmrc)
- PostgreSQL 15.x
- Git

### Local Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/clovalink.git
cd clovalink
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Configure your `.env` file with the following variables:
```
# Database
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/clovalink?schema=public

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

# Email (for notifications)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASSWORD=your-password
SMTP_FROM=noreply@example.com

# File Storage
UPLOAD_DIR=./uploads
MAX_FILE_SIZE=10485760
ALLOWED_FILE_TYPES=pdf,doc,docx,xls,xlsx,ppt,pptx,txt,csv,jpg,jpeg,png,gif
```

5. Initialize the database:
```bash
npx prisma db push
npx prisma db seed
```

6. Start the development server:
```bash
npm run dev
```

## Docker Development Environment

1. Start the containers:
```bash
docker-compose up -d
```

2. Initialize the database:
```bash
docker-compose exec app npx prisma db push
docker-compose exec app npx prisma db seed
```

## Code Structure

### Key Directories and Files

- `src/app`: Next.js App Router pages and API routes
- `src/components`: Reusable React components
- `src/lib`: Utility functions and services
- `prisma/schema.prisma`: Database schema definition
- `middleware.ts`: Authentication and routing middleware

### Important Services

- `src/lib/auth.ts`: Authentication configuration
- `src/lib/permissions.ts`: Permission checking utilities
- `src/lib/prisma.ts`: Prisma client initialization
- `src/lib/services/`: Business logic services

## Database Management

### Prisma Commands

- Generate Prisma client:
```bash
npx prisma generate
```

- Push schema changes:
```bash
npx prisma db push
```

- Reset database:
```bash
npx prisma db push --force-reset
```

- View database:
```bash
npx prisma studio
```

### Database Schema

The database schema includes the following main models:

- `Company`: Organizations using the platform
- `Employee`: Users with different roles
- `Document`: Files uploaded to the system
- `Folder`: Hierarchical organization for documents
- `Activity`: Logs of user actions
- `DownloadLink`: Temporary links for sharing documents
- `UploadLink`: Temporary links for receiving documents

## Authentication Flow

1. User credentials are validated against the database
2. NextAuth.js creates a session with user information
3. Session token is stored in cookies
4. Middleware checks session validity on protected routes

## API Development

### API Route Structure

API routes are located in `src/app/api/` and follow the Next.js App Router conventions:

- `src/app/api/documents/route.ts`: Document management
- `src/app/api/folders/route.ts`: Folder management
- `src/app/api/links/route.ts`: Sharing links
- `src/app/api/activities/route.ts`: Activity logs

### API Response Format

All API responses should follow this format:

```typescript
// Success response
{
  success: true,
  data: { ... }
}

// Error response
{
  success: false,
  error: {
    message: "Error message",
    code: "ERROR_CODE"
  }
}
```

## Testing

### Running Tests

```bash
npm run test
```

### Test Structure

- Unit tests: Test individual functions and components
- Integration tests: Test API endpoints and database interactions
- End-to-end tests: Test complete user flows

## Deployment

### Production Build

```bash
npm run build
npm run start
```

### Docker Production Deployment

```bash
docker-compose -f docker-compose.prod.yml up -d
```

### SSL Setup

Run the SSL setup script to configure HTTPS:

```bash
./setup-ssl.sh
```

## Common Development Tasks

### Adding a New API Endpoint

1. Create a new route file in `src/app/api/`
2. Implement the necessary HTTP methods (GET, POST, etc.)
3. Add permission checks using the permissions utility
4. Document the endpoint in the API documentation

### Creating a New Component

1. Create a new component file in `src/components/`
2. Implement the component using React and TypeScript
3. Add proper prop types and documentation
4. Import and use the component where needed

### Adding a New Database Model

1. Update the `prisma/schema.prisma` file with the new model
2. Run `npx prisma generate` to update the Prisma client
3. Run `npx prisma db push` to update the database schema
4. Create or update services to interact with the new model

## Performance Optimization

- Use server components where possible
- Implement proper data fetching strategies
- Optimize database queries with proper indexes
- Use caching for frequently accessed data

## Security Best Practices

- Always validate user input
- Use parameterized queries to prevent SQL injection
- Implement proper access control checks
- Sanitize file uploads to prevent malicious files
- Use HTTPS in production
- Keep dependencies updated

## Troubleshooting

### Common Issues

- **Database connection errors**: Check DATABASE_URL and ensure PostgreSQL is running
- **Authentication issues**: Verify NEXTAUTH_URL and NEXTAUTH_SECRET
- **File upload problems**: Check UPLOAD_DIR permissions and disk space
- **Docker issues**: Verify port mappings and volume mounts

### Debugging Tools

- Prisma Studio: `npx prisma studio`
- Next.js Dev Tools: Available in development mode
- Docker logs: `docker-compose logs -f app`

## Contributing Guidelines

1. Create a feature branch from `main`
2. Make your changes following the coding standards
3. Write tests for your changes
4. Update documentation as needed
5. Submit a pull request

## Coding Standards

- Use TypeScript for type safety
- Follow ESLint rules
- Write meaningful commit messages
- Document complex functions and components
- Write tests for new features

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/getting-started/introduction)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) 