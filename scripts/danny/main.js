const zomBtn = document.querySelector("#zomatoBtn");
const searchText = document.querySelector("#restaurantInput")
zomBtn.addEventListener('click', () => {
    // fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&apikey=${zomato.user_key}`)
      fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&apikey=${zomato.user_key}&q=${searchText.value}&sort=rating`)
    .then( data => data.json())
    .then( restaurantList => {
        document.querySelector("#test").innerHTML = "<h1>Results:</h1>";
        let wordReturn = restaurantList.restaurants;
        wordReturn.forEach( keyWord => {
            createRestaurantOption(keyWord.restaurant)
        });
        // restaurantList.restaurants.filter( (eatery) => {
        //     let obj = eatery.restaurant;
        //     if (obj.name.includes(searchText.value) || obj.cuisines.includes(searchText.value)) {
        //         let newObj = obj; 
        //         createRestaurantOption(newObj)
        //     }
            
        // });
        // document.querySelector("#list").innerHTML = 
        // `
        // <h1><em><b>Other Restaurants:</b></em></h1>
        // `
        // restaurantList.restaurants.forEach( newObj => {
        //     let restList = newObj.restaurant;
        //     createListOfRestaurants(restList)
        // });
    })
    
})

const createListOfRestaurants = (restObj) => {
    document.querySelector("#list").innerHTML += 
                    `
                    <a href="${restObj.url}" target="_blank"><h4>${restObj.name}</h4>
                    <h5>Rating: ${restObj.user_rating.aggregate_rating}</h5></a>
                    `
}
const createRestaurantOption = (newObj) => {
    document.querySelector("#test").innerHTML += 
                `
                <a href="${newObj.url}" target="_blank"><h3>${newObj.name}</h3></a>
                <h5>Rating: ${newObj.user_rating.aggregate_rating}</h5>
                <address>Address: ${newObj.location.address}<br>
                    ${newObj.location.city}
                    ${newObj.location.zipcode}
                </address>
                `
    
}



// The Pharmacy Burger Parlor & Beer Garden
// Loveless Cafe
// Pancake Pantry
// Fido
// Burger Up
// Jacks Bar-B-Que
// Hattie B's Hot Chicken
// The Southern Steak & Oyster
// Taco Mamacita
// McNamara's Irish Pub & Restaurant
// Puckett's Grocery & Restaurant
// Monell's Restaurant
// Marché Artisan Foods
// Demos' Steak and Spaghetti House
// Rosepepper Cantina
// Maggiano's Little Italy
// Rotier's Restaurant
// Virago
// MAFIAoZA'S (Nashville)
// Puckett's Grocery & Restaurant