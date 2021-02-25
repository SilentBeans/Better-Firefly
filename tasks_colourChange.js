var greenColours = {lightest: "#c6eae1",
                    lighter: "#91c9aa",
                    light: "#b8f2d2",
                    default: "#17bf63",
                    dark: "#149c52",
                    darker: "#0c6e38"}

var orangeColours = {lightest: "#e9cea1",
                    lighter: "#ffc875",
                    light: "#ffba52",
                    default: "#ff9900",
                    dark: "#ed8d00",
                    darker: "#db8200"}

var purpleColours = {lightest: "#c5b7e9",
                    lighter: "#e3c9ff",
                    light: "#b68de3",
                    default: "#a373d9",
                    dark: "#8d56cc",
                    darker: "#773eb8"}

var magentaColours = {lightest: "#e3baf5",
                     lighter: "#f6c3fa",
                     light: "#f393fa",
                     default: "#f680ff",
                     dark: "#bf52c7",
                     darker: "#a13da8"}

var redColours = {lightest: "#e9a0a7",
                  lighter: "#e38888",
                  light: "#ff5e5e",
                  default: "#e31717",
                  dark: "#b51212",
                  darker: "#8f0a0a"}



//get settings
chrome.storage.local.get(["colour", "dark_mode"], function(result) {
    if (result.colour == "green") {
        changePageColours(greenColours)
        if (result.dark_mode == "true") {
            changeGordanoLogo("gordano-green-black.png", "#252525")
        }
        else {
            changeGordanoLogo("gordano-green-white.png", "#fff")
        };
    }

    else if (result.colour == "magenta") {
        changePageColours(magentaColours)
        if (result.dark_mode == "true") {
            changeGordanoLogo("gordano-magenta-black.png", "#252525")
        }
        else {
            changeGordanoLogo("gordano-magenta-white.png", "#fff")
        };
    }

    else if (result.colour == "red") {
        changePageColours(redColours)
        if (result.dark_mode == "true") {
            changeGordanoLogo("gordano-red-black.png", "#252525")
        }
        else {
            changeGordanoLogo("gordano-red-white.png", "#fff")
        };
    }

    else if (result.colour == "orange") {
        changePageColours(orangeColours)
        if (result.dark_mode == "true") {
            changeGordanoLogo("gordano-orange-black.png", "#252525")
        }
        else {
            changeGordanoLogo("gordano-orange-white.png", "#fff")
        };
    }

    else if (result.colour == "purple") {
        changePageColours(purpleColours)
        if (result.dark_mode == "true") {
            changeGordanoLogo("gordano-purple-black.png", "#252525")
        }
        else {
            changeGordanoLogo("gordano-purple-white.png", "#fff")
        };
    }

    else if (result.colour == "default") {
        if (result.dark_mode == "true") {
            changeGordanoLogo("gordano-default-black.png", "#252525")
        };
    };
});


function changePageColours(mainColour) {

    //task params listeners
    window.addEventListener('hashchange', function(e){
        setTimeout(() => changePageColours(mainColour), 400);
    });

    document.querySelector("#react-task-listing > main > section > div.css-ioy4nl > div.css-em4wnk > div > div > div > div > div:nth-child(2)").addEventListener("click", function() {
        setTimeout(() => changePageColours(mainColour), 400);
    });

    setTimeout(function() {

        //links
        var links = document.getElementsByTagName("a")
        for (x in links) {
            
            try {
                links[x].style.color = mainColour["default"]
            }
            catch(TypeError) {
            };
        };
        //to do boxes
        for (i = 1; i < 10; i++) {
            try {
                elem = document.querySelector(`#react-task-listing > main > section > div.css-ioy4nl > div.css-431qs9 > div:nth-child(2) > ul > li:nth-child(${i}) > div > div > div.css-1vhkqql > div.css-1nsb5wb > span > span`)
                if (elem.innerHTML !== "Overdue") {
                    elem.style.backgroundColor = mainColour["dark"]
                };
            }
            catch (TypeError) {
                break;
            };
        };
    
    //set personal task text
    document.querySelector("#root > div:nth-child(5) > div > section > div:nth-child(2) > a.css-1vct9mv").style.color = "white";
    
    //page naviation
    try {
        document.querySelector("#react-task-listing > main > section > div.css-ioy4nl > div.css-431qs9 > div.css-1odht4c > ul > li:nth-child(1) > button > svg > path").style.fill = mainColour["default"]
        document.querySelector("#react-task-listing > main > section > div.css-ioy4nl > div.css-431qs9 > div.css-1odht4c > ul > li:nth-child(3) > button > svg > path").style.fill = mainColour["default"]
    }
    catch (TypeError) {}
    }, 1300);

    document.querySelector("#react-navigation > div > div > div > div > div.css-2e6eiu > div:nth-child(1) > a > div").style.backgroundColor = mainColour["default"];
    document.querySelector("#root > div:nth-child(5) > div > section > div:nth-child(2) > a.css-1vct9mv").style.backgroundColor = mainColour["default"];
    document.querySelector("#root > div:nth-child(5) > div > section > div:nth-child(2) > a.css-1vct9mv").style.borderColor = mainColour["default"];

    document.querySelector("#react-navigation > div > div > div > div > div.css-2e6eiu > div.css-s8vo47 > a > div").style.backgroundColor = mainColour["default"];     
    document.querySelector("#react-navigation > div > div > div > div > div.css-2e6eiu > div:nth-child(3) > a > div").style.backgroundColor = mainColour["default"];
    document.querySelector("#react-navigation > div > div > div > div > div.css-2e6eiu > div:nth-child(4) > a > div.css-7s9p2o").style.backgroundColor = mainColour["dark"];
    document.querySelector("#react-navigation > div > div > div > div > div.css-2e6eiu > div:nth-child(5) > a > div").style.backgroundColor = mainColour["dark"];

    document.querySelector("#react-task-listing > main > header").style.backgroundColor = mainColour["dark"];
    document.querySelector("#react-task-listing > main > section > div.css-ioy4nl > div.css-em4wnk > div > div > div > div > div.css-ozkhkv > div.css-zdpt2t > button").style.color = mainColour["default"];
}


function changeGordanoLogo(logoURL, logoBackground) {
    document.querySelector("#school-header > a > div").style.backgroundColor = logoBackground;
    document.querySelector("#school-header > a > div > div > div").style = `background-image:url(https://finleycooper.co.uk/static/images/better-firefly/${logoURL})`
}

