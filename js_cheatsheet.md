# 🧠 JavaScript Cheatsheet – Arrays & Objects

## 🟨 Arrays – Core Methods

### 🔁 Looping/Traversal

| Method         | What it Does                              | Example                          |
|----------------|--------------------------------------------|----------------------------------|
| `for` / `for...of` | Standard loop                        | `for (let item of arr)`          |
| `.forEach()`   | Executes a function for each element       | `arr.forEach(el => ...)`         |
| `.map()`       | Returns a new array with transformed values| `arr.map(num => num * 2)`        |
| `.filter()`    | Returns a new array with matching condition| `arr.filter(x => x > 10)`        |
| `.reduce()`    | Reduces array to a single value/object     | `arr.reduce((acc, curr) => acc + curr, 0)` |

### 🔍 Searching & Checking

| Method         | What it Does                              | Example                          |
|----------------|--------------------------------------------|----------------------------------|
| `.includes()`  | Checks if a value exists                  | `arr.includes(3)`                |
| `.indexOf()`   | Gets index of value                       | `arr.indexOf("apple")`           |
| `.find()`      | Returns first matching item               | `arr.find(x => x.id === 2)`      |
| `.findIndex()` | Returns index of first match              | `arr.findIndex(x => x.name === "Ali")` |
| `.some()`      | Checks if any match condition             | `arr.some(x => x > 100)`         |
| `.every()`     | Checks if all match condition             | `arr.every(x => typeof x === "number")` |

### 🧱 Modifying

| Method         | What it Does                              | Example                          |
|----------------|--------------------------------------------|----------------------------------|
| `.push()`      | Adds to end                               | `arr.push("new")`                |
| `.pop()`       | Removes last                              | `arr.pop()`                      |
| `.shift()`     | Removes first                             | `arr.shift()`                    |
| `.unshift()`   | Adds to start                             | `arr.unshift("first")`           |
| `.splice()`    | Removes/replaces elements                 | `arr.splice(2, 1)`               |
| `.slice()`     | Copies portion                            | `arr.slice(0, 3)`                |
| `.concat()`    | Joins arrays                              | `arr1.concat(arr2)`              |
| `.flat()`      | Flattens nested arrays                    | `arr.flat()`                     |

## 🟥 Objects – Core Tools

### 🧭 Accessing Data

| What                  | Example                 |
|-----------------------|-------------------------|
| Access value by key   | `obj["key"]` or `obj.key` |
| Nested access         | `obj.person.name`       |

### 🔄 Looping

| Tool                  | What it Does                     |
|-----------------------|----------------------------------|
| `for...in`            | Loops over keys                  |
| `Object.keys(obj)`    | Returns array of keys            |
| `Object.values(obj)`  | Returns array of values          |
| `Object.entries(obj)` | Returns `[key, value]` pairs     |

### 🔍 Checking

| Tool                        | What it Does                     |
|-----------------------------|----------------------------------|
| `key in obj`                | Checks if key exists             |
| `obj.hasOwnProperty("key")` | Also checks for key existence    |
| `typeof obj === "object"`   | Check type (watch for arrays!)   |
| `Array.isArray(value)`      | Check if it’s an array           |

## 🧠 Combo Tricks

### 🔄 Group By

```js
arr.reduce((acc, item) => {
  const key = item.type;
  if (!acc[key]) acc[key] = [];
  acc[key].push(item);
  return acc;
}, {});
```

### 🔄 Count Occurrences

```js
arr.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});
```

### 🧠 Flatten Arrays

```js
arr.flat() // 1 level
arr.flat(Infinity) // deeply
```