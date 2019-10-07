var male = new Array("Boy", "Man", "Man", "Man", "Man", "Guy", "Mr.", "Doctor" , "El", "Professor", "Captain", "Agent", "The", "The", "The", "The", "Lord", "Sgt.", "General", "", "", "", "", "");
var female = new Array("Girl", "Woman", "Woman", "Woman", "Woman", "Gal", "Maid", "Princess", "Miss", "Doctor", "Professor", "Captain", "Agent", "The", "The", "The", "Sgt.", "General", "", "", "", "", "");
var adjective = new Array("Imperial", "Amazing", "Spectular", "Dino", "Massive", "Fantastic", "Wonder", "Techno", "Electro", "Hydro", "Giant", "Super", "Incredi", "Daring", "Mega", "Tiny", "Red", "Dark", "Orange", "Screaming", "Green", "Teal", "Blue", "Golden", "Fearless", "Great", "Ameri", "Pyro", "Robo", "American", "Cyber", "Frozen");
var noun = new Array("Spider", "Laser", "Microbe", "Spectre", "Scan", "Badger", "Lighting", "Thunder", "Eagle", "Hurricane", "Storm", "Typhoon", "Fire", "Flame", "Flash", "Night", "Whirlwind", "Wind", "Dawn", "Light", "Dragon", "Wolf", "Vemon", "Cobra", "Viper", "Condor", "Stalker", "Panther", "Puma", "Shadow", "Freeze", "Night", "Hammer", "Mist", "Tulip", "Octopus", "Inferno", "Magma", "Patriot", "Stag", "Rhino", "Mole", "Sloth" );
var randomNumber = Math.floor(Math.random() * male.length);
var randoPrefix = male[randomNumber];
var randoAdjective = adjective[Math.floor(Math.random() * adjective.length)];
var randoNoun = noun[Math.floor(Math.random() * noun.length)];

document.getElementById('title').style.display = 'none';
document.getElementById('homebutton').style.display = 'none';

$('#button-male').click(function(){
  var randomNumber = Math.floor(Math.random() * male.length);
  var randoPrefix = male[randomNumber];
	var randoAdjective = adjective[Math.floor(Math.random() * adjective.length)];
  var randoNoun = noun[Math.floor(Math.random() * noun.length)];
  document.getElementById('title').style.display = 'block';
  document.getElementById('homebutton').style.display = 'inline-block';
  if (randomNumber <= 7) {

    $("#name").html(randoAdjective + " " + randoNoun + " " + randoPrefix);
	} else {
    $("#name").html(randoPrefix + " " + randoAdjective + " " + randoNoun);
	}
});

$('#button-female').click(function(){
  var randomNumber = Math.floor(Math.random() * female.length);
  var randoPrefix = female[randomNumber];
	var randoAdjective = adjective[Math.floor(Math.random() * adjective.length)];
  var randoNoun = noun[Math.floor(Math.random() * noun.length)];
  document.getElementById('title').style.display = 'block';
  document.getElementById('homebutton').style.display = 'inline-block';
  if (randomNumber <= 7) {
    $("#name").html(randoAdjective + " " + randoNoun + " " + randoPrefix);
	} else {
    $("#name").html(randoPrefix + " " + randoAdjective + " " + randoNoun);
    }
    
});

