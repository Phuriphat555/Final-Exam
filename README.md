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
