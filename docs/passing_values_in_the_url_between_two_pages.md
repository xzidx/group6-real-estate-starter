# Passing Values in the URL Between Two Pages

- How to **send values through the URL** from **Page 1 → Page 2**
- How to **read those values using JavaScript**
- How to **update the HTML** using the **DOM** (`document.querySelector`)
- How to use **URLSearchParams** (a built-in tool from the browser)

---

## 1. Folder Structure

```
sample_pages
└── sample_pass_params_in_url
    ├── page_1
    │   ├── index.css
    │   ├── index.html   ← Page 1 (Menu)
    │   └── index.js
    └── page_2
        ├── index.css
        ├── index.html   ← Page 2 (Display)
        └── index.js     ← Reads values from URL
```

Open:

👉 `sample_pages/sample_pass_params_in_url/page_1/index.html`

---

## 2. What Is a Query String / URL Parameters?

Example link from **Page 1**:

```html
<a
  href="/sample_pages/sample_pass_params_in_url/page_2/index.html?purpose=rent&featured=all&latest=all"
></a>
```

### Two parts of the URL:

1. **Path** → where the file is

   `/page_2/index.html`

2. **Query string** → data you send

   `?purpose=rent&featured=all&latest=all`

### In the query string:

- Starts with `?`
- Has many **key=value** pairs
- Each pair separated with `&`

### Khmer notes

- **Query string** = ខ្សែអក្សរទិន្នន័យនៅក្រោយសញ្ញា `?`
- **Parameter** = តម្លៃដែលយើងផ្ញើតាម URL
  Example: `purpose=rent` (key = purpose, value = rent)

---

## 3. Page 1 (Menu Page)

Click a link → Go to Page 2 with different parameters.

```html
<h1>Menu</h1>
<a href="/.../page_2/index.html?purpose=rent&featured=all&latest=all"
  >Go to Page 2 - Rent</a
>
<a href="/.../page_2/index.html?purpose=buy&featured=all&latest=all"
  >Go to Page 2 - Buy</a
>
...
```

Each link sends different URL values.

Khmer note:

- **Hard-coded URL** = URL សរសេរជាប់ក្នុង HTML (not dynamic)

---

## 4. Page 2 HTML Structure

```html
<h2 id="propertyListTitle">
  Property List: <span id="propertyListPurpose">N/A</span>
</h2>

<ul id="propertyListFilters"></ul>

<div id="propertyListGroup">No property data...</div>
```

### Why IDs are important?

JavaScript can easily find these elements using:

```jsx
document.querySelector("#propertyListPurpose");
```

Khmer notes:

- **ID** = ការកំណត់ឈ្មោះឯកតា for one specific HTML element
- **DOM** = រចនាសម្ព័ន្ធអក្សរដែល JS អាចប្តូរ ឬអានបាន (Document Object Model)

---

## 5. Page 2 JavaScript

Full code:

```jsx
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const purpose = urlParams.get("purpose");
const featured = urlParams.get("featured");
const latest = urlParams.get("latest");

// Property List Purpose
const propertyListPurpose = document.querySelector("#propertyListPurpose");
propertyListPurpose.textContent = purpose;

// Property List Filters
const propertyListFilters = document.querySelector("#propertyListFilters");
propertyListFilters.innerHTML += `<li>Featured? ${featured}</li>`;
propertyListFilters.innerHTML += `<li>Latest: ${latest}`;
```

Let's explain step by step (with Khmer notes).

---

### 5.1 Step 1 – Get the Query String

```jsx
const queryString = window.location.search;
```

- Reads ONLY the part after `?`
- Example result:
  `"?purpose=rent&featured=all&latest=all"`

Khmer:

- **window.location.search** = ទាញយក Query String ពេញ

---

### 5.2 Step 2 – Use URLSearchParams

```jsx
const urlParams = new URLSearchParams(queryString);
```

`URLSearchParams` is a **built-in JavaScript tool** that makes it easy to read parameters.

```jsx
const purpose = urlParams.get("purpose");
const featured = urlParams.get("featured");
const latest = urlParams.get("latest");
```

Now you have:

- `purpose` → "rent" / "buy" / "all"
- `featured` → "yes" / "all"
- `latest` → "yes" / "all"

Khmer explanations:

- **URLSearchParams** = **built-in JavaScript tool** សាមញ្ញសម្រាប់អាន URL parameters
- **.get("key")** = ទាញតម្លៃរបស់ parameter

---

### 5.3 Step 3 – Find HTML elements with querySelector

```jsx
const propertyListPurpose = document.querySelector("#propertyListPurpose");
```

- Uses **CSS selector** (the same syntax as CSS)
- `#propertyListPurpose` → find by **ID**

Khmer:

- **querySelector** = function សម្រាប់ស្វែងរក element មួយ
- `#` = ស្វែងរកតាម ID
- `.` = ស្វែងរកតាម class

---

### 5.4 Step 4 – Update the text

```jsx
propertyListPurpose.textContent = purpose;
```

- Replaces the text inside the `<span>`
- If `purpose = "rent"` → shows **rent**

Khmer:

- **textContent** = ប្តូរការបង្ហាញអក្សរនៅក្នុង element

---

### 5.5 Step 5 – Add list items for filters

```jsx
propertyListFilters.innerHTML += `<li>Featured? ${featured}</li>`;
propertyListFilters.innerHTML += `<li>Latest: ${latest}`;
```

- `.innerHTML` lets you add HTML directly
- `+=` means “add more items” instead of “replace everything”

Khmer:

- **innerHTML** = អាចបញ្ចូល HTML ខាងក្នុង element
- **+=** = បន្ថែម (not overwrite)

---

## 6. Full Data Flow (English + Khmer Summary)

### Step 1

User clicks link on Page 1

➡️ (URL contains values)

### Step 2

Page 2 loads

➡️ JavaScript reads query string (`window.location.search`)

### Step 3

JavaScript extracts values

➡️ using `new URLSearchParams(...).get()`

### Step 4

JavaScript shows the values in HTML

➡️ using `document.querySelector` + `.textContent` + `.innerHTML`

Khmer summary:

- ចុច Link
- ទទួលបាន Params តាម URL
- JS អាន Params
- JS បង្ហាញ Params នៅលើ HTML

---

## 7. Practice Ideas

1. **Add a new parameter**

   Example: `view=grid`

   Khmer hint: បន្ថែម parameter ថ្មី និងបង្ហាញវា

2. **Show default value if missing**

   Example: If no `latest`, show `"none"`

   Khmer: ប្រើ `if` ដើម្បីដាក់តម្លៃលំនាំដើម

3. **Change CSS style based on purpose**

   Example:

   ```jsx
   if (purpose === "rent") {
     document.body.style.backgroundColor = "lightblue";
   }
   ```

   Khmer: ប្ដូរពណ៌ background តាម URL value

---

## 8. Simple Keywords Dictionary

| Term              | Meaning                   | Khmer                        |
| ----------------- | ------------------------- | ---------------------------- |
| Query String      | part after `?` in URL     | ខ្សែអក្សរបន្ទាប់ពី `?`       |
| Parameter         | key=value pair in URL     | ប៉ារ៉ាម៉ែត្រ                 |
| DOM               | JS representation of HTML | រចនាសម្ព័ន្ធ HTML សម្រាប់ JS |
| Selector          | rule to find elements     | ក្បួន CSS ស្វែងរក element    |
| `#id`             | ID selector               | ស្វែងរកតាម ID                |
| `.class`          | Class selector            | ស្វែងរកតាម class             |
| `URLSearchParams` | object to read URL values | ឧបករណ៍អាន Params             |
| `.get()`          | get one value             | ទាញតម្លៃ                     |
| `textContent`     | element text              | អក្សរនៅក្នុង element         |
| `innerHTML`       | raw HTML                  | HTML ខាងក្នុង element        |
