<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
=======
# Sorting-Visualizer

A Sorting-Visualizer for numbers, words, and letters.  
Explore how different sorting algorithms work step-by-step with interactive animations and controls.

- Visualizes multiple sorting algorithms simultaneously
- Supports sorting of numbers, letters, words
- Adjustable sorting speed with slider control
- Highlights current sorting steps with easy-to-follow animations
- Shows fastest algorithm based on step count for given input
- User-friendly input area for quick testing



Supported Algorithms

- Bubble Sort
- Selection Sort
- Insertion Sort
- Quick Sort
- Heap Sort
- Merge Sort
  
Usage
Enter a list of numbers, words, or letters into the input box.

Choose input type or use Auto Detect.

Click Start Sort to visualize sorting algorithms.

Adjust the speed slider to control animation speed.

Watch the algorithms run side by side and see which one finishes fastest!

How It Works
The visualizer breaks down each algorithm into discrete steps.

Each step updates the array display with highlighted elements being compared or swapped.

The fastest algorithm is calculated dynamically based on the total number of steps.

Tech Stack
React + TypeScript

Tailwind CSS for styling

Custom hooks and components for algorithm logic and UI

Contributing
Feel free to open issues or submit pull requests!
Suggestions for new algorithms or improvements are welcome.
>>>>>>> 6ac5c7ed8b6197a3b4eb0b67e59cad3d3854409b
