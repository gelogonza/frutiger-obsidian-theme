const fs = require('node:fs');
const path = require('node:path');

const root = __dirname;
const source = fs.readFileSync(path.join(root, 'theme.template.css'), 'utf8');
const wallpaper = fs.readFileSync(path.join(root, 'aero-landscape.jpg'));
const image = `data:image/jpeg;base64,${wallpaper.toString('base64')}`;
if (!source.includes('__WALLPAPER__')) throw new Error('Missing wallpaper placeholder');
fs.writeFileSync(path.join(root, 'theme.css'), source.replaceAll('__WALLPAPER__', image));
console.log('Built theme.css with a bundled local wallpaper.');
