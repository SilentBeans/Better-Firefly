function reloadChanges() {
    chrome.tabs.query(
        {
        active: true,
        currentWindow: true
        },
        ([currentTab]) => {
            try {
                const url = new URL(currentTab.url);
                const domain = url.hostname;
                if (domain != "gordano.fireflycloud.net") throw TypeError
                chrome.tabs.reload();
            }
            catch(TypeError) {
                document.getElementById("refresh-msg").style.visibility = "visible";
            }
        }
    );
}

chrome.storage.local.get(["dark_mode", "pfp_status", "autologin", "colour", "name"], function(result) {
    if (result.dark_mode == "true") {
        document.getElementById("darkmode").checked = true;
    };
    if (result.pfp_status == "true") {
        document.getElementById("pfpremove").checked = true;
    };
    if (result.autologin == "true") {
        document.getElementById("autologin").checked = true;
    };
    if (result.colour == "default") {
        document.getElementById("colour_default").checked = true;
    }
    else if (result.colour == "green") {
        document.getElementById("colour_green").checked = true;
    }
    else if (result.colour == "red") {
        document.getElementById("colour_red").checked = true;
    }
    else if (result.colour == "orange") {
        document.getElementById("colour_orange").checked = true;
    }
    else if (result.colour == "magenta") {
        document.getElementById("colour_magenta").checked = true;
    }
    else if (result.colour == "purple") {
        document.getElementById("colour_purple").checked = true;
    }
    if (result.name != null) {
        document.getElementById("name").value = result.name;
    };
    }
);

setTimeout(function(){
    let button = document.querySelector("#disordoauth2");

    button.addEventListener("click", () => {
        chrome.runtime.sendMessage({ message: 'discordoauth2'}, function (response) {
            if (response.response == "success") {
                reloadChanges()
            }
            else if (response.response == "failed") {
                let msg = document.getElementById("refresh-msg")
                msg.innerHTML = "Error occured authorising your request, try again or if the problem persists restart Chrome."
                msg.style.visibility = "visible";
            }
            else {
                console.log(response.response)
            }
        })
    })

    document.querySelector("#clear").addEventListener("click", () => {
        chrome.storage.local.clear();
        reloadChanges()
    })

    document.getElementById("submit").addEventListener("click", () => {
        if (document.getElementById("darkmode").checked) {
            chrome.storage.local.set({"dark_mode": "true"});
        }
        else {
            chrome.storage.local.set({"dark_mode": "false"});
        };
        
        if (document.getElementById("pfpremove").checked) {
            chrome.storage.local.set({"pfp_status": "true"});
        }
        else {
            chrome.storage.local.set({"pfp_status": "false"});
        };

        if (document.getElementById("autologin").checked) {
            chrome.storage.local.set({"autologin": "true"});
        }
        else {
            chrome.storage.local.set({"autologin": "false"});
        };

        if (document.getElementById("name")) {
            chrome.storage.local.set({"name": document.getElementById("name").value})
        }
        if (document.getElementById("colour_default").checked) {
            chrome.storage.local.set({"colour": "default"});
        }
        else if (document.getElementById("colour_green").checked) {
            chrome.storage.local.set({"colour": "green"});
        }
        else if (document.getElementById("colour_purple").checked) {
            chrome.storage.local.set({"colour": "purple"});
        }
        else if (document.getElementById("colour_red").checked) {
            chrome.storage.local.set({"colour": "red"});
        }
        else if (document.getElementById("colour_orange").checked) {
            chrome.storage.local.set({"colour": "orange"});
        }
        else if (document.getElementById("colour_magenta").checked) {
            chrome.storage.local.set({"colour": "magenta"});
        };

        reloadChanges()

})}, 100);
