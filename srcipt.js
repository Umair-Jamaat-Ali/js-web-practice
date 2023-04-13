//// IIFE Imemdiately invoked function Expression

(async function () {
    const response = await fetch("./recipes.json");
    const recipes = await response.json();
    console.log(recipes);

    const inputElem = document.getElementById("searchInput");
    const btnElem = document.getElementById("searchBtn");

        function search() {
            
            const query = inputElem.value;
            // console.log(query);
            const results = recipes.filter(function (recipes) {
                return (recipes.title.toLowerCase().includes(query) || 
                recipes.ingredients.join(" ").toLowerCase().includes(query) );
        });

        console.log(results);
    }
        btnElem.addEventListener("click", search)

}) ();