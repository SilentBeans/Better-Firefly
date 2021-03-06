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
    //links
    var links = document.getElementsByTagName("a")
    for (x in links) {    
        try {
            links[x].style.color = mainColour["default"]
        }
        catch(TypeError) {
        };
    };

    //set personal task button styles
    document.querySelector("#root > div:nth-child(5) > div > section > div:nth-child(2) > a.css-1vct9mv").style.color = "white";
    document.querySelector("#root > div:nth-child(5) > div > section > div:nth-child(2) > a.css-1vct9mv").style.backgroundColor = mainColour["default"];
    document.querySelector("#root > div:nth-child(5) > div > section > div:nth-child(2) > a.css-1vct9mv").style.borderColor = mainColour["default"];

    //nav bar
    document.querySelector("#react-navigation > div > div > div > div > div.css-2e6eiu > div:nth-child(1) > a > div").style.backgroundColor = mainColour["default"];
    document.querySelector("#react-navigation > div > div > div > div > div.css-2e6eiu > div.css-s8vo47 > a > div").style.backgroundColor = mainColour["default"];     
    document.querySelector("#react-navigation > div > div > div > div > div.css-2e6eiu > div:nth-child(3) > a > div").style.backgroundColor = mainColour["default"];
    document.querySelector("#react-navigation > div > div > div > div > div.css-2e6eiu > div:nth-child(4) > a > div.css-7s9p2o").style.backgroundColor = mainColour["dark"];
    document.querySelector("#react-navigation > div > div > div > div > div.css-2e6eiu > div:nth-child(5) > a > div").style.backgroundColor = mainColour["dark"];

    //task header
    document.querySelector("#root > div:nth-child(7) > div > div:nth-child(1) > div > main > header").style.backgroundColor = mainColour["dark"];

    //task buttons
    document.querySelector("#root > div:nth-child(7) > div > div:nth-child(1) > div > main > section > div > div > div.css-431qs9 > div > div.ff_module-task-response-actions.ff_module-task-responses__actions > div > div > button:nth-child(1)").style.backgroundColor = mainColour["default"];
    document.querySelector("#root > div:nth-child(7) > div > div:nth-child(1) > div > main > section > div > div > div.css-431qs9 > div > div.ff_module-task-response-actions.ff_module-task-responses__actions > div > div > button:nth-child(1)").style.borderColor = mainColour["default"];
    document.querySelector("#root > div:nth-child(7) > div > div:nth-child(1) > div > main > section > div > div > div.css-431qs9 > div > div.ff_module-task-response-actions.ff_module-task-responses__actions > div > div > button:nth-child(3)").style.backgroundColor = mainColour["default"];
    document.querySelector("#root > div:nth-child(7) > div > div:nth-child(1) > div > main > section > div > div > div.css-431qs9 > div > div.ff_module-task-response-actions.ff_module-task-responses__actions > div > div > button:nth-child(3)").style.borderColor = mainColour["default"];

    //view description
    var viewDescriptionButton = document.querySelector("#root > div:nth-child(7) > div > div:nth-child(1) > div > main > section > div > div > div.css-em4wnk > div > ol > li:nth-child(2) > div > div.ff_module-form-summary__content > button");
    
    if (viewDescriptionButton !== null) {
        viewDescriptionButton.style.color = mainColour["default"];
        viewDescriptionButton.style.borderColor = mainColour["default"];
    };

    //view file and download file buttons

    function checkForFileAdded() {
        //find buttons by title
        var buttons = document.querySelectorAll('[title="View File"], [title="Download File"]')

        buttons.forEach(button => {
        button.style.color = mainColour["default"]; 
        button.style.borderColor = mainColour["default"];})
        }

    setInterval(() => checkForFileAdded(), 300)

    //send file listener
    document.querySelector("#root > div:nth-child(7) > div > div:nth-child(1) > div > main > section > div > div > div.css-431qs9 > div > div.ff_module-task-response-actions.ff_module-task-responses__actions > div > div > button:nth-child(1)").addEventListener("click", function(){
        setTimeout(() => {
            document.querySelector("#root > div:nth-child(17) > div > div > div > div.ff_container-dialog__body > div > div.item > div > div.ff-dialog-legacy > div > div > div.ff-jseditor-attachmentchooser-actions > div.ff-jseditor-attachmentchooser-action-list > span > a").style.color = mainColour["default"];
            document.querySelector("#root > div:nth-child(17) > div > div > div > div.ff_container-dialog__controls > button").style.backgroundColor = mainColour["default"];
        }, 200);
    });

    //check for marking button press
    function checkForMarking(button) {
        if (button.innerText == "Mark as To Do") {
            button.style.color = mainColour["default"]
            button.style.backgroundColor = "white"
            button.style.borderColor = mainColour["default"]
        }
        else {
            button.style.color = "white"
            button.style.backgroundColor = mainColour["default"]
            button.style.borderColor = mainColour["default"]
        }
    }
    setInterval(() => checkForMarking(document.querySelector("#root > div:nth-child(7) > div > div:nth-child(1) > div > main > section > div > div > div.css-431qs9 > div > div.ff_module-task-response-actions.ff_module-task-responses__actions > div > div > button:nth-child(2)")), 100)
}

function changeGordanoLogo(logoURL, logoBackground) {
    document.querySelector("#school-header > a > div").style.backgroundColor = logoBackground;
    document.querySelector("#school-header > a > div > div > div").style = `background-image:url(https://finleycooper.co.uk/static/images/better-firefly/${logoURL})`
}