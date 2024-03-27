//
chrome.storage.local.set({ feed: true });
const optionsSelectors = document.querySelectorAll(".options-selector");
optionsSelectors.forEach(el => {
    const button = el;
    const toggleDot = button.querySelector("span")
    if (button.name === "hide-notifications") {
        chrome.storage.local.get("feed", function(data) {
            if (data.feed === true) {
                button.classList.toggle("bg-secondary")
                toggleDot.classList.toggle("translate-x-5")
                toggleDot.ariaHidden = "true"
            }
        })
    }
    button.addEventListener("click", function () {
        button.classList.toggle("bg-secondary")
        toggleDot.classList.toggle("translate-x-5");
        toggleDot.ariaHidden = toggleDot.ariaHidden === "true" ? "false" : "true"
        // chrome.storage.local.set({ feed: false });
        console.log("Hello")
    })
})
//
//
// optionsSelectors.forEach((el) => {
//     const button = el;
//     const toggleDot = button.querySelector("span.translate-x-0");
//
//
//     button.addEventListener("click", function() {
//         chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//             if (tabs[0].url.indexOf("https://www.youtube.com/") === 0) {
//                 button.classList.toggle("bg-secondary")
//                 toggleDot.classList.toggle("translate-x-5");
//                 chrome.tabs.sendMessage(tabs[0].id, { message: button.name });
//             } else {
//                 alert("QuietTube: This feature works only on YouTube.");
//             }
//         });
//     });
// });