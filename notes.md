# React в браузере

- песочница https://codesandbox.io/
- в строке поиска набрать <a> react.new </a>
- можно даже ванильный js проект создать <a> js.new </a>

# Зачем нужны фреймворки?

- Для создания общей структуры для проекта
- Для облегчения синхронизации данных с UI (вообще не нужно трогать DOM, селектить, обновлять элементы вручную, они
  обновляются при изменении state)
- Для разделения view (визуала) и state (данных), в чистом JS, данные часто хранятся прямо в DOM

# React и Angular

- Реакт декларативный, Ангуляр императивный ?

# Snippets

```javascript
// rsc snippet

import React from 'react';

const Index = () => {
    return (
        <div>

        </div>
    );
};

export default Index;
```

# Create React App

В реальных проектах используется Vite, тк create-react-app медленный и устаревший

Инструкция для 5 версии:

```shell
cd <dir-where-app-folder-would-be>
npx create-react-app@5 <app-name>
```