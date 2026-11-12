
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
    
    console.log(this);
    let temp = this.parentElement.parentElement.getElementsByClassName("window-elements")[0].appendChild(newElem);
    temp.getElementsByClassName("delete-button")[0].addEventListener("click", deleteElement);


}

function addWindow() {
    const newWindowInner = `
        <div class="container">
            <div class="window-name">Games</div>
            <div class="window-content">
                <div class="window-elements">
                </div>
                <div class="add-elem">
                    <button class="add-button">+</button>
                </div>
            </div>
        </div>`

    const newWindow = document.createElement("div");
    newWindow.innerHTML = newWindowInner;
    const temp = document.getElementById("content").insertBefore(newWindow, this.parentElement);
    newWindow.getElementsByClassName("add-button")[0].addEventListener("click", addElement);

}