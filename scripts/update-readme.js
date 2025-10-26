import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to extract metadata from timeline files
async function extractMetadata() {
  const timelinesDir = path.join(__dirname, '../src/data/timelines');
  const files = fs.readdirSync(timelinesDir)
    .filter(file => file.endsWith('.ts') && file !== 'new.ts');
  
  const timelines = [];
  
  for (const file of files) {
    try {
      // Import the timeline module directly
      const timelineModule = await import(`file://${path.join(timelinesDir, file)}`);
      const { metadata } = timelineModule.default;
      
      timelines.push({
        filename: file,
        ...metadata
      });
    } catch (error) {
      console.warn(`Error importing metadata from ${file}:`, error);
    }
  }
  
  return timelines;
}

// Function to generate markdown table
function generateTable(timelines) {
  let table = '| Title | Creator | Sources | Last updated |\n';
  table += '|----------|---------|---------|--------------|\n';
  
  for (const timeline of timelines) {
    const creator = timeline.timelineCreator || 'Unknown';
    const lastUpdated = new Date(timeline.lastUpdatedOn).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
    
    let sourcesText = '';
    if (timeline.sources.length === 0) {
      sourcesText = 'No sources';
    } else {
      sourcesText = timeline.sources.map(source => {
        if (source.url && source.url !== '') {
          return `[${source.label}](${source.url})`;
        } else {
          return source.label;
        }
      }).join(', ');
    }

    table += `| ${timeline.timelineTitle} | ${creator} | ${sourcesText} | ${lastUpdated} |\n`;
  }
  
  return table;
}

// Function to update README
async function updateReadme() {
  const readmePath = path.join(__dirname, '../README.md');
  let content = fs.readFileSync(readmePath, 'utf8');
  
  const timelines = await extractMetadata();
  const table = generateTable(timelines);
  
  // Find the insertion point
  const startMarker = '### Supported timelines';
  const endMarker = 'The timelines only include games';
  
  const startIndex = content.indexOf(startMarker);
  const endIndex = content.indexOf(endMarker);
  
  if (startIndex === -1 || endIndex === -1) {
    console.error('Could not find insertion markers in README.md');
    return;
  }
  
  // Insert the table
  const beforeTable = content.substring(0, startIndex + startMarker.length);
  const afterTable = content.substring(endIndex);
  
  const newContent = `${beforeTable}\n\n${table}\n\n${afterTable}`;
  
  fs.writeFileSync(readmePath, newContent);
  console.log('README.md updated successfully with timeline metadata table');
}

updateReadme().catch(console.error);