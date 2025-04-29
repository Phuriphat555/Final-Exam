from PIL import Image
import os

# Create a 200x200 gray image
img = Image.new('RGB', (200, 200), color='gray')

# Ensure the assets/weapons directory exists
os.makedirs('assets/weapons', exist_ok=True)

# Save the image
img.save('assets/weapons/placeholder-weapon.png') 