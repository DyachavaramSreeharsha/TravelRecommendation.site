const travelData = {

    beaches: [
        {
            name: "Maldives Beach",
            imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            description: "Beautiful crystal clear beach in Maldives."
        },

        {
            name: "Bali Beach",
            imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            description: "Famous beach destination in Bali."
        }
    ],

    temples: [
        {
            name: "Golden Temple",
            imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
            description: "Famous spiritual temple in India."
        },

        {
            name: "Angkor Wat",
            imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada",
            description: "Historic temple in Cambodia."
        }
    ],

    countries: [
        {
            name: "Japan",
            imageUrl: "https://images.unsplash.com/photo-1492571350019-22de08371fd3",
            description: "Country known for technology and culture."
        },

        {
            name: "Switzerland",
            imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
            description: "Beautiful mountains and landscapes."
        }
    ]
};


document.getElementById('searchBtn')
.addEventListener('click', searchRecommendation);

document.getElementById('resetBtn')
.addEventListener('click', clearResults);


function searchRecommendation() {

    let input =
    document.getElementById('searchInput')
    .value.toLowerCase();

    let resultsDiv =
    document.getElementById('results');

    resultsDiv.innerHTML = '';

    let places = [];

    if(input === 'beach' || input === 'beaches') {

        places = travelData.beaches;
    }

    else if(input === 'temple' || input === 'temples') {

        places = travelData.temples;
    }

    else if(input === 'country' || input === 'countries') {

        places = travelData.countries;
    }

    else {

        resultsDiv.innerHTML =
        "<h2>No recommendations found</h2>";

        return;
    }

    places.forEach(place => {

        resultsDiv.innerHTML += `

        <div style="
            background:white;
            color:black;
            border-radius:10px;
            overflow:hidden;
        ">

            <img
            src="${place.imageUrl}"
            width="100%"
            height="250">

            <div style="padding:15px;">

                <h2>${place.name}</h2>

                <p>${place.description}</p>

            </div>

        </div>

        `;
    });
}


function clearResults() {

    document.getElementById('results')
    .innerHTML = '';

    document.getElementById('searchInput')
    .value = '';
}