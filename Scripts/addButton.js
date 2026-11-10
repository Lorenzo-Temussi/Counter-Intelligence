window.addEventListener("load", function() {
    const addBtn = Array.from(this.document.getElementsByClassName("add-button"));
    addBtn.forEach(btn => btn.addEventListener("click", addElement));
    
})

function addElement() {
    const dialog = document.createElement("dialog");

    dialog.classList.add("form-to-add");
    dialog.id = "dialog-form";
    const clone = document.getElementById("template-dialog").content.cloneNode(true);


    const exitButt = document.createElement("button");
    exitButt.textContent = "Close";
    exitButt.setAttribute("commandfor", "dialog-form");
    exitButt.setAttribute("command", "close");
    
    const confirmButt = document.createElement("button");
    confirmButt.textContent = "Confirm";

    

    document.body.append(dialog);
    dialog.showModal();

    dialog.append(exitButt, confirmButt);
    dialog.append(clone);

    /* 1: crea finestra per inserire dati */

    /* 2: parsa il link */

    /* 3: crea elemento con i dati inseriti nella finestra giusta */
}