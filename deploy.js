// Simple script to copy the build output to the root directory
const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

console.log('Starting deploy script...');

// Define paths
const sourceDir = path.join(__dirname, 'clovalink', '.next', 'out');
const targetDir = path.join(__dirname, 'out');

// Create output directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  console.log(`Creating output directory: ${targetDir}`);
  fs.mkdirSync(targetDir, { recursive: true });
}

// Check if source directory exists
if (!fs.existsSync(sourceDir)) {
  console.error(`Source directory not found: ${sourceDir}`);
  
  // Create a fallback index.html if the build failed
  console.log('Creating fallback index.html...');
  const fallbackHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ClovaLink</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background-color: #f9fafb;
      color: #1f2937;
    }
    .container {
      max-width: 800px;
      padding: 2rem;
      text-align: center;
    }
    h1 {
      color: #2563eb;
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.25rem;
      line-height: 1.75;
      margin-bottom: 2rem;
    }
    .button {
      display: inline-block;
      background-color: #2563eb;
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 0.375rem;
      text-decoration: none;
      font-weight: 500;
      transition: background-color 0.2s;
    }
    .button:hover {
      background-color: #1d4ed8;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>ClovaLink</h1>
    <p>Secure file sharing for your business. Open source and free.</p>
    <a href="https://github.com/dotdon/cloverlink" class="button" target="_blank" rel="noopener noreferrer">View on GitHub</a>
  </div>
</body>
</html>
  `;
  fs.writeFileSync(path.join(targetDir, 'index.html'), fallbackHtml);
  
  // Create a _redirects file for Cloudflare Pages
  console.log('Creating _redirects file...');
  fs.writeFileSync(path.join(targetDir, '_redirects'), '/* /index.html 200');
  
  console.log('Fallback deployment completed.');
  process.exit(0);
}

// Copy files from source to target
console.log(`Copying files from ${sourceDir} to ${targetDir}`);
try {
  fs.copySync(sourceDir, targetDir);
  console.log('Files copied successfully!');
} catch (err) {
  console.error('Error copying files:', err);
  process.exit(1);
}

// Create a _redirects file for Cloudflare Pages
console.log('Creating _redirects file...');
fs.writeFileSync(path.join(targetDir, '_redirects'), '/* /index.html 200');

console.log('Deployment completed successfully!'); 