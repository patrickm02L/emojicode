
function findMyText(needle, replacement) {
  var haystackText = document.getElementsByClassName("app-main")[0].innerHTML;
  var match = new RegExp(needle, "ig");
  var replaced = "";
  replaced = haystackText.replace(match, replacement);
  document.getElementsByClassName("app-main")[0].innerHTML = replaced;
}

window.setTimeout(function() {
  console.log("running");
  findMyText('chicken', '<img src="https://afeld.github.io/emoji-css/emoji/chicken.png"/>');
  findMyText('goat', '<img src="https://afeld.github.io/emoji-css/emoji/goat.png"/>');
}, 3000);
