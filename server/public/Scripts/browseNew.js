window.addEventListener("load", async function() {
    
    const elementsPerPage = 3;
    
    /* Init elements */
    for(let i = 0; i < elementsPerPage; i++) {
        const newBrowseElementInner = `
                        <div>
                            <img src="Pictures/liz-holmes.jpg" class="account-image">   
                        </div>
                        <div class="browse-description">
                            <p><span class="browse-name">E. Holmes</span> :/ /: <span class="browse-title">Theranos</span></p>
                        </div>
                    `;
    const newBrowseElement = document.createElement("div");                
    const browseGrid = Array.from(document.getElementsByClassName("the-grid"))[0];
    
    browseGrid.appendChild(newBrowseElement);
    newBrowseElement.innerHTML = newBrowseElementInner;
    
    newBrowseElement.classList.add("browse-entry");
    }    

    const browseElements = Array.from(document.getElementsByClassName("browse-entry"));
    const temp = await fetch(`/get-new-browse/`);
    const fetchedJSON = await temp.json();


    browseElements.forEach(el => {
        const browseTitle = el.getElementsByClassName("browse-title")[0]; 
        const browseName = el.getElementsByClassName("browse-name")[0];
        const ctr = browseElements.indexOf(el);
        browseTitle.innerHTML = Array.from(fetchedJSON.titles)[ctr];
        browseName.innerHTML = Array.from(fetchedJSON.names)[ctr];
    })
});

