var first_time_through_the_loop = true;

function replaceTextOnPage(from, to){
  getAllTextNodes().forEach(function(node){
		debugger;
		//node.nodeValue = node.nodeValue.replace(new RegExp(quote(from), 'g'), to);
  });

  function getAllTextNodes(){
    var result = [];

    (function scanSubTree(node){
      if(node.childNodes.length)
        for(var i = 0; i < node.childNodes.length; i++)
          scanSubTree(node.childNodes[i]);
      else if(node.nodeType == Node.TEXT_NODE)
        result.push(node);
    })(document);

    return result;
  }

  function quote(str){
    return (str+'').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
  }
}

$("body").bind("DOMSubtreeModified", function() {
	window.setTimeout(function() {
		replaceTextOnPage('chicken', '<img src="https://afeld.github.io/emoji-css/emoji/chicken.png"/>');
	}, 0);
});
