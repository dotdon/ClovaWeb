# ClovaLink

ClovaLink is an open-source secure file sharing platform designed for businesses that need to share sensitive files securely instead of sending them over email. It provides a comprehensive set of features for secure file management with a familiar interface.

## Features

- **End-to-End Encryption**: All files are encrypted in transit and at rest
- **Secure Sharing Links**: Generate secure, expiring links for file sharing
- **Role-Based Access Control**: Granular permissions with Admin, Manager, and User roles
- **Multi-Company Support**: Manage multiple companies or departments within a single platform
- **Advanced Administration**: User management, activity monitoring, and security policy enforcement
- **Streamlined Workflow Tracking**: Monitor user activities with insights into file access patterns and usage statistics
- **Google Drive-like Features**: Familiar file management interface with folders, sharing, and collaboration tools
- **Open Source**: Fully open-source and free to use

## Role-Based Access Control

ClovaLink offers three levels of user roles:

- **Admin**: Full system access, user management across all companies, security policy enforcement
- **Manager**: Department/team management, activity tracking, file permission management
- **User**: File upload and management, secure file sharing, activity monitoring

## Multi-Company Support

- Manage multiple companies or departments within a single platform
- Separate workspaces with isolated file storage and custom security policies
- Cross-company collaboration with secure file sharing between workspaces

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/clovalink.git
cd clovalink
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

ClovaLink is designed to work seamlessly with Cloudflare Pages. Follow these steps to deploy:

1. Push your code to a GitHub repository
2. Connect your repository to Cloudflare Pages
3. Configure the build settings:
   - Build command: `npm run build`
   - Build output directory: `out`
4. Deploy!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Next.js
- Tailwind CSS
- Cloudflare Pages
