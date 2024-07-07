const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function showSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "flex"
}
function hideSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "none"
}