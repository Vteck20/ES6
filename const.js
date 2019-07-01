// Const doesn't allow you to change a variable

function prtMany(str) {
  "use strict";

  var sentence = str + " is cool!";

  sentence = str + " is amazing!";

  for (var i = 0; i < str.length; i += 2) {
    console.log(sentence);
  }
}
prtMany("HelpGetJob");
