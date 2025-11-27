const featuredNewDevelopments = document.getElementById("featuredNewDevelopments");

fetch("public/data/properties.json")
  .then((response) => response.json())
  .then((data) => {
    if (data.length > 0) {
      for (let i = 0; i < 4; i++) {
        featuredNewDevelopments.innerHTML += `
        <a class="card" href="/pages/property/${data[i].title.en}">
            <img class="card__media" src="${data[i].images}"
                alt="" />
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

const featuredServicedApartments = document.getElementById("featuredServicedApartments");

fetch("public/data/properties.json")
  .then((response) => response.json())
  .then((data) => {
      if (data.length > 0) {
            for (let i = 4; i < 8; i++) {
                  featuredServicedApartments.innerHTML += `
                  <a href="/page/property/${data[i].title.en}" class="card">
                  <img src="${data[i].images}" alt="" class="card__media">
                  <div class="card__body">
                        <h3 class="card__title">${data[i].title.en}</h3>
                        <div class="card__meta">${data[i].price} ${data[i].currency}</div>
                        <span class="badge">Available</span>
                  </div>
            </a>
            `;
            }
      }
  })

const featuredBorey = document.getElementById("featuredBorey");

fetch("public/data/properties.json")
  .then((response) => response.json())
  .then((data) => {
      if (data.length > 0) {
            for (let i = 8; i < 12; i++) {
                  featuredBorey.innerHTML += `
                  <a href="/page/property/${data[i].title.en}" class="card">
                  <img src="${data[i].images}" alt="" class="card__media">
                  <div class="card__body">
                        <h3 class="card__title">${data[i].title.en}</h3>
                        <div class="card__meta">${data[i].price} ${data[i].currency}</div>
                        <span class="badge">Available</span>
                  </div>
            </a>
            `;
            }
      }
  })
const latestProperties = document.getElementById("latestProperties");

fetch("public/data/properties.json")
  .then((response) => response.json())
  .then((data) => {
      if (data.length > 0) {
            for (let i = 12; i < 16; i++) {
                  latestProperties.innerHTML += `
                  <a href="/page/property/${data[i].title.en}" class="card">
                  <img src="${data[i].images}" alt="" class="card__media">
                  <div class="card__body">
                        <h3 class="card__title">${data[i].title.en}</h3>
                        <div class="card__meta">${data[i].price} ${data[i].currency}</div>
                        <span class="badge">Available</span>
                  </div>
            </a>
            `;
            }
      }
  })