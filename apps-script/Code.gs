/* बी-पार्ट सारथी – Google Apps Script web app
   App ची संपूर्ण फाईल तुमच्या Google Drive मध्ये आहे: "bpart-sarthi-app.html".
   हा Code.gs ती फाईल Drive मधून वाचून उघडतो – app अद्ययावत करायला फक्त Drive मधली फाईल बदलायची,
   Apps Script मध्ये काहीही paste / deploy करायचे नाही.
   (एकाच नावाच्या अनेक फाईल्स असतील तर सर्वात नवीन वापरली जाते.)
   App वापरणाऱ्याच्या ब्राउझरमध्येच चालते – PS फाईल्स / माहिती इंटरनेटवर कुठेही जात नाही. */
var APP_FILE = 'bpart-sarthi-app.html';

function doGet() {
  var it = DriveApp.getFilesByName(APP_FILE), best = null;
  while (it.hasNext()) {
    var f = it.next();
    if (f.isTrashed()) continue;
    if (!best || f.getDateCreated().getTime() > best.getDateCreated().getTime()) best = f;
  }
  var out;
  if (best) {
    out = HtmlService.createHtmlOutput(best.getBlob().getDataAsString('UTF-8'));
  } else {
    // Drive मध्ये फाईल नसेल तर प्रोजेक्टमधील Index (जुनी पद्धत) वापरा
    try { out = HtmlService.createTemplateFromFile('Index').evaluate(); }
    catch (e) { out = HtmlService.createHtmlOutput('<p style="font:18px sans-serif;padding:20px">App ची फाईल Google Drive मध्ये सापडली नाही: <b>' + APP_FILE + '</b></p>'); }
  }
  return out.setTitle('बी-पार्ट सारथी')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
function include(name) {
  return HtmlService.createHtmlOutputFromFile(name).getContent();
}
