const btns = document.querySelectorAll(".society-btn")
const inp = document.querySelector(".form-control")



btns.forEach(btn => {
    btn.addEventListener("click", function () {
        inp.value = btn.innerHTML;
    })
})

function search(event) {
    if (event.key === 'Enter') {
        // 在這裡執行搜索操作
        event.preventDefault();
    }
}