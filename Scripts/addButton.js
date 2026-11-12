
function addElement() {
    /*const dialog = document.createElement("dialog");

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
    dialog.append(clone);*/

    /* 1: crea finestra per inserire dati */

    /* 2: parsa il link */

    /* 3: crea elemento con i dati inseriti nella finestra giusta */
    const newImg = "Pictures/birb.jpeg";
    const newLink = "https://google.com";
    const newName = "Angreyd Byrdes";

    const newElemInner = `<div class="window-element">
                <img class="elem-icon" src=${newImg}>
                <a class="elem-link" href=${newLink} target=_blank>${newName}</a>
                <button class="delete-button">x</button>
            </div>
            `
    
    const newElem = document.createElement("div");
    newElem.innerHTML = newElemInner;
    
    let temp = document.getElementById("w1").getElementsByClassName("window-elements")[0].appendChild(newElem);
    temp.getElementsByClassName("delete-button")[0].addEventListener("click", deleteElement);


}