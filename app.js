alert(`The following adventure is based on a song. Enjoy!`);

var name = prompt(`So, who are you?`);

if (name != null) {
  var active = prompt(`Hello ${name}, are you an active person?`);
}

if (active === `Yes` || active === `yes`) {
  var active = true;
} else {
  var active = false;
}

if (active != null) {
  var skills = prompt(`And which of these would you consider your special power?\n\n1. Sick Bants.\n2. Jiu Jitsu.\n3. Being a functioning member of society.`);
}

if (skills === '1' || skills === 'Sick Bants') {
  var skills = 1;
} else if (skills === '2' || skills === 'Jiu Jitsu') {
  var skills = 2;
} else if (skills === '3' || skills === 'Being a functioning member of society') {
  var skills = 3;
}

var person = [name, active, skills];

switch (skills) {
  case 3:
    alert (`You've got important stuff to get done, you decide to stay in and be productive today.`);
    alert (`GOOD END!`);
    break;
  default:
    var phone = prompt (`Well ${person[0]}, you're walking in the woods. There's no one around, does your phone have battery?`);

    if (phone === `Yes` || phone === `yes`) {
      var phone = true;
    } else {
      var phone = false;
    }

    var person = {
      name: name,
      active: active,
      skills: skills,
      phone: phone
    };

    switch (person[`phone`]) {
      case true:
        alert (`After a nice stroll you use modern technology to find your car. What a lovely day this has been!`);
        alert (`GOOD END!`);
        break;
      case false:
        alert (`Out of the corner of your eye you spot him, Shia Labeouf.`);
        var run = prompt (`He's following you, about 30 feet back. He gets down on all fours and breaks into a sprint. He's gaining on you.\n\n1. Run.\n2. Defend yourself.`);
        break;
      default:
    }

    var person = [name, active, skills, phone, run];

    switch (person[4]) {
      case `1` || `Run`:
        var run = true;
        var person = [name, active, skills, phone, run];
        alert (`You're looking for your car, but you're all turned around. He's almost upon you now and you can see there's blood on his face! My god, there's blood everywhere!`);
        alert(`You start running for your life. (From Shia Labeouf.)`);
        alert(`He's brandishing a knife. (It's Shia Labeouf)`);
        alert(`Lurking in the shadows. (Hollywood superstar Shia Labeouf)`);

        switch (person[1]) {
          case true:
            var jump = prompt (`JUMP!\n\n1. Okay.\n2. Nah.`);
            break;
          case false:
            alert (`You know you can't outrun him, you dive into the woods attempting to hide.`);
            alert (`You're in Shia Labeouf's world ${person[0]}. Did you really think you could hide?`);
            alert (`NOT ACTIVE BAD END!`);
            break;
          default:

        }

        break;
      case `2` || `Defend yourself`:
        var run = false;
        var person = [name, active, skills, phone, run];
        alert (`With what ${person[0]}?! You were out for a walk!`);
        alert (`No match for such madness you quickly succumb. Shia Labeouf has you now..`);
        alert (`BAD END!`);
        break;
      default:
    }
}

if (jump < 2 || jump === `Okay`) {
  var jump = true;
} else {
  var jump = false;
}

switch (jump) {
  case true:
    alert (`You noticed something in you path at the last moment and managed to clear it.`);
    break;
  case false:
    alert (`You stumble slightly on something in your path.`);
    break;
  default:

}

if (jump != null) {
  alert (`A body! Wait, more than one! Suddenly it hits you.`);
  alert (`Living in the woods. Killing for sport.`);
  alert (`Eating all the bodies. Actual, cannibal Shia Labeouf.`);
  var sneak = prompt (`Now it's dark and you seem to have lost him, but you're hopelessly lost yourself. Stranded with a murderer.\n\n1. Jog\n2. Sneak`);
}

if (sneak <= 1 || sneak === `Jog`) {
  var sneak = false;
} else if (sneak > 1 || sneak === 'Sneak'){
  var sneak = true;
}

switch (sneak) {
  case true:
    alert (`You creep silently through the underbrush.`);
    break;
  case false:
    alert (`You jog quickly through the underbrush.`);
    break;
  default:

}
