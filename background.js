chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });

var set_little_red_text = function ()
{
  var myRequest = new XMLHttpRequest();
  var graph_api_url = "https://graph.facebook.com/510205582410097/attending?summary=1&access_token=CAACEdEose0cBAMnci1iFo0RI0S4MEZBoTP4qUwjwwecwHSMg1mwiROiR0SvhswERWfSfPvMfd3FMVJTyt0aeHLS0bkp3jLoTS9HzcZBQT8gg8rxCs7T6SHW1XhSqQpP4wPqMp7oM2UsGzYTw97nAEFAkpHKI7virhwyMV9R53ZATHcdnydT8GLVKbIQI5cZD"
  myRequest.open("GET", graph_api_url, true);
  myRequest.send();
  myRequest.onreadystatechange=function()
  {
    if (myRequest.readyState==4 && myRequest.status==200) {
      response_json = JSON.parse(myRequest.responseText);
      number_attending = response_json.summary.count;
    }
  };
  chrome.browserAction.setBadgeText({text: String(number_attending)});
};

setTimeout(set_little_red_text, 2000); // First load after two seconds.
setInterval(set_little_red_text, 10000);

chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.create({'url' : "https://www.facebook.com/events/510205582410097"});
});
