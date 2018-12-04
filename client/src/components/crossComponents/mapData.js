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
