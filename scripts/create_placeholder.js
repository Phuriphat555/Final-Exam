const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Ensure directory exists
const dir = path.join(__dirname, '../assets/weapons');
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

// Create a 200x200 gray image
sharp({
    create: {
        width: 200,
        height: 200,
        channels: 4,
        background: { r: 128, g: 128, b: 128, alpha: 1 }
    }
})
.png()
.toFile(path.join(dir, 'placeholder-weapon.png'))
.then(() => console.log('Placeholder weapon image created successfully!'))
.catch(err => console.error('Error creating image:', err)); 