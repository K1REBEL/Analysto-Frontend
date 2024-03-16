document.addEventListener("DOMContentLoaded", function() {
    const editButtons = document.querySelectorAll(".edit-button");
    editButtons.forEach(function(editButton) {
        editButton.addEventListener("click", function() {
            const parentCard = editButton.closest(".pending-card");
            const dataValues = parentCard.querySelectorAll(".data-value, .phone, .method, .niche");
            dataValues.forEach(function(dataValue) {
                const input = document.createElement("input");
                input.setAttribute("type", "text");
                input.style.height="fit-content";
                input.style.width="100%";
                input.setAttribute("value", dataValue.textContent.trim());
                input.classList.add("form-control"); // Add Bootstrap form control class if needed
                dataValue.parentNode.replaceChild(input, dataValue);
            });
            editButton.textContent = "Accept"; // Change button text
            editButton.classList.remove("edit-button"); 
            editButton.addEventListener("click", function() {
                dataValues.forEach(function(dataValue, index) {
                    const inputValue = parentCard.querySelectorAll("input")[index].value;
                    const divTag = document.createElement("div");
                    divTag.classList.add("data-value", "p-2");
                    divTag.textContent = inputValue;
                    parentCard.querySelectorAll("input")[index].parentNode.replaceChild(divTag, parentCard.querySelectorAll("input")[index]);
                });
                const statusText = parentCard.querySelector(".me-5");
                statusText.textContent = "Accepted";
                statusText.style.color = "#28a745";
                document.getElementById("pending-word").style.display = "none";

                parentCard.querySelector(".edit-button").style.display = "none";

                parentCard.querySelector(".reject-button").style.display = "none";
                element.style.display = "none";

            });
        });
    });
    const rejectButtons = document.querySelectorAll(".reject-button");

rejectButtons.forEach(function(rejectButton) {
rejectButton.addEventListener("click", function() {
    const parentCard = rejectButton.closest(".pending-card");
    const statusText = parentCard.querySelector(".me-5");
                statusText.textContent = "Rejected";
                statusText.style.color = "#dc3545";
                document.getElementById("pending-word").style.display = "none";

    parentCard.querySelector(".edit-button").style.display = "none";
    parentCard.querySelector(".reject-button").style.display = "none";
});
});
});
