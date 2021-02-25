chrome.storage.local.get(["autologin"], function(result) {
    if (result.autologin == "true") {
        window.location.href = "https://gordano.fireflycloud.net/login/login.aspx?prelogin=https%3a%2f%2fgordano.fireflycloud.net%2fdashboard&kr=MSAADKeyRing";
    }
});
