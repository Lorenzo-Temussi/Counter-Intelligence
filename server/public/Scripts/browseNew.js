window.addEventListener("load", async function() {
    const prevPage = document.querySelector(".previous-page");
    const nextPage = document.querySelector(".next-page");
    let currentPage = 0;
    const numOfElementsPerPage = 4;
    
    
    /* Init elements */
    for(let i = 0; i < numOfElementsPerPage; i++) {
        const newBrowseElementInner = `
                        <div>
                            <img src="Pictures/liz-holmes.jpg" class="account-image">   
                        </div>
                        <div class="browse-description">
                            <p><span class="browse-name"></span> :/ /: <span class="browse-title"></span></p>
                        </div>
                    `;
    const newBrowseElement = document.createElement("div");                
    const browseGrid = Array.from(document.getElementsByClassName("the-grid"))[0];
    
    browseGrid.appendChild(newBrowseElement);
    newBrowseElement.innerHTML = newBrowseElementInner;
    
    newBrowseElement.classList.add("browse-entry");
    }    

    await updateBrowsePage(currentPage, numOfElementsPerPage);

    prevPage?.addEventListener("click", async () => {
        if (currentPage > 0) {
            currentPage--;
            await updateBrowsePage(currentPage, numOfElementsPerPage);
        }
    });

    nextPage?.addEventListener("click", goToNextPage);

    async function goToNextPage() {
        const nextPageNumber = currentPage + 1;
        const pageLoaded = await updateBrowsePage(nextPageNumber, numOfElementsPerPage);
        if (!pageLoaded) {
            return;
        }
        currentPage = nextPageNumber;
    }
});


async function updateBrowsePage(currentPage, numOfElementsPerPage) {
    const browseElements = Array.from(document.getElementsByClassName("browse-entry"));
    const params = new URLSearchParams({
        currentPage: String(currentPage),
        numOfElementsPerPage: String(numOfElementsPerPage)
    });
    const dbQueryCurrentPage = await fetch(`/get-new-browse/?${params}`);
    if (!dbQueryCurrentPage.ok) {
        throw new Error(`Failed to load browse entries (${dbQueryCurrentPage.status})`);
    }
    const fetchedJSON = await dbQueryCurrentPage.json();
    if (fetchedJSON.titles.length === 0) {
        return false;
    }

    browseElements.forEach((el, ctr) => {
        const browseTitle = el.getElementsByClassName("browse-title")[0]; 
        const browseName = el.getElementsByClassName("browse-name")[0];
        const title = fetchedJSON.titles[ctr];
        const name = fetchedJSON.names[ctr];

        if (title === undefined || name === undefined) {
            el.hidden = true;
            return;
        }

        el.hidden = false;

        browseTitle.textContent = title;
        browseName.textContent = name;
    })

    return true;
}
