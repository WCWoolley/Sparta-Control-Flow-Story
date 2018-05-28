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
} else {
  var skills = prompt(`Sorry, could you repeat that?\n\n1. Sick Bants.\n2. Jiu Jitsu.\n3. Being a functioning member of society.`);
}

var person = [name, active, skills];

switch (skills) {
  case 3:
    alert (`You've got important stuff to get done, you decide to stay in and be productive today.`)
    alert (`GOOD END!`)
    break;
  default:
}

var phone = prompt (`Well ${person[0]}, you're walking in the woods. There's no one around, does your phone have bettery?`);

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
