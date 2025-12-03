const agentInformation = document.getElementById('section__agents')

fetch("../public/data/agents.json")
  .then((response) => response.json())
  .then((data) => {
    if (data.length > 0) {
      for (let i = 0; i < 3; i++) {
        agentInformation.innerHTML += `
        <div class="section__card">
            <div class="section__avatar">
                <img src="${data[i].profile_photo}">
            </div>
            <div class="section__content">
                <h3>${data[i].full_name}</h3>
                <p>${data[i].contact.phone}</p>
                <p>${data[i].contact.email}
                <div class="section__icon">
                    <a href="#"><i class="fa-brands fa-telegram"></i></a>
                    <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                </div>
                <div class="section__button">
                    <a href="/pages/agent-details" style="background-color: var(--badge); color: var(--text)">Profile</a>
                    <a href="/pages/agent-details">Call</a>
                </div>
            </div>
        </div>
        `
      }
    }
  })
  .catch((error) => console.error("Error fetching JSON:", error));

const featuredProperty = document.getElementById('section__featured')

fetch('public/data/properties.json')
  .then((response) => response.json())
  .then((data) => {
    if(data.length > 0) {
      for(let i = 0; i < 3; i++) {
        featuredProperty.innerHTML += `
        
        
        
        
        
        
        
        <a class="card" href="/pages/property list/index.html">
            <img class="card__media" src="/public/assets/images/properties/apartments/apartment-1.webp"
                alt="Modern apartment near AEON Mall" />
            <div class="card__body">
                <h3 class="card__title">${data[i].title.en} - ${data[i].location.district}</h3>
                <div class="card__meta">${data[i].price} ${data[i].currency} • ${data[i].bedrooms} BR</div>
                <span class="badge">${data[i].purpose}</span>
            </div>
        </a>
        <a class="card" href="/pages/property list/index.html">
            <img class="card__media" src="/public/assets/images/properties/apartments/apartment-2.webp"
                alt="Cozy student room near ITC" />
            <div class="card__body">
                <h3 class="card__title">Cozy Student Room — Toul Kork</h3>
                <div class="card__meta">$80 / month • 1BR</div>
                <span class="badge">Available</span>
            </div>
        </a>
        <a class="card" href="/pages/property list/index.html">
            <img class="card__media" src="/public/assets/images/properties/condos/condo-1.jpg" alt="Family house in Sen Sok" />
            <div class="card__body">
                <h3 class="card__title">Family House — Sen Sok</h3>
                <div class="card__meta">$78,000 • 3BR</div>
                <span class="badge">For Sale</span>
            </div>
        </a>`
      }
    }
  })