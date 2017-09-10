    var link = document.querySelector(".write-us-button");
    var popup = document.querySelector(".modal-write-us");
    var close = modalWrite.querySelector(".modal-write-close");
    var form = modalWrite.querySelector(".write-us");
    var name = modalWriteForm.querySelector("[name=name]");
    var email = modalWriteForm.querySelector("[name=email]");
 
    var storageName = window.localStorage.getItem("name");
    var storageEmail = window.localStorage.getItem("email");


    writeLink.addEventListener("click", function(event) {
        event.preventDefault();

        modalWrite.classList.add("modal-show");
        modalWriteName.focus();

        if (storageName) {
            name.value = storageName;
            email.focus();
        }
    });

    modalWriteClose.addEventListener("click", function(event) {
        event.preventDefault();
        modalWrite.classList.remove("modal--show");
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

    modalWriteForm.addEventListener("submit", function(event) {
        if (!name.value || !email.value) {
            event.preventDefault();
            modalWrite.classList.remove("modal-error");
            modalWrite.offsetWidth = modalWrite.offsetWidth;
            modalWrite.classList.add("modal-error");
        } else {
            modalWrite.classList.remove("modal-error");
        }

    });
