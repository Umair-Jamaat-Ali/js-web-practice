//// IIFE Imemdiately invoked function Expression

(async function () {
    const response = await fetch("./recipes.json");
    const recipes = await response.json();
    console.log(recipes);

    const inputElem = document.getElementById("searchInput");
    const btnElem = document.getElementById("searchBtn");
    const listElem = document.getElementById("recipe-list");
    const recipesDetailsElem = document.getElementById("recipeDetailsContainer");

    function loadRecipesDetails(recipe) {
        console.log(recipe);
        recipesDetailsElem.innerHTML = `
        <h2 class='title'>${recipe.title}</h2>
     <div>${recipe.description}</div>
        `;
    }
    
        
   

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


        function search() {
            
            const query = inputElem.value;
            // console.log(query);
            const results = recipes.filter(function (recipes) {
                return (recipes.title.toLowerCase().includes(query) || 
                recipes.ingredients.join(" ").toLowerCase().includes(query) );
        });

        displaySreachResult(results);
    }
        btnElem.addEventListener("click", search)

}) ();