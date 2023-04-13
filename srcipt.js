//// IIFE Imemdiately invoked function Expression

(async function () {
    const response = await fetch("./recipes.json");
    const recipes = await response.json();
    console.log(recipes);

    const inputElem = document.getElementById("searchInput");
    const btnElem = document.getElementById("searchBtn");
    const listElem = document.getElementById("recipe-list");
    listElem.innerHTML = "" ;
        
    const li = document.createElement("li");

    function displaySreachResult(results){
        results.forEach(function (recipe) {
           const listItem = `
           <div class='title'>${recipe.title}</div>
           <div class='description'>${recipe.description}</div>
           
           `;
           li.innerHTML = document.createTextNode(listItem);
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