// injecting an image

function injectImage() {
    // creating an image element
    const img = document.createElement("img");

// setting image source
    img.src =
        "https://www.lakemerritt.org/uploads/7/7/2/9/7729843/imgp2225.jpg";

    img.style.width = "500px";

    // finding the element 
    const container = document.getElementById("bird-appears");

    container.innerHTML = '';
    container.appendChild(img)
}

// creating a chart showing the population of bird sightings
const birdsightingsinfo = {
    labels: ["American White Pelican", "Black-Crowned Night Heron", "Green Heron"],
    datasets: [{
        label: '2025 Count of Bird Population',
        data: [16, 3, 4],
        borderColor: '#4bc966',
        borderWidth: 1,
    }]
};

// configuring the chart setup with chart.js
const config = {
    type: 'bar',
    data: birdsightingsinfo,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
    }  
    }
};

// rendering the chart itself
const ctx = document.getElementById('chartofBirds').getContext('2d');
const chart = new Chart(ctx, config)

// creating a console log
console.log("chartofbirds", chart)

// this is how you make a comment 

