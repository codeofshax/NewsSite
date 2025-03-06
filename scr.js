function filterNews() {
    let category = document.getElementById("categorySelect").value;
    let newsItems = document.querySelectorAll(".news-item");

    newsItems.forEach(item => {
        if (category === "all") {
            item.style.display = "block";
        } else if (item.classList.contains(category)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
