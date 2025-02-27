// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: 'He has a lot of connections',
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "green"
  },
  {
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: 26,
    description: 'PhD in plant toxicology. Adopted of Mr.Nobody',
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: 'white'
  },
  {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: 22,
    description: 'Billionaire video game designer',
    image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    color: 'purple'
  },
  {
    firstName: "Kassandra",
    lastName: "Peacock",
    occupation: "Actor",
    age: 31,
    description: 'She is an A-list movie star with a dark past',
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: 'red'
  },
  {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité",
    age: 36,
    description: 'She is from a wealthy family and uses her status and money to earn popularity',
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    color: 'blue'
  },
  {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football Player",
    age: 62,
    description: 'She is from a wealthy family and uses her status and money to earn popularity',
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    color: 'yellow'
  }
];

// Rooms Array

const roomsArray = [
  {
    name: 'Dining Room'
  },
  {
    name: 'Conservatory'
  },
  {
    name: 'Kitchen'
  },
  {
    name: 'Study'
  },
  {
    name: 'Library'
  },
  {
    name: 'Billiard Room'
  },
  {
    name: 'Lounge'
  },
  {
    name: 'Ballroom'
  },
  {
    name: 'Hall'
  },
  {
    name: 'Spa'
  },
  {
    name: 'Living Room'
  },
  {
    name: 'Observatory'
  },
  {
    name: 'Theater'
  },
  {
    name: 'Guest House'
  },
  {
    name: 'Patio'
  }
];

// Weapons Array

const weaponsArray = [
  {
    name: "rope",
    weight: 10
  },
  {
    name: "knife",
    weight: 8
  },
  {
    name: "candlestick",
    weight: 2
  },
  {
    name: "dumbell",
    weight: 30
  },
  {
    name: "poison",
    weight: 2
  },
  {
    name: "axe",
    weight: 15
  },
  {
    name: "bat",
    weight: 13
  },
  {
    name: "trophy",
    weight: 25
  },
  {
    name: "pistol",
    weight: 20
  }
];


// ITERATION 2

const generateRandomeNumber = (arr)=>{
  return Math.floor(Math.random()*(arr.length))
}

function selectRandom(arr) {
  return arr[generateRandomeNumber(arr)]
}

function pickMystery() {
  return {
    suspect: selectRandom(suspectsArray),
    weapon: selectRandom(weaponsArray),
    room: selectRandom(roomsArray)
  }
}

// ITERATION 3

function revealMystery(mistery) {

  return `${mistery.suspect.firstName} ${mistery.suspect.lastName} killed Mr. Boddy using the ${mistery.weapon.name} in the ${mistery.room.name}!`
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    suspectsArray,
    roomsArray,
    weaponsArray,
    pickMystery,
    revealMystery,
    selectRandom
  };
}
