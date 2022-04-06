

// our global variables to store things, just using arrays but feel free to change it to maps if want to
// map item in shopping list to cost or how many or store (if we are doing that)
let shoppingList = new Array();
//map item in inventory to how much or date bought (if we are doing that)
let inventory = new Array();
//allergen info for recipes.
let allergenInformation = new Array();
// level of recipes
let level = new String();

let pinned = new Array();

//let recipesJson = '[{ "name": "Cereal", "info": ["easy", "vegetarian", "gluten-free"], "ingredients":[{"quantity": "2 cups","name": " cereal"},{"quantity": "2 cups","name": "milk"} ],"steps": ["Put cereal of choosing into bowl.","pour milk in bowl and enjoy."],"imageURL": "cereal.jpeg"},{ "name": "Cereal","ingredients": [{"quantity": "1","name": " beef roast", "type": "Meat"}]} ]';
//for the json data to be read in 

 let recipes;
 fetch("./recipe.json").then(
         function(u){ return u.json();}
       ).then(
         function(json){
           recipes = json;
         }
       )

function main(){

    // for the menu button to open and close
//    var menuButton = document.querySelector(".menuButton");
//    menuButton.addEventListener("click", function(){ document.querySelector("body").classList.toggle("active");});

    // for the recipe form
    document.getElementById("processRecipeButton").onclick = processRecipeData;

}

function processRecipeData(){

    var preference = document.getElementById("preference");
    //preference.style.display="block"
    var options = preference.options;
    var restrictions = Array.from(options);
    restrictions.forEach(r => {
                        if(r.selected){
                            allergenInformation.push(r.value)
                        }});
    // check to see if none was selected, in which case the allergenInformation array should be empty
    if(allergenInformation.includes('None')){
        allergenInformation = new Array();
    }
    var levelSelected = document.getElementById("levelSelection");
    level = levelSelected.options[levelSelected.selectedIndex].text
    document.getElementById("levelSelection").style.display = "none";
     document.getElementById("allergyForm").style.display = "none";
     document.getElementById("levelQuestion").style.display = "none";
   // document.getElementById("allergenForm").style.display = "none";
    showRecipe(0);

}

//function to display the recipe taken based on options/levels from json
function showRecipe(num){

    recipe = recipes[num];

    //display found recipe
    var divName =  document.getElementById("recipeName");
    heading = document.createElement("h1");
    heading.innerHTML = recipe.name;
    divName.appendChild(heading);

    var saveButton = document.createElement("button");
    saveButton.innerHTML = '<h6>save to pinned</h6>';
    saveButton.addEventListener("click",  function() {addToPinned(recipe.name)});
    divName.appendChild(saveButton);

    var divInfo = document.getElementById("recipeInfo");
    heading = document.createElement("h6");
    var info = recipe.info;
    //heading.innerHTML += ' | ';
    for (var i = 0; i < info.length; i++) {
        heading.innerHTML += info[i];
        //heading.innerHTML += ' | ';
    }
    divInfo.appendChild(heading);
    
    var divImg = document.getElementById("recipeImage");
    img = document.createElement("img");
    img.src = recipe.imageURL;
    //img.alt = recipe.name;
    img.width = "500";
    divImg.appendChild(img);

    let list = document.getElementById("ingredientsList");
    heading = document.createElement("h3");
    heading.innerHTML = "Ingredients";
    list.appendChild(heading)
    var ing = recipe.ingredients;
    ing.forEach((item)=>{
        var newCheckbox = document.createElement("input");
        newCheckbox.type = "checkbox";
        var span = document.createElement("span");
        span.classList.add('checkboxtext');


        var newCheckbox = document.createElement("input");
        newCheckbox.type = "checkbox";
        list.appendChild(newCheckbox);
        span.innerHTML  += " " + item.quantity + " ";
        span.innerHTML += item.name;
        list.appendChild(span);
        list.appendChild(document.createElement("br"));
      })

      var button = document.createElement("button");
      button.innerHTML = "add to shopping list";
      button.addEventListener("click",  function() {addToShoppingList(ing)});
      list.appendChild(button);


    var divInstructions = document.getElementById("instructionsList");
    heading = document.createElement("h3");
    heading.innerHTML = "Instructions:";
    divInstructions.appendChild(heading);
    var instructs = recipe.steps;
    instructs.forEach((item)=>{
        var newCheckbox = document.createElement("input");
        newCheckbox.type = "checkbox";
        var span = document.createElement("span");
        span.classList.add('checkboxtext');
        span.innerHTML += item;
        divInstructions.appendChild(newCheckbox);
        divInstructions.appendChild(span);
        divInstructions.appendChild(document.createElement("br"));
      })

    divInstructions.appendChild(document.createElement("br"));
}



//function to add the item to shoppingList
function addToShoppingList(item){
    shoppingList.push(item);
    alert("Added to Shopping List!");
    //console.log(shoppingList);
}

function addToPinned(item){
    pinned.push(item);
    alert("Added to Pinned Recipes!");
}

//function to add item to inventory
function addToInventory(item){
    inventory.push(item);
    alert("Added to Inventory!");
}

function addToList(item){
    var item = document.getElementById("itemName").value;
    console.log(item);
    var amount = document.getElementById("itemAmount").value;
    console.log(amount);
    var divTraderJoesList = document.getElementById("TraderJoesList");
    
    var store = document.getElementById("storeSelection");
    var newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    divTraderJoesList.appendChild(newCheckbox);
    divTraderJoesList.innerHTML += " " + amount + " ";
    divTraderJoesList.innerHTML += item;
    divTraderJoesList.appendChild(document.createElement("br"));
}