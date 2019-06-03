var contextMenuItem = {
  "id" : "BookSearching",
  "title" : "比價: %s",
  "contexts" : ["selection"]
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
  if(clickData.menuItemId=="BookSearching"){
      var selection = clickData.selectionText;
var newUrl = "https://www.easysearch.com.tw/searches/search?utf8=✓&keyword="+ selection;
chrome.tabs.create({ url: newUrl });
  }
});
