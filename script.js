document.addEventListener("DOMContentLoaded", () => {
    const btns = document.querySelectorAll(".list-item"),
        wrapper = document.querySelector(".list");

    wrapper.addEventListener("click", (e) => {
        console.log(e.target);
        btns.forEach((btn) => {
            if (
                btn === e.target &&
                !btn.classList.contains("list-item-active")
            ) {
                btns.forEach((item) => {
                    item.classList.remove("list-item-active");
                });
                btn.classList.add("list-item-active");
            } else {
                btn.classList.remove("list-item-active");
            }
        });
    });
});
