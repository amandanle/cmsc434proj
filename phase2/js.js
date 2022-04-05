

// our global variables to store things, just using arrays but feel free to change it to maps if want to
// map item in shopping list to cost or how many or store (if we are doing that)
let shoppingList = new Array();
//map item in inventory to how much or date bought (if we are doing that)
let inventory = new Array();
//allergen info for recipes.
let allergenInformation = new Array();
// level of recipes
let level = new String();

//let recipesJson = '[{ "name": "Cereal", "info": ["easy", "vegetarian", "gluten-free"], "ingredients":[{"quantity": "2 cups","name": " cereal"},{"quantity": "2 cups","name": "milk"} ],"steps": ["Put cereal of choosing into bowl.","pour milk in bowl and enjoy."],"imageURL": "cereal.jpeg"},{ "name": "Cereal","ingredients": [{"quantity": "1","name": " beef roast", "type": "Meat"}]} ]';
//for the json data to be read in 

// let recipes;
// fetch("./recipe.json").then(
//         function(u){ return u.json();}
//       ).then(
//         function(json){
//           recipes = json;
//         }
//       )

function main(){

    // for the menu button to open and close
    var menuButton = document.querySelector(".menuButton");
    menuButton.addEventListener("click", function(){ document.querySelector("body").classList.toggle("active");});

    // for the recipe form
    //document.getElementById("processRecipeButton").onclick = processRecipeData;

}

function processRecipeData(){

    var preference = document.getElementById("preference");
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
    showRecipe();
}

//function to display the recipe taken based on options/levels from json
function showRecipe(){
    //remove the form??

    //find recipe (just using the first one for now)
    //can just iterate through the recipe's info to find satisfying recipe
    recipe = recipes[0];

    //display found recipe
    var divName =  document.getElementById("recipeName");
    divName.innerHTML = recipe.name;

    var divInfo = document.getElementById("recipeInfo");
    var info = recipe.info;
    for (var i = 0; i < info.length; i++) {
        divInfo.innerHTML += info[i];
        divInfo.innerHTML += ' ';
    }
    
    var divImg = document.getElementById("recipeImage");
    img = document.createElement("img");
    img.src = recipe.imageURL;
    divImg.appendChild(img);

    let list = document.getElementById("ingredientsList");
    var ing = recipe.ingredients;
    ing.forEach((item)=>{
        let li = document.createElement("li");
        li.innerText = item.name;
        var checkBox = document.createElement('input');
        checkBox.type = "checkbox";
        li.appendChild(checkBox);

        var button = document.createElement("button");
        button.innerHTML = "add to shopping list";
        button.addEventListener("click",  function() {addToShoppingList(item.name)});
        console.log(shoppingList);
        li.appendChild(button);
        list.appendChild(li);
      })

    var divInstructions = document.getElementById("instructionsList");
    var instructs = recipe.steps;
    instructs.forEach((item)=>{
        let li = document.createElement("li");
        li.innerText = item;
        var checkBox = document.createElement('input');
        checkBox.type = "checkbox";
        li.appendChild(checkBox);
        list.appendChild(li);
      })
}

//function to add the item to shoppingList
function addToShoppingList(item){
    shoppingList.push(item);
    //console.log(shoppingList);
}

//function to add item to inventory
function addToInventory(item){
    inventory.push(item);
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
    newCheckbox.innerHTML = amount;
    newCheckbox.innerHTML += ' '; 
    newCheckbox.innerHTML += item;
    divTraderJoesList.appendChild(newCheckbox);
    divTraderJoesList.innerHTML += amount;
    divTraderJoesList.innerHTML += item;
    alert(item);
}