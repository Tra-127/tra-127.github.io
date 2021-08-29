/*
 * vehicles page
 */
async function renderVehicleData(vehicle_url){
    let url_data = await fetch(vehicle_url);
    let vehicle = await url_data.json();

    //display planet title
    let html = `<h2> ${vehicle.name}</h2>`

    //display planet data
    html += `<div class="body">
                  <p> Model: <span>${vehicle.model}</span></p>
                  <p> Manufacturer: <span>${vehicle.manufacturer}</span></p>
                  <p> Cost In Credits: <span>${vehicle.cost_in_credits}</span></p>
                  <p> Length: <span>${vehicle.length}</span></p>
                  <p> Max Atmosphering Speed: <span>${vehicle.max_atmosphering_speed}</span></p>
                  <p> Crew: <span>${vehicle.crew}</span></p>
                  <p> Passengers: <span>${vehicle.passengers}</span></p>
                  <p> Cargo Capacity: <span>${vehicle.cargo_capacity}</span></p>
                  <p> Consumables: <span>${vehicle.consumables}</span></p>
                  <p> Vehicle Class: <span>${vehicle.starship_class}</span></p>
             </div>`

    html += await listPeople(vehicle, "pilots");
    html += await listFilms(vehicle);

    let container = document.querySelector('.container');
    container.innerHTML = html;
    window.scrollTo(0,0);
}

/*
 * Starship page
 */
async function renderStarshipData(starship_url){
    let url_data = await fetch(starship_url);
    let starship = await url_data.json();

    //display planet title
    let html = `<h2> ${starship.name}</h2>`

    //display planet data
    html += `<div class="body">
                  <p> Model: <span>${starship.model}</span></p>
                  <p> Manufacturer: <span>${starship.manufacturer}</span></p>
                  <p> Cost In Credits: <span>${starship.cost_in_credits}</span></p>
                  <p> Length: <span>${starship.length}</span></p>
                  <p> Max Atmosphering Speed: <span>${starship.max_atmosphering_speed}</span></p>
                  <p> Crew: <span>${starship.crew}</span></p>
                  <p> Passengers: <span>${starship.passengers}</span></p>
                  <p> Cargo Capacity: <span>${starship.cargo_capacity}</span></p>
                  <p> Consumables: <span>${starship.consumables}</span></p>
                  <p> Hyperdrive Rating: <span>${starship.hyperdrive_rating}</span></p>
                  <p> MGLT: <span>${starship.MGLT}</span></p>
                  <p> Starship Class: <span>${starship.starship_class}</span></p>
             </div>`

    html += await listPeople(starship, "pilots");
    html += await listFilms(starship);

    let container = document.querySelector('.container');
    container.innerHTML = html;
    window.scrollTo(0,0);
}

/*
 * Species page
 */
async function renderSpeciesData(species_url){
    let url_data = await fetch(species_url);
    let species = await url_data.json();

    //display species name
    let html = `<h2> ${species.name}</h2>`

    //display species data
    let homeworld = await fetch(species.homeworld) //get home-world data to get name of the planet
    let  planet = await homeworld.json();
    html += `<div class="body">
                  <p> Classification: <span>${species.classification}</span></p>
                  <p> Designation: <span>${species.designation}</span></p>
                  <p> Average Height: <span>${species.average_height}</span></p>
                  <p> Skin Colors: <span>${species.skin_colors}</span></p>
                  <p> Hair Colors: <span>${species.hair_colors}</span></p>
                  <p> Eye Colors: <span>${species.eye_colors}</span></p>
                  <p> Average Life Span: <span>${species.average_lifespan}</span></p>
                  <p> Language: <span>${species.language}</span></p>
                  <p> Homeworld: </p>
             </div>`

    //display homeworld planet
    html += `<button id = "${species.homeworld}" onclick = "renderPlanetData(this.id)" >
                ${planet.name}
            </button>`

    html += await listPeople(planet, "residents");
    html += await listFilms(planet);

    let container = document.querySelector('.container');
    container.innerHTML = html;
    window.scrollTo(0,0);
}

/*
 * Planet page
 */
async function renderPlanetData(planet_url) {
    let url_data = await fetch(planet_url);
    let planet = await url_data.json();

    //display planet title
    let html = `<h2> ${planet.name}</h2>`

    //display planet data
    html += `<div class="body">
                  <p> Rotation Period: <span>${planet.rotation_period}</span></p>
                  <p> Orbital Period: <span>${planet.orbital_period}</span></p>
                  <p> Diameter: <span>${planet.diameter}</span></p>
                  <p> Climate: <span>${planet.climate}</span></p>
                  <p> Gravity: <span>${planet.gravity}</span></p>
                  <p> Terrain: <span>${planet.terrain}</span></p>
                  <p> Surface Water: <span>${planet.surface_water}</span></p>
                  <p> Population: <span>${planet.population}</span></p>
             </div>`

    html += await listPeople(planet, "residents");
    html += await listFilms(planet);

    let container = document.querySelector('.container');
    container.innerHTML = html;
    window.scrollTo(0,0);
}

/*
 * Film page
 */
async function renderFilmData(film_url) {
    let url_data = await fetch(film_url);
    let film = await url_data.json();

    //display film title
    let html = `<h2> ${film.title} </h2>`

    //display opening crawl
    html += `<div class="opening_crawl" >
                 <body> ${film.opening_crawl} </body>
             </div>`

    //display film info
    html += `<div class="body">
                  <p> Episode: <span>${film.episode_id}</span> </p>
                  <p> Release Date: <span>${film.release_date}</span> </p>
                  <p> Director: <span>${film.director}</span> </p>
                  <p> Producer: <span>${film.producer}</span> </p>
             </div>`

    html += await listPeople(film, "characters");     //display list of persons in the film
    html += await listPlanets(film);    //display list of planets
    html += await listStarships(film);    //display list of starships
    html += await listVehicles(film);    //display list of vehicles
    html += await listSpecies(film);    //display list of species

    let container = document.querySelector('.container');
    container.innerHTML = html;
    window.scrollTo(0,0);
}

/*
 * person page
 */
async function renderPersonData(person_url) {
    let url_data = await fetch(person_url);
    let person = await url_data.json();

    //display person information
    let html = `<h2> ${person.name} </h2>`

    let homeworld = await fetch(person.homeworld) //get home-world data to get name of the planet
    let  planet = await homeworld.json();
    html += `<div class="body">
                  <p> Height: <span>${person.height}</span> </p>
                  <p> Hair Color: <span>${person.hair_color}</span> </p>
                  <p> Skin Color: <span>${person.skin_color}</span> </p>
                  <p> Eye Color: <span>${person.eye_color}</span> </p>
                  <p> Birth Year: <span>${person.birth_year}</span> </p>
                  <p> Gender: <span>${person.gender}</span> </p>
                  <p> Homeworld: </p>
             </div>`

    //display homeworld planet
    html += `<button id = "${person.homeworld}" onclick = "renderPlanetData(this.id)" >
                ${planet.name}
            </button>`

    html += await listFilms(person);     //display list of films the person is in (as buttons)
    html += await listSpecies(person);     //display list of species
    html += await listVehicles(person);    //display list of vehicles
    html += await listStarships(person);     //display list of starships

    let container = document.querySelector('.container');
    container.innerHTML = html;
    window.scrollTo(0,0);
}


//try to create separate functions for: list films, list persons, list vehicles, ...
async function listFilms (object) {
    let html = '';
    html += `<p> List of Films: </p>`
    let films = object.films;
    for (const film_url of films) {
        let data = (await fetch(film_url))
        let film_data = await data.json();
        if(film_data != undefined) {
            let htmlSegment = `<button id="${film_url}" onclick = "renderFilmData(this.id)">
                                      ${film_data.title}
                               </button>`
            html += htmlSegment;
        }else{
            html += 'Error fetching data'
        }
    }return html;
}

async function listPeople (object, id_name) {
    let html = '';
    let people = '';
    switch (String(id_name)){
        case "people": people = object.people; html += `<p> List of People: </p>`; break;
        case "characters": people = object.characters; html += `<p> List of Characters: </p>`; break;
        case "pilots": people = object.pilots; html += `<p> List of Pilots: </p>`; break;
        case "residents": people = object.residents; html += `<p> List of Residents: </p>`;  break;
        default: people = '[]';
    }

    for (const person_url of people) {
        let data = await fetch(person_url);
        let person_data = await data.json();
        if(person_data != undefined) {
            let htmlSegment = `<button id="${person_url}" onclick = "renderPersonData(this.id)">
                                      ${person_data.name}
                               </button> <br>`
            html += htmlSegment;
        }else{
            html += 'Error fetching data'
        }
    }return html;
}

async function listPlanets (object) {
    let html = '';
    html += `<p> List of Planets: </p>`
    let planets = object.planets;
    for (const planet_url of planets) {
        let data = await fetch(planet_url);
        let planet_data = await data.json();
        if(planet_data != undefined) {
            let htmlSegment = `<button id="${planet_url}" onclick = "renderPlanetData(this.id)">
                                      ${planet_data.name}
                               </button> <br>`
            html += htmlSegment;
        }else{
            html += 'Error fetching data'
        }
    }return html;
}

async function listStarships (object) {
    let html = '';
    html += `<p> List of Starships: </p>`
    let starships = object.starships;
    for (const starship_url of starships) {
        let data = await fetch(starship_url);
        let starship_data = await data.json();
        if(starship_data != undefined) {
            let htmlSegment = `<button id="${starship_url}" onclick = "renderStarshipData(this.id)">
                                      ${starship_data.name}
                               </button> <br>`
            html += htmlSegment;
        }else{
            html += 'Error fetching data'
        }
    }return html;
}

async function listVehicles (object) {
    let html = '';
    html += `<p> List of Vehicles: </p>`
    let vehicles = object.vehicles;
    for (const vehicle_url of vehicles) {
        let data = (await fetch(vehicle_url))
        let vehicle_data = await data.json();
        if(vehicle_data != undefined) {
            let htmlSegment = `<button id="${vehicle_url}" onclick = "renderVehicleData(this.id)">
                                      ${vehicle_data.name}
                               </button> <br>`
            html += htmlSegment;
        }else{
            html += 'Error fetching data'
        }
    }
    return html;
}

async function listSpecies (object) {
    let html = '';
    html += `<p> List of Species: </p>`
    let species = object.species;
    for (const species_url of species) {
        let data = (await fetch(species_url))
        let species_data = await data.json();
        if(species_data != undefined) {
            let htmlSegment = `<button id="${species_url}" onclick = "renderSpeciesData(this.id)">
                                      ${species_data.name}
                               </button> <br>`
            html += htmlSegment;
        }else{
            html += 'Error fetching data'
        }
    }
    return html
}

let url = "https://swapi.dev/api/people/1/"
renderPersonData(url);
