  document.getElementById('rmessage').addEventListener('submit', function (event) {
        const name = document.querySelector('input[name="uname"]').value.trim();
        const email = document.querySelector('input[name="umail"]').value.trim();
        const message = document.querySelector('textarea[name="umessage"]').value.trim();

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (name.length < 3) {
            alert("Name must be at least 3 characters long.");
            event.preventDefault();
            return;
        }

        if (!email.match(emailPattern)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
            return;
        }

        if (message.length < 10) {
            alert("Message must be at least 10 characters long.");
            event.preventDefault();
            return;
        }
    });