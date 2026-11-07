/* बी-पार्ट सारथी – Google Apps Script web app
   संपूर्ण app खालील HTML फाईल्समध्ये आहे आणि वापरणाऱ्याच्या ब्राउझरमध्येच चालते
   (PS फाईल्स / माहिती इंटरनेटवर कुठेही जात नाही). हा Code.gs फक्त ते पान जोडून उघडतो.
   लागणाऱ्या HTML फाईल्स (नावे अगदी अशीच): Index, Styles, Engine1, Engine2, Engine3, Engine4, Engine5, App1, App2 */
function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate()
    .setTitle('बी-पार्ट सारथी')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
function include(name) {
  return HtmlService.createHtmlOutputFromFile(name).getContent();
}
