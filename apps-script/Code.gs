/* बी-पार्ट सारथी – Google Apps Script web app
   संपूर्ण app Index.html मध्ये आहे आणि वापरणाऱ्याच्या ब्राउझरमध्येच चालते
   (PS फाईल्स / माहिती इंटरनेटवर कुठेही जात नाही). हा Code.gs फक्त ते पान उघडतो. */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('बी-पार्ट सारथी')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
