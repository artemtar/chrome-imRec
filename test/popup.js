chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var activeTab = tabs[0];
    function showImages() {
        chrome.tabs.sendMessage(activeTab.id, { r: 'showImages' });
    }
    chrome.runtime.sendMessage({ r: 'getSettings', tab: activeTab }, function (settings) {
        document.getElementById('pauseChk').checked = settings.isPaused;
        document.getElementById('pauseTab').checked = settings.isPausedForTab;
        document.getElementById('excludeDomain').checked = settings.isBlackList ? !settings.isExcluded : settings.isExcluded;
        document.getElementById('excludeForTab').checked = settings.isExcludedForTab;
        document.getElementById('exclude-domain-label').innerText = (settings.isBlackList ? 'Add' : 'Exclude') + ' Website';
        document.getElementById('exclude-tab-wrap').style.display = settings.isBlackList ? 'none' : 'block';
    });
    document.getElementById('showImages').onclick = function () {
        showImages();
    };
});
document.getElementById('close').onclick = function () { close(); };
