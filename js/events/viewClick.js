function viewToggle(buttonID, viewState, containerID){

    const gridIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 10.58 10.58"><path d="M1.18.92a.26.26 0 0 0-.26.26v3.2a.26.26 0 0 0 .26.26h1.6a.26.26 0 0 0 .27-.27V1.18a.26.26 0 0 0-.27-.26zm3.32 0a.26.26 0 0 0-.27.26v3.2a.26.26 0 0 0 .27.26h1.6a.26.26 0 0 0 .26-.27V1.18A.26.26 0 0 0 6.1.92zm3.3 0a.26.26 0 0 0-.27.26v3.2a.26.26 0 0 0 .27.26h1.6a.26.26 0 0 0 .26-.26v-3.2A.26.26 0 0 0 9.4.92zM1.18 5.9a.26.26 0 0 0-.26.27V9.4a.26.26 0 0 0 .26.26h1.6a.26.26 0 0 0 .27-.26V6.17a.26.26 0 0 0-.27-.27zm3.32 0a.26.26 0 0 0-.27.27V9.4a.26.26 0 0 0 .27.26h1.6a.26.26 0 0 0 .26-.26V6.17a.26.26 0 0 0-.26-.27zm3.3 0a.26.26 0 0 0-.26.27V9.4a.26.26 0 0 0 .26.26h1.6a.26.26 0 0 0 .26-.26V6.17a.26.26 0 0 0-.26-.27z" style="paint-order:markers fill stroke;stroke-miterlimit:2.1;stroke-linecap:round;stroke-width:.780645;stroke:currentColor;fill:none"/></svg>`;
    const smallGridIcon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40" viewBox="0 0 10.58 10.58"><path id="a" d="M1.38.85h2.74a.53.53 45 0 1 .53.53v1.08a.53.53 135 0 1-.53.53H1.38a.53.53 45 0 1-.53-.53V1.38a.53.53 135 0 1 .53-.53Z" style="paint-order:stroke markers fill;stroke-opacity:1;stroke-dasharray:none;stroke-linejoin:miter;stroke-linecap:square;stroke-width:.643467;stroke:currentColor;fill:none"/><use xlink:href="#a" style="stroke-width:.79374997;stroke-dasharray:none" transform="translate(5.08)"/><use xlink:href="#a" transform="translate(5.08 3.37)"/><use xlink:href="#a" transform="translate(0 6.75)"/><use xlink:href="#a" transform="translate(5.08 6.75)"/><use xlink:href="#a" transform="translate(0 3.37)"/></svg>`;
    const smallListIcon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40" viewBox="0 0 10.58 10.58"><path id="a" d="M1.46.93h7.67a.53.53 45 0 1 .53.53v.9a.53.53 135 0 1-.53.52H1.46a.53.53 45 0 1-.53-.53v-.9a.53.53 135 0 1 .53-.52Z" style="paint-order:markers fill stroke;stroke-opacity:1;stroke-dasharray:none;stroke-miterlimit:2.1;stroke-linejoin:miter;stroke-linecap:square;stroke-width:.794797;stroke:currentColor;fill-opacity:1;fill:none"/><use xlink:href="#a" transform="translate(0 6.78)"/><use xlink:href="#a" transform="translate(0 3.39)"/></svg>`;
    const listIcon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40" viewBox="0 0 10.58 10.58"><path id="a" d="M1.7.9h7.18a.8.8 45 0 1 .8.8v2.15a.8.8 135 0 1-.8.8H1.7a.8.8 45 0 1-.8-.8V1.7a.8.8 135 0 1 .8-.8Z" style="paint-order:markers fill stroke;stroke-dasharray:none;stroke-miterlimit:2.1;stroke-linecap:square;stroke-width:.756889;stroke:currentColor;fill:none"/><use xlink:href="#a" transform="translate(0 5.01)"/></svg>`;
    const compactGridIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 10.58 10.58"><path d="M1.45.92a.53.53 0 0 0-.53.53V4.1a.53.53 0 0 0 .53.53H4.1a.53.53 0 0 0 .53-.53V1.45A.53.53 0 0 0 4.1.92zm5.03 0a.53.53 0 0 0-.53.53V4.1a.53.53 0 0 0 .53.53h2.66a.53.53 0 0 0 .52-.53V1.45a.53.53 0 0 0-.52-.53zM1.45 5.95a.53.53 0 0 0-.53.53v2.66a.53.53 0 0 0 .53.52H4.1a.53.53 0 0 0 .53-.52V6.48a.53.53 0 0 0-.53-.53zm5.03 0a.53.53 0 0 0-.53.53v2.66a.53.53 0 0 0 .53.52h2.66a.53.53 0 0 0 .52-.52V6.48a.53.53 0 0 0-.52-.53z" style="paint-order:stroke markers fill;stroke-opacity:1;stroke-dasharray:none;stroke-linejoin:miter;stroke-linecap:square;stroke-width:.779274;stroke:currentColor;fill:none"/></svg>`;

    const button = document.getElementById(buttonID);
    const container = document.getElementById(containerID);

    let currentView = "grid";

    updateButton();

    button.addEventListener("click", () => {

        if(currentView === "grid"){
            currentView = "smallGrid";
        } else if (currentView === "smallGrid"){
            currentView = "smallList";
        }
        else if (currentView === "smallList"){
            currentView = "list";
        } else {
            currentView = 'grid';
        }

        updateButton();
        viewState(currentView);
    });

    function updateButton(){
        if(currentView === "grid"){

            button.innerHTML = gridIcon;
            container.classList.remove('listView');

        } else if (currentView === "smallGrid"){
            button.innerHTML = smallGridIcon;
        }else if (currentView == "smallList"){
            
            button.innerHTML = smallListIcon;
            container.classList.add('smallListView');
        
        } else {
            button.innerHTML = listIcon;
            container.classList.remove('smallListView');
            container.classList.add('listView');
        }
    }
}
