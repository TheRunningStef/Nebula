const input = document.getElementById("polysearch");

function load_repo() {
  var request = new XMLHttpRequest();
  request.open("GET", "bots/repo.json", false);
  request.send(null)
  var botlist = JSON.parse(request.responseText);
  // Check version code here
  return botlist.bots
}

function load_bot_mods(code) {
  var request = new XMLHttpRequest();
  request.open("GET", "bots/" + code + "appendix.json", false);
  request.send(null)
  var modlist = JSON.parse(request.responseText);
  // Check version code here
  return modlist.modules
}

function enter(query) {
  if(event.key === 'Enter') {
        simplify(query.value);
  }
}

function simplify(value) {
  if (value.startsWith('$ ')) {
    value = value.slice(2);
    // run console command
  } elseif (value.startsWith('@')) {
    value = value.slice(1);

    value.toLowerCase();
    var words = value.split(" ");

    var bots = load_repo();
    var bot_code = bots[words[0]]
    if bot_code != null {
      words.shift();
      var mods = load_bot_mods(bot_code);
    } else {

    }
  }
  // Simplification code
}
