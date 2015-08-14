(function(){
  var player = {
    energy: 100
  };

  // Initialize variables to reference the main GUI nodes.
  var timeline = document.getElementById('timeline');
  var trail = document.getElementById('trail');
  var stats = document.getElementById('stats');

  function updateStats(){
    stats.innerHTML = "";
    for (var property in player){
      stats.innerHTML += '<div>'+property + ": " + player[property] + '</div>';
    }
  }

  function increaseSteps(){
    if (player.steps === undefined){
      player.steps = 0;
    }
    player.steps++;

    if(player.steps%10===0){
      offerBerries();
    }

    updateStats();
  }

  function walk(){
    // Disable the button on the click of the Go Forth button
    // walkTrailBtn.setAttribute('disabled', 'true');
    // walkTrailBtn.classList.add('inactive');
    // have the disabled button re-enable after 3 seconds
    // setTimeout(function(){
    //   walkTrailBtn.removeAttribute('disabled');
    //   walkTrailBtn.removeAttribute('class');
    // }, 3000);
    var message = document.createElement('p');
    message.innerHTML = "You continue down the trail";
    timeline.insertBefore(message, timeline.firstChild);
    increaseSteps();
  }

  function offerBerries(){
    var pickBerriesBtn = document.createElement('input');
    pickBerriesBtn.setAttribute('id', 'pick_berries');
    pickBerriesBtn.setAttribute('type', 'button');
    pickBerriesBtn.setAttribute('value', 'Pick Berries');
    pickBerriesBtn.addEventListener('click', pickBerries);
    trail.appendChild(pickBerriesBtn);
  }

  function pickBerries(){
    var button = document.getElementById('pick_berries');
    if(player.berries === undefined){
      player.berries = 0;
    }
    // Give the player a random number of berries between 1 & 10.
    var amtOfBerriesPicked = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    player.berries += amtOfBerriesPicked;

    // write the amount of berries picked into the timeline
    var message = document.createElement('p');
    message.innerHTML = "You picked " + amtOfBerriesPicked + " berries";
    timeline.insertBefore(message, timeline.firstChild);
    // Remove berry-pickin' button and update DOM.
    trail.removeChild(button);
    updateStats();
  }

  // initialize GUI
  var walkTrailBtn = document.createElement('input');
  walkTrailBtn.setAttribute('id', 'walk_trail');
  walkTrailBtn.setAttribute('type', 'button');
  walkTrailBtn.setAttribute('value', 'Go Forth')
  walkTrailBtn.addEventListener('click', walk);
  trail.appendChild(walkTrailBtn);
  stats.innerHTML = '<div>' + Object.keys(player) + ": " + player.energy + '</div>';

})();
