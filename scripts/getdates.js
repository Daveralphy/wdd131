const currentYearSpan = document.getElementById("currentyear");
if (currentYearSpan) {
    const today = new Date();
    currentYearSpan.textContent = today.getFullYear();
}

const lastModifiedP = document.getElementById("lastModified");
if (lastModifiedP) {
    lastModifiedP.textContent = `Last Modified: ${document.lastModified}`;
}