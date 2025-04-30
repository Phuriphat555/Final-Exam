ชื่อ - นามสกุล (Full Name):Phuriphat Chantiuaong
รหัสนักศึกษา (Student ID):6631503034
ชื่อแอป (App Name): Monster HunterInfo
Framework ที่ใช้ (Framework Used): React Native
ลิงก์ GitHub Repository: [https://github.com/Phuriphat555/Final-Exam.git]
ลิงก์ไฟล์ติดตั้ง (APK/IPA): [https://expo.dev/accounts/phuriphat_555/projects/monster-hunter-info/builds/3df8a9d0-f69e-494d-889c-0cd94618eb13]

1. การออกแบบแอป | App Concept and Design (2 คะแนน / 2 pts)
1.1 ผู้ใช้งานเป้าหมาย | User Personas
ตัวอย่าง (Example):
Persona 1:  
- ชื่อ: ทิวไผ่  
- อายุ: 20 ปี  
- อาชีพ: นักศึกษาปี 2  
- ความต้องการ: ต้องการเวลาเล่นเกมไม่ต้องสลับหน้าจอเพื่อไปเปิดข้อมูลเกม

Persona 2:  
- ชื่อ: ดิว
- อายุ: 20 ปี  
- อาชีพ: ช่างไฟ 
- ความต้องการ: ต้องการเวลาเล่นเกมไม่ต้องสลับหน้าจอเพื่อไปเปิดข้อมูลเกม

1.2 เป้าหมายของแอป | App Goals
ตัวอย่าง (Example):
- ช่วยไม่ต้องสลับหน้าจอไปมาเพื่อไม่ให้เกิดการคัดของการเล่นเกม
-อยู่ที่ไหนก็ใช้งานได้





1.3 โครงร่างหน้าจอ / Mockup
ใส่รูปภาพ หรือคำอธิบายแต่ละหน้าหลัก 3 หน้า | Attach image or describe 3 main pages

Home หน้าหลักสามารถไปหน้าข้อมูลเกมอื่นๆได้ ![Image](https://github.com/user-attachments/assets/b422228d-870a-4731-99b9-97974b7f23df)

Monster guide แสดงรายละเอียดมอนเตอร์แบบคราวๆ ![Image](https://github.com/user-attachments/assets/d8225f5f-617f-4378-af22-b50a6805d385)

monster detail บอกรายละเอียดเชิงลึกของมอนเตอร์ เช่น Hunting Tips ![Image](https://github.com/user-attachments/assets/9ad6c0b1-aa67-4e6e-be42-c58967a809a0)                                                   



1.4 การไหลของผู้ใช้งาน | User Flow
ตัวอย่าง (Example):
เปิดแอป > เข้าหน้าhome > เลือก "มอนเตอร์" > แสดงรายละเอียดมอนเตอร์ > กดเข้าไปดูรายละเอียดมอนเตอร์ที่สนใจ


2. การพัฒนาแอป | App Implementation (4 คะแนน / 4 pts)
2.1 รายละเอียดการพัฒนา | Development Details
เครื่องมือที่ใช้ / Tools used:
- React native




2.2 ฟังก์ชันที่พัฒนา | Features Implemented
Checklist:
หน้าแสดงข้อมูล Monster พร้อมรูปภาพ, HP, Weakness
หน้าแสดงข้อมูล Weapons พร้อมรายละเอียด Attack, Element
หน้าแสดงข้อมูล Armor Sets พร้อมรายละเอียด Defense, Skills
ระบบ Navigation แบบ Bottom Tabs สำหรับสลับหน้า Monster / Weapon / Armor


2.3 ภาพหน้าจอแอป | App Screenshots
แนบภาพหรือ URL (Attach images or image links):

![Image](https://github.com/user-attachments/assets/b422228d-870a-4731-99b9-97974b7f23df) (home)

![Image](https://github.com/user-attachments/assets/d8225f5f-617f-4378-af22-b50a6805d385) (monster)

![Image](https://github.com/user-attachments/assets/9ad6c0b1-aa67-4e6e-be42-c58967a809a0) (monster detail)

![Image](https://github.com/user-attachments/assets/0740ef08-6144-458a-815e-26a02a5ed13e) (weapons)

![Image](https://github.com/user-attachments/assets/9f53a605-0646-4c17-b960-904b1314d229) (weapons detail)

![Image](https://github.com/user-attachments/assets/08cc9f58-228b-46ba-a3c0-9b1322ed5926) (armor)

![Image](https://github.com/user-attachments/assets/1c16e5ce-f0cb-4827-b67e-6aa27105172a)  (armor)


3. การ Build และติดตั้งแอป | Deployment (2 คะแนน / 2 pts)
3.1 ประเภท Build | Build Type
[x] Debug
[ ] Release
3.2 แพลตฟอร์มที่ทดสอบ | Platform Tested
[x] Android
[ ] iOS
3.3 ไฟล์ README และวิธีติดตั้ง | README & Install Guide
แนบไฟล์หรือคำอธิบายการติดตั้งแอป | Insert steps
ขั้นตอนการติดตั้ง (Install Steps):
ดาวน์โหลดไฟล์ .apk


เปิดในอุปกรณ์ Android


ติดตั้งผ่าน File Manager หรือ APK Installer


กด "Allow unknown sources" หากมีการแจ้งเตือน




4. การสะท้อนผลลัพธ์ | Reflection (2 คะแนน / 2 pts)
ตัวอย่างหัวข้อ | Suggested points:
พบปัญหาเรื่องการโหลดรูปจาก URL ในบางเครื่องที่ไม่รองรับ HTTPS หรือโดนบล็อก
 ➔ แก้ไขโดยดาวน์โหลดรูปมาเก็บใน Local Project (assets/images/) เพื่อให้โหลดได้เร็วขึ้น


เรียนรู้การทำ Data Binding กับข้อมูลใน Local JSON และการ Map ข้อมูลมาแสดงผลอย่างมีประสิทธิภาพ


ได้พัฒนาทักษะการออกแบบโครงสร้างแอปให้ยืดหยุ่น รองรับการเพิ่มข้อมูล Monster/Weapons/Armor ได้ในอนาคต


หากมีเวลาเพิ่มเติม จะพัฒนาฟีเจอร์ Favorite และระบบ Search Monster ได้แบบ Realtime



5. การใช้ AI ช่วยพัฒนา | AI Assisted Development (Bonus / ใช้ประกอบการพิจารณา)
5.1 ใช้ AI ช่วยคิดไอเดีย | Idea Generation
Prompt ที่ใช้:  
"Suggest features for a Monster Hunter mobile companion app."
ผลลัพธ์:
 ได้แนวคิดการสร้างหน้าแสดงข้อมูล Monster / Weapons / Armors อย่างละเอียด


5.2 ใช้ AI ช่วยออกแบบ UI | UI Layout Prompt
Prompt ที่ใช้:  
"Create a simple React Native layout for displaying a list of monsters with images."
ผลลัพธ์:
 ได้ตัวอย่างโค้ดการใช้ FlatList + Image เพื่อแสดงรายชื่อมอนสเตอร์พร้อมไอคอน


5.3 ใช้ AI ช่วยเขียนโค้ด | Code Writing Prompt
Prompt ที่ใช้:  
"React Native code for Bottom Tab Navigation with three pages."
ผลลัพธ์:
 นำไปใช้สร้างระบบ Navigation ระหว่างหน้า Monster, Weapon, Armor





5.4 ใช้ AI ช่วย debug | Debug Prompt
Prompt ที่ใช้:  
"Image not showing in React Native FlatList."
ผลลัพธ์:
 ได้วิธีตรวจสอบ path รูป, ตรวจ Network Security Policy และแนะนำให้ใช้ local images หากมีปัญหา



5.5 ใช้ AI ช่วย Deploy | Deployment Prompt
Prompt ที่ใช้:  
"How to build React Native Expo app as APK for Android."
ผลลัพธ์:
 ได้คำแนะนำใช้คำสั่ง
eas build -p android --profile preview
เพื่อ build ไฟล์ .apk และติดตั้งบนมือถือได้ง่าย











# Monster Hunter Info

A comprehensive Monster Hunter World companion app built with React Native and Expo. This app provides detailed information about monsters, weapons, and armor sets from Monster Hunter World.

## Features

- Browse and search monsters
- View detailed monster information including:
  - Weaknesses
  - Habitats
  - Rewards
- Explore weapons and armor sets
- Dark mode UI optimized for gaming sessions
- Offline data caching (coming soon)

## Tech Stack

- React Native with Expo
- TypeScript
- Expo Router for navigation
- Axios for API calls
- React Native Paper for UI components

## Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Android Studio (for Android development)
- Xcode (for iOS development, Mac only)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/monster-hunter-info.git
cd monster-hunter-info
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npx expo start
```

## Building APK

### Development Build
```bash
eas build --profile development --platform android
```

### Preview Build (APK)
```bash
eas build --profile preview --platform android
```

### Production Build (AAB)
```bash
eas build --profile production --platform android
```

## Project Structure

```
monster-hunter-info/
├── app/                    # Main application code
│   ├── (tabs)/            # Tab navigation screens
│   ├── monsters/          # Monster-related screens
│   └── _layout.tsx        # Root layout configuration
├── assets/                # Static assets
├── components/            # Reusable components
├── constants/             # Constants and configuration
├── hooks/                 # Custom React hooks
└── theme/                 # Theme configuration
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Monster Hunter World API
- Expo team for the amazing framework
- React Native community


## Contact

Your Name - [@yourusername](https://twitter.com/yourusername)
Project Link: [https://github.com/yourusername/monster-hunter-info](https://github.com/yourusername/monster-hunter-info)

************************************************************************************************************************************************************************************************************************************************

ขั้นตอนการติดตั้ง (Install Steps):
ดาวน์โหลดไฟล์ [.apk](https://expo.dev/accounts/phuriphat_555/projects/monster-hunter-info/builds/3df8a9d0-f69e-494d-889c-0cd94618eb13)

เปิดในอุปกรณ์ Android

ติดตั้งผ่าน File Manager หรือ APK Installer

กด "Allow unknown sources" หากมีการแจ้งเตือน

