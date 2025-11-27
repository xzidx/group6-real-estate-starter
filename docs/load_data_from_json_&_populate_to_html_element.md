# Load data from json & populate to html element

Description: Load data from json file & populate data using Loop and access HTML element using DOM.

**Sample Structure:**

Create a folder structures as format

```
/pages
    /sample
        index.html
        index.css
        index.js
```

### HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sample Page</title>
    <link
      rel="icon"
      type="image/x-icon"
      href="/public/assets/images/company/favicon.ico"
    />
    <link rel="stylesheet" href="/styles/main.css" />
    <link rel="stylesheet" href="/styles/components/card.css" />
  </head>

  <body>
    <div
      id="section__properties"
      class="container"
      style="display: flex; flex-direction: column; gap: 1rem;"
    ></div>

    <script src="index.js"></script>
  </body>
</html>
```

### JavaScript

#### Step 1: Create a variable to store DOM targeted element

```javascript
const sectionPropertiesElement = document.getElementById("section__properties");
```

#### Step 2: Use fetch() to load data from JSON file & check if data is existing by using console.log()

```javascript
fetch("../../public/data/properties.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

#### Step 3: Use for loop to iterate each object item (each property data)

```javascript
fetch("../../public/data/properties.json")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);
    }
  });
```

#### Step 4: Add HTML content to div with id section\_\_properties using the variable above sectionPropertiesElement (DOM) with its property ".innerHTML"

```javascript
fetch("../../public/data/properties.json")
  .then((response) => response.json())
  .then((data) => {
    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        sectionPropertiesElement.innerHTML += `
        <a class="card" href="/pages/property/${data[i].title.en}">
            <img class="card__media" src="https://picsum.photos/640/400?2"
                alt="${data[i].title.en}" />
            <div class="card__body">
                <h3 class="card__title">${data[i].title.en}</h3>
                <div class="card__meta">${data[i].price} ${data[i].currency} / month</div>
                <span class="badge">Available</span>
            </div>
        </a>
      `;
      }
    }
  });
```
