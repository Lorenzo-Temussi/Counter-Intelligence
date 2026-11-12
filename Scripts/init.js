window.addEventListener("load", function() {
    const addElemBtn = Array.from(this.document.getElementsByClassName("add-button"));
    addElemBtn.forEach(btn => btn.addEventListener("click", addElement));
    const delElemBtn = Array.from(this.document.getElementsByClassName("delete-button"));
    delElemBtn.forEach(btn => btn.addEventListener("click", deleteElement));

    const addWindBtn = Array.from(this.document.getElementsByClassName("add-window-button"));
    addWindBtn.forEach(btn => btn.addEventListener("click", addWindow));
    const sidebarToggleBtn = this.document.getElementById("sidebar-toggle-button");
    sidebarToggleBtn.addEventListener("click", toggleSidebar);
    })

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("hidden");

    const content = document.getElementById("content");
    content.style.width = sidebar.classList.contains("hidden") ? "80%" : "70%";
}