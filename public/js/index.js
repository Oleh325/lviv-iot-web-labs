const HIDDEN_CLASSNAME = "hidden";

const sortCheckbox = document.getElementById("sort_checkbox");
const countButton = document.getElementById("count_button");
const countResult = document.getElementById("count_result");
const findButton = document.getElementById("search_button");
const clearButton = document.getElementById("clear_button");
const findInput = document.getElementById("find_input");
const catsContainer = document.getElementById("items_container");
const catCardsArray = [...document.querySelectorAll(".cats__cat-card")];
const sortedCatCards = catCardsArray.map((x) => x);

countButton.addEventListener('click', () => {
    countResult.innerHTML = `${catCardsArray.length} cats`;
});

findButton.addEventListener("click", () => {
    const catCardsArray = [...document.querySelectorAll(".cats__cat-card")];
    const titles = [];
    catCardsArray.forEach(catCard => {
        const titleElement = catCard.querySelector(".cats__cat-card-content").querySelector(".cats__cat-card-title");
        titles.push(titleElement.innerHTML);
    });
    const foundCats = titles.filter(title => title.search(findInput.value) !== -1);
    catCardsArray.forEach(catCard => {
        const titleElement = catCard.querySelector(".cats__cat-card-content").querySelector(".cats__cat-card-title");
        if (!foundCats.includes(titleElement.innerHTML)) {
            if (!catCard.classList.contains(HIDDEN_CLASSNAME)) {
                catCard.classList.add(HIDDEN_CLASSNAME);
            }
        } else {
            if (catCard.classList.contains(HIDDEN_CLASSNAME)) {
                catCard.classList.remove(HIDDEN_CLASSNAME);
            }
        }
    });
    sortedCatCards.forEach(catCard => {
        const titleElement = catCard.querySelector(".cats__cat-card-content").querySelector(".cats__cat-card-title");
        if (!foundCats.includes(titleElement.innerHTML)) {
            if (!catCard.classList.contains(HIDDEN_CLASSNAME)) {
                catCard.classList.add(HIDDEN_CLASSNAME);
            }
        } else {
            if (catCard.classList.contains(HIDDEN_CLASSNAME)) {
                catCard.classList.remove(HIDDEN_CLASSNAME);
            }
        }
    });
});

clearButton.addEventListener("click", () => {
    const catCardsArray = [...document.querySelectorAll(".cats__cat-card")];
    catCardsArray.forEach(catCard => {
        catCard.classList.remove(HIDDEN_CLASSNAME);
    });
    sortedCatCards.forEach(catCard => {
        catCard.classList.remove(HIDDEN_CLASSNAME);
    });

    findInput.value = "";
});

sortCheckbox.addEventListener("change", (event) => {
    if (event.target.checked) {
        sortedCatCards.sort((a, b) => 
            parseInt(a.querySelector(".cats__cat-card-content").querySelector(".cats__cat-card-cuteness-level").innerHTML.slice(0, -1)) - 
            parseInt(b.querySelector(".cats__cat-card-content").querySelector(".cats__cat-card-cuteness-level").innerHTML.slice(0, -1)));
        catsContainer.innerHTML = "";
        sortedCatCards.forEach(catCard => {
            catsContainer.insertAdjacentHTML(
                "afterbegin",
                catCard.outerHTML
            );
        });
    } else {
        catsContainer.innerHTML = "";
        catCardsArray.slice().reverse().forEach(catCard => {
            catsContainer.insertAdjacentHTML(
                "afterbegin",
                catCard.outerHTML
            );
        });
    }
});