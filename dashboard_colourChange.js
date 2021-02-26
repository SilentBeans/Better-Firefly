
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


chrome.storage.local.get(null, function(result) {
    var keys = Object.keys(result);
    if (keys.length === 0) {
        chrome.storage.local.set({"name": document.querySelector("#root > div:nth-child(5) > div > section > div:nth-child(2) > div > button > span").innerHTML})
        chrome.storage.local.set({"dark_mode": "true"});
        chrome.storage.local.set({"colour": "default"});
        chrome.storage.local.set({"autologin": "true"});
        chrome.storage.local.set({"pfp_status": "true"});
        location.reload();
    };
});


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
    document.querySelector("#root > div:nth-child(5) > div > section > div:nth-child(2) > a.css-1vct9mv").style.backgroundColor = mainColour["default"];
    document.querySelector("#root > div:nth-child(5) > div > section > div:nth-child(2) > a.css-1vct9mv").style.borderColor = mainColour["default"];

    document.querySelector("#react-navigation > div > div > div > div > div.css-2e6eiu > div:nth-child(1) > a > div.css-1djmjn9").style.backgroundColor = mainColour["default"];
    document.querySelector("#react-navigation > div > div > div > div > div.css-2e6eiu > div.css-s8vo47 > a > div").style.backgroundColor = mainColour["default"];
    document.querySelector("#react-navigation > div > div > div > div > div.css-2e6eiu > div:nth-child(3) > a > div").style.backgroundColor = mainColour["default"];
    document.querySelector("#react-navigation > div > div > div > div > div.css-2e6eiu > div:nth-child(4) > a > div").style.backgroundColor = mainColour["dark"];
    document.querySelector("#react-navigation > div > div > div > div > div.css-2e6eiu > div:nth-child(5) > a > div").style.backgroundColor = mainColour["dark"];

    //dashboard
    document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__header").style.backgroundColor = mainColour["dark"];
    document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__header > div > ul > li.selected").style.backgroundColor = mainColour["darker"];
    document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__header > div > ul > li.selected").style.borderColor = mainColour["darker"];

    document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__header > div > ul > li:nth-child(2) > a").style.color = mainColour["default"];

    document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__main > div:nth-child(1) > div.ff-timetable-thegrid > div > div").style.backgroundColor = mainColour["light"];
    document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__main > div:nth-child(1) > div.ff-timetable-thegrid > div > div > ol:nth-child(2)").style.backgroundColor = mainColour["lighter"];
    document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__main > div:nth-child(1) > div.ff-timetable-thegrid > div > div > ol:nth-child(4)").style.backgroundColor = mainColour["lighter"]
   
    document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__main > div:nth-child(1)").style.backgroundColor = mainColour["lightest"];

    //days at the top
    try {
        document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__main > div:nth-child(1) > div.ff-timetable-thegrid > div > div > ol.ff-timetable-day.ff-timetable-today > li.ff-timetable-columntitle.ff-timetable-block").style.borderColor = mainColour["darker"];
        document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__main > div:nth-child(1) > div.ff-timetable-thegrid > ol > li.ff-timetable-block.ff-timetable-break.ff-timetable-nolabel").style.backgroundColor = mainColour["lighter"]
        document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__main > div:nth-child(1) > div.ff-timetable-thegrid > ol > li:nth-child(8)").style.backgroundColor = mainColour["lighter"]
    }
    catch(TypeError) {}

    document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__main > div:nth-child(1) > div.ff-timetable-thegrid > div > div > ol:nth-child(5) > li.ff-timetable-columntitle.ff-timetable-block").style.color = mainColour["darker"];
    document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__main > div:nth-child(1) > div.ff-timetable-thegrid > div > div > ol:nth-child(4) > li.ff-timetable-columntitle.ff-timetable-block").style.color = mainColour["darker"];
    document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__main > div:nth-child(1) > div.ff-timetable-thegrid > div > div > ol:nth-child(3) > li.ff-timetable-columntitle.ff-timetable-block").style.color = mainColour["darker"];
    document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__main > div:nth-child(1) > div.ff-timetable-thegrid > div > div > ol:nth-child(2) > li.ff-timetable-columntitle.ff-timetable-block").style.color = mainColour["darker"];
    document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__main > div:nth-child(1) > div.ff-timetable-thegrid > div > div > ol:nth-child(1) > li.ff-timetable-columntitle.ff-timetable-block").style.color = mainColour["darker"];

  

    window.onload = function() {
        var links = document.getElementsByTagName("a")

        for (x in links) {
            try {
                links[x].style.color = mainColour["default"]
            }
            catch(TypeError) {
            };
        };

        document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__header > div > ul > li:nth-child(2) > a").style.color = mainColour["default"]

        //set a personal task
        document.querySelector("#root > div:nth-child(5) > div > section > div:nth-child(2) > a.css-1vct9mv").style.color = "white";

        //tasks
        document.querySelector("#ffComponent_4 > div > div > section > header").style.backgroundColor = mainColour["darker"];

        //to do boxes
        var toDoBoxes = ["#ffComponent_4 > div > div > section > div > ul > li:nth-child(1) > div > div:nth-child(2) > div.css-1nsb5wb > span > span", 
                        "#ffComponent_4 > div > div > section > div > ul > li:nth-child(2) > div > div:nth-child(2) > div.css-1nsb5wb > span > span",
                        "#ffComponent_4 > div > div > section > div > ul > li:nth-child(3) > div > div:nth-child(2) > div.css-1nsb5wb > span > span",
                        "#ffComponent_4 > div > div > section > div > ul > li:nth-child(4) > div > div:nth-child(2) > div.css-1nsb5wb > span > span"];

        for (elem in toDoBoxes) {
            element = document.querySelector(toDoBoxes[elem]);
            if (element == null) {
                continue
            };
            if (element.innerHTML !== "Overdue") {
                element.style.backgroundColor = mainColour["darker"];
            };
        };

        //mark as x boxes
        var markTaskButtons = ["#ffComponent_4 > div > div > section > div > ul > li:nth-child(1) > div > div:nth-child(3) > div > button",
                               "#ffComponent_4 > div > div > section > div > ul > li:nth-child(2) > div > div:nth-child(3) > div > button",
                               "#ffComponent_4 > div > div > section > div > ul > li:nth-child(3) > div > div:nth-child(3) > div > button",
                               "#ffComponent_4 > div > div > section > div > ul > li:nth-child(4) > div > div:nth-child(3) > div > button"];
        
        for (x in markTaskButtons) {
            button = document.querySelector(markTaskButtons[x]);
            if (button !== null) {
                button.style.borderColor = mainColour["default"];
                button.style.color = mainColour["default"];
            };
        };

        //bookmarks
        document.querySelector("#ffComponent_1 > div > div > div.ff_container-dashboard-section__header").style.backgroundColor = mainColour["dark"];
        document.querySelector("#ffComponent_1 > div > div > div.ff_container-dashboard-section__main > div:nth-child(1) > h4").style.backgroundColor = mainColour["darker"];
        document.querySelector("#ffComponent_1 > div > div > div.ff_container-dashboard-section__main > div:nth-child(2) > h4").style.backgroundColor = mainColour["darker"];

        //marks and feedback
        document.querySelector("#ffComponent_4 > section > header").style.backgroundColor = mainColour["darker"];

        //announcements and messages
        document.querySelector("#ffComponent_5980 > div > div.ff_container-dashboard-section__header").style.backgroundColor = mainColour["darker"];

        //timetable Next Week
        document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__main > div:nth-child(2) > div.ff-timetable-thegrid > div > div").style.backgroundColor = mainColour["light"];
        document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__main > div:nth-child(2) > div.ff-timetable-thegrid > div > div > ol:nth-child(2)").style.backgroundColor = mainColour["lighter"];
        document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__main > div:nth-child(2) > div.ff-timetable-thegrid > div > div > ol:nth-child(4)").style.backgroundColor = mainColour["lighter"]
   
        document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__main > div:nth-child(2)").style.backgroundColor = mainColour["lightest"];
        document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__main > div:nth-child(2) > div.ff-timetable-thegrid > ol > li.ff-timetable-block.ff-timetable-break.ff-timetable-nolabel").style.backgroundColor = mainColour["lighter"]
        document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__main > div:nth-child(2) > div.ff-timetable-thegrid > ol > li:nth-child(8)").style.backgroundColor = mainColour["lighter"]

        //days at the top
        document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__main > div:nth-child(2) > div.ff-timetable-thegrid > div > div > ol:nth-child(5) > li.ff-timetable-columntitle.ff-timetable-block").style.color = mainColour["darker"];
        document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__main > div:nth-child(2) > div.ff-timetable-thegrid > div > div > ol:nth-child(4) > li.ff-timetable-columntitle.ff-timetable-block").style.color = mainColour["darker"];
        document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__main > div:nth-child(2) > div.ff-timetable-thegrid > div > div > ol:nth-child(3) > li.ff-timetable-columntitle.ff-timetable-block").style.color = mainColour["darker"];
        document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__main > div:nth-child(2) > div.ff-timetable-thegrid > div > div > ol:nth-child(2) > li.ff-timetable-columntitle.ff-timetable-block").style.color = mainColour["darker"];
        document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__main > div:nth-child(2) > div.ff-timetable-thegrid > div > div > ol:nth-child(1) > li.ff-timetable-columntitle.ff-timetable-block").style.color = mainColour["darker"];
        
        //try statement for holidays
        try {
            document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__main > div:nth-child(2) > div.ff-timetable-thegrid > div > div > ol.ff-timetable-day.ff-timetable-today").style.backgroundColor = mainColour["lightest"];
            document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__main > div:nth-child(2) > div.ff-timetable-thegrid > div > div > ol.ff-timetable-day.ff-timetable-today > li.ff-timetable-columntitle.ff-timetable-block").style.borderColor = mainColour["darker"];
            document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__main > div:nth-child(2) > div.ff-timetable-thegrid > div > div > ol:nth-child(5) > li.ff-timetable-columntitle.ff-timetable-block").style.color = mainColour["darker"];
            document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__main > div:nth-child(2) > div.ff-timetable-thegrid > div > div > ol:nth-child(4) > li.ff-timetable-columntitle.ff-timetable-block").style.color = mainColour["darker"];
            document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__main > div:nth-child(2) > div.ff-timetable-thegrid > div > div > ol:nth-child(3) > li.ff-timetable-columntitle.ff-timetable-block").style.color = mainColour["darker"];
            document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__main > div:nth-child(2) > div.ff-timetable-thegrid > div > div > ol:nth-child(2) > li.ff-timetable-columntitle.ff-timetable-block").style.color = mainColour["darker"];
            document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__main > div:nth-child(2) > div.ff-timetable-thegrid > div > div > ol:nth-child(1) > li.ff-timetable-columntitle.ff-timetable-block").style.color = mainColour["darker"];
    
            document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__main > div:nth-child(2) > div.ff-timetable-thegrid > ol > li.ff-timetable-block.ff-timetable-break.ff-timetable-nolabel").style.backgroundColor = mainColour["lighter"];
            document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__main > div:nth-child(2) > div.ff-timetable-thegrid > ol > li:nth-child(8)").style.backgroundColor = mainColour["lighter"];
        }
        catch(TypeError) {}

       

        //this week next week bar
        function checkForWeekBar() {
            if (document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__header > div > ul > li:nth-child(2) > a") == null) {
                document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__header > div > ul > li.selected").style.backgroundColor = mainColour["darker"];
                document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__header > div > ul > li.selected").style.borderColor = mainColour["darker"];
                document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__header > div > ul > li:nth-child(1)").style.backgroundColor = "white";
                document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__header > div > ul > li:nth-child(1) > a").style.color = mainColour["default"];
            }
            else {
                document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__header > div > ul > li:nth-child(2) > a").style.color = mainColour["default"];
                document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__header > div > ul > li:nth-child(2)").style.backgroundColor = mainColour["darker"];
                document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__header > div > ul > li:nth-child(2)").style.backgroundColor = "white";
                document.querySelector("#ffComponent_6 > div > div.ff_container-dashboard-section__header > div > ul > li.selected").style.backgroundColor = mainColour["darker"];
            };
        }
        setInterval(checkForWeekBar, 100);

    }
}

function changeGordanoLogo(logoURL, logoBackground) {
    document.querySelector("#school-header > a > div").style.backgroundColor = logoBackground;
    document.querySelector("#school-header > a > div > div > div").style = `background-image:url(https://finleycooper.co.uk/static/images/better-firefly/${logoURL})`;
}
