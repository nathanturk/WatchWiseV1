#!/usr/bin/env node

/**
 * Refactor Helper Script
 * 
 * This script helps identify components that need refactoring
 * and provides guidance on the new architecture.
 */

const fs = require('fs');
const path = require('path');

// Configuration
const COMPONENT_SIZE_THRESHOLD = 200; // Lines of code
const IGNORED_FILES = ['index.ts', 'types.ts', 'utils.ts'];
const IGNORED_DIRS = ['node_modules', '.git', '.next', 'dist', 'build'];

/**
 * Count lines in a file
 */
function countLines(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return content.split('\n').length;
  } catch (error) {
    return 0;
  }
}

/**
 * Check if file should be analyzed
 */
function shouldAnalyzeFile(filePath) {
  const fileName = path.basename(filePath);
  return !IGNORED_FILES.includes(fileName) && 
         (fileName.endsWith('.tsx') || fileName.endsWith('.ts'));
}

/**
 * Recursively scan directory for components
 */
function scanDirectory(dirPath, results = []) {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !IGNORED_DIRS.includes(item)) {
      scanDirectory(fullPath, results);
    } else if (stat.isFile() && shouldAnalyzeFile(fullPath)) {
      const lineCount = countLines(fullPath);
      if (lineCount > COMPONENT_SIZE_THRESHOLD) {
        results.push({
          path: fullPath,
          lines: lineCount,
          relativePath: path.relative(process.cwd(), fullPath)
        });
      }
    }
  }
  
  return results;
}

/**
 * Generate refactoring suggestions
 */
function generateSuggestions(component) {
  const suggestions = [];
  
  if (component.lines > 500) {
    suggestions.push('🔴 CRITICAL: This component is extremely large and should be refactored immediately');
  } else if (component.lines > 300) {
    suggestions.push('🟠 HIGH: This component should be refactored soon');
  } else if (component.lines > 200) {
    suggestions.push('🟡 MEDIUM: Consider refactoring this component');
  }
  
  suggestions.push(`📊 Current size: ${component.lines} lines`);
  suggestions.push(`🎯 Target: Break into multiple components of 50-100 lines each`);
  suggestions.push(`📁 Suggested location: components/${path.dirname(component.relativePath).split('/').pop()}/`);
  
  return suggestions;
}

/**
 * Main function
 */
function main() {
  console.log('🔍 Scanning for components that need refactoring...\n');
  
  const components = scanDirectory('./components');
  const pages = scanDirectory('./app');
  
  const allItems = [...components, ...pages];
  
  if (allItems.length === 0) {
    console.log('✅ No components found that need refactoring!');
    return;
  }
  
  // Sort by line count (largest first)
  allItems.sort((a, b) => b.lines - a.lines);
  
  console.log(`📋 Found ${allItems.length} components that need attention:\n`);
  
  allItems.forEach((item, index) => {
    console.log(`${index + 1}. ${item.relativePath}`);
    console.log(`   📏 Size: ${item.lines} lines`);
    
    const suggestions = generateSuggestions(item);
    suggestions.forEach(suggestion => {
      console.log(`   ${suggestion}`);
    });
    
    console.log('');
  });
  
  console.log('🚀 Refactoring Guidelines:');
  console.log('   1. Extract data to lib/data/');
  console.log('   2. Create types in lib/types/');
  console.log('   3. Move logic to custom hooks');
  console.log('   4. Break into focused components');
  console.log('   5. Use shared UI components');
  console.log('');
  console.log('📚 See README.md for detailed architecture guidelines');
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { scanDirectory, generateSuggestions };
