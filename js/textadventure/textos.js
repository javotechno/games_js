const textoNodos = [
  {
    id: 1,
    texto:
      "You wake up in a maze, your vision is blurred and you see a vial with a thick liquid.",
    opciones: [
      {
        texto: "You grab the jar",
        setEstado: { frasco: true },
        siguienteTexto: 2,
      },
      {
        texto: "You go",
        siguienteTexto: 2,
      },
    ],
  },
  {
    id: 2,
    texto: "You meet a merchant, giving you some information..",
    opciones: [
      {
        texto: "Change the bottle with liquid for a sword",
        requiredEstado: (estadoActual) => estadoActual.frasco,
        setEstado: { frasco: false, espada: true },
        siguienteTexto: 3,
      },
      {
        texto: "Change the bottle with liquid for a shield",
        requiredEstado: (estadoActual) => estadoActual.frasco,
        setEstado: { frasco: false, escudo: true },
        siguienteTexto: 3,
      },
      {
        texto: "You ignore the merchant",
        siguienteTexto: 3,
      },
    ],
  },

  {
    id: 3,
    texto:
      "After passing the merchant, you walk to a small town next to a spooky castle",
    opciones: [
      {
        texto: "explore the castle",

        siguienteTexto: 4,
      },
      {
        texto: "Rest in an inn in the town before continuing",
        siguienteTexto: 41,
      },
      {
        texto: "You try to find some stable to sleep in",
        siguienteTexto: 5,
      },
    ],
  },

  {
    id: 4,
    texto:
      "you fall asleep while exploring the castle and are killed by a mercedarian",
    opciones: [
      {
        texto: "Start again",
        siguienteTexto: -1,
      },
    ],
  },

  {
    id: 41,
    texto:
      "After touring the town and the castle, you find a decent inn for your rest, but you don't have money to pay for the room",
    opciones: [
      {
        texto: "You try to enter without being seen",
        siguienteTexto: 411,
      },
      {
        texto: "You decide to steal money from a villager in the area",
        siguienteTexto: 411,
      },
      {
        texto: "You spend the night awake by the guard tower",
        siguienteTexto: 412,
      },
    ],
  },

  {
    id: 411,
    texto:
      "Despite your discretion and stealth, the local guard finds you doing your own thing and you are thrown into the town's jail",
      opciones:[
      {
        texto: "Starting over",
        siguienteTexto: -1,
      },
    ],
  },

  {
    id: 412,
    texto:
      "You spent the night awake, the bright sun of dawn burns your eyes, you feel weak, but your spirit of adventure is stronger. It's time to move on",
    opciones: [
      {
        texto:"Exploring the castle",
        siguienteTexto: 4,
      },
    ],
  },

  {
    id: 5,
    texto:
      "To your surprise, you find an abandoned stable and spend the night there. You wake up full of energy and ready to continue your adventure.",
    opciones: [
      {
        texto: "Exploring the castle",
        siguienteTexto: 6,
      },
    ],
  },
  {
    id: 6,
    texto:
      "You enter the corridors of the huge castle, your footsteps echoing throughout the place. After a few minutes, you hear a terrifying roar coming from the darkness.",
    opciones: [
      {
        texto: "You are fleeing madly",
        siguienteTexto: 7,
      },
      {
        texto:
          "You didn't come this far to scare so easy, you're heading for the roar",
        siguienteTexto: 8,
      },
      {
        texto:
          "You try to take everything you can find and avoid the place where the roar is coming from.",
        siguienteTexto: 9,
      },
    ],
  },
  {
    id: 7,
    texto:
      "You leave the castle, clearly your spirit and desire for greatness was not enough to face whatever was in there.",
    opciones: [
      {
        texto: "Starting over",
        siguienteTexto: -1,
      },
    ],
  },

  {
    id: 8,
    texto:
      "Out of the darkness, a huge beast appears. There is no escape, it's now or never",
    opciones: [
      {
        texto: "you fight with your sword",
        requiredEstado: (estadoActual) => estadoActual.espada,
        siguienteTexto: 10,
      },
      {
        texto:
          "use your shield to protect yourself for as long as you can",
        requiredEstado: (estadoActual) => estadoActual.shield,
        siguienteTexto: 11,
      },
      {
        texto:
          "With no way to confront him, you throw the only thing you have on you, the elixir flask, at him",
        requiredEstado: (estadoActual) => estadoActual.frasco,
        siguienteTexto: 12,
      },
      {
        texto:
          "You brought nothing to defend yourself against the beast, the adventure is over",
        siguienteTexto: 13,
      },
    ],
  },

  {
    id: 9,
    texto:
      "You use your stealth to go through some rooms undetected, unfortunately, you find nothing",
    opciones: [
      {
        texto: "You leave the castle",
        siguienteTexto: 7,
      },
      {
        texto: "You return to where the roar comes from",
        siguienteTexto: 8,
      },
    ],
  },
  {
    id: 10,
    texto:
      "You make a powerful frontal attack with your sword, but on impact the beast's skin splits in two. Before you die under its ferocious claws, you wonder how you could have been so stupid as to believe that a simple sword could defeat such a fearsome creature",
    opciones: [
      {
        texto: "Starting over",
        siguienteTexto: -1,
      },
    ],
  },

  {
    id: 11,
    texto:
      "You raise your shield to protect yourself from the creature's deadly attacks. You are eaten whole, including the shield.",
    opciones: [
      {
        texto: "Starting over",
        siguienteTexto: -1,
      },
    ],
  },
  {
    id: 12,
    texto:
      "You throw the vial at it, and as it comes into contact with the beast, it explodes. After a dense cloud of dust dissipates, you watch as the beast is annihilated.",
    opciones: [
      {
        texto: "you win!",
        siguienteTexto: -1,
      },
    ],
  },
  {
    id: 13,
    texto:
      "The beast looks at you in confusion, not understanding the situation, it simply proceeds to eat you",
    opciones: [
      {
        texto: "Starting over",
        siguienteTexto: -1,
      },
    ],
  },
];
