// injecting an image

function injectImage() {
    // creating an image element
    const img = document.createElement("img");

    // setting image source
    img.src =
        "https://www.lakemerritt.org/uploads/7/7/2/9/7729843/imgp2225.jpg";

    img.style.width = "500px";

    // creating a header when the image is injected
    const imageheader = document.createElement("h1");
    imageheader.innerText = "Green Heron";
    imageheader.style.textAlign = "center";

    // finding the element 
    const container = document.getElementById("bird-appears");

    container.innerHTML = '';
    container.appendChild(imageheader);
    container.appendChild(img)
}

// creating a chart showing the number of bird sightings
const birdsightingsinfo = {
    labels: ["American White Pelican", "Black-Crowned Night Heron", "Green Heron"],
    datasets: [{
        label: '2025 Bird Count Population',
        data: [16, 3, 4],
        borderColor: '#ffffff',
        borderWidth: 2,
        backgroundColor: '#4bc966',
    }]
};

// configuring the chart setup with chart.js
const config = {
    type: 'bar',
    data: birdsightingsinfo,
    options: {
        plugins: {
            legend: {
                labels: {
                    color: '#ffffff',
                    font: {
                        family: 'Lucida Console', 
                        size: 15,
                    }
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    align: 'center',
                    padding: 10,
                    color: '#ffffff',
                    font: {
                        family: 'Lucida Console',
                        size: 13,
                    }
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#ffffff',
                    font: {
                        family: 'Lucida Console',
                        size: 10
                    }
                }
            }
        }
    }
};

// rendering the chart itself
const ctx = document.getElementById('chartofBirds').getContext('2d');
const chart = new Chart(ctx, config)

// creating a console log
console.log("chartofbirds", chart)

// creating a map with bird spottings using Leaflet
var map = L.map('birdmap', {
    center: [37.80273450677496, -122.25856019305874],
    zoom: 15
});

// adding basemap to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// creating first icon - decided to not do this as it was too difficult to make the icons look good
// var birdIconOne = L.icon({
//     iconUrl: 'https://www.lakemerritt.org/uploads/7/7/2/9/7729843/imgp6242.jpg',
//     iconSize: [30, 30]
// })
// creating marker 1
var markerone = L.marker([37.804860070351246, -122.2586084339425],{
    // icon: birdIconOne
}).addTo(map);
markerone.bindPopup("American White Pelican Spotted").openPopup();

// creating marker 2
var markertwo = L.marker([37.79870682194356, -122.2600721989074]).addTo(map);
markertwo.bindPopup("Black-Crowned Night Heron Spotted").openPopup();

// creating marker 3
var markerthree = L.marker([37.80727859005588, -122.25294691233749]).addTo(map);
markerthree.bindPopup("Green Heron Spotted").openPopup();

// opening and closing the navigation bar
function openNav() {
    document.getElementById("navigationbar").style.display = "block";
}

function closeNav() {
    document.getElementById("navigationbar").style.display = "none";
}



// this is how you make a comment 

