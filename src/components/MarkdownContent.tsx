import React from 'react';

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  // This is a simple implementation. In a real app, you would use a markdown parser like react-markdown
  
  const lines = content.split('\n');
  
  return (
    <div className="markdown-content text-slate-300">
      {lines.map((line, index) => {
        // Headers
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-3xl font-bold text-white mt-8 mb-4">{line.substring(2)}</h1>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-bold text-white mt-6 mb-3">{line.substring(3)}</h2>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-bold text-white mt-5 mb-2">{line.substring(4)}</h3>;
        }
        if (line.startsWith('#### ')) {
          return <h4 key={index} className="text-lg font-bold text-white mt-4 mb-2">{line.substring(5)}</h4>;
        }
        
        // Lists
        if (line.match(/^\d+\. /)) {
          const content = line.replace(/^\d+\. /, '');
          return <div key={index} className="ml-6 my-1 flex"><span className="mr-2">•</span><span>{content}</span></div>;
        }
        if (line.startsWith('- ') || line.startsWith('* ')) {
          const content = line.replace(/^[\-\*] /, '');
          return <div key={index} className="ml-6 my-1 flex"><span className="mr-2">•</span><span>{content}</span></div>;
        }
        
        // Code blocks
        if (line.startsWith('```')) {
          const language = line.substring(3).trim();
          return (
            <div key={index} className="bg-slate-900 p-4 rounded-md my-4 font-mono text-sm">
              <div className="text-xs text-slate-500 mb-2">{language}</div>
              {line}
            </div>
          );
        }
        
        // Links - simple implementation
        if (line.includes('[') && line.includes('](')) {
          const parts = [];
          let currentIndex = 0;
          let linkStart = line.indexOf('[', currentIndex);
          
          while (linkStart !== -1) {
            // Add text before the link
            if (linkStart > currentIndex) {
              parts.push(<span key={`text-${index}-${currentIndex}`}>{line.substring(currentIndex, linkStart)}</span>);
            }
            
            const textEnd = line.indexOf(']', linkStart);
            const urlStart = line.indexOf('(', textEnd);
            const urlEnd = line.indexOf(')', urlStart);
            
            if (textEnd !== -1 && urlStart !== -1 && urlEnd !== -1) {
              const linkText = line.substring(linkStart + 1, textEnd);
              const linkUrl = line.substring(urlStart + 1, urlEnd);
              
              parts.push(
                <a 
                  key={`link-${index}-${linkStart}`} 
                  href={linkUrl} 
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  {linkText}
                </a>
              );
              
              currentIndex = urlEnd + 1;
              linkStart = line.indexOf('[', currentIndex);
            } else {
              break;
            }
          }
          
          // Add any remaining text
          if (currentIndex < line.length) {
            parts.push(<span key={`text-${index}-end`}>{line.substring(currentIndex)}</span>);
          }
          
          return <p key={index} className="my-2">{parts}</p>;
        }
        
        // Bold text
        if (line.includes('**')) {
          const parts = [];
          let currentIndex = 0;
          let boldStart = line.indexOf('**', currentIndex);
          
          while (boldStart !== -1) {
            // Add text before the bold
            if (boldStart > currentIndex) {
              parts.push(<span key={`text-${index}-${currentIndex}`}>{line.substring(currentIndex, boldStart)}</span>);
            }
            
            const boldEnd = line.indexOf('**', boldStart + 2);
            
            if (boldEnd !== -1) {
              const boldText = line.substring(boldStart + 2, boldEnd);
              
              parts.push(
                <strong key={`bold-${index}-${boldStart}`} className="font-bold text-white">
                  {boldText}
                </strong>
              );
              
              currentIndex = boldEnd + 2;
              boldStart = line.indexOf('**', currentIndex);
            } else {
              break;
            }
          }
          
          // Add any remaining text
          if (currentIndex < line.length) {
            parts.push(<span key={`text-${index}-end`}>{line.substring(currentIndex)}</span>);
          }
          
          return <p key={index} className="my-2">{parts}</p>;
        }
        
        // Regular paragraph
        if (line.trim() === '') {
          return <div key={index} className="my-2"></div>;
        }
        
        return <p key={index} className="my-2">{line}</p>;
      })}
    </div>
  );
} 