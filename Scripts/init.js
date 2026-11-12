window.addEventListener("load", function() {
    const addBtn = Array.from(this.document.getElementsByClassName("add-button"));
    addBtn.forEach(btn => btn.addEventListener("click", addElement));
    const delBtn = Array.from(this.document.getElementsByClassName("delete-button"));
    delBtn.forEach(btn => btn.addEventListener("click", deleteElement));

    })
