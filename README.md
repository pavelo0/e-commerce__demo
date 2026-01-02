# ShopHub

E-commerce demo application built with React, Redux Toolkit, RTK Query, and
Material UI.

## 🚀 Technologies

- **React** - Library for building user interfaces
- **Redux Toolkit** - State management
- **RTK Query** - Data fetching and caching via API
- **React Router** - Routing in SPA
- **Material UI** - UI component library
- **Webpack** - Project bundler
- **DummyJSON API** - REST API for test data

## 📦 Installation

```bash
npm install
```

## 🏃 Running the Project

### Development Mode

```bash
npm run dev
```

The application will be available at: `http://localhost:3000`

### Production Build

```bash
npm run build
```

Built files will be in the `dist/` folder

## 📝 Git Conventions

The project uses a simple commit format with type specified in square brackets.

### Commit Format

```
[type] message
```

### Commit Types

- **[feat]** - new feature

  ```
  [feat] add ProductDetailPage component
  [feat] add addToCart action to cartSlice
  ```

- **[fix]** - bug fixes

  ```
  [fix] resolve routing issue in App.jsx
  [fix] correct productsApi baseUrl
  ```

- **[style]** - formatting, styling changes (no code changes)

  ```
  [style] format code with prettier
  [style] improve header button styling
  ```

- **[refactor]** - code refactoring (no functionality changes)

  ```
  [refactor] extract ProductCard to separate component
  [refactor] reorganize store reducers structure
  ```

- **[docs]** - documentation changes

  ```
  [docs] update README with installation steps
  [docs] add API documentation
  ```

- **[chore]** - dependency updates, configuration

  ```
  [chore] update webpack configuration
  [chore] add eslint rules
  ```

- **[test]** - adding or updating tests
  ```
  [test] add unit tests for cartSlice
  ```

### Good Commit Examples

```bash
[feat] add React Router configuration
[feat] implement ProductsPage with RTK Query
[fix] resolve undefined data rendering error
[style] improve navigation bar design
[refactor] extract ProductCard to separate component
[docs] add Git conventions to README
[chore] update webpack config for ES modules
```

### Bad Commit Examples (avoid)

```bash
update
fix bug
changes
wip
test
```

### Rules

1. Use imperative mood in commit message ("add" instead of "added" or "adds")
2. First line should be no more than 72 characters
3. Don't put a period at the end of the first line
4. Group related changes in one commit
5. Commit type is always in square brackets: `[feat]`, `[fix]`, etc.

## 📁 Project Structure

```
src/
├── components/      # Reusable components
│   ├── Header.jsx
│   ├── CategoriesBar.jsx
│   └── ...
├── pages/           # Application pages
│   ├── ProductsPage.jsx
│   ├── ProductPage.jsx
│   └── ...
├── store/           # Redux store and slices
│   ├── api/         # RTK Query API
│   └── store.js
└── main.jsx         # Entry point
```

## 🔗 Links

- [React Documentation](https://react.dev)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org)
- [RTK Query Documentation](https://redux-toolkit.js.org/rtk-query/overview)
- [React Router Documentation](https://reactrouter.com)
- [Material UI Documentation](https://mui.com)
- [DummyJSON API](https://dummyjson.com/docs)
