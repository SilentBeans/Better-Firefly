chrome.storage.local.get(['dark_mode', 'pfp_status', 'name'], function(result) {
    if (result.dark_mode == "true") {
        setDarkmode();
    };
    if (result.pfp_status == "true") {
        removePFP();
    };
    if (result.name != null) {
        document.querySelector("#root > div:nth-child(5) > div > section > div:nth-child(2) > div > button > span").innerHTML = result.name;
    };
});


function setDarkmode() {
    document.body.style.backgroundColor = "#323232";// MAIN BACKGROUND
    document.querySelector("#root > div.header-container").style.backgroundColor = "#252525"; // HEADER
    document.querySelector("#root > div:nth-child(5) > div").style.backgroundColor = "#1f1f1f"; // TOP BAR
    document.querySelector("#react-navigation > div > div > div > div > div.css-2e6eiu > div:nth-child(1) > a > span").style.color = "white";
    document.querySelector("#react-navigation > div > div > div > div > div.css-2e6eiu > div.css-s8vo47 > a > span").style.color = "white";
    document.querySelector("#react-navigation > div > div > div > div > div.css-2e6eiu > div:nth-child(3) > a > span").style.color = "white";
    document.querySelector("#react-navigation > div > div > div > div > div.css-2e6eiu > div:nth-child(4) > a > span").style.color = "white";
    document.querySelector("#react-navigation > div > div > div > div > div.css-2e6eiu > div:nth-child(5) > a > span").style.color = "white";
};

function removePFP() {
    document.querySelector("#root > div:nth-child(5) > div > section > div:nth-child(2) > div > button > img").remove(); // REMOVE PFP
};