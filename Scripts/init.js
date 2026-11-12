window.addEventListener("load", function() {
    const addElemBtn = Array.from(this.document.getElementsByClassName("add-button"));
    addElemBtn.forEach(btn => btn.addEventListener("click", addElement));
    const delElemBtn = Array.from(this.document.getElementsByClassName("delete-button"));
    delElemBtn.forEach(btn => btn.addEventListener("click", deleteElement));

    const addWindBtn = Array.from(this.document.getElementsByClassName("add-window-button"));
    addWindBtn.forEach(btn => btn.addEventListener("click", addWindow));
    })
