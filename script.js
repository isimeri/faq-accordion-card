const items = document.querySelectorAll(".item");

items.forEach(item => {
    item.addEventListener("click", e => {
        console.log("clicc");
        console.log(item.childNodes);
        item.firstChild.classList.toggle("active");
        const content = item.querySelector(".item-body-content");
        if(item.firstChild.classList.contains("active"))
        {
            console.log("should make answer visible");
            content.style.maxHeight = content.scrollHeight + "px";
        }
        else
        {
            content.style.maxHeight = 0;
        }
    })
})