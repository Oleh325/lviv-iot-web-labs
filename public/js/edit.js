const cutenessInput = document.getElementById("cuteness_edit_input");

cutenessInput.addEventListener("input", () => {
    document.getElementById("cuteness_edit_percentage").innerHTML = `${cutenessInput.value}%`;
});