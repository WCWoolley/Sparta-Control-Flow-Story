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

if (name != null) {
  var fast = prompt(`Okay, but are you fast?`);
}

if (fast === `Yes` || fast === `yes`) {
  var fast = 'fast';
} else if (fast === `No` || fast === `no`) {
  var fast = 'nofast';
}

if (active != null) {
  var skills = prompt(`And which of these would you consider your special power?\n\n1. Witty Banter.\n2. Jiu Jitsu.\n3. Being a functioning member of society.`);
}

if (skills === '1' || skills === 'Witty Banter') {
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
    alert (`PRIORITIES GOOD END!`);
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
        alert (`NICE DAY OUT GOOD END!`);
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
            if (jump < 2 || jump === `Okay`) {
              var jump = 'jump';
            } else if (jump = 2 || jump === `Nah`) {
              var jump = 'nojump';
            }

            switch (jump) {
              case 'jump':
                alert (`You noticed something in you path at the last moment and managed to clear it.`);
                break;
              case 'nojump':
                alert (`You stumble slightly on something in your path.`);
                break;
              default: null
            }

            if (jump === 'jump' || jump === 'nojump') {
              alert (`A body! Wait, more than one! Suddenly it hits you.`);
              alert (`Living in the woods. Killing for sport.`);
              alert (`Eating all the bodies. Actual, cannibal Shia Labeouf.`);
              var sneak = prompt (`Now it's dark and you seem to have lost him, but you're hopelessly lost yourself. Stranded with a murderer.\n\n1. Jog\n2. Sneak`);
            }

            if (sneak <= 1 || sneak === `Jog`) {
              var sneak = 'nosneak';
            } else if (sneak > 1 || sneak === 'Sneak'){
              var sneak = 'sneak';
            }

            switch (sneak) {
              case 'sneak':
                alert (`You creep silently through the underbrush.`);
                break;
              case 'nosneak':
                alert (`You jog quickly through the underbrush.`);
                break;
              default: null
            }

            if (sneak === 'sneak' || sneak === 'nosneak') {
              alert (`A-ha! In the distance, a small cottage with a light on. Hope!`)
            }

            switch (sneak) {
              case 'sneak':
                alert (`You move stealthily towards it.`);
                break;
              case 'nosneak':
                alert (`You rush quickly towards it.`);
                break;
              default: null
            }

            if (sneak === 'sneak' || sneak === 'nosneak') {
              var trap = prompt (`But your leg! Ah! It's caught in a bear trap!\n\n1. Drag it with you.\n2. Gnaw off your leg.\n3. Pry off.`)
            }

            if (trap === `1` || trap === `Drag it with you`) {
              var trap = 'trap';
            } else if (trap === '2' || trap === 'Gnaw off your leg'){
              var trap = 'notrap';
            } else if (trap === '3' || trap === 'Pry it off'){
              var trap = prompt (`You aren't strong enough! Try something else!\n\n1. Drag it with you.\n2. Gnaw off your leg.`)
              if (trap === `1` || trap === `Drag it with you`) {
                var trap = 'trap';
              } else if (trap === '2' || trap === 'Gnaw off your leg'){
                var trap = 'notrap';
              }
            }

            switch (trap) {
              case 'trap':
                alert (`You limp towards the cottage, loudly dragging the bear trap.`);
                break;
              case 'notrap':
                alert (`Gnawing off your leg (quiet, quiet), you limp towards the cottage.`);
                break;
              default: null
            }

            if (sneak === 'sneak' && trap === 'notrap') {
              var strangle = prompt (`Sharpening an axe, he doesn't hear you enter.You're sneaking up behind him.\n\n1. Strangle.\n2. Take axe.`);
              if (strangle === `1` || strangle === `Strangle`) {
                var strangle = 'strangle';
              } else if (strangle === '2' || strangle === 'Take axe'){
                var strangle = 'nostrangle';
              }

              switch (strangle) {
                case "strangle":
                  alert (`Strangling superstar Shia Labeouf.`);
                  alert (`Fighting for your life with Shia Labeouf.`);
                  alert (`You notice a knife and make to grab it!`);
                  if (fast === 'fast') {
                    var stab = prompt (`Wrestling a knife from Shia Labeouf, stab it in his...`);

                    switch (stab) {
                      case 'Kidney' || 'kidney':
                        alert (`Safe at last from Shia Labeouf`);
                        alert (`You limp into the dark woods, blood oozing from your stump leg. But you have won. You've beaten Shia Labeouf`);
                        alert (`Wait! He isn't dead! Shia Surprise! There's a gun to your head, and death in his eyes!`);

                        switch (skills) {
                          case 2:
                            alert (`But you can do Jiu Jitsu, bodyslam superstar Shia Labeouf.`)
                            alert (`Legendary fight with Shia Labeouf. Normal Tuesday night for Shia Labeouf. You try to swing the axe at Shia Labeouf, but blood is draining fast from your stump leg.`)
                            alert (`He dodges every swipe, he parries to the left. You counter to the right, you catch him in the neck. You're chopping off his head now.`)
                            alert (`You have just decapitated Shia Labeouf.`)
                            alert (`His head topples to the floor, expressionless. You fall to your knees and catch your breath.`)
                            alert (`You're finally safe from Shia Labeouf.`)
                            alert (`BEST END`)
                            break;
                          default:
                            alert (`But you can't do Jiu Jitsu and your sharp wit won't save you here! Body slammed by superstar Shia Labeouf`)
                            alert (`BODYSLAM BAD END`)
                        }

                        break;
                      default:
                        alert (`You miss your mark and Shia Labeouf gets the upper hand!`);
                        alert (`You know no more.`);
                        alert (`TARGET BAD END`);
                    }

                  } else if (fast === 'nofast'){
                    alert (`You don't act fast enough! Shia Labeouf gets the upper hand!`);
                    alert (`He gives you a wicked grin, raising the knife. You know no more.`);
                    alert (`KNIFE BAD END`);
                  }
                  break;
                case "nostrangle":
                  alert (`The axe is lost across the room as you struggle. Pulling a hidden knife Shia Labeouf grins and you know no more.`);
                  alert (`AXE BAD END`);
                  break;
                default: null
              }
            } else {
              alert (`Sharpening an axe, he's staring right at you! You made too much noise!`);
              alert (`He gives you a wicked grin, raising the axe. You know no more.`);
              alert (`NO STEALTH BAD END`);
            }

            break;
          case false:
            alert (`You know you can't outrun him, you dive into the woods attempting to hide.`);
            alert (`You're in Shia Labeouf's world ${person[0]}. Did you really think you could hide?`);
            alert (`NOT ACTIVE BAD END!`);
            break;
          default: null

        }

        break;
      case `2` || `Defend yourself`:
        var run = false;
        var person = [name, active, skills, phone, run];
        alert (`With what ${person[0]}?! You were out for a walk!`);
        alert (`No match for such madness you quickly succumb. Shia Labeouf has you now..`);
        alert (`DEFEND YOURSELF BAD END`);
        break;
      default: null
    }

}
