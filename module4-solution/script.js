(function (window) {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var name in names) {
  var fl=names[name].charAt(0);
  var lw=fl.toLowerCase();
  if (lw==='j') {
    byeSpeaker.speak(names[name]);
  } else {
    helloSpeaker.speak(names[name]);
  }
}
}) (window);