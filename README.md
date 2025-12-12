# E-Commerce Demo

SPA-приложение для интернет-магазина, построенное на React, Redux Toolkit, RTK Query и Material UI.

## 🚀 Технологии

-   **React** - библиотека для создания пользовательских интерфейсов
-   **Redux Toolkit** - управление состоянием приложения
-   **RTK Query** - получение и кэширование данных через API
-   **React Router** - маршрутизация в SPA
-   **Material UI** - UI-библиотека компонентов
-   **Webpack** - сборщик проекта
-   **DummyJSON API** - REST API для тестовых данных

## 📦 Установка зависимостей

```bash
npm install
```

## 🏃 Запуск проекта

### Режим разработки

```bash
npm run dev
```

Приложение будет доступно по адресу: `http://localhost:3000`

### Сборка для production

```bash
npm run build
```

Собранные файлы будут находиться в папке `dist/`

## 📝 Git конвенции

Проект использует простой формат коммитов с указанием типа в квадратных скобках.

### Формат коммитов

```
[type] комментарий
```

### Типы коммитов

-   **[feat]** - новая функциональность

    ```
    [feat] add ProductDetailPage component
    [feat] add addToCart action to cartSlice
    ```

-   **[fix]** - исправление багов

    ```
    [fix] resolve routing issue in App.jsx
    [fix] correct productsApi baseUrl
    ```

-   **[style]** - изменения форматирования, стилей (не влияют на код)

    ```
    [style] format code with prettier
    [style] improve header button styling
    ```

-   **[refactor]** - рефакторинг кода (без изменения функциональности)

    ```
    [refactor] extract ProductCard to separate component
    [refactor] reorganize store reducers structure
    ```

-   **[docs]** - изменения в документации

    ```
    [docs] update README with installation steps
    [docs] add API documentation
    ```

-   **[chore]** - обновление зависимостей, конфигурации

    ```
    [chore] update webpack configuration
    [chore] add eslint rules
    ```

-   **[test]** - добавление или изменение тестов
    ```
    [test] add unit tests for cartSlice
    ```

### Примеры хороших коммитов

```bash
[feat] add React Router configuration
[feat] implement ProductsPage with RTK Query
[fix] resolve undefined data rendering error
[style] improve navigation bar design
[refactor] extract ProductCard to separate component
[docs] add Git conventions to README
[chore] update webpack config for ES modules
```

### Примеры плохих коммитов (избегайте)

```bash
update
fix bug
changes
wip
test
```

### Правила

1. Используйте императив в сообщении коммита ("add" вместо "added" или "adds")
2. Первая строка должна быть не более 72 символов
3. Не ставьте точку в конце первой строки
4. Группируйте связанные изменения в один коммит
5. Тип коммита всегда в квадратных скобках: `[feat]`, `[fix]`, и т.д.

## 📁 Структура проекта

```
src/
├── components/      # Переиспользуемые компоненты
│   ├── Header.jsx
│   ├── CategoriesBar.jsx
│   └── ...
├── pages/           # Страницы приложения
│   ├── ProductsPage.jsx
│   ├── ProductPage.jsx
│   └── ...
├── store/           # Redux store и слайсы
│   ├── api/         # RTK Query API
│   └── store.js
└── main.jsx         # Точка входа
```

## 🔗 Ссылки

-   [React документация](https://react.dev)
-   [Redux Toolkit документация](https://redux-toolkit.js.org)
-   [RTK Query документация](https://redux-toolkit.js.org/rtk-query/overview)
-   [React Router документация](https://reactrouter.com)
-   [Material UI документация](https://mui.com)
-   [DummyJSON API](https://dummyjson.com/docs)
