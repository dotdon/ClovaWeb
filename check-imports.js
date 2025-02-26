const fs = require('fs');
const path = require('path');

// List of page files to check
const pageFiles = [
  'clovalink/src/app/security/page.tsx',
  'clovalink/src/app/pricing/page.tsx',
  'clovalink/src/app/features/page.tsx',
  'clovalink/src/app/docs/user-guide/page.tsx',
  'clovalink/src/app/docs/technical-guide/page.tsx',
  'clovalink/src/app/docs/page.tsx',
  'clovalink/src/app/docs/general/page.tsx',
  'clovalink/src/app/docs/api/page.tsx',
  'clovalink/src/app/about/page.tsx'
];

let allGood = true;

// Check each file for Link import
pageFiles.forEach(filePath => {
  try {
    // Read the file content
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if Link import exists
    if (!content.includes('import Link from')) {
      console.log(`❌ ${filePath} is missing Link import`);
      allGood = false;
    } else {
      console.log(`✅ ${filePath} has Link import`);
    }
  } catch (error) {
    console.error(`Error checking ${filePath}:`, error);
    allGood = false;
  }
});

if (allGood) {
  console.log('\n✅ All files have Link import!');
} else {
  console.log('\n❌ Some files are missing Link import!');
}

console.log('Check completed!'); 