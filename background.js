chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });

var set_little_red_text = function () {
    var myRequest = new XMLHttpRequest();
    myRequest.open("GET", "https://www.facebook.com/events/510205582410097/", true);
    myRequest.send();
    myRequest.onreadystatechange=function()
    {
    if (myRequest.readyState==4 && myRequest.status==200)
      {
      facebook_html = myRequest.responseText;
      regex_pattern = /Going \((\d+)\)/ ;
      matches = regex_pattern.exec(facebook_html);
      going_string = matches[1];
      }
    };
    chrome.browserAction.setBadgeText({text: going_string});
};

setInterval(set_little_red_text, 10000);

chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.create({'url' : "https://www.facebook.com/events/510205582410097"});
});