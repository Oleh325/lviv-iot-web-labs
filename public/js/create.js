const cutenessInput = document.getElementById("cuteness_input");

cutenessInput.addEventListener("input", () => {
    document.getElementById("cuteness_percentage").innerHTML = `${cutenessInput.value}%`;
});