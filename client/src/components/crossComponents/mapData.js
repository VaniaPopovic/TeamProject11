import axios from "axios";


//LEVEL 1  --- 3 3 3
const mapData = new Crosswords({
  level: 1,
  totalCorrect: 7,
  clues: {

    across: [
      {
        number: 1,
        clue: "Animals people usually keep at home.",
        answer: "pet"
      }
    ],
    down: [
      {
        number: 1,
        clue: "Peppa is a ___?",
        answer: "pig"
      },
      {
        number: 2,
        clue: "Miao Miao Miao!",
        answer: "cat"
      }
    ]
  },
  grid: [
    {
      id: "A1",
      letter: null
    },
    {
      id: "A2",
      letter: null
    },
    {
      id: "A3",
      letter: null
    },
    {
      id: "A4",
      letter: null
    },
    {
      id: "A5",
      letter: null
    },
    {
      id: "A6",
      letter: null
    },
    {
      id: "A7",
      letter: null
    },
    {
      id: "A8",
      letter: null
    },
    {
      id: "B1",
      letter: null
    },
    {
      id: "B2",
      letter: null
    },
    {
      id: "B3",
      letter: null
    },
    {
      id: "B4",
      letter: null
    },
    {
      id: "B5",
      letter: "c",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 2,
      number: 2
    },
    {
      id: "B6",
      letter: null
    },
    {
      id: "B7",
      letter: null
    },
    {
      id: "B8",
      letter: null
    },
    {
      id: "C1",
      letter: null
    },
    {
      id: "C2",
      letter: null
    },
    {
      id: "C3",
      letter: null
    },
    {
      id: "C4",
      letter: null
    },
    {
      id: "C5",
      letter: "a",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 2
    },
    {
      id: "C6",
      letter: null
    },
    {
      id: "C7",
      letter: null
    },
    {
      id: "C8",
      letter: null
    },
    {
      id: "D1",
      letter: null
    },
    {
      id: "D2",
      letter: null
    },
    {
      id: "D3",
      letter: "p",
      across: true,
      clue_across: 1,
      down: false,
      clue_down: null,
      number: 1
    },
    {
      id: "D4",
      letter: "e",
      across: true,
      clue_across: 1,
      down: false,
      clue_down: null
    },
    {
      id: "D5",
      letter: "t",
      across: true,
      clue_across: 1,
      down: true,
      clue_down: 2
    },
    {
      id: "D6",
      letter: null
    },
    {
      id: "D7",
      letter: null
    },
    {
      id: "D8",
      letter: null
    },
    {
      id: "E1",
      letter: null
    },
    {
      id: "E2",
      letter: null
    },
    {
      id: "E3",
      letter: "i",
      across: true,
      clue_across: 1,
      down: false,
      clue_down: null
    },
    {
      id: "E4",
      letter: null
    },
    {
      id: "E5",
      letter: null
    },
    {
      id: "E6",
      letter: null
    },
    {
      id: "E7",
      letter: null
    },
    {
      id: "E8",
      letter: null
    },
    {
      id: "F1",
      letter: null
    },
    {
      id: "F2",
      letter: null
    },
    {
      id: "F3",
      letter: "g",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 1
    },
    {
      id: "F4",
      letter: null
    },
    {
      id: "F5",
      letter: null
    },
    {
      id: "F6",
      letter: null
    },
    {
      id: "F7",
      letter: null
    },
    {
      id: "F8",
      letter: null
    },
    {
      id: "G1",
      letter: null
    },
    {
      id: "G2",
      letter: null
    },
    {
      id: "G3",
      letter: null
    },
    {
      id: "G4",
      letter: null
    },
    {
      id: "G5",
      letter: null
    },
    {
      id: "G6",
      letter: null
    },
    {
      id: "G7",
      letter: null
    },
    {
      id: "G8",
      letter: null
    },
    {
      id: "H1",
      letter: null
    },
    {
      id: "H2",
      letter: null
    },
    {
      id: "H3",
      letter: null
    },
    {
      id: "H4",
      letter: null
    },
    {
      id: "H5",
      letter: null
    },
    {
      id: "H6",
      letter: null
    },
    {
      id: "H7",
      letter: null
    },
    {
      id: "H8",
      letter: null
    }
  ]

});



//LEVEL 2  --- 3 3 4
const mapData = new Crosswords({
  level: 2,
  totalCorrect: 8,
  clues: {

    across: [
      {
        number: 1,
        clue: "When you go to sleep you will lie in __",
        answer: "bed"
      },
      {
        number: 2,
        clue: "A soft cover that keeps you warm or comfortable.",
        answer: "rug"
      }
    ],
    down: [
      {
        number: 1,
        clue: "Please lock the __ when you go outside.",
        answer: "door"
      }

    ]
  },
  grid: [
    {
      id: "A1",
      letter: null
    },
    {
      id: "A2",
      letter: null
    },
    {
      id: "A3",
      letter: null
    },
    {
      id: "A4",
      letter: null
    },
    {
      id: "A5",
      letter: null
    },
    {
      id: "A6",
      letter: null
    },
    {
      id: "A7",
      letter: null
    },
    {
      id: "A8",
      letter: null
    },
    {
      id: "B1",
      letter: null
    },
    {
      id: "B2",
      letter: null
    },
    {
      id: "B3",
      letter: null
    },
    {
      id: "B4",
      letter: null
    },
    {
      id: "B5",
      letter: null
    },
    {
      id: "B6",
      letter: null
    },
    {
      id: "B7",
      letter: null
    },
    {
      id: "B8",
      letter: null
    },
    {
      id: "C1",
      letter: null
    },
    {
      id: "C2",
      letter: null
    },
    {
      id: "C3",
      letter: "b",
      across: true,
      clue_across: 1,
      down: false,
      clue_down: null,
      number: 1
    },
    {
      id: "C4",
      letter: "e",
      across: true,
      clue_across: 1,
      down: false,
      clue_down: null
    },
    {
      id: "C5",
      letter: "d",
      across: true,
      clue_across: 1,
      down: true,
      clue_down: 1,
      number: 1
    },
    {
      id: "C6",
      letter: null
    },
    {
      id: "C7",
      letter: null
    },
    {
      id: "C8",
      letter: null
    },
    {
      id: "D1",
      letter: null
    },
    {
      id: "D2",
      letter: null
    },
    {
      id: "D3",
      letter: null
    },
    {
      id: "D4",
      letter: null
    },
    {
      id: "D5",
      letter: "o",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 1
    },
    {
      id: "D6",
      letter: null
    },
    {
      id: "D7",
      letter: null
    },
    {
      id: "D8",
      letter: null
    },
    {
      id: "E1",
      letter: null
    },
    {
      id: "E2",
      letter: null
    },
    {
      id: "E3",
      letter: null
    },
    {
      id: "E4",
      letter: null
    },
    {
      id: "E5",
      letter: "o",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 1
    },
    {
      id: "E6",
      letter: null
    },
    {
      id: "E7",
      letter: null
    },
    {
      id: "E8",
      letter: null
    },
    {
      id: "F1",
      letter: null
    },
    {
      id: "F2",
      letter: null
    },
    {
      id: "F3",
      letter: null
    },
    {
      id: "F4",
      letter: null
    },
    {
      id: "F5",
      letter: "r",
      across: true,
      clue_across: 2,
      down: true,
      clue_down: 1,
      number: 2
    },
    {
      id: "F6",
      letter: "u",
      across: true,
      clue_across: 2,
      down: false,
      clue_down: null
    },
    {
      id: "F7",
      letter: "g",
      across: true,
      clue_across: 2,
      down: false,
      clue_down: null
    },
    {
      id: "F8",
      letter: null
    },
    {
      id: "G1",
      letter: null
    },
    {
      id: "G2",
      letter: null
    },
    {
      id: "G3",
      letter: null
    },
    {
      id: "G4",
      letter: null
    },
    {
      id: "G5",
      letter: null
    },
    {
      id: "G6",
      letter: null
    },
    {
      id: "G7",
      letter: null
    },
    {
      id: "G8",
      letter: null
    },
    {
      id: "H1",
      letter: null
    },
    {
      id: "H2",
      letter: null
    },
    {
      id: "H3",
      letter: null
    },
    {
      id: "H4",
      letter: null
    },
    {
      id: "H5",
      letter: null
    },
    {
      id: "H6",
      letter: null
    },
    {
      id: "H7",
      letter: null
    },
    {
      id: "H8",
      letter: null
    }
  ]

});


//LEVEL 3  --- 3 4 5
const mapData = new Crosswords({
  level: 2,
  totalCorrect: 8,
  clues: {

    across: [
      {
        number: 1,
        clue: "The color you get when you mix black and white.",
        answer: "grey"
      }
    ],
    down: [
      {
        number: 1,
        clue: "Number in a trio.",
        answer: "three"
      },
      {
        number: 2,
        clue: "The opposite of wet.",
        answer: "dry"
      }

    ]
  },
  grid: [
    {
      id: "A1",
      letter: null
    },
    {
      id: "A2",
      letter: null
    },
    {
      id: "A3",
      letter: null
    },
    {
      id: "A4",
      letter: null
    },
    {
      id: "A5",
      letter: null
    },
    {
      id: "A6",
      letter: null
    },
    {
      id: "A7",
      letter: null
    },
    {
      id: "A8",
      letter: null
    },
    {
      id: "B1",
      letter: null
    },
    {
      id: "B2",
      letter: null
    },
    {
      id: "B3",
      letter: null
    },
    {
      id: "B4",
      letter: null
    },
    {
      id: "B5",
      letter: null
    },
    {
      id: "B6",
      letter: null
    },
    {
      id: "B7",
      letter: null
    },
    {
      id: "B8",
      letter: null
    },
    {
      id: "C1",
      letter: null
    },
    {
      id: "C2",
      letter: null
    },
    {
      id: "C3",
      letter: null
    },
    {
      id: "C4",
      letter: "t",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 1,
      number: 1
    },
    {
      id: "C5",
      letter: null
    },
    {
      id: "C6",
      letter: "d",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 2,
      number: 2
    },
    {
      id: "C7",
      letter: null
    },
    {
      id: "C8",
      letter: null
    },
    {
      id: "D1",
      letter: null
    },
    {
      id: "D2",
      letter: null
    },
    {
      id: "D3",
      letter: null
    },
    {
      id: "D4",
      letter: "h",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 1
    },
    {
      id: "D5",
      letter: null
    },
    {
      id: "D6",
      letter: "r",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 2
    },
    {
      id: "D7",
      letter: null
    },
    {
      id: "D8",
      letter: null
    },
    {
      id: "E1",
      letter: null
    },
    {
      id: "E2",
      letter: null
    },
    {
      id: "E3",
      letter: "g",
      across: true,
      clue_across: 1,
      down: false,
      clue_down: null,
      number: 1
    },
    {
      id: "E4",
      letter: "r",
      across: true,
      clue_across: 1,
      down: true,
      clue_down: 1
    },
    {
      id: "E5",
      letter: "e",
      across: true,
      clue_across: 1,
      down: false,
      clue_down: null
    },
    {
      id: "E6",
      letter: "y",
      across: true,
      clue_across: 1,
      down: true,
      clue_down: 2
    },
    {
      id: "E7",
      letter: null
    },
    {
      id: "E8",
      letter: null
    },
    {
      id: "F1",
      letter: null
    },
    {
      id: "F2",
      letter: null
    },
    {
      id: "F3",
      letter: null
    },
    {
      id: "F4",
      letter: "e",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 1
    },
    {
      id: "F5",
      letter: null
    },
    {
      id: "F6",
      letter: null
    },
    {
      id: "F7",
      letter: null
    },
    {
      id: "F8",
      letter: null
    },
    {
      id: "G1",
      letter: null
    },
    {
      id: "G2",
      letter: null
    },
    {
      id: "G3",
      letter: null
    },
    {
      id: "G4",
      letter: "e",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 1
    },
    {
      id: "G5",
      letter: null
    },
    {
      id: "G6",
      letter: null
    },
    {
      id: "G7",
      letter: null
    },
    {
      id: "G8",
      letter: null
    },
    {
      id: "H1",
      letter: null
    },
    {
      id: "H2",
      letter: null
    },
    {
      id: "H3",
      letter: null
    },
    {
      id: "H4",
      letter: null
    },
    {
      id: "H5",
      letter: null
    },
    {
      id: "H6",
      letter: null
    },
    {
      id: "H7",
      letter: null
    },
    {
      id: "H8",
      letter: null
    }
  ]

});
//level4:
const mapData = new Crosswords({
  level: 4,
  totalCorrect: 13,
  clues: {

    across: [
      {
        number: 1,
        clue: "A smart thought.",
        answer: "idea"
      },
      {
        number: 3,
        clue: "A schoolroom table.",
        answer: "desk"
      }
    ],
    down: [
      {
        number: 2,
        clue: "The day your homework needs to be handed in.",
        answer: "due"
      },
      {
        number: 4,
        clue: "An insect bite.",
        answer: "sting"
      }

    ]
  },
  grid: [
    {
      id: "A1",
      letter: null
    },
    {
      id: "A2",
      letter: null
    },
    {
      id: "A3",
      letter: null
    },
    {
      id: "A4",
      letter: null
    },
    {
      id: "A5",
      letter: null
    },
    {
      id: "A6",
      letter: null
    },
    {
      id: "A7",
      letter: null
    },
    {
      id: "A8",
      letter: null
    },
    {
      id: "B1",
      letter: null
    },
    {
      id: "B2",
      letter: null
    },
    {
      id: "B3",
      letter: "i",
      across: true,
      clue_across: 1,
      down: false,
      clue_down: null,
      number: 1
    },
    {
      id: "B4",
      letter: "d",
      across: true,
      clue_across: 1,
      down: true,
      clue_down: 2,
      number: 2
    },
    {
      id: "B5",
      letter: "e",
      across: true,
      clue_across: 1,
      down: false,
      clue_down: null
    },
    {
      id: "B6",
      letter: "a",
      across: true,
      clue_across: 1,
      down: false,
      clue_down: null
    },
    {
      id: "B7",
      letter: null
    },
    {
      id: "B8",
      letter: null
    },
    {
      id: "C1",
      letter: null
    },
    {
      id: "C2",
      letter: null
    },
    {
      id: "C3",
      letter: null
    },
    {
      id: "C4",
      letter: "u",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 2
    },
    {
      id: "C5",
      letter: null
    },
    {
      id: "C6",
      letter: null
    },
    {
      id: "C7",
      letter: null
    },
    {
      id: "C8",
      letter: null
    },
    {
      id: "D1",
      letter: null
    },
    {
      id: "D2",
      letter: null
    },
    {
      id: "D3",
      letter: "d",
      across: true,
      clue_across: 3,
      down: false,
      clue_down: null,
      number: 3
    },
    {
      id: "D4",
      letter: "e",
      across: true,
      clue_across: 3,
      down: true,
      clue_down: 2
    },
    {
      id: "D5",
      letter: "s",
      across: true,
      clue_across: 3,
      down: true,
      clue_down: 4,
      number: 4
    },
    {
      id: "D6",
      letter: "k",
      across: true,
      clue_across: 3,
      down: false,
      clue_down: null
    },
    {
      id: "D7",
      letter: null
    },
    {
      id: "D8",
      letter: null
    },
    {
      id: "E1",
      letter: null
    },
    {
      id: "E2",
      letter: null
    },
    {
      id: "E3",
      letter: null
    },
    {
      id: "E4",
      letter: null
    },
    {
      id: "E5",
      letter: "t",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 4
    },
    {
      id: "E6",
      letter: null
    },
    {
      id: "E7",
      letter: null
    },
    {
      id: "E8",
      letter: null
    },
    {
      id: "F1",
      letter: null
    },
    {
      id: "F2",
      letter: null
    },
    {
      id: "F3",
      letter: null
    },
    {
      id: "F4",
      letter: null
    },
    {
      id: "F5",
      letter: "i",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 4
    },
    {
      id: "F6",
      letter: null
    },
    {
      id: "F7",
      letter: null
    },
    {
      id: "F8",
      letter: null
    },
    {
      id: "G1",
      letter: null
    },
    {
      id: "G2",
      letter: null
    },
    {
      id: "G3",
      letter: null
    },
    {
      id: "G4",
      letter: null
    },
    {
      id: "G5",
      letter: "n",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 4
    },
    {
      id: "G6",
      letter: null
    },
    {
      id: "G7",
      letter: null
    },
    {
      id: "G8",
      letter: null
    },
    {
      id: "H1",
      letter: null
    },
    {
      id: "H2",
      letter: null
    },
    {
      id: "H3",
      letter: null
    },
    {
      id: "H4",
      letter: null
    },
    {
      id: "H5",
      letter: "g",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 4
    },
    {
      id: "H6",
      letter: null
    },
    {
      id: "H7",
      letter: null
    },
    {
      id: "H8",
      letter: null
    }
  ]

});

//level 5
const mapData = new Crosswords({
  level: 5,
  totalCorrect: 15,
  clues: {

    across: [
      {
        number: 1,
        clue: "Ocean animals such as a white pointer or hammerhead.",
        answer: "shark"
      },
      {
        number: 2,
        clue: "The opposite of no.",
        answer: "yes"
      }
    ],
    down: [
      {
        number: 3,
        clue: "If you want to know something you __ a question.",
        answer: "ask"
      },
      {
        number: 4,
        clue: "This is green and you can grow a lawn out of it.",
        answer: "grass"
      },
      {
        number: 5,
        clue: "It is blue and sunny during the day and black at night.",
        answer: "sky"
      }

    ]
  },
  grid: [
    {
      id: "A1",
      letter: null
    },
    {
      id: "A2",
      letter: null
    },
    {
      id: "A3",
      letter: null
    },
    {
      id: "A4",
      letter: null
    },
    {
      id: "A5",
      letter: null
    },
    {
      id: "A6",
      letter: null
    },
    {
      id: "A7",
      letter: null
    },
    {
      id: "A8",
      letter: null
    },
    {
      id: "B1",
      letter: null
    },
    {
      id: "B2",
      letter: null
    },
    {
      id: "B3",
      letter: null
    },
    {
      id: "B4",
      letter: "g",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 4,
      number: 4
    },
    {
      id: "B5",
      letter: null
    },
    {
      id: "B6",
      letter: null
    },
    {
      id: "B7",
      letter: null
    },
    {
      id: "B8",
      letter: null
    },
    {
      id: "C1",
      letter: null
    },
    {
      id: "C2",
      letter: "a",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 3,
      number: 3
    },
    {
      id: "C3",
      letter: null
    },
    {
      id: "C4",
      letter: "r",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 4
    },
    {
      id: "C5",
      letter: null
    },
    {
      id: "C6",
      letter: "s",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 5,
      number: 5
    },
    {
      id: "C7",
      letter: null
    },
    {
      id: "C8",
      letter: null
    },
    {
      id: "D1",
      letter: null
    },
    {
      id: "D2",
      letter: "s",
      across: true,
      clue_across: 1,
      down: true,
      clue_down: 3,
      number: 1
    },
    {
      id: "D3",
      letter: "h",
      across: true,
      clue_across: 1,
      down: false,
      clue_down: null
    },
    {
      id: "D4",
      letter: "a",
      across: true,
      clue_across: 1,
      down: true,
      clue_down: 4
    },
    {
      id: "D5",
      letter: "r",
      across: true,
      clue_across: 1,
      down: false,
      clue_down: null
    },
    {
      id: "D6",
      letter: "k",
      across: true,
      clue_across: 1,
      down: true,
      clue_down: 5
    },
    {
      id: "D7",
      letter: null
    },
    {
      id: "D8",
      letter: null
    },
    {
      id: "E1",
      letter: null
    },
    {
      id: "E2",
      letter: "k",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 3
    },
    {
      id: "E3",
      letter: null
    },
    {
      id: "E4",
      letter: "s",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 4
    },
    {
      id: "E5",
      letter: null
    },
    {
      id: "E6",
      letter: "y",
      across: true,
      clue_across: 2,
      down: true,
      clue_down: 5,
      number: 2
    },
    {
      id: "E7",
      letter: "e",
      across: true,
      clue_across: 2,
      down: false,
      clue_down: null
    },
    {
      id: "E8",
      letter: "s",
      across: true,
      clue_across: 2,
      down: false,
      clue_down: null
    },
    {
      id: "F1",
      letter: null
    },
    {
      id: "F2",
      letter: null
    },
    {
      id: "F3",
      letter: null
    },
    {
      id: "F4",
      letter: "s",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 4
    },
    {
      id: "F5",
      letter: null
    },
    {
      id: "F6",
      letter: null
    },
    {
      id: "F7",
      letter: null
    },
    {
      id: "F8",
      letter: null
    },
    {
      id: "G1",
      letter: null
    },
    {
      id: "G2",
      letter: null
    },
    {
      id: "G3",
      letter: null
    },
    {
      id: "G4",
      letter: null
    },
    {
      id: "G5",
      letter: null
    },
    {
      id: "G6",
      letter: null
    },
    {
      id: "G7",
      letter: null
    },
    {
      id: "G8",
      letter: null
    },
    {
      id: "H1",
      letter: null
    },
    {
      id: "H2",
      letter: null
    },
    {
      id: "H3",
      letter: null
    },
    {
      id: "H4",
      letter: null
    },
    {
      id: "H5",
      letter: null
    },
    {
      id: "H6",
      letter: null
    },
    {
      id: "H7",
      letter: null
    },
    {
      id: "H8",
      letter: null
    }
  ]

});


//level 6
const mapData = new Crosswords({
  level: 6,
  totalCorrect: 15,
  clues: {

    across: [
      {
        number: 1,
        clue: "Everyone here, __ of us.",
        answer: "all"
      },
      {
        number: 2,
        clue: "An important school test.",
        answer: "exam"
      },
      {
        number: 3,
        clue: "The yellow part of an egg.",
        answer: "yolk"
      }
    ],
    down: [
      {
        number: 2,
        clue: "A long slippery fish.",
        answer: "eel"
      },
      {
        number: 4,
        clue: "Australian gemstones.",
        answer: "opals"
      }
    ]
  },
  grid: [
    {
      id: "A1",
      letter: null
    },
    {
      id: "A2",
      letter: null
    },
    {
      id: "A3",
      letter: null
    },
    {
      id: "A4",
      letter: null
    },
    {
      id: "A5",
      letter: null
    },
    {
      id: "A6",
      letter: null
    },
    {
      id: "A7",
      letter: null
    },
    {
      id: "A8",
      letter: null
    },
    {
      id: "B1",
      letter: null
    },
    {
      id: "B2",
      letter: null
    },
    {
      id: "B3",
      letter: null
    },
    {
      id: "B4",
      letter: null
    },
    {
      id: "B5",
      letter: "y",
      across: true,
      clue_across: 3,
      down: false,
      clue_down: null,
      number: 3
    },
    {
      id: "B6",
      letter: "o",
      across: true,
      clue_across: 3,
      down: true,
      clue_down: 4,
      number: 4
    },
    {
      id: "B7",
      letter: "l",
      across: true,
      clue_across: 3,
      down: false,
      clue_down: null
    },
    {
      id: "B8",
      letter: "k",
      across: true,
      clue_across: 3,
      down: false,
      clue_down: null
    },
    {
      id: "C1",
      letter: null
    },
    {
      id: "C2",
      letter: null
    },
    {
      id: "C3",
      letter: null
    },
    {
      id: "C4",
      letter: null
    },
    {
      id: "C5",
      letter: null
    },
    {
      id: "C6",
      letter: "p",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 4
    },
    {
      id: "C7",
      letter: null
    },
    {
      id: "C8",
      letter: null
    },
    {
      id: "D1",
      letter: null
    },
    {
      id: "D2",
      letter: null
    },
    {
      id: "D3",
      letter: null
    },
    {
      id: "D4",
      letter: "e",
      across: true,
      clue_across: 2,
      down: true,
      clue_down: 2,
      number: 2
    },
    {
      id: "D5",
      letter: "x",
      across: true,
      clue_across: 2,
      down: false,
      clue_down: null
    },
    {
      id: "D6",
      letter: "a",
      across: true,
      clue_across: 2,
      down: true,
      clue_down: 4
    },
    {
      id: "D7",
      letter: "m",
      across: true,
      clue_across: 2,
      down: false,
      clue_down: null
    },
    {
      id: "D8",
      letter: null
    },
    {
      id: "E1",
      letter: null
    },
    {
      id: "E2",
      letter: null
    },
    {
      id: "E3",
      letter: null
    },
    {
      id: "E4",
      letter: "e",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 2
    },
    {
      id: "E5",
      letter: null
    },
    {
      id: "E6",
      letter: "l",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 4
    },
    {
      id: "E7",
      letter: null
    },
    {
      id: "E8",
      letter: null
    },
    {
      id: "F1",
      letter: null
    },
    {
      id: "F2",
      letter: "a",
      across: true,
      clue_across: 1,
      down: false,
      clue_down: null,
      number: 1
    },
    {
      id: "F3",
      letter: "l",
      across: true,
      clue_across: 1,
      down: false,
      clue_down: null
    },
    {
      id: "F4",
      letter: "l",
      across: true,
      clue_across: 1,
      down: true,
      clue_down: 2
    },
    {
      id: "F5",
      letter: null
    },
    {
      id: "F6",
      letter: "s",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 4
    },
    {
      id: "F7",
      letter: null
    },
    {
      id: "F8",
      letter: null
    },
    {
      id: "G1",
      letter: null
    },
    {
      id: "G2",
      letter: null
    },
    {
      id: "G3",
      letter: null
    },
    {
      id: "G4",
      letter: null
    },
    {
      id: "G5",
      letter: null
    },
    {
      id: "G6",
      letter: null
    },
    {
      id: "G7",
      letter: null
    },
    {
      id: "G8",
      letter: null
    },
    {
      id: "H1",
      letter: null
    },
    {
      id: "H2",
      letter: null
    },
    {
      id: "H3",
      letter: null
    },
    {
      id: "H4",
      letter: null
    },
    {
      id: "H5",
      letter: null
    },
    {
      id: "H6",
      letter: null
    },
    {
      id: "H7",
      letter: null
    },
    {
      id: "H8",
      letter: null
    }
  ]

});

//level 7
const mapData = new Crosswords({
  level: 7,
  totalCorrect: 20,
  clues: {

    across: [
      {
        number: 1,
        clue: "The countries on earth and everyone who lives on it.",
        answer: "world"
      },
      {
        number: 2,
        clue: "You use this to do your hair.",
        answer: "comb"
      },
      {
        number: 3,
        clue: "You use this to see every countries location.",
        answer: "map"
      }
    ],
    down: [
      {
        number: 1,
        clue: "You can wear it and check the time.",
        answer: "watch"
      },
      {
        number: 4,
        clue: "Someone who walks a catwalk to show off new clothes.",
        answer: "model"
      },
      {
        number: 5,
        clue: "A baby sheep.",
        answer: "lamb"
      }
    ]
  },
  grid: [
    {
      id: "A1",
      letter: null
    },
    {
      id: "A2",
      letter: "w",
      across: true,
      clue_across: 1,
      down: true,
      clue_down: 1,
      number: 1
    },
    {
      id: "A3",
      letter: "o",
      across: true,
      clue_across: 1,
      down: false,
      clue_down: null
    },
    {
      id: "A4",
      letter: "r",
      across: true,
      clue_across: 1,
      down: false,
      clue_down: null
    },
    {
      id: "A5",
      letter: "l",
      across: true,
      clue_across: 1,
      down: true,
      clue_down: 5,
      number: 5
    },
    {
      id: "A6",
      letter: "d",
      across: true,
      clue_across: 1,
      down: false,
      clue_down: null
    },
    {
      id: "A7",
      letter: null
    },
    {
      id: "A8",
      letter: null
    },
    {
      id: "B1",
      letter: null
    },
    {
      id: "B2",
      letter: "a",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 1
    },
    {
      id: "B3",
      letter: null
    },
    {
      id: "B4",
      letter: null
    },
    {
      id: "B5",
      letter: "a",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 5
    },
    {
      id: "B6",
      letter: null
    },
    {
      id: "B7",
      letter: null
    },
    {
      id: "B8",
      letter: null
    },
    {
      id: "C1",
      letter: null
    },
    {
      id: "C2",
      letter: "t",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 1
    },
    {
      id: "C3",
      letter: null
    },
    {
      id: "C4",
      letter: null
    },
    {
      id: "C5",
      letter: "m",
      across: true,
      clue_across: 3,
      down: true,
      clue_down: 5,
      number: 3
    },
    {
      id: "C6",
      letter: "a",
      across: true,
      clue_across: 3,
      down: false,
      clue_down: null
    },
    {
      id: "C7",
      letter: "p",
      across: true,
      clue_across: 3,
      down: false,
      clue_down: null
    },
    {
      id: "C8",
      letter: null
    },
    {
      id: "D1",
      letter: null
    },
    {
      id: "D2",
      letter: "c",
      across: true,
      clue_across: 2,
      down: true,
      clue_down: 1,
      number: 2
    },
    {
      id: "D3",
      letter: "o",
      across: true,
      clue_across: 2,
      down: false,
      clue_down: null
    },
    {
      id: "D4",
      letter: "m",
      across: true,
      clue_across: 2,
      down: true,
      clue_down: 4,
      number: 4
    },
    {
      id: "D5",
      letter: "b",
      across: true,
      clue_across: 2,
      down: true,
      clue_down: 5
    },
    {
      id: "D6",
      letter: null
    },
    {
      id: "D7",
      letter: null
    },
    {
      id: "D8",
      letter: null
    },
    {
      id: "E1",
      letter: null
    },
    {
      id: "E2",
      letter: "h",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 1
    },
    {
      id: "E3",
      letter: null
    },
    {
      id: "E4",
      letter: "o",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 4
    },
    {
      id: "E5",
      letter: null
    },
    {
      id: "E6",
      letter: null
    },
    {
      id: "E7",
      letter: null
    },
    {
      id: "E8",
      letter: null
    },
    {
      id: "F1",
      letter: null
    },
    {
      id: "F2",
      letter: null
    },
    {
      id: "F3",
      letter: null
    },
    {
      id: "F4",
      letter: "d",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 4
    },
    {
      id: "F5",
      letter: null
    },
    {
      id: "F6",
      letter: null
    },
    {
      id: "F7",
      letter: null
    },
    {
      id: "F8",
      letter: null
    },
    {
      id: "G1",
      letter: null
    },
    {
      id: "G2",
      letter: null
    },
    {
      id: "G3",
      letter: null
    },
    {
      id: "G4",
      letter: "e",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 4
    },
    {
      id: "G5",
      letter: null
    },
    {
      id: "G6",
      letter: null
    },
    {
      id: "G7",
      letter: null
    },
    {
      id: "G8",
      letter: null
    },
    {
      id: "H1",
      letter: null
    },
    {
      id: "H2",
      letter: null
    },
    {
      id: "H3",
      letter: null
    },
    {
      id: "H4",
      letter: "l",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 4
    },
    {
      id: "H5",
      letter: null
    },
    {
      id: "H6",
      letter: null
    },
    {
      id: "H7",
      letter: null
    },
    {
      id: "H8",
      letter: null
    }
  ]

});

//level 8
const mapData = new Crosswords({
  level: 8,
  totalCorrect: 23,
  clues: {

    across: [
      {
        number: 1,
        clue: "Above average height.",
        answer: "tall"
      },
      {
        number: 2,
        clue: "The European country shaped like a boot.",
        answer: "italy"
      },
      {
        number: 3,
        clue: "In folk tales a magic genie might __ a wish.",
        answer: "grant"
      }
    ],
    down: [
      {
        number: 4,
        clue: "The opposite of thin.",
        answer: "fat"
      },
      {
        number: 5,
        clue: "A large roaring African cat with a mane.",
        answer: "lion"
      },
      {
        number: 6,
        clue: "Chat,speak,give voice.",
        answer: "talk"
      },
      {
        number: 7,
        clue: "The rubber cover on a wheel.",
        answer: "tyre"
      }
    ]
  },
  grid: [
    {
      id: "A1",
      letter: "f",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 4,
      number: 4
    },
    {
      id: "A2",
      letter: null
    },
    {
      id: "A3",
      letter: null
    },
    {
      id: "A4",
      letter: null
    },
    {
      id: "A5",
      letter: null
    },
    {
      id: "A6",
      letter: null
    },
    {
      id: "A7",
      letter: null
    },
    {
      id: "A8",
      letter: null
    },
    {
      id: "A9",
      letter: null
    },
    {
      id: "B1",
      letter: "a",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 4
    },
    {
      id: "B2",
      letter: null
    },
    {
      id: "B3",
      letter: null
    },
    {
      id: "B4",
      letter: null
    },
    {
      id: "B5",
      letter: null
    },
    {
      id: "B6",
      letter: null
    },
    {
      id: "B7",
      letter: null
    },
    {
      id: "B8",
      letter: null
    },
    {
      id: "B9",
      letter: null
    },
    {
      id: "C1",
      letter: "t",
      across: true,
      clue_across: 1,
      down: false,
      clue_down: null,
      number: 1

    },
    {
      id: "C2",
      letter: "a",
      across: true,
      clue_across: 1,
      down: false,
      clue_down: null
    },
    {
      id: "C3",
      letter: "l",
      across: true,
      clue_across: 1,
      down: false,
      clue_down: null
    },
    {
      id: "C4",
      letter: "l",
      across: true,
      clue_across: 1,
      down: true,
      clue_down: 5,
      number: 5
    },
    {
      id: "C5",
      letter: null
    },
    {
      id: "C6",
      letter: null
    },
    {
      id: "C7",
      letter: null
    },
    {
      id: "C8",
      letter: "t",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 7,
      number: 7
    },
    {
      id: "C9",
      letter: null
    },
    {
      id: "D1",
      letter: null
    },
    {
      id: "D2",
      letter: null
    },
    {
      id: "D3",
      letter: null
    },
    {
      id: "D4",
      letter: "i",
      across: true,
      clue_across: 2,
      down: true,
      clue_down: 5,
      number: 2
    },
    {
      id: "D5",
      letter: "t",
      across: true,
      clue_across: 2,
      down: false,
      clue_down: null
    },
    {
      id: "D6",
      letter: "a",
      across: true,
      clue_across: 2,
      down: false,
      clue_down: null
    },
    {
      id: "D7",
      letter: "l",
      across: true,
      clue_across: 2,
      down: false,
      clue_down: null
    },
    {
      id: "D8",
      letter: "y",
      across: true,
      clue_across: 2,
      down: true,
      clue_down: 7
    },
    {
      id: "D9",
      letter: null
    },
    {
      id: "E1",
      letter: null
    },
    {
      id: "E2",
      letter: null
    },
    {
      id: "E3",
      letter: null
    },
    {
      id: "E4",
      letter: "o",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 5
    },
    {
      id: "E5",
      letter: null
    },
    {
      id: "E6",
      letter: null
    },
    {
      id: "E7",
      letter: null
    },
    {
      id: "E8",
      letter: "r",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 7
    },
    {
      id: "E9",
      letter: null
    },
    {
      id: "F1",
      letter: "g",
      across: true,
      clue_across: 3,
      down: false,
      clue_down: null,
      number: 3
    },
    {
      id: "F2",
      letter: "r",
      across: true,
      clue_across: 3,
      down: false,
      clue_down: null
    },
    {
      id: "F3",
      letter: "a",
      across: true,
      clue_across: 3,
      down: false,
      clue_down: null
    },
    {
      id: "F4",
      letter: "n",
      across: true,
      clue_across: 3,
      down: true,
      clue_down: 5
    },
    {
      id: "F5",
      letter: "t",
      across: true,
      clue_across: 3,
      down: true,
      clue_down: 6,
      number: 6
    },
    {
      id: "F6",
      letter: null
    },
    {
      id: "F7",
      letter: null
    },
    {
      id: "F8",
      letter: "e",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 7
    },
    {
      id: "F9",
      letter: null
    },
    {
      id: "G1",
      letter: null
    },
    {
      id: "G2",
      letter: null
    },
    {
      id: "G3",
      letter: null
    },
    {
      id: "G4",
      letter: null
    },
    {
      id: "G5",
      letter: "a",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 6
    },
    {
      id: "G6",
      letter: null
    },
    {
      id: "G7",
      letter: null
    },
    {
      id: "G8",
      letter: null
    },
    {
      id: "G9",
      letter: null
    },
    {
      id: "H1",
      letter: null
    },
    {
      id: "H2",
      letter: null
    },
    {
      id: "H3",
      letter: null
    },
    {
      id: "H4",
      letter: null
    },
    {
      id: "H5",
      letter: "l",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 6
    },
    {
      id: "H6",
      letter: null
    },
    {
      id: "H7",
      letter: null
    },
    {
      id: "H8",
      letter: null
    },
    {
      id: "H9",
      letter: null
    }, {
      id: "I1",
      letter: null
    },
    {
      id: "I2",
      letter: null
    },
    {
      id: "I3",
      letter: null
    },
    {
      id: "I4",
      letter: null
    },
    {
      id: "I5",
      letter: "k",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 6
    },
    {
      id: "I6",
      letter: null
    },
    {
      id: "I7",
      letter: null
    },
    {
      id: "I8",
      letter: null
    },
    {
      id: "I9",
      letter: null
    }
  ]

});

//level 9
const mapData = new Crosswords({
  level: 9,
  totalCorrect: 24,
  clues: {

    across: [
      {
        number: 1,
        clue: "We get milk from this animal.",
        answer: "cow"
      },
      {
        number: 2,
        clue: "Cat's feet.",
        answer: "paws"
      },
      {
        number: 3,
        clue: "You might find this little jumping pest on your dog.",
        answer: "flea"
      },
      {
        number: 4,
        clue: "An insect produces wax and honey.",
        answer: "bee"
      }
    ],
    down: [
      {
        number: 1,
        clue: "Baby lions or bears.",
        answer: "cubs"
      },
      {
        number: 4,
        clue: "Use the teeth to cut.",
        answer: "bite"
      },
      {
        number: 5,
        clue: "A large wild dog.",
        answer: "wolf"
      },
      {
        number: 6,
        clue: "Huge ocean-going mammal.",
        answer: "whale"
      }
    ]
  },
  grid: [
    {
      id: "A1",
      letter: null
    },
    {
      id: "A2",
      letter: null
    },
    {
      id: "A3",
      letter: null
    },
    {
      id: "A4",
      letter: "c",
      across: true,
      clue_across: 1,
      down: true,
      clue_down: 1,
      number: 1
    },
    {
      id: "A5",
      letter: "o",
      across: true,
      clue_across: 1,
      down: false,
      clue_down: null
    },
    {
      id: "A6",
      letter: "w",
      across: true,
      clue_across: 1,
      down: true,
      clue_down: 5,
      number: 5
    },
    {
      id: "A7",
      letter: null
    },
    {
      id: "A8",
      letter: null
    },
    {
      id: "A9",
      letter: null
    },
    {
      id: "B1",
      letter: null
    },
    {
      id: "B2",
      letter: null
    },
    {
      id: "B3",
      letter: null
    },
    {
      id: "B4",
      letter: "u",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 1
    },
    {
      id: "B5",
      letter: null
    },
    {
      id: "B6",
      letter: "o",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 5
    },
    {
      id: "B7",
      letter: null
    },
    {
      id: "B8",
      letter: null
    },
    {
      id: "B9",
      letter: "w",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 6,
      number: 6
    },
    {
      id: "C1",
      letter: null

    },
    {
      id: "C2",
      letter: null
    },
    {
      id: "C3",
      letter: null
    },
    {
      id: "C4",
      letter: "b",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 1
    },
    {
      id: "C5",
      letter: null
    },
    {
      id: "C6",
      letter: "l",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 5
    },
    {
      id: "C7",
      letter: null
    },
    {
      id: "C8",
      letter: null
    },
    {
      id: "C9",
      letter: "h",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 6
    },
    {
      id: "D1",
      letter: "p",
      across: true,
      clue_across: 2,
      down: false,
      clue_down: null,
      number: 2
    },
    {
      id: "D2",
      letter: "a",
      across: true,
      clue_across: 2,
      down: false,
      clue_down: null
    },
    {
      id: "D3",
      letter: "w",
      across: true,
      clue_across: 2,
      down: false,
      clue_down: null
    },
    {
      id: "D4",
      letter: "s",
      across: true,
      clue_across: 2,
      down: true,
      clue_down: 1
    },
    {
      id: "D5",
      letter: null
    },
    {
      id: "D6",
      letter: "f",
      across: true,
      clue_across: 3,
      down: true,
      clue_down: 5,
      number: 3
    },
    {
      id: "D7",
      letter: "l",
      across: true,
      clue_across: 3,
      down: false,
      clue_down: null
    },
    {
      id: "D8",
      letter: "e",
      across: true,
      clue_across: 3,
      down: false,
      clue_down: null
    },
    {
      id: "D9",
      letter: "a",
      across: true,
      clue_across: 3,
      down: true,
      clue_down: 6
    },
    {
      id: "E1",
      letter: null
    },
    {
      id: "E2",
      letter: null
    },
    {
      id: "E3",
      letter: null
    },
    {
      id: "E4",
      letter: null
    },
    {
      id: "E5",
      letter: null
    },
    {
      id: "E6",
      letter: null
    },
    {
      id: "E7",
      letter: null
    },
    {
      id: "E8",
      letter: null
    },
    {
      id: "E9",
      letter: "l",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 6
    },
    {
      id: "F1",
      letter: null
    },
    {
      id: "F2",
      letter: null
    },
    {
      id: "F3",
      letter: null
    },
    {
      id: "F4",
      letter: null
    },
    {
      id: "F5",
      letter: null
    },
    {
      id: "F6",
      letter: null
    },
    {
      id: "F7",
      letter: "b",
      across: true,
      clue_across: 4,
      down: true,
      clue_down: 4,
      number: 4
    },
    {
      id: "F8",
      letter: "e",
      across: true,
      clue_across: 4,
      down: false,
      clue_down: null
    },
    {
      id: "F9",
      letter: "e",
      across: true,
      clue_across: 4,
      down: false,
      clue_down: null
    },
    {
      id: "G1",
      letter: null
    },
    {
      id: "G2",
      letter: null
    },
    {
      id: "G3",
      letter: null
    },
    {
      id: "G4",
      letter: null
    },
    {
      id: "G5",
      letter: null
    },
    {
      id: "G6",
      letter: null
    },
    {
      id: "G7",
      letter: "i",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 4
    },
    {
      id: "G8",
      letter: null
    },
    {
      id: "G9",
      letter: null
    },
    {
      id: "H1",
      letter: null
    },
    {
      id: "H2",
      letter: null
    },
    {
      id: "H3",
      letter: null
    },
    {
      id: "H4",
      letter: null
    },
    {
      id: "H5",
      letter: null
    },
    {
      id: "H6",
      letter: null
    },
    {
      id: "H7",
      letter: "t",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 4
    },
    {
      id: "H8",
      letter: null
    },
    {
      id: "H9",
      letter: null
    }, {
      id: "I1",
      letter: null
    },
    {
      id: "I2",
      letter: null
    },
    {
      id: "I3",
      letter: null
    },
    {
      id: "I4",
      letter: null
    },
    {
      id: "I5",
      letter: null
    },
    {
      id: "I6",
      letter: null
    },
    {
      id: "I7",
      letter: "e",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 4
    },
    {
      id: "I8",
      letter: null
    },
    {
      id: "I9",
      letter: null
    }
  ]

});

//level 10
const mapData = new Crosswords({
  level: 10,
  totalCorrect: 28,
  clues: {

    across: [
      {
        number: 1,
        clue: "Monday,Tuesday,Wednesday.....",
        answer: "days"
      },
      {
        number: 2,
        clue: "The nationality of a person from Ireland.",
        answer: "irish"
      },
      {
        number: 3,
        clue: "Twinkling night sky object.",
        answer: "star"
      },
      {
        number: 4,
        clue: "A round object from chicken,used for food.",
        answer: "egg"
      }
    ],
    down: [
      {
        number: 5,
        clue: "A wide way leading from one place to another.",
        answer: "road"
      },
      {
        number: 6,
        clue: "In the middle of.",
        answer: "among"
      },
      {
        number: 7,
        clue: "A polite way to address an adult man.",
        answer: "sir"
      },
      {
        number: 8,
        clue: "The part between your hand and your arm.",
        answer: "wrist"
      },
      {
        number: 9,
        clue: "A boy is he, a girl is __.",
        answer: "she"
      }
    ]
  },
  grid: [
    {
      id: "A1",
      letter: "r",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 5,
      number: 5
    },
    {
      id: "A2",
      letter: null
    },
    {
      id: "A3",
      letter: null
    },
    {
      id: "A4",
      letter: null
    },
    {
      id: "A5",
      letter: null
    },
    {
      id: "A6",
      letter: null
    },
    {
      id: "A7",
      letter: null
    },
    {
      id: "A8",
      letter: null
    },
    {
      id: "A9",
      letter: null
    },
    {
      id: "A10",
      letter: null
    },
    {
      id: "B1",
      letter: "o",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 5
    },
    {
      id: "B2",
      letter: null
    },
    {
      id: "B3",
      letter: null
    },
    {
      id: "B4",
      letter: null
    },
    {
      id: "B5",
      letter: null
    },
    {
      id: "B6",
      letter: null
    },
    {
      id: "B7",
      letter: null
    },
    {
      id: "B8",
      letter: null
    },
    {
      id: "B9",
      letter: null
    },
    {
      id: "B10",
      letter: null
    },
    {
      id: "C1",
      letter: "a",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 5

    },
    {
      id: "C2",
      letter: null
    },
    {
      id: "C3",
      letter: null
    },
    {
      id: "C4",
      letter: null
    },
    {
      id: "C5",
      letter: null
    },
    {
      id: "C6",
      letter: "w",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 8,
      number: 8
    },
    {
      id: "C7",
      letter: null
    },
    {
      id: "C8",
      letter: null
    },
    {
      id: "C9",
      letter: null
    },
    {
      id: "C10",
      letter: null
    },
    {
      id: "D1",
      letter: "d",
      across: true,
      clue_across: 1,
      down: true,
      clue_down: 5,
      number: 1
    },
    {
      id: "D2",
      letter: "a",
      across: true,
      clue_across: 1,
      down: false,
      clue_down: null
    },
    {
      id: "D3",
      letter: "y",
      across: true,
      clue_across: 1,
      down: false,
      clue_down: null
    },
    {
      id: "D4",
      letter: "s",
      across: true,
      clue_across: 1,
      down: true,
      clue_down: 7,
      number: 7
    },
    {
      id: "D5",
      letter: null
    },
    {
      id: "D6",
      letter: "r",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 8
    },
    {
      id: "D7",
      letter: null
    },
    {
      id: "D8",
      letter: "s",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 9,
      number: 9
    },
    {
      id: "D9",
      letter: null
    },
    {
      id: "D10",
      letter: null
    },
    {
      id: "E1",
      letter: null
    },
    {
      id: "E2",
      letter: null
    },
    {
      id: "E3",
      letter: null
    },
    {
      id: "E4",
      letter: "i",
      across: true,
      clue_across: 2,
      down: true,
      clue_down: 7,
      number: 2
    },
    {
      id: "E5",
      letter: "r",
      across: true,
      clue_across: 2,
      down: false,
      clue_down: null
    },
    {
      id: "E6",
      letter: "i",
      across: true,
      clue_across: 2,
      down: true,
      clue_down: 8
    },
    {
      id: "E7",
      letter: "s",
      across: true,
      clue_across: 2,
      down: false,
      clue_down: null
    },
    {
      id: "E8",
      letter: "h",
      across: true,
      clue_across: 2,
      down: true,
      clue_down: 9
    },
    {
      id: "E9",
      letter: null
    },
    {
      id: "E10",
      letter: null
    },
    {
      id: "F1",
      letter: "s",
      across: true,
      clue_across: 3,
      down: false,
      clue_down: null,
      number: 3
    },
    {
      id: "F2",
      letter: "t",
      across: true,
      clue_across: 3,
      down: false,
      clue_down: null
    },
    {
      id: "F3",
      letter: "a",
      across: true,
      clue_across: 3,
      down: true,
      clue_down: 6,
      number: 6
    },
    {
      id: "F4",
      letter: "r",
      across: true,
      clue_across: 3,
      down: true,
      clue_down: 7
    },
    {
      id: "F5",
      letter: null
    },
    {
      id: "F6",
      letter: "s",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 8
    },
    {
      id: "F7",
      letter: null
    },
    {
      id: "F8",
      letter: "e",
      across: true,
      clue_across: 4,
      down: true,
      clue_down: 9,
      number: 4
    },
    {
      id: "F9",
      letter: "g",
      across: true,
      clue_across: 4,
      down: false,
      clue_down: null
    },
    {
      id: "F10",
      letter: "g",
      across: true,
      clue_across: 4,
      down: false,
      clue_down: null
    },
    {
      id: "G1",
      letter: null
    },
    {
      id: "G2",
      letter: null
    },
    {
      id: "G3",
      letter: "m",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 6
    },
    {
      id: "G4",
      letter: null
    },
    {
      id: "G5",
      letter: null
    },
    {
      id: "G6",
      letter: "t",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 8
    },
    {
      id: "G7",
      letter: null
    },
    {
      id: "G8",
      letter: null
    },
    {
      id: "G9",
      letter: null
    },
    {
      id: "G10",
      letter: null
    },
    {
      id: "H1",
      letter: null
    },
    {
      id: "H2",
      letter: null
    },
    {
      id: "H3",
      letter: "o",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 6
    },
    {
      id: "H4",
      letter: null
    },
    {
      id: "H5",
      letter: null
    },
    {
      id: "H6",
      letter: null
    },
    {
      id: "H7",
      letter: null
    },
    {
      id: "H8",
      letter: null
    },
    {
      id: "H9",
      letter: null
    },
    {
      id: "H10",
      letter: null
    },
    {
      id: "I1",
      letter: null
    },
    {
      id: "I2",
      letter: null
    },
    {
      id: "I3",
      letter: "n",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 6
    },
    {
      id: "I4",
      letter: null
    },
    {
      id: "I5",
      letter: null
    },
    {
      id: "I6",
      letter: null
    },
    {
      id: "I7",
      letter: null
    },
    {
      id: "I8",
      letter: null
    },
    {
      id: "I9",
      letter: null
    },
    {
      id: "I10",
      letter: null
    },
    {
      id: "J1",
      letter: null
    },
    {
      id: "J2",
      letter: null
    },
    {
      id: "J3",
      letter: "g",
      across: false,
      clue_across: null,
      down: true,
      clue_down: 6
    },
    {
      id: "J4",
      letter: null
    },
    {
      id: "J5",
      letter: null
    },
    {
      id: "J6",
      letter: null
    },
    {
      id: "J7",
      letter: null
    },
    {
      id: "J8",
      letter: null
    },
    {
      id: "J9",
      letter: null
    },
    {
      id: "J10",
      letter: null
    }
  ]

});
mapData.save()
  .then(data => {
    res.send(data);
  }).catch(err => {
  res.status(500).send({
    message: err.message || "Some error occurred while creating the Map."
  });
});

axios.post("/api/crosswords/post")
  .then(res => {
    alert("asdfa");

  });
