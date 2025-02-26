// Simple script to copy the build output to the root directory
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Starting deployment helper...');

// Create the out directory if it doesn't exist
if (!fs.existsSync('out')) {
  console.log('Creating out directory...');
  fs.mkdirSync('out');
}

// Copy the contents of clovalink/out to out
console.log('Copying build output from clovalink/out to out...');
if (process.platform === 'win32') {
  // Windows
  execSync('xcopy .\\clovalink\\out .\\out /E /I /H /Y');
} else {
  // Linux/Mac
  execSync('cp -R ./clovalink/out/* ./out/');
}

console.log('Deployment helper completed successfully!'); 