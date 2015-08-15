(function(){
  var player = {
    energy: 100
  };
  // Initialize variables to reference the main GUI nodes.
  var timeline = document.getElementById('timeline');
  var trail = document.getElementById('trail');
  var stats = document.getElementById('stats');
  var inventory = document.getElementById('inventory');
  var character = document.getElementById('character');
  var pathProgress = 0;
  var berries = document.getElementById('berry_discovery_icon');
  var berriesBlock = document.getElementById('berry_discovery');
  var water = document.getElementById('water_discovery_icon');
  var waterBlock = document.getElementById('water_discovery');


  // Initialize game timer
  var timeElapsed = 0;
  var timer = document.getElementById('timer');
  setInterval(function(){
    timeElapsed++;
    timer.innerHTML = "time: " + timeElapsed;
  },1000);

  //Timed Events
  // Option to eat berries
  setInterval(function(){
    if(player.berries !== undefined && player.berries > 0){
      eatBerriesBtn.classList.remove('hidden');
    }
  }, 10000);
  //Option to drink water
  setInterval(function(){
    if(player.water !== undefined && player.water > 0){
      drinkWaterBtn.classList.remove('hidden');
    }
  }, 5000)

  function gameEvents(){
    if (player.steps % 5 === 0){
      pickBerriesBtn.classList.remove('hidden');
      berries.style.opacity = '1';
      berries.style.scale = '1';
    }
    if (player.steps % 15 === 0){
      lookForWaterBtn.classList.remove('hidden');
      water.style.opacity = '1';
      water.style.scale = '1';
    }
    if (pathProgress >= 100){
        player.finished = timeElapsed;
        alert("You've made it to the end!");
    }
  }

  function updateStats(){
    inventory.innerHTML = "";
    for (var property in player){
      inventory.innerHTML += '<div>'+property + ": " + player[property] + '</div>';
    }
  }

  function increaseSteps(){
    var energyCost = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    player.energy -= energyCost;
    if (player.steps === undefined){
      player.steps = 0;
    }
    player.steps++;
    pathProgress+=5
    character.style.top = pathProgress+"%";
    berriesBlock.style.top = pathProgress+'%';
    waterBlock.style.top = pathProgress+'%';
    updateStats();
  }

  function walk(){
    // Disable the button on the click of the Walk the Trail button
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
    gameEvents();
  }

  function pickBerries(){
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
    pickBerriesBtn.classList.add('hidden');
    berries.style.opacity = '0';
    berries.style.scale = '.7';
    updateStats();
  }

  function eatBerries(){
    // decrease berry count by 1
    player.berries--;
    // increase energy count by 2
    player.energy+=2;
    // write a message to the DOM
    var message = document.createElement('p');
    message.innerHTML = "You ate berries and gained energy";
    timeline.insertBefore(message, timeline.firstChild);
    // remove the button
    eatBerriesBtn.classList.add('hidden');
    updateStats();
  }

  function lookForWater(){
    var waterRetrieved = Math.floor(Math.random() * 2);
    if (waterRetrieved === 1){
      if(player.water === undefined){
        player.water = 0;
      }
      player.water++;
      var successMessage = document.createElement('p');
      successMessage.innerHTML = "You found water";
      timeline.insertBefore(successMessage, timeline.firstChild);
    } else if (waterRetrieved === 0) {
      var failureMessage = document.createElement('p');
      failureMessage.innerHTML = "You couldn't find any water";
      timeline.insertBefore(failureMessage, timeline.firstChild);
    }
    lookForWaterBtn.classList.add('hidden');
    water.style.opacity = '0';
    water.style.scale = '.7';
    updateStats();
  }

  function drinkWater(){
    //decrease the water count by 1
    player.water--;
    //increase energy count by 10
    player.energy+=10;
    //write the message to the DOM
    var message = document.createElement('p');
    message.innerHTML = "You drank water and gained energy";
    timeline.insertBefore(message, timeline.firstChild);
    //remove the button
    drinkWaterBtn.classList.add('hidden');
    updateStats();
  }

  // initialize GUI
  var walkTrailBtn = document.getElementById('walk_trail');
  var pickBerriesBtn = document.getElementById('pick_berries')
  var eatBerriesBtn = document.getElementById('eat_berries');
  var lookForWaterBtn = document.getElementById('look_for_water');
  var drinkWaterBtn = document.getElementById('drink_water');
  walkTrailBtn.addEventListener('click', walk);
  pickBerriesBtn.addEventListener('click', pickBerries);
  eatBerriesBtn.addEventListener('click', eatBerries);
  lookForWaterBtn.addEventListener('click' , lookForWater);
  drinkWaterBtn.addEventListener('click', drinkWater);
  for (var property in player){
    inventory.innerHTML += '<div>'+property + ": " + player[property] + '</div>';
  }
  gameEvents();
})();
