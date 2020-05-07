const input = document.getElementById("polysearch");

function enter(query) {
  if(event.key === 'Enter') {
        simplify(query.value);
  }
}

function simplify(value) {
  if (value.startsWith('$ ')) {
    value = value.slice(2);
    // run console command
  }
  // Simplification code
}
