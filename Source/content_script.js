var first_time_through_the_loop = true;

var haystackText = "";
function findMyText(needle, replacement) {
     if (haystackText.length == 0) {
          haystackText = document.getElementsByClassName("app-main")[0].innerHTML;
     }
     var match = new RegExp(needle, "ig");
     var replaced = "";
     if (replacement.length > 0) {
          replaced = haystackText.replace(match, replacement);
     }
     else {
          var boldText = "<div style=\"background-color: yellow; display: inline; font-weight: bold;\">" + needle + "</div>";
          replaced = haystackText.replace(match, boldText);
     }
     document.getElementsByClassName("app-main")[0].innerHTML = replaced;
}


$("body").bind("DOMSubtreeModified", function() {
	window.setTimeout(function() {
		if(first_time_through_the_loop) {}
			findMyText('chicken', '<img src="https://afeld.github.io/emoji-css/emoji/chicken.png"/>');
			first_time_through_the_loop = false;
		}
	}, 0);
});
