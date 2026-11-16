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

function createWorkspace() {
    console.log("PING!! createWS chiamata!");
    const newWorkspaceInner = `
                    <img src="Pictures/liz-holmes.jpg" class="account-image">
                    <p class=>E. Holmes</p>
                    `;
    const newWorkspace = document.createElement("div");                
    const workspaceList = Array.from(document.getElementsByClassName("workspace-list"))[0];
    
    workspaceList.appendChild(newWorkspace);
    newWorkspace.innerHTML = newWorkspaceInner;
    newWorkspace.addEventListener("click", selectWorkspace);
    newWorkspace.classList.add("workspace-element", "background");

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.type = "button";
    deleteButton.textContent = "x";
    deleteButton.addEventListener("click", deleteElement);
    newWorkspace.appendChild(deleteButton);
}