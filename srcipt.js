//// IIFE Imemdiately invoked function Expression

(async function () {
    const response = await fetch("./recipes.json");
    const recipes = await response.json();
    console.log(recipes);

    const inputElem = document.getElementById("searchInput");
    const btnElem = document.getElementById("searchBtn");
    const listElem = document.getElementById("recipe-list");
    const recipesDetailsElem = document.getElementById("recipeDetailsContainer");
/// 3rd step or 3rd function
    function loadRecipesDetails(recipe) {
        console.log(recipe);
        recipesDetailsElem.innerHTML = `
        <h2 class='title'>${recipe.title}</h2>
     <ul>${recipe.ingredients.map(function(ingredients){
        return "<li>" +ingredients + "</li>"
     }).join(" ")}</ulv>
     <h3> Instruction</h3>
     <div>${recipe.instructions} </div>
        `;
    }
    
        
   // 2nd step or 2nd function

    function displaySreachResult(results){
        listElem.innerHTML = "" ;
        results.forEach(function (recipe) {
            const li = document.createElement("li");
        //    const listItem = `
        //    <div class='title'>${recipe.title}</div>
        //    <div class='description'>${recipe.description}</div>
           
        //    `;
           li.innerHTML = recipe.title;
           li.addEventListener("click", function () {
            loadRecipesDetails(recipe);
           });
           listElem.appendChild(li);
        })
    }

    // 1step or 1 function
        function search() {
            
            const query = inputElem.value.title.toLowerCase();
            // console.log(query);
            const results = recipes.filter(function (recipes) {
                return (recipes.title.toLowerCase().includes(query) || 
                recipes.ingredients.join(" ").toLowerCase().includes(query) );
        });

        displaySreachResult(results);
    }
        btnElem.addEventListener("click", search)

}) ();