# ClovaLink API Documentation

This document provides detailed information about the ClovaLink API endpoints, request/response formats, and authentication requirements.

## Authentication

All API requests (except for public endpoints) require authentication using a JWT token.

### Authentication Headers

```
Authorization: Bearer <token>
```

### Obtaining a Token

```
POST /api/auth/signin
```

Request body:
```json
{
  "email": "user@example.com",
  "password": "your-password"
}
```

Response:
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "clr3m2x0g0000qw3z5h8j6e9t",
      "name": "John Doe",
      "email": "user@example.com",
      "role": "USER",
      "companyId": "clr3m2x0g0001qw3z5h8j6e9t"
    }
  }
}
```

## Response Format

All API responses follow a standard format:

### Success Response

```json
{
  "success": true,
  "data": {
    // Response data
  }
}
```

### Error Response

```json
{
  "success": false,
  "error": {
    "message": "Error message",
    "code": "ERROR_CODE"
  }
}
```

## Common Error Codes

- `UNAUTHORIZED`: Authentication required or invalid credentials
- `FORBIDDEN`: Insufficient permissions
- `NOT_FOUND`: Resource not found
- `VALIDATION_ERROR`: Invalid request parameters
- `INTERNAL_ERROR`: Server error

## API Endpoints

### Documents

#### List Documents

```
GET /api/documents
```

Query parameters:
- `folderId` (optional): Filter by folder ID
- `search` (optional): Search term
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 20)
- `sortBy` (optional): Sort field (default: 'createdAt')
- `sortOrder` (optional): Sort order ('asc' or 'desc', default: 'desc')

Response:
```json
{
  "success": true,
  "data": {
    "documents": [
      {
        "id": "clr3m2x0g0002qw3z5h8j6e9t",
        "name": "Document.pdf",
        "mimeType": "application/pdf",
        "size": 1024,
        "createdAt": "2023-01-01T00:00:00.000Z",
        "updatedAt": "2023-01-01T00:00:00.000Z",
        "employeeId": "clr3m2x0g0000qw3z5h8j6e9t",
        "companyId": "clr3m2x0g0001qw3z5h8j6e9t",
        "folderId": "clr3m2x0g0003qw3z5h8j6e9t",
        "uploadedBy": {
          "id": "clr3m2x0g0000qw3z5h8j6e9t",
          "name": "John Doe"
        }
      }
    ],
    "pagination": {
      "total": 100,
      "page": 1,
      "limit": 20,
      "pages": 5
    }
  }
}
```

#### Upload Document

```
POST /api/documents
```

Request (multipart/form-data):
- `file`: The file to upload
- `name` (optional): Custom name for the document
- `folderId` (optional): Folder ID to place the document in
- `metadata` (optional): JSON string with additional metadata

Response:
```json
{
  "success": true,
  "data": {
    "document": {
      "id": "clr3m2x0g0002qw3z5h8j6e9t",
      "name": "Document.pdf",
      "mimeType": "application/pdf",
      "size": 1024,
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z",
      "employeeId": "clr3m2x0g0000qw3z5h8j6e9t",
      "companyId": "clr3m2x0g0001qw3z5h8j6e9t",
      "folderId": "clr3m2x0g0003qw3z5h8j6e9t"
    }
  }
}
```

#### Get Document

```
GET /api/documents/:id
```

Response:
```json
{
  "success": true,
  "data": {
    "document": {
      "id": "clr3m2x0g0002qw3z5h8j6e9t",
      "name": "Document.pdf",
      "mimeType": "application/pdf",
      "size": 1024,
      "metadata": {},
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z",
      "employeeId": "clr3m2x0g0000qw3z5h8j6e9t",
      "companyId": "clr3m2x0g0001qw3z5h8j6e9t",
      "folderId": "clr3m2x0g0003qw3z5h8j6e9t",
      "uploadedBy": {
        "id": "clr3m2x0g0000qw3z5h8j6e9t",
        "name": "John Doe"
      }
    }
  }
}
```

#### Update Document

```
PUT /api/documents/:id
```

Request body:
```json
{
  "name": "Updated Document Name.pdf",
  "folderId": "clr3m2x0g0003qw3z5h8j6e9t",
  "metadata": {
    "description": "Updated description",
    "tags": ["important", "contract"]
  }
}
```

Response:
```json
{
  "success": true,
  "data": {
    "document": {
      "id": "clr3m2x0g0002qw3z5h8j6e9t",
      "name": "Updated Document Name.pdf",
      "mimeType": "application/pdf",
      "size": 1024,
      "metadata": {
        "description": "Updated description",
        "tags": ["important", "contract"]
      },
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z",
      "employeeId": "clr3m2x0g0000qw3z5h8j6e9t",
      "companyId": "clr3m2x0g0001qw3z5h8j6e9t",
      "folderId": "clr3m2x0g0003qw3z5h8j6e9t"
    }
  }
}
```

#### Delete Document

```
DELETE /api/documents/:id
```

Response:
```json
{
  "success": true,
  "data": {
    "message": "Document deleted successfully"
  }
}
```

#### Download Document

```
GET /api/documents/:id/download
```

Response: The document file as a download

### Folders

#### List Folders

```
GET /api/folders
```

Query parameters:
- `parentId` (optional): Filter by parent folder ID
- `search` (optional): Search term
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 20)

Response:
```json
{
  "success": true,
  "data": {
    "folders": [
      {
        "id": "clr3m2x0g0003qw3z5h8j6e9t",
        "name": "Folder Name",
        "parentId": null,
        "createdAt": "2023-01-01T00:00:00.000Z",
        "updatedAt": "2023-01-01T00:00:00.000Z",
        "companyId": "clr3m2x0g0001qw3z5h8j6e9t",
        "createdById": "clr3m2x0g0000qw3z5h8j6e9t",
        "createdBy": {
          "id": "clr3m2x0g0000qw3z5h8j6e9t",
          "name": "John Doe"
        }
      }
    ],
    "pagination": {
      "total": 10,
      "page": 1,
      "limit": 20,
      "pages": 1
    }
  }
}
```

#### Create Folder

```
POST /api/folders
```

Request body:
```json
{
  "name": "New Folder",
  "parentId": "clr3m2x0g0003qw3z5h8j6e9t"
}
```

Response:
```json
{
  "success": true,
  "data": {
    "folder": {
      "id": "clr3m2x0g0004qw3z5h8j6e9t",
      "name": "New Folder",
      "parentId": "clr3m2x0g0003qw3z5h8j6e9t",
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z",
      "companyId": "clr3m2x0g0001qw3z5h8j6e9t",
      "createdById": "clr3m2x0g0000qw3z5h8j6e9t"
    }
  }
}
```

#### Get Folder

```
GET /api/folders/:id
```

Response:
```json
{
  "success": true,
  "data": {
    "folder": {
      "id": "clr3m2x0g0003qw3z5h8j6e9t",
      "name": "Folder Name",
      "parentId": null,
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z",
      "companyId": "clr3m2x0g0001qw3z5h8j6e9t",
      "createdById": "clr3m2x0g0000qw3z5h8j6e9t",
      "createdBy": {
        "id": "clr3m2x0g0000qw3z5h8j6e9t",
        "name": "John Doe"
      },
      "children": [
        {
          "id": "clr3m2x0g0004qw3z5h8j6e9t",
          "name": "Child Folder",
          "parentId": "clr3m2x0g0003qw3z5h8j6e9t"
        }
      ],
      "documents": [
        {
          "id": "clr3m2x0g0002qw3z5h8j6e9t",
          "name": "Document.pdf",
          "mimeType": "application/pdf",
          "size": 1024,
          "createdAt": "2023-01-01T00:00:00.000Z"
        }
      ]
    }
  }
}
```

#### Update Folder

```
PUT /api/folders/:id
```

Request body:
```json
{
  "name": "Updated Folder Name",
  "parentId": "clr3m2x0g0005qw3z5h8j6e9t"
}
```

Response:
```json
{
  "success": true,
  "data": {
    "folder": {
      "id": "clr3m2x0g0003qw3z5h8j6e9t",
      "name": "Updated Folder Name",
      "parentId": "clr3m2x0g0005qw3z5h8j6e9t",
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z",
      "companyId": "clr3m2x0g0001qw3z5h8j6e9t",
      "createdById": "clr3m2x0g0000qw3z5h8j6e9t"
    }
  }
}
```

#### Delete Folder

```
DELETE /api/folders/:id
```

Response:
```json
{
  "success": true,
  "data": {
    "message": "Folder deleted successfully"
  }
}
```

### Sharing Links

#### Create Download Link

```
POST /api/links/download
```

Request body:
```json
{
  "documentId": "clr3m2x0g0002qw3z5h8j6e9t",
  "expiresAt": "2023-02-01T00:00:00.000Z"
}
```

Or for folder sharing:
```json
{
  "folderId": "clr3m2x0g0003qw3z5h8j6e9t",
  "expiresAt": "2023-02-01T00:00:00.000Z"
}
```

Response:
```json
{
  "success": true,
  "data": {
    "link": {
      "id": "clr3m2x0g0006qw3z5h8j6e9t",
      "token": "abcdef123456",
      "documentId": "clr3m2x0g0002qw3z5h8j6e9t",
      "folderId": null,
      "expiresAt": "2023-02-01T00:00:00.000Z",
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z",
      "isActive": true,
      "downloads": 0,
      "url": "https://yourdomain.com/download/abcdef123456"
    }
  }
}
```

#### Create Upload Link

```
POST /api/links/upload
```

Request body:
```json
{
  "name": "Client Documents",
  "maxUses": 5,
  "expiresAt": "2023-02-01T00:00:00.000Z",
  "metadata": {
    "description": "Upload your documents here",
    "allowedTypes": ["pdf", "docx"]
  }
}
```

Response:
```json
{
  "success": true,
  "data": {
    "link": {
      "id": "clr3m2x0g0007qw3z5h8j6e9t",
      "name": "Client Documents",
      "token": "ghijkl789012",
      "maxUses": 5,
      "useCount": 0,
      "used": false,
      "expiresAt": "2023-02-01T00:00:00.000Z",
      "metadata": {
        "description": "Upload your documents here",
        "allowedTypes": ["pdf", "docx"]
      },
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z",
      "url": "https://yourdomain.com/upload/ghijkl789012"
    }
  }
}
```

#### List Sharing Links

```
GET /api/links
```

Query parameters:
- `type` (optional): Filter by link type ('download' or 'upload')
- `active` (optional): Filter by active status (true or false)
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 20)

Response:
```json
{
  "success": true,
  "data": {
    "links": [
      {
        "id": "clr3m2x0g0006qw3z5h8j6e9t",
        "type": "download",
        "token": "abcdef123456",
        "documentId": "clr3m2x0g0002qw3z5h8j6e9t",
        "folderId": null,
        "expiresAt": "2023-02-01T00:00:00.000Z",
        "createdAt": "2023-01-01T00:00:00.000Z",
        "isActive": true,
        "downloads": 0,
        "document": {
          "id": "clr3m2x0g0002qw3z5h8j6e9t",
          "name": "Document.pdf"
        }
      },
      {
        "id": "clr3m2x0g0007qw3z5h8j6e9t",
        "type": "upload",
        "name": "Client Documents",
        "token": "ghijkl789012",
        "maxUses": 5,
        "useCount": 0,
        "used": false,
        "expiresAt": "2023-02-01T00:00:00.000Z",
        "createdAt": "2023-01-01T00:00:00.000Z"
      }
    ],
    "pagination": {
      "total": 2,
      "page": 1,
      "limit": 20,
      "pages": 1
    }
  }
}
```

#### Delete Sharing Link

```
DELETE /api/links/:id
```

Response:
```json
{
  "success": true,
  "data": {
    "message": "Link deleted successfully"
  }
}
```

### Activities

#### List Activities

```
GET /api/activities
```

Query parameters:
- `employeeId` (optional): Filter by employee ID
- `documentId` (optional): Filter by document ID
- `type` (optional): Filter by activity type
- `startDate` (optional): Filter by start date
- `endDate` (optional): Filter by end date
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 20)

Response:
```json
{
  "success": true,
  "data": {
    "activities": [
      {
        "id": "clr3m2x0g0008qw3z5h8j6e9t",
        "type": "DOCUMENT_UPLOAD",
        "description": "Uploaded document: Document.pdf",
        "timestamp": "2023-01-01T00:00:00.000Z",
        "employeeId": "clr3m2x0g0000qw3z5h8j6e9t",
        "documentId": "clr3m2x0g0002qw3z5h8j6e9t",
        "companyId": "clr3m2x0g0001qw3z5h8j6e9t",
        "ipAddress": "192.168.1.1",
        "userAgent": "Mozilla/5.0...",
        "employee": {
          "id": "clr3m2x0g0000qw3z5h8j6e9t",
          "name": "John Doe"
        },
        "document": {
          "id": "clr3m2x0g0002qw3z5h8j6e9t",
          "name": "Document.pdf"
        }
      }
    ],
    "pagination": {
      "total": 100,
      "page": 1,
      "limit": 20,
      "pages": 5
    }
  }
}
```

### Users

#### List Users

```
GET /api/users
```

Query parameters:
- `role` (optional): Filter by role
- `search` (optional): Search by name or email
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 20)

Response:
```json
{
  "success": true,
  "data": {
    "users": [
      {
        "id": "clr3m2x0g0000qw3z5h8j6e9t",
        "name": "John Doe",
        "email": "john@example.com",
        "role": "ADMIN",
        "companyId": "clr3m2x0g0001qw3z5h8j6e9t",
        "createdAt": "2023-01-01T00:00:00.000Z"
      }
    ],
    "pagination": {
      "total": 10,
      "page": 1,
      "limit": 20,
      "pages": 1
    }
  }
}
```

#### Create User

```
POST /api/users
```

Request body:
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "password": "initial-password",
  "role": "MANAGER"
}
```

Response:
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "clr3m2x0g0009qw3z5h8j6e9t",
      "name": "Jane Smith",
      "email": "jane@example.com",
      "role": "MANAGER",
      "companyId": "clr3m2x0g0001qw3z5h8j6e9t",
      "createdAt": "2023-01-01T00:00:00.000Z"
    }
  }
}
```

#### Update User

```
PUT /api/users/:id
```

Request body:
```json
{
  "name": "Jane Smith-Johnson",
  "role": "ADMIN"
}
```

Response:
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "clr3m2x0g0009qw3z5h8j6e9t",
      "name": "Jane Smith-Johnson",
      "email": "jane@example.com",
      "role": "ADMIN",
      "companyId": "clr3m2x0g0001qw3z5h8j6e9t",
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-02T00:00:00.000Z"
    }
  }
}
```

#### Delete User

```
DELETE /api/users/:id
```

Response:
```json
{
  "success": true,
  "data": {
    "message": "User deleted successfully"
  }
}
```

## Rate Limiting

The API implements rate limiting to prevent abuse. The current limits are:

- 100 requests per minute for authenticated users
- 20 requests per minute for unauthenticated users

When rate limited, the API will respond with a 429 Too Many Requests status code.

## Webhooks

ClovaLink supports webhooks for integrating with external systems. Webhooks can be configured to notify your systems about events such as document uploads, downloads, and user activities.

### Configuring Webhooks

```
POST /api/webhooks
```

Request body:
```json
{
  "url": "https://your-system.com/webhook",
  "secret": "your-webhook-secret",
  "events": ["document.upload", "document.download", "link.access"]
}
```

Response:
```json
{
  "success": true,
  "data": {
    "webhook": {
      "id": "clr3m2x0g0010qw3z5h8j6e9t",
      "url": "https://your-system.com/webhook",
      "events": ["document.upload", "document.download", "link.access"],
      "createdAt": "2023-01-01T00:00:00.000Z"
    }
  }
}
```

### Webhook Payload Format

```json
{
  "event": "document.upload",
  "timestamp": "2023-01-01T00:00:00.000Z",
  "data": {
    // Event-specific data
  },
  "signature": "computed-signature-based-on-secret"
}
```

## API Versioning

The current API version is v1. The version is included in the URL path:

```
/api/v1/documents
```

When a new API version is released, the previous version will be maintained for a deprecation period of at least 6 months. 