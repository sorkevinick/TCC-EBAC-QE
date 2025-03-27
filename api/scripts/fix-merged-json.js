// fix-merged-json.js
const fs = require('fs');
const path = require('path');

function fixMergedJson() {
  const mergedPath = path.join(__dirname, '..', 'mochawesome-report', 'merged.json');
  
  const data = JSON.parse(fs.readFileSync(mergedPath, 'utf-8'));
  
  if (data.meta && data.meta.marge && data.meta.marge.options === null) {
    data.meta.marge.options = {};
  }

  // Regrava o arquivo corrigido
  fs.writeFileSync(mergedPath, JSON.stringify(data, null, 2));
  console.log('Corrigido marge.options = null em merged.json');
}

fixMergedJson();
