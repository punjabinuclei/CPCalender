# Frontend Readme

# Contest List App

Welcome to the Contest List App, a React Native application designed to showcase upcoming coding contests from various platforms. This app provides a clean and user-friendly interface to browse through contests, view details, and navigate to the respective contest pages.

## Features

- **Contest List:** View a curated list of upcoming coding contests from different hosting platforms.
- **Clickable Links:** Easily navigate to the contest page on the respective hosting platform by clicking on each contest.
- **Date Formatting:** The app uses date-fns library to format contest start and end dates for a clear and concise presentation.

## Screenshots

![screenshots/contest_list.png](screenshots/contest_list.png)

## Installation

1. Clone the repository:
    
    ```bash
    git clone <https://github.com/yourusername/contest-list-app.git>
    cd contest-list-app
    
    ```
    
2. Install dependencies:
    
    ```bash
    npm install
    
    ```
    
3. Run the app on an emulator or a connected device:
    
    ```bash
    npx react-native run-android   # for Android
    npx react-native run-ios       # for iOS
    
    ```
    

## Usage

- Launch the app on your mobile device or emulator.
- Explore the contest list and click on a contest to view more details.

## Customization

- Modify the `contests` array in `ContestList.tsx` to add or remove contests.
- Customize the app's appearance by adjusting styles in the `ContestList.tsx` file.

## Dependencies

- [React Native](https://reactnative.dev/)
- [date-fns](https://date-fns.org/)
- [twrnc](https://github.com/dvkndn/twrnc) (Tailwind-inspired styles for React Native)

## Contributing

Feel free to contribute to the development of this app by opening issues or submitting pull requests. Make sure to follow the [contributing guidelines](notion://www.notion.so/punjabinuclei/CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](notion://www.notion.so/punjabinuclei/LICENSE) file for details.

## Acknowledgments

- [React Native Community](https://github.com/react-native-community)
- [date-fns](https://date-fns.org/)
- [twrnc](https://github.com/dvkndn/twrnc)

Thank you for using and contributing to the Contest List App!
