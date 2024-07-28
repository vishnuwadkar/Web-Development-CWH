function createcard(title, cName, views, mnthold, duration, thumbnail) {
    //finish the function
    let vnum
    if (views<1000){
        vnum = views + " views";
    }
    else if (views < 1000000) {
        vnum = views / 1000 + "K views";
    }
    else if (views > 1000000) {
        vnum = views / 100000 + "M views";

    }
    let html = `       <div class="card">
    <div class="image">
        <img src="${thumbnail}" alt="" style="height: 85%; border-radius: 4px">
        <div class="caps">${duration}</div>
    </div>

    <div class="text">
        <h3>${title}</h3>
        <h5>${cName}</h5>
        <h5 style="display: inline-block;">${vnum}</h5>
        <h5 style="display: inline-block;">${mnthold}</h5>
    </div>
</div>`

document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}  

createcard("Introduction to backend | Sigma web dev","CodeWithHarry","56000","9 months","22:10","cwh.jpg")
createcard("Working with DOM | Sigma web dev","CodeWithHarry","7300000","12 months","10:10","cwh.jpg")
createcard("Javascript Basics | Sigma web dev","CodeWithHarry","562","2 months","21:10","cwh.jpg")
createcard("Starting With HTML | Sigma web dev","CodeWithHarry","982000","1 months","11:10","cwh.jpg")
createcard("Starting With HTML | Sigma web dev","CodeWithHarry","982000","1 months","11:10","cwh.jpg")
createcard("Introduction to backend | Sigma web dev","CodeWithHarry","56000","9 months","22:10","cwh.jpg")
createcard("Starting With HTML | Sigma web dev","CodeWithHarry","982000","1 months","11:10","cwh.jpg")
createcard("Working with DOM | Sigma web dev","CodeWithHarry","7300000","12 months","10:10","cwh.jpg")
