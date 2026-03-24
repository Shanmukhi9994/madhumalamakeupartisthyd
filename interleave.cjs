const fs = require('fs');

const path = 'c:/A__WEBSITES/BEAUTY/src/components/Portfolio.jsx';
let content = fs.readFileSync(path, 'utf8');

// Find the array definition
const startIdx = content.indexOf('const initialPortfolioData = [');
if (startIdx === -1) {
  console.log('Array not found');
  process.exit(1);
}

const endString = '// Shuffle the array';
const endIdx = content.indexOf(endString, startIdx);
if (endIdx === -1) {
    console.log('End not found');
    process.exit(1);
}

const arrayText = content.slice(startIdx, endIdx + 2); // includes ];

// Extract objects using regex
const objRegex = /\{[\s\S]*?\}/g;
const objectsStr = arrayText.match(objRegex);

// We'll parse the category manually
const items = objectsStr.map(str => {
    let catMatch = str.match(/category:\s*"([^"]+)"/);
    let category = catMatch ? catMatch[1] : "Unknown";
    return { str, category };
});

const groups = {
    "Models": [],
    "Bridal": [],
    "Makeovers": [],
    "Hair Styling": []
};

items.forEach(item => {
    if (groups[item.category]) {
        groups[item.category].push(item.str);
    } else {
        groups["Models"].push(item.str); // fallback
    }
});

let interleaved = [];
let keys = Object.keys(groups);
let maxLen = Math.max(...keys.map(k => groups[k].length));

for (let i = 0; i < maxLen; i++) {
    keys.forEach(k => {
        if (i < groups[k].length) {
            interleaved.push(`  ${groups[k][i]}`);
        }
    });
}

const finalArrayText = `const portfolioData = [\n` + interleaved.join(',\n') + `\n];`;

const sortLineIdx = content.indexOf('const portfolioData = [...initialPortfolioData].sort(() => Math.random() - 0.5);');
const sortLineEnd = content.indexOf('\n', sortLineIdx);

let newContent = content.slice(0, startIdx) + finalArrayText + content.slice(sortLineEnd);

fs.writeFileSync(path, newContent);
console.log('Successfully interleaved array');
