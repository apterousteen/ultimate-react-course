# Описание проектов

16.09.23: pizza-menu - статичный сайт, базовые знания о компонентах, rendering list, props, jsx, styles, conditional
rendering

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
- Ванильный js императивный
- В реакте one-way data flow, в ангуляре two-way

# Snippets

```javascript
// rsf snippet

import React from 'react';

function Challenge1(props) {
    return (
        <div></div>
    );
}

export default Challenge1;
```

# Create React App

В реальных проектах используется Vite, тк create-react-app медленный и устаревший

Инструкция для 5 версии:

```shell
cd <dir-where-app-folder-would-be>
npx create-react-app@5 <app-name>
```

# Создание index.js

1. Импортировать реакт и реакт дом
2. Создать главный компонент
3. Создать корень
4. Отрендерить

StrictMode позволяет проверять компоненты на ошибки или устаревание (используется во время разработки)
В этом режиме код запускается дважды

```javascript
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
    return <h1>Smth</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
```

# Components - Компоненты

У каждого компонента есть свои _date, logic and view_

- суть компонентов в переиспользовании их
- имя компонента должно начинаться с большой буквы
- компонент должен возвращать разметку
- все компоненты должны быть объявлены независимо друг от друга (без вложения)

## JSX

- значит JavaScript XML, расширение для js, которое совмещает js, html и css
- определяет как выглядит и работает компонент
- Babel переводит JSX в React.createComponent()

### Особенности

![](notes_imgs/img.png)

## Styles - Стили

Виды:

- внешние стили
- инлайн стили

### Внешние

Необходимо импортировать их в index.JS файле

- в jsx не class, а className
- стили не относятся к конкретному компоненту, они глобальные как в обычном css

```javascript
import "./index.css";

<header className="header">
    <h1>Fast React Pizza</h1>
</header>
```

### Инлайн

- инлайн стили представляют собой js-объект
- св-ва пишутся в camelCase

```javascript
<div
    style={{
        display: "flex",
        flexDirection: "row",
        gap: "1.2rem",
    }}
></div>
```

## Props - Пропсы

— это объект с входными данными для React-компонентов

- в реакте one-way data flow - данные переходят только сверху вниз (от родителей к детям)
- пропсы read-only (тк являются объектом. Если бы их можно было изменять, то они бы изменялись в родительском компоненте
  тоже)
- могут быть изменены только в родительском компоненте
- если кажется, что хочется изменить props, то необходимо менять state
- при получении новых пропсов, компонент перерендеривается (обычно при перерисовке родительского компонента)

### Передача пропсов

- для передачи всего, кроме строк, используются {}

```javascript
function Menu() {
    return (
        <Pizza
            name="Focaccia"
            photoName="pizzas/focaccia.jpg"
            ingredients="Bread with italian olive oil and rosemary"
            price={6}
        />
    );
}
```

### Получение пропсов

#### Without Destructuring

```javascript
function Pizza(props) {
    return (
        <div className="pizza">
            <img src={props.pizzaObj.photoName} alt="spinaci pizza"/>
            <div>
                <h3>{props.pizzaObj.name}</h3>
                <p>{props.pizzaObj.ingredients}</p>
                <span>{props.pizzaObj.price}€</span>
            </div>
        </div>
    );
}
```

#### With Destructuring

```javascript
function Pizza({pizzaObj}) {
    return (
        <li className="pizza">
            <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.price} €</span>
            </div>
        </li>
    );
}
```

С несколькими пропсами

```javascript
function FooterMessage(props) {
    const {openHour, closeHour} = props;
    return;
}
```

```javascript
function FooterMessage({openHour, closeHour}) {
    return;
}
```

# Rendering lists and arrays - Рендеринг списков и массивов

Необходимо создать новый массив и в коллбеке вызывать компонент на каждой итерации

При работе со списком каждый элемент должен иметь уникальный ключ - key

```javascript
function Menu() {
    return (
        <ul className="pizzas">
            {pizzaData.map((pizza) => (
                <Pizza pizzaObj={pizza} key={pizza.name}/>
            ))}
        </ul>
    );
}
```

```javascript
function Pizza(props) {
    return (
        <li className="pizza">
            <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}/>
            <div>
                <h3>{props.pizzaObj.name}</h3>
                <p>{props.pizzaObj.ingredients}</p>
                <span>{props.pizzaObj.price} €</span>
            </div>
        </li>
    );
}
```

# Conditional Rendering - Условный Рендеринг

## With &&

Если 1 значение истина, то возвращается второе

Пример ниже отрендерит параграф, если время в рамках графика

```javascript
function Footer() {
    const curHour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = curHour > openHour && curHour < closeHour;

    return (
        <footer className="footer">
            {isOpen && <p>We're currently open!</p>}
        </footer>
    );
}
```

Реакт не рендерит булевы значения, НО рендерит числа, поэтому при использовании && всегда нужно стараться получить
булево значение

Пример ниже выведет на экран 0

```javascript
function Menu() {
    const numPizza = [].length;

    return (
        <main className="menu">
            <h2>Our menu</h2>
            {numPizza && (
                <ul className="pizzas">
                    {pizzaData.map((pizza) => (
                        <Pizza pizzaObj={pizza} key={pizza.name}/>
                    ))}
                </ul>
            )}
        </main>
    );
}
```

![](notes_imgs/img_1.png)

Примеры перевода в boolean

```javascript
{
    !!numPizza && (
        <ul className="pizzas">
            {pizzaData.map((pizza) => (
                <Pizza pizzaObj={pizza} key={pizza.name}/>
            ))}
        </ul>
    )
}

{
    numPizza > 0 && (
        <ul className="pizzas">
            {pizzaData.map((pizza) => (
                <Pizza pizzaObj={pizza} key={pizza.name}/>
            ))}
        </ul>
    )
}
```

## With ternary operator

JSX не поддерживает if-else

В части else (после :) можно написать null, если никаких действий не требуется

```javascript
{
    numPizza > 0 ? (
        <ul className="pizzas">
            {pizzaData.map((pizza) => (
                <Pizza pizzaObj={pizza} key={pizza.name}/>
            ))}
        </ul>
    ) : null;
}
```

## With multiple returns

Полезен, когда надо рендерить ВЕСЬ компонент, а не его части

Например, тут надо в тело if скопировать еще footer и div

```javascript
if (!isOpen)
    return (
        <p>
            We're happy to welcome you between{' '}
            <span className="underlined">{openHour}:00</span>
            and{' '}
            <span className="underlined">{closeHour}:00</span>!
        </p>
    );

return (
    <footer className="footer">
        <div className="order">
            <p>
                We're open until{' '}
                <span className="underlined">
                    {(closeHour + '').padStart(2, '0')}:00
                </span>
                . Come visit us or order online.
            </p>
            <button className="btn">Order</button>
        </div>
    </footer>
);
```

# React Fragment

Используется для объединения элементов без изменения DOM

Необходимо просто обернуть элементы в пустой тег

```javascript
<>
    <p>
        Authentic Italian cuisine. 6 creative dishes to choose from.
        All from our stone oven, all organic, all delicious.
    </p>
    <ul className="pizzas">
        {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name}/>
        ))}
    </ul>
</>
```

Если необходимо отрендерить список, то для вставки ключа надо:

```javascript
<React.Fragment key={someKey}>
    <p></p>
    <ul className="pizzas">
        {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name}/>
        ))}
    </ul>
</React.Fragment>
```

# Event Listening - Слушание Событий

Похоже на инлайн обработчики в HTML

Необходимо именно написать функцию, а не вызвать, иначе она вызовется сразу при инициализации компонента

```javascript
<button className="previous" onClick={() => alert('prev')}>
    Previous
</button>

// NOT LIKE THIS
<button className="previous" onClick={alert('prev')}>
    Previous
</button>
```

```javascript
const handlePrevious = () => {
    step--;
};

<button className="previous" onClick={handlePrevious}>
    Previous
</button>
```

# State - Состояние

— это данные, которые хранятся на протяжении жизненного цикла приложения

- можно сказать, что это "память компонента"
- "State variable" / "Piece of state" - отдельная переменная состояния в отдельно взятом компоненте
- при изменении состояния, компонент перерендеривается
- стоит относиться к state как к иммутабельной переменной

❗ Все хуки можно вызывать только на верхнем уровне внутри компонента

## Когда использовать state

- для данных, которые должны сохраняться после перерисовки компонента
- для динамических данных
- для изменения вида компонента
- НЕ надо использовать state для данных, которые не влияют на внешний вид компонента. Это негативно отразится на
  производительности приложения (каждый раз будет перерендериваться)

## Разница state и props

![](notes_imgs/img_2.png)

## useState()

— это функция, который возвращает массив из 2 значений: текущее состояние и функция, меняющее это состояние

```javascript
const [step, setStep] = useState(1);
```

- Нельзя обновлять состояние вручную, тк это не поменяет его (если примитив), или bad practice

```javascript
const [test, setTest] = useState({name: 'Jonas'});

function x() {
    test.name = 'Nick'; // works, but bad practice

    setTest({name: 'Nick'}); // correct way
}
```

___

setState не обновляет переменную дважды в одном коде.

Для этого необходимо использовать updater function как коллбек
внутри setState

```javascript
// Won't work
const handlePrevious = () => {
    if (step > 1) {
        setStep(step - 1);
        setStep(step - 1);
    }
};

// Will work
const handlePrevious = () => {
    if (step > 1) {
        setStep((s) => s - 1);
        setStep((s) => s - 1);
    }
};
```

# Forms and Events - Формы и События

## Как быстро создать много option для select

Array.from({length: 20}) - создает массив из 20 пустых эл

(_, i) - mapFn заполняет этот массив элементами option, в которых ключ, значение и текст от 1 до 20

Итого у нас 20 элементов option от 1 до 20

```javascript
function Form() {
    return (
        <form className="add-form">
            <h3>What do you need for your trip?</h3>
            <select>
                {Array.from({length: 20}, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                        {i + 1}
                    </option>
                ))}
            </select>
        </form>
    );
}
```

## onSubmit, обработка результатов формы

Лучше цеплять обработчик именно на submit, а не на click по кнопке, тк, это включает в себя еще и нажатие enter

Можно обрабатывать данные как в ванильном js

❗для работы FormData у каждого поля должен быть атрибут name

```javascript
function Form() {
    const handleSubmit = (e) => {
        e.preventDefault();

        const dataArr = new FormData(e.target).entries();
        const dataObj = Object.fromEntries(dataArr);

        let {quantity, description} = dataObj;
    };

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            // some code
        </form>
    );
}
```

## Controlled Components

В HTML элементы формы, такие как `<input>`, `<textarea>` и `<select>` сами управляют своим состоянием и
обновляют его когда пользователь вводит данные.

1. Создать state для каждого input

```javascript
function Form() {
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({
            id: 6,
            description,
            quantity,
            packed: false,
        });
    };
}
```

2. Добавить в каждый input value и обработчик на onChange, чтобы state обновлялся каждый раз при изменении формы

❗Если не добавить обработчик, то с формой будет невозможно взаимодействовать

```js
  return (
    <form className="add-form" onSubmit={handleSubmit}>
        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
            {Array.from({length: 20}, (_, i) => (
                <option key={i + 1} value={i + 1}>
                    {i + 1}
                </option>
            ))}
        </select>
        <input
            placeholder="item name..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
        // some code
    </form>
);
```

## Полезный кусок кода - форма

```js
function Form() {
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [placeholder, setPlaceholder] = useState('item name...');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!description) {
            setPlaceholder(`can't be empty!`);
            return;
        }

        console.log({
            id: 6,
            description,
            quantity,
            packed: false,
        });

        setDescription('');
        setQuantity(1);
        setPlaceholder('item name...');
    };

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your trip?</h3>
            <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
                {Array.from({length: 20}, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                        {i + 1}
                    </option>
                ))}
            </select>
            <input
                placeholder={placeholder}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button>Add</button>
        </form>
    );
}
```
