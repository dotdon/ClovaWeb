const fs = require('fs');
const path = require('path');

// List of page files to update
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

// Simple navbar component to replace the imported one
const navbarComponent = `
// Inline Navbar component
const Navbar = () => {
  return (
    <header className="bg-white dark:bg-slate-900 shadow-sm border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl text-blue-600">
              ClovaLink
            </Link>
          </div>
          <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link href="/features" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-slate-700 hover:text-slate-900 hover:border-slate-300 dark:text-slate-300 dark:hover:text-white dark:hover:border-slate-700">
              Features
            </Link>
            <Link href="/pricing" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-slate-700 hover:text-slate-900 hover:border-slate-300 dark:text-slate-300 dark:hover:text-white dark:hover:border-slate-700">
              Pricing
            </Link>
            <Link href="/docs" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-slate-700 hover:text-slate-900 hover:border-slate-300 dark:text-slate-300 dark:hover:text-white dark:hover:border-slate-700">
              Documentation
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
`;

// Process each file
pageFiles.forEach(filePath => {
  try {
    // Read the file content
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove the Navbar import
    content = content.replace(/import\s+Navbar\s+from\s+['"]@\/components\/Navbar['"];?\n?/g, '');
    
    // Add Link import if it doesn't exist
    if (!content.includes('import Link from \'next/link\'')) {
      content = content.replace(/import\s+.*?\n/, match => match + 'import Link from \'next/link\';\n');
    }
    
    // Add the inline Navbar component after the imports
    const importSection = content.match(/import\s+.*?;(\s*import\s+.*?;)*/s)[0];
    content = content.replace(importSection, importSection + '\n' + navbarComponent);
    
    // Write the updated content back to the file
    fs.writeFileSync(filePath, content);
    
    console.log(`Updated ${filePath}`);
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error);
  }
});

console.log('All page files updated successfully!'); 