function toggleLeftSidebar() {
    console.log("Expands the sb");
    this.classList.toggle("sidebar-compact");
    this.classList.toggle("sidebar-expanded");
}

function selectWorkspace() {
    const selectedElems = Array.from(document.getElementsByClassName("workspace-element selected"));
    selectedElems.forEach(el => {
        el.classList.remove("selected");
        el.classList.add("background");
    });
    this.classList.add("selected");
    this.classList.remove("background");
}   
