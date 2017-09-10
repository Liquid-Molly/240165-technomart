    var link = document.querySelector(".write-us-button");
    var popup = document.querySelector(".modal-write-us");
    var close = document.querySelector(".write-us-close");
    var form = document.querySelector(".write-us");
    var name = document.querySelector("[name=name]");
    var email = document.querySelector("[name=email]");
 
    var storageName = window.localStorage.getItem("name");
    var storageEmail = window.localStorage.getItem("email");


    link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("modal-show");
	});

    close.addEventListener("click", function(event) {
        event.preventDefault();
        modalWrite.classList.remove("modal-show");
        modalWrite.classList.remove("modal-error");
    });

    document.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
            console.log("ESC");
            if (modalWrite.classList.contains("modal-show")) {
                modalWrite.classList.remove("modal-show");
                modalWrite.classList.remove("modal-error");
            }
        }
    });

    form.addEventListener("submit", function(event) {
        if (!name.value || !email.value) {
            event.preventDefault();
            modalWrite.classList.remove("modal-error");
            modalWrite.offsetWidth = modalWrite.offsetWidth;
            modalWrite.classList.add("modal-error");
        } else {
            modalWrite.classList.remove("modal-error");
        }

    });
