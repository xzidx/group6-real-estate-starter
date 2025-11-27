# Load JSON and Filter a List with JavaScript

This example shows how to:

- Load data from a **JSON file** using `fetch`
- Use **`for` loop**, **`if / else`**, **nested conditions**
- Use **`break`** to stop a loop
- Filter a list of properties by **purpose** (`rent` only)
- Show the filtered results in HTML

---

## 1. Folder Structure

```
sample_pages
└── sample_load_json_and_filter_data
    ├── index.css
    ├── index.html   ← Page layout
    └── index.js     ← JavaScript: load + filter + render
```

Open the page:

```
sample_pages/sample_load_json_and_filter_data/index.html
```

---

## 2. HTML: Where the Cards Will Go

**File:** `index.html`

Important part of the body:

```html
<body>
  <div
    id="propertyList"
    class="container"
    style="display: grid; grid-template-columns: auto auto auto; gap: 1rem;"
  ></div>

  <script src="index.js"></script>
</body>
```

### What this does

- `<div id="propertyList">...</div>`
  This is **empty** at the start. There is **no card** inside yet.
- JavaScript (`index.js`) will:
  - Load data from `properties.json`
  - Create the cards in **JavaScript**
  - Insert them **inside** this `<div>`

So:

**HTML gives a place for the list.**

**JavaScript fills the list.**

---

## 3. JavaScript Overview

**File:** `index.js`

```jsx
const propertyList = document.getElementById("propertyList");
const purpose = "rent";

fetch("/public/data/properties.json")
  .then((response) => response.json())
  .then((data) => {
    if (data.length > 0) {
      const maxItems = 6;
      let count = 0;
      for (let i = 0; i < data.length; i++) {
        if (count < maxItems) {
          if (data[i].purpose === purpose) {
            let purposeSpanHTML = "";
            if (data[i].purpose === "rent") {
              purposeSpanHTML = `<span style="color: red">(${data[i].purpose})</span>`;
            } else {
              purposeSpanHTML = `<span style="color: blue">(${data[i].purpose})</span>`;
            }

            propertyList.innerHTML += `
          <a class="card" href="/pages/property/${data[i].title.en}">
              <img class="card__media" src="${data[i].images[0]}"
                  alt="${data[i].title.en}" />
              <div class="card__body">
                  <h3 class="card__title">${data[i].title.en} ${purposeSpanHTML}</h3>
                  <div class="card__meta">${data[i].price} ${data[i].currency} / month</div>
                  <span class="badge">Available: ${data[i].is_available}</span>
              </div>
          </a>
        `;
            count++;
          }
        } else {
          break;
        }
      }
    }
  });
```

See the explaination below **step by step**.

---

## 4. Step 1 – Get the HTML Element

```jsx
const propertyList = document.getElementById("propertyList");
const purpose = "rent";
```

- `document.getElementById("propertyList")`
  - Finds the `<div id="propertyList">` in the HTML.
  - Saves it into the variable `propertyList`.
  - You will use this to **add cards** into the page.
- `const purpose = "rent";`
  - This is the **filter value**.
  - You only want properties where `purpose` in the data is `"rent"`.

---

## 5. Step 2 – Load JSON File with `fetch`

```jsx
fetch("/public/data/properties.json")
  .then((response) => response.json())
  .then((data) => {
    // use data here
  });
```

- `fetch("/public/data/properties.json")`
  - Asks the server: “Please give me the `properties.json` file”.
  - Returns a **promise** (an object that will finish in the future).
- `.then((response) => response.json())`
  - When the response comes back, this converts the response into **JSON data**.
- `.then((data) => { ... })`
  - Now `data` is the **JavaScript array** from your JSON file.
  - Example: `data[0]`, `data[1]`, etc.

You expect each item to look like:

```jsx
[
  {
    id: 39,
    title: {
      en: "House near Phnom Penh International Airport",
      km: "ផ្ទះនៅជិតអាកាសយានដ្ឋានភ្នំពេញ",
    },
    type: "house",
    purpose: "rent",
    price: 850,
    currency: "USD",
    location: {
      city: "Phnom Penh",
      district: "Pou Senchey",
      address: "Russian Blvd",
    },
    bedrooms: 3,
    bathrooms: 3,
    area: 130,
    unit: "m²",
    images: ["/public/assets/images/properties/houses/house-1.webp"],
    features: ["Parking", "Garden"],
    agent_id: 309,
    posted_date: "2025-11-10",
    is_available: "yes",
    is_featured: "no",
    is_latest: "no",
  },
  {
    id: 40,
    title: {
      en: "Condo near Central Market",
      km: "ខុនដូជិតផ្សារ Sentral",
    },
    type: "condo",
    purpose: "rent",
    price: 650,
    currency: "USD",
    location: {
      city: "Phnom Penh",
      district: "Daun Penh",
      address: "Central Market Area",
    },
    bedrooms: 1,
    bathrooms: 1,
    area: 60,
    unit: "m²",
    images: ["/public/assets/images/properties/condos/condo-2.webp"],
    features: ["Elevator", "Security"],
    agent_id: 310,
    posted_date: "2025-11-14",
    is_available: "yes",
    is_featured: "no",
    is_latest: "yes",
  },
];
```

---

## 6. Step 3 – Check There Is Data

Inside the last `.then`:

```jsx
if (data.length > 0) {
  // only run if we have at least 1 item
}
```

- `data.length` = how many items are in the array
- `if (data.length > 0)`
  - Only run the rest of the code **if there is at least 1 property**.

---

## 7. Step 4 – Set Limit and Start Counter

```jsx
const maxItems = 6;
let count = 0;
```

- `maxItems = 6`
  - You want to show at most **6 cards**.
- `count = 0`
  - This will count how many cards you have already added.
  - Every time you add a property card, you will do `count++` (add 1).

---

## 8. Step 5 – `for` Loop to Go Through the List

```jsx
for (let i = 0; i < data.length; i++) {
  // check each property
}
```

- `for` loop = repeat something **many times**.
- Here:
  - `let i = 0` → start at the first item (`data[0]`)
  - `i < data.length` → loop while there are still items
  - `i++` → after each loop, increase `i` by 1 (go to the next item)

So this loop visits:

- `data[0]`
- `data[1]`
- `data[2]`
- ...
- `data[data.length - 1]`

---

## 9. Step 6 – Limit How Many Items We Show (`if` + `break`)

Inside the loop:

```jsx
if (count < maxItems) {
  // we can still add more items
} else {
  break;
}
```

This is a very important logic:

- `if (count < maxItems)`
  - If you have **not yet** reached 6 items, we are allowed to add more.
- `else { break; }`
  - If you **already have 6 or more**, we do `break;`
  - `break` = **stop the loop immediately** (no more items).

> 🧠 Think:
>
> - You loop over all data.
> - But you stop the loop early when you already displayed enough items.

---

## 10. Step 7 – Filter by Purpose (`if` inside `if`)

Still inside the loop, **inside** the `if (count < maxItems)`:

```jsx
if (data[i].purpose === purpose) {
  // build the card
}
```

- `data[i]` = current property item
- `data[i].purpose` = its purpose (`"rent"` or `"buy"`)
- `purpose` = `"rent"` (from earlier)
- `data[i].purpose === purpose`
  - `===` means: **same value AND same type**.
  - So this checks: _Is this property’s purpose equal to `"rent"`?_

If **yes**, you will create a card for that property.

If **no**, you **skip** this property (do nothing and go to next `i`).

This is called **filtering**:

You only show items where `purpose === "rent"`.

---

## 11. Step 8 – Nested `if` to Color the Purpose

Inside the `if (data[i].purpose === purpose)` block:

```jsx
let purposeSpanHTML = "";
if (data[i].purpose === "rent") {
  purposeSpanHTML = `<span style="color: red">(${data[i].purpose})</span>`;
} else {
  purposeSpanHTML = `<span style="color: blue">(${data[i].purpose})</span>`;
}
```

This is a **nested condition**:

- First condition: `if (data[i].purpose === purpose)` (outer `if`)
- Inside it, another condition: `if (data[i].purpose === "rent")` (inner `if`)

Inner `if`:

- If `purpose` is `"rent"`:
  - `purposeSpanHTML` becomes red text: `(<purpose>)`
- Else (for example `"buy"`):
  - `purposeSpanHTML` becomes blue text: `(<purpose>)`

So if `data[i].purpose` is `"rent"`:

`purposeSpanHTML = <span style="color: red">(rent)</span>`

---

## 12. Step 9 – Build the Card HTML

Still inside the same block:

```jsx
propertyList.innerHTML += `
  <a class="card" href="/pages/property/${data[i].title.en}">
      <img class="card__media" src="${data[i].images[0]}"
          alt="${data[i].title.en}" />
      <div class="card__body">
          <h3 class="card__title">${data[i].title.en} ${purposeSpanHTML}</h3>
          <div class="card__meta">${data[i].price} ${data[i].currency} / month</div>
          <span class="badge">Available: ${data[i].is_available}</span>
      </div>
  </a>
`;
```

- `propertyList.innerHTML += ...`
  - `innerHTML` sets the HTML content **inside** the `<div id="propertyList">`.
  - `+=` means **add** new HTML to the existing content (don’t replace the old cards).
- Template literals (backticks ` ` and `${...}`)
  - You can put JavaScript variables inside the string with `${...}`.
  - Example: `${data[i].title.en}`, `${purposeSpanHTML}`, `${data[i].price}`…

What the card shows:

- Property title (English)
- Purpose (with red or blue span)
- Price + currency
- Availability status

---

## 13. Step 10 – Increase the Count

After adding the card:

```jsx
count++;
```

- `count++` = `count = count + 1`
- This tells the program: “You just added one more card.”
- When `count` becomes 6:
  - Next time, `if (count < maxItems)` will be **false**
  - Then you go to `else { break; }` and **stop the loop**

This is how the code enforces the **maximum 6 items** rule.

---

## 14. Summary of the Code Logic

1. Find the HTML container: `propertyList`
2. Decide filter: `purpose = "rent"`
3. Use `fetch` to load JSON data (`properties.json`)
4. If there is data:
   - Set `maxItems = 6`
   - Set `count = 0`
   - Loop over all items with `for`
   - For each item:
     - If `count < maxItems`:
       - If `data[i].purpose === "rent"`:
         - Decide color for purpose (red for rent, blue otherwise)
         - Build and append the property card HTML
         - Increase `count`
     - Else:
       - `break` the loop (stop completely)

---

## 15. Practice Ideas for Students

Here are some small changes students can try:

1. **Change Filter Purpose**
   - Change `const purpose = "rent";` to `"buy"` and see what happens.
2. **Show Both Rent and Buy, but Different Colors**
   - Remove the outer `if (data[i].purpose === purpose)` and show all items.
   - Keep the inner `if` to color rent in red, buy in blue.
3. **Change the Maximum Number of Items**
   - Change `const maxItems = 6;` to `3` and see that only 3 items are shown.
4. **Filter by Availability**
   - Add another condition:
     ```jsx
     if (data[i].purpose === purpose && data[i].available === true) {
       // ...
     }
     ```
   - Only show properties that are **both** `purpose === "rent"` **and** `available === true`.
5. **Use `continue` Instead of `if (count < maxItems)`**
   - For advanced practice: skip items with `continue`.
