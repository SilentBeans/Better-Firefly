chrome.storage.local.get(['dark_mode', 'name'], function(result) {
    if (result.dark_mode == "true") {
        setDashDark();
    };
});

function setDashDark() {
    document.querySelector("#ffComponent_450616").style.backgroundColor = "#252525"; // dark links
    document.querySelector("#ffComponent_361776").style.backgroundColor = "#252525";  // dark gallery
    document.querySelector("#ffComponent_450616").style.color = "white"; // change text colour in useful links
    document.querySelector("#ffComponent_4 > div > div > section").style.border = "0px solid #ffffff"; // removing Tasks border
};

if (document.querySelector("#ffComponent_433303") !== null) {
    document.querySelector("#ffComponent_433303").remove(); // weird block that sometimes appears
};

//useful links
document.querySelector("#ffComponent_450616 > p.ff-style-guidance").innerHTML = "Useful links"; 
document.querySelector("#ffComponent_450616 > p:nth-child(2)").innerHTML = "Link to <a target='_blank' rel='noopener noreferrer' href='https://finleycooper.co.uk/better-firefly/help'>Better Firefly Help</a>"; // adding link to useful links
document.querySelector("#ffComponent_450616 > p:nth-child(3)").innerHTML = "Link to <a target='_blank' rel='noopener noreferrer' href='https://aka.ms/mstfw'>Teams</a>";

//deleting coloured psuedo elements
//Timetable
document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__header > h3").style.visibility = "hidden"
document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__header > h3 > span").style.visibility = "visible"
document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__header > h3 > span").style.float = "left"

//marks and feedback
document.querySelector("#ffComponent_4 > section > header > h2").remove();

var tag = document.createElement("h2");
var text = document.createTextNode("Marks and Feedback");
tag.style.cssText = "color:white;float:left;position:relative; left:15px;font-size:26px"
tag.appendChild(text);

document.querySelector("#ffComponent_4 > section > header").style.padding = "0px"
document.querySelector("#ffComponent_4 > section > header").appendChild(tag)

//deleting post, comments and edits
document.querySelector("#ffComponent_3 > div").remove()