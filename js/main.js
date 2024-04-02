document.getElementById("toggleAdvancedSearch").addEventListener("click", function () {
    var advancedSearchSection = document.getElementById("advancedSearchSection");
    // Toggle the visibility of the advanced search section
    if (advancedSearchSection.style.display === "none") {
        advancedSearchSection.style.display = "block";
        this.textContent = "Hide Advanced Search";
        this.style.backgroundColor = '#9dad97';
    } else {
        advancedSearchSection.style.display = "none";
        this.textContent = "Show Advanced Search";
        this.style.backgroundColor = '#4CAF50';
    }
});

const data = {
    "properties": [
        {
            "id": "prop1",
            "type": "House",
            "bedrooms": 3,
            "price": 750000,
            "tenure": "Freehold",
            "description": "Attractive three bedroom semi-detached family home situated within 0.5 miles of Petts Wood station with fast trains to London and within easy walking distance of local shops, schools, bus routes and National Trust woodland. The property comprises; two receptions, fitted 18'9 x 10'1 kitchen/breakfast room and conservatory. The property also benefits from having a utility room and cloakroom. To the first floor there are three bedrooms and a family bathroom with separate WC. Additional features include double glazing, gas central heating and a well presented interior...",
            "location": "Petts Wood Road, Petts Wood, Orpington",
            "postcode": "BR5 1LY",
            "picture": "images/prop1pic1small.jpg",
            "url": "properties/prop1.html",
            "added": {
                "month": "October",
                "day": 12,
                "year": 2022
            }
        },
        {
            "id": "prop2",
            "type": "Flat",
            "bedrooms": 2,
            "price": 399995,
            "tenure": "Freehold",
            "description": "Presented in excellent decorative order throughout is this two double bedroom, two bathroom, garden flat. <br>The modern fitted kitchen is open plan to the living room which boasts solid wooden floors and includes integrated appliances including a dishwasher & a washing machine. This large open plan benefits from bi folding doors onto a secluded private courtyard garden. Both bedrooms are double sized, and the family bathroom boasts a matching three piece suite a shower attachment over the bath. There is also a separate wet room. There are walnut doors throughout and wiring for Sky TV/aerial points in the living room/kitchen and both bedrooms.<br>This apartment being only five years old, is still under a 10 year building guarantee...",
            "location": "Crofton Road Orpington BR6",
            "postcode": "BR5 2LY",
            "picture": "images/prop2pic1small.jpg",
            "url": "properties/prop2.html",
            "added": {
                "month": "September",
                "day": 14,
                "year": 2022
            }
        },
        {
            "id": "prop3",
            "type": "Apartment",
            "bedrooms": 1,
            "price": 275000,
            "tenure": "Leasehold",
            "description": "A stylish one bedroom apartment located in the heart of Bromley town center. The property features an open-plan kitchen/living area, a modern bathroom, and a double bedroom with fitted wardrobes. Residents also benefit from access to a communal rooftop garden. The apartment is conveniently situated within walking distance of Bromley South station and local amenities.",
            "location": "High Street, Bromley",
            "postcode": "BR5 1LY",
            "picture": "images/prop3pic1small.jpg",
            "url": "properties/prop3.html",
            "added": {
                "month": "November",
                "day": 8,
                "year": 2022
            }
        },
        {
            "id": "prop4",
            "type": "House",
            "bedrooms": 4,
            "price": 825000,
            "tenure": "Freehold",
            "description": "A spacious four bedroom detached family home located in the sought-after area of Chislehurst. The property offers a large reception room, separate dining room, fully fitted kitchen, utility room, and conservatory. Upstairs, there are four well-proportioned bedrooms, including a master bedroom with an en-suite bathroom, and a family bathroom. The house also benefits from a private garden, garage, and off-street parking. Situated within easy reach of local schools, parks, and transport links.",
            "location": "Camden Park Road, Chislehurst",
            "postcode": "BR5 1LY",
            "picture": "images/prop4pic1small.jpg",
            "url": "properties/prop4.html",
            "added": {
                "month": "December",
                "day": 3,
                "year": 2022
            }
        },
        {
            "id": "prop5",
            "type": "Flat",
            "bedrooms": 3,
            "price": 550000,
            "tenure": "Leasehold",
            "description": "A beautifully presented three bedroom apartment located within a gated development in Beckenham. The property offers spacious accommodation including a bright reception room, separate kitchen with integrated appliances, three bedrooms with built-in wardrobes, and two bathrooms. Residents benefit from access to communal gardens and allocated parking. Situated close to local amenities, transport links, and green spaces.",
            "location": "Elm Road, Beckenham",
            "picture": "images/prop5pic1small.jpg",
            "url": "properties/prop5.html",
            "added": {
                "month": "January",
                "day": 20,
                "year": 2023
            }
        },
        {
            "id": "prop6",
            "type": "Bungalow",
            "bedrooms": 2,
            "price": 475000,
            "tenure": "Freehold",
            "description": "A charming two bedroom bungalow situated in a peaceful residential area of Orpington. The property comprises a spacious living room, modern kitchen/dining area, two double bedrooms, and a family bathroom. Outside, there is a well-maintained garden with a patio area and off-street parking. Conveniently located close to local shops, schools, and transport links.",
            "location": "Green Street Green Road, Orpington",
            "postcode": "BR5 2LY",
            "picture": "images/prop6pic1small.jpg",
            "url": "properties/prop6.html",
            "added": {
                "month": "February",
                "day": 15,
                "year": 2023
            }
        },
        {
            "id": "prop7",
            "type": "Maisonette",
            "bedrooms": 2,
            "price": 325000,
            "tenure": "Leasehold",
            "description": "A well-presented two bedroom maisonette located in the popular area of Penge. The property features a bright reception room, separate kitchen, two double bedrooms, and a modern bathroom. Additionally, there is a private garden to the rear. Close to local amenities, parks, and transport links including Penge East and Penge West stations.",
            "location": "Maple Road, Penge",
            "postcode": "BR5 2LY",
            "picture": "images/prop7pic1small.jpg",
            "url": "properties/prop7.html",
            "added": {
                "month": "March",
                "day": 5,
                "year": 2023
            }
        }
    ]
};

function displayAllProperties() {
    const dataDisplay = document.getElementById("dataDisplay");
    dataDisplay.innerHTML = ""; // Clear previous results

    dataDisplay.style = "margin: auto;";
    dataDisplay.classList.add("row");
    data.properties.forEach(property => {
        const propertyDiv = document.createElement("div");
        propertyDiv.style = "box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);  text-align: center; float: left;  width: 25%; padding: 10px;  height: 450px; margin: 15px 20px;";
        propertyDiv.classList.add("property");
        propertyDiv.id = property.id;

        const image = document.createElement("img");
        image.src = property.picture;
        image.style = "height: 200px;";
        propertyDiv.appendChild(image);

        const location = document.createElement("h2");
        location.textContent = property.location;
        propertyDiv.appendChild(location);

        const price = document.createElement("p");
        price.textContent = "£" + property.price.toLocaleString();
        propertyDiv.appendChild(price);

        const type = document.createElement("p");
        type.textContent = property.type;
        type.classList.add("title");
        propertyDiv.appendChild(type);

        const wishlist = document.createElement("p");
        wishlist.innerHTML = '&hearts;';
        wishlist.id = "btn";
        wishlist.style.cursor = "pointer";
        propertyDiv.appendChild(wishlist);

        const link = document.createElement("a");
        link.href = property.url;
        link.textContent = "View more";
        propertyDiv.appendChild(link);

        dataDisplay.appendChild(propertyDiv);
    });
}

displayAllProperties();

document.getElementById("propertySearchForm").addEventListener("submit", function (event) {
    // Reset previous errors
    document.getElementById("typeError").textContent = "";
    document.getElementById("postcodeError").textContent = "";
    document.getElementById("bedroomsError").textContent = "";

    // Validate mandatory fields
    var propertyType = document.getElementById("propertyType").value;
    var postcode = document.getElementById("postcode").value;
    var bedrooms = parseInt(document.getElementById("bedrooms").value);

    var isValid = true;

    if (propertyType === "") {
        document.getElementById("typeError").textContent = "Property type is required";
        isValid = false;
    }

    if (postcode === "") {
        document.getElementById("postcodeError").textContent = "Postcode is required";
        isValid = false;
    }

    if (isNaN(bedrooms) || bedrooms < 0) {
        document.getElementById("bedroomsError").textContent = "Bedrooms must be a non-negative number";
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if validation fails
        return;
    }

    var formData = new FormData(this);
    var searchCriteria = {};
    formData.forEach(function (value, key) {
        searchCriteria[key] = value.trim();
    });

    // Filter properties based on search criteria
    var filteredProperties = data.properties.filter(function (property) {
        // Check if property type matches
        if ((propertyType.toLowerCase() !== "any" && property.type.toLowerCase() !== propertyType.toLowerCase())) {
            console.log((propertyType.toLowerCase() !== "any" && property.type.toLowerCase() !== propertyType.toLowerCase()) && (!isNaN(bedrooms) && property.bedrooms < bedrooms) && (!isNaN(postcode) && property.postcode !== postcode));
            return false;
        }
        // // Check if bedrooms are greater than or equal to the entered value
        if (!isNaN(bedrooms) && property.bedrooms < bedrooms) {
            return false;
        }

        if (postcode !== "" && property.postcode !== postcode) {
            return false;
        }

        var price = parseFloat(searchCriteria["price"]);
        var addedDate = new Date(searchCriteria["addedDate"]);

        // if(isNaN(price) && isNaN(addedDate.getTime())){

            if (!isNaN(price) && property.price < price) {
                return false;
            }

            // Check if added date is after the entered date
            if (!isNaN(addedDate.getTime())) {
                var propertyAddedDate = new Date(property.added.year, getMonthIndex(property.added.month), property.added.day);
                if (propertyAddedDate <= addedDate) {
                    return false;
                }
            }

        // }
        return true;

    });
    displayPropertyResults(filteredProperties);
    event.preventDefault();
});

function displayPropertyResults(properties) {
    const dataDisplay = document.getElementById("dataDisplay");
    dataDisplay.innerHTML = ""; // Clear previous results

    properties.forEach(property => {
        const propertyDiv = document.createElement("div");
        propertyDiv.style = "box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); text-align: center; float: left; width: 25%; padding: 10px; height: 450px; margin: 15px 20px;";
        propertyDiv.classList.add("property");
        propertyDiv.id = property.id;

        const image = document.createElement("img");
        image.src = property.picture;
        image.style = "height: 200px;";
        propertyDiv.appendChild(image);

        const location = document.createElement("h2");
        location.textContent = property.location;
        propertyDiv.appendChild(location);

        const price = document.createElement("p");
        price.textContent = "£" + property.price.toLocaleString();
        propertyDiv.appendChild(price);

        const type = document.createElement("p");
        type.textContent = property.type;
        type.classList.add("title");
        propertyDiv.appendChild(type);

        const wishlist = document.createElement("p");
        wishlist.innerHTML = '&hearts;';
        wishlist.id = "btn";
        wishlist.style.cursor = "pointer";
        let clicked = false;
        wishlist.onclick = function() {
            clicked = !clicked;
            if (clicked) {
                wishlist.style.color = "red"
                addToWishlist(property.id);
            } else {
                wishlist.style.color = "black"
                removeFromWishlist(property.id);
            }
            console.log("Wishlist clicked for property id: " + property.id);
        };
        propertyDiv.appendChild(wishlist);

        const link = document.createElement("a");
        link.href = property.url;
        link.textContent = "View more";
        propertyDiv.appendChild(link);

        dataDisplay.appendChild(propertyDiv);
    });
}


let wishlist = [];
var clicked = false;

function addToWishlist(propertyId) {
    if (!wishlist.includes(propertyId)) {
        wishlist.push(propertyId);
        document.getElementById(propertyId).classList.add("addedToWishlist");
    } else {
        console.log("Property is already in the wishlist");
    }
}

function removeFromWishlist(propertyId) {
    const index = wishlist.indexOf(propertyId);
    if (index !== -1) {
        wishlist.splice(index, 1);
        document.getElementById(propertyId).classList.remove("addedToWishlist");
    } else {
        console.log("Property is not in the wishlist");
    }
}

function displayWishlist() {
    alert('Wishlist items:\n' + wishlist);
    console.log("Wishlist items:", wishlist);
}

document.addEventListener("DOMContentLoaded", function () {
    const propertyDivs = document.querySelectorAll(".property");
    propertyDivs.forEach(div => {
        const btnParagraph = div.querySelector("#btn");
        btnParagraph.addEventListener("click", function () {
            clicked = !clicked;
            if (clicked) {
                btnParagraph.style.color = "red"
                addToWishlist(div.id);
            } else {
                btnParagraph.style.color = "black"
                removeFromWishlist(div.id);
            }
        });
    });

    document.getElementById("displayWishlistButton").addEventListener("click", function () {
        displayWishlist();
    });
});
