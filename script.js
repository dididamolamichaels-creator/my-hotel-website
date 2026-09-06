```javascript
function showMenu() {

    const special = document.getElementById("special");

    special.textContent =
        "Today's Special: Grilled chicken, roasted vegetables and our chef's special sauce. 🍽️";
}


document
    .getElementById("bookingForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const message =
            document.getElementById("bookingMessage");

        message.textContent =
            "Thank you! Your reservation request has been received. 🏨";

        this.reset();
    });
```
