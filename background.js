const DISCORD_URI_ENDPOINT = 'https://discord.com/api/oauth2/authorize';
const CLIENT_ID = encodeURIComponent('822570914456797205');
const RESPONSE_TYPE = encodeURIComponent('token');
const REDIRECT_URI = encodeURIComponent(chrome.identity.getRedirectURL());
const SCOPE = encodeURIComponent('identify'); //Allows to get Username and Avatar hash

function create_auth_endpoint() {

    let endpoint_url =
    `${DISCORD_URI_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

    return endpoint_url;
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

    chrome.identity.launchWebAuthFlow({
        url: create_auth_endpoint(),
        interactive: true
    }, (responseUrl) => {
        if (chrome.runtime.lastError) {
            sendResponse({response: "failed"});
        }

        url = new URL(responseUrl);
        hash = url.hash;

        let params = hash.split("&");

        const TOKEN = params[1].split("=")[1];

        fetch("https://discord.com/api/v8/users/@me", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${TOKEN}`
            }
        })
        .then(response => response.json())
        .then(data => {
            chrome.storage.local.set({"discordID": data["id"]});
            chrome.storage.local.set({"name": data["username"]});
            chrome.storage.local.set({"avatarHash": data["avatar"]});
        })
        .catch((error) => {
            sendResponse({response: "failed"});
        })
        
        sendResponse({response: "success"});
    })
    return true;
})
