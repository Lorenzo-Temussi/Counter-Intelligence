window.addEventListener("load", function() {
    /* Init elements */
    for(let i = 0; i < 10; i++) {
        const newBrowseElementInner = `
                    <div class="browse-entry">
                        <div>
                            <img src="Pictures/liz-holmes.jpg" class="account-image">   
                        </div>
                        <div class="browse-description">
                            <p>E. Holmes</p>
                        </div>
                    </div>
                    `;
    const newBrowseElement = document.createElement("div");                
    const browseGrid = Array.from(document.getElementsByClassName("the-grid"))[0];
    
    browseGrid.appendChild(newBrowseElement);
    newBrowseElement.innerHTML = newBrowseElementInner;
    
    newBrowseElement.classList.add("browse-entry");
    }
    
    
    
});