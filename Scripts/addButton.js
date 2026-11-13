const addElement = (() => {
    console.log("called");
    let dialog;
    let form;
    let destination;

    function initializeAddLinkDialog() {
        dialog = document.getElementById("add-link-dialog");
        form = document.getElementById("add-link-form");
        const cancelButton = document.getElementById("cancel-add-link");
        dialog.classList.toggle("hidden");

        form.addEventListener("submit", handleFormSubmit);
        cancelButton.addEventListener("click", () => dialog.close());
    }

    function parseHttpUrl(value, input) {
        let url;
        try {
            url = new URL(value);
        } catch {
            url = null;
        }

        if (!url || (url.protocol !== "http:" && url.protocol !== "https:")) {
            input.setCustomValidity("Enter a valid http or https URL.");
            input.reportValidity();
            input.setCustomValidity("");
            return null;
        }

        input.setCustomValidity("");
        return url;
    }

    function handleFormSubmit(event) {
        event.preventDefault();

        const urlInput = form.querySelector('input[name="url"]');
        const imageInput = form.querySelector('input[name="image"]');
        const data = new FormData(form);
        const url = parseHttpUrl(String(data.get("url") ?? "").trim(), urlInput);

        if (!url) {
            return;
        }

        const name = String(data.get("name") ?? "").trim() || url.hostname;
        const imageValue = String(data.get("image") ?? "").trim();
        const imageUrl = imageValue
            ? parseHttpUrl(imageValue, imageInput)
            : null;

        if (imageValue && !imageUrl) {
            return;
        }
        if (!destination) {
            throw new Error("No destination window is selected.");
        }

        const row = document.createElement("div");
        row.className = "window-element";

        const image = document.createElement("img");
        image.className = "elem-icon";
        if (imageUrl) {
            image.src = imageUrl.href;
        } else {
            const faviconUrl = new URL("https://www.google.com/s2/favicons");
            faviconUrl.searchParams.set("domain_url", url.origin);
            faviconUrl.searchParams.set("sz", "64");
            image.src = faviconUrl.href;
        }
        image.alt = "";

        const link = document.createElement("a");
        link.className = "elem-link";
        link.href = url.href;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = name;

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.type = "button";
        deleteButton.textContent = "x";
        deleteButton.addEventListener("click", deleteElement);

        row.append(image, link, deleteButton);
        destination.append(row);
        destination = null;
        dialog.close();
    }

    window.addEventListener("load", initializeAddLinkDialog, { once: true });

    return function addElement() {
        destination = this
            .closest(".window-content")
            ?.querySelector(".window-elements");

        if (!destination) {
            throw new Error("The add button is not inside a window.");
        }

        form.reset();
        dialog.showModal();
    };
})();

function addWindow() {
    
    const newWindowInner = `
        <div class="container">
            <div class="window-name">New Window</div>
            <div class="window-content">
                <div class="window-elements">
                </div>
                <div class="add-elem">
                    <button class="add-button">+</button>
                </div>
            </div>
        </div>`;

    const newWindow = document.createElement("div");
    newWindow.innerHTML = newWindowInner;
    document.getElementById("content").insertBefore(newWindow, this.parentElement);
    newWindow.getElementsByClassName("add-button")[0]
        .addEventListener("click", addElement);
}
