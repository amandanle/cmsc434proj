

// our global variables to store things, just using maps or arrays but feel free to change it
// map item in shopping list to cost or how many or store (if we are doing that)
let shoppingList = new Map();
//map item in inventory to how much or date bought (if we are doing that)
let inventory = new Map();
//allergen info for recipes.
let allergenInformation = new Array();
// level of recipes
let level = new String();

function main(){

    // for the menu button to open and close
    var menuButton = document.querySelector(".menuButton");
    menuButton.addEventListener("click", function(){ document.querySelector("body").classList.toggle("active");});

    // for the recipe form
    document.getElementById("processRecipeButton").onclick = processRecipeData;

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
    console.log(level);
    console.log(allergenInformation);

}