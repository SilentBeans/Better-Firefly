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

//change Personal Pages to Better Firefly
document.querySelector("#icon-personal-pages").remove();
logoTag = document.createElement("img");
logosrc = document.createAttribute("src");
logoWidth = document.createAttribute("width");
logoHeight = document.createAttribute("height");
logosrc.value = "https://finleycooper.co.uk/static/images/better-firefly/white-logo.png";
logoWidth.value = "24";
logoHeight.value = "24";
logoTag.setAttributeNode(logosrc);
logoTag.setAttributeNode(logoHeight);
logoTag.setAttributeNode(logoWidth);
document.querySelector("#react-navigation > div > div > div > div > div.css-2e6eiu > div:nth-child(5) > a > div").appendChild(logoTag);

document.querySelector("#react-navigation > div > div > div > div > div.css-2e6eiu > div:nth-child(5) > a > span").innerHTML = "Better Firefly Help";

var helpLink = document.querySelector("#react-navigation > div > div > div > div > div.css-2e6eiu > div:nth-child(5) > a");
helpLink.href = "https://finleycooper.co.uk/better-firefly/help";
helpLink.setAttribute("target", "_blank")
helpLink.setAttribute("rel", "noopener noreferrer")

function setDarkmode() {
    document.body.style.backgroundColor = "#323232";// MAIN BACKGROUND
    document.querySelector("#root > div.header-container").style.backgroundColor = "#252525"; // HEADER
    document.querySelector("#root > div:nth-child(5) > div").style.backgroundColor = "#1f1f1f"; // TOP BAR
    document.querySelector("#react-navigation > div > div > div > div > div.css-2e6eiu > div:nth-child(1) > a > span").style.color = "white";
    document.querySelector("#react-navigation > div > div > div > div > div.css-2e6eiu > div.css-s8vo47 > a > span").style.color = "white";
    document.querySelector("#react-navigation > div > div > div > div > div.css-2e6eiu > div:nth-child(3) > a > span").style.color = "white";
    document.querySelector("#react-navigation > div > div > div > div > div.css-2e6eiu > div:nth-child(4) > a > span").style.color = "white";
    document.querySelector("#react-navigation > div > div > div > div > div.css-2e6eiu > div:nth-child(5) > a > span").style.color = "white";
    document.querySelector("#react-navigation > div > div > div > div > div.css-2e6eiu > div.css-s8vo47 > a").addEventListener("click", function() {
        if (this.getAttribute("aria-expanded") == "false") {
            setTimeout(() => {
            document.querySelector("#react-navigation > div > div > div > div > div.css-2e6eiu > div.css-s8vo47 > div > div > div.css-1ufjzz4 > a.css-1mgddn0").style.backgroundColor = "#222222";
            document.querySelector("#react-navigation > div > div > div > div > div.css-2e6eiu > div.css-s8vo47 > div > div > div.css-1ufjzz4 > ul").childNodes.forEach((node) => {
                node.firstChild.style.backgroundColor = "#222222";
                node.firstChild.style.color = "#ffffff"
            });
    
            document.querySelector("#react-navigation > div > div > div > div > div.css-2e6eiu > div.css-s8vo47 > div > div > div.css-1ufjzz4 > a.css-arx4sa").style.backgroundColor = "#222222";
            document.querySelector("#react-navigation > div > div > div > div > div.css-2e6eiu > div.css-s8vo47 > div > div > div.css-1ufjzz4").style.backgroundColor = "#222222";
            document.querySelector("#react-navigation > div > div > div > div > div.css-2e6eiu > div.css-s8vo47 > div > div > div.css-1ufjzz4 > a.css-arx4sa").style.color = "#ffffff";
            document.querySelector("#react-navigation > div > div > div > div > div.css-2e6eiu > div.css-s8vo47 > div > div > div.css-1mro4jk").childNodes.forEach((node) => {
                node.style.backgroundColor = "#222222";
            })
            document.querySelector("#react-navigation > div > div > div > div > div.css-2e6eiu > div.css-s8vo47 > div > div > div.css-1mro4jk").style.backgroundColor = "#222222";
            document.querySelector("#react-navigation > div > div > div > div > div.css-2e6eiu > div.css-s8vo47 > div > span").style.borderColor = "#222222";
            document.querySelector("#react-navigation > div > div > div > div > div.css-2e6eiu > div.css-s8vo47 > div > div > div.css-1mro4jk > a.css-1u2uwgm").style.color = "#ffffff"
            }, 0);
        }
    });
};

function removePFP() {
    document.querySelector("#root > div:nth-child(5) > div > section > div:nth-child(2) > div > button > img").remove(); // REMOVE PFP
}
