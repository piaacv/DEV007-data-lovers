import {arcadeMinorFilter, sortBy, arcadeMajorFilter} from '../src/data.js';

describe ('ordenar ascendente', () =>{
  it ('traer data ordanda por valor ascendente', () =>{
    const cartasDesordenadas =[
      {value:3},
      {value:1},
      {value:2},
    ];
    const cartasOrdenadas = sortBy(cartasDesordenadas)
    expect (cartasOrdenadas).toEqual([
      {value:1},
      {value:2},
      {value:3},
    ]);
  }

  )
}
)

describe ('ordenar descendente', () =>{
  it ('traer data ordenada por valor descendente', () =>{
    const testcards =[
      {value:3},
      {value:1},
      {value:2},
    ];
    const sortCards = sortBy(testcards).reverse()
    expect (sortCards).toEqual([
      {value:3},
      {value:2},
      {value:1},
    ]);
  }

  )
}
)

describe ('ordenar minor', () =>{
  it ('traer data que sea minor', () =>{
    const cartas =
      {
        "name": "Page of Wands",
        "name_short": "wapa",
        "value": 11,
        "suit": "wands",
        "type": "minor",
        "meaning_up": "Dark young man, faithful, a lover, an envoy, a postman. Beside a man, he will bear favourable testimony concerning him. A dangerous rival, if followed by the Page of Cups. Has the chief qualities of his suit. He may signify family intelligence.",
        "meaning_rev": "Anecdotes, announcements, evil news. Also indecision and the instability which accompanies it.",
        "desc": "In a scene similar to the former, a young man stands in the act of proclamation. He is unknown but faithful, and his tidings are strange.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Wands11.jpg"
      };

    
    expect(arcadeMinorFilter[0]).toEqual(cartas);
  });
})

describe ('ordenar major', () =>{
  it ('traer data que sea major', () =>{
    const cartas =
    {
      "type": "major",
      "name_short": "ar16",
      "name": "The Tower",
      "value": 16,
      "meaning_up": "Misery, distress, indigence, adversity, calamity, disgrace, deception, ruin. It is a card in particular of unforeseen catastrophe.",
      "meaning_rev": "According to one account, the same in a lesser degree also oppression, imprisonment, tyranny.",
      "desc": "Occult explanations attached to this card are meagre and mostly disconcerting. It is idle to indicate that it depicts min in all its aspects, because it bears this evidence on the surface. It is said further that it contains the first allusion to a material building, but I do not conceive that the Tower is more or less material than the pillars which we have met with in three previous cases. I see nothing to warrant Papus in supposing that it is literally the fall of Adam, but there is more in favour of his alternative--that it signifies the materialization of the spiritual word. The bibliographer Christian imagines that it is the downfall of the mind, seeking to penetrate the mystery of God. I agree rather with Grand Orient that it is the ruin of the House of We, when evil has prevailed therein, and above all that it is the rending of a House of Doctrine. I understand that the reference is, however, to a House of Falsehood. It illustrates also in the most comprehensive way the old truth that \"except the Lord build the house, they labour in vain that build it.\"\nThere is a sense in which the catastrophe is a reflection from the previous card, but not on the side of the symbolism which I have tried to indicate therein. It is more correctly a question of analogy; one is concerned with the fall into the material and animal state, while the other signifies destruction on the intellectual side. The Tower has been spoken of as the chastisement of pride and the intellect overwhelmed in the attempt to penetrate the Mystery of God; but in neither case do these explanations account for the two persons who are the living sufferers. The one is the literal word made void and the other its false interpretation. In yet a deeper sense, it may signify also the end of a dispensation, but there is no possibility here for the consideration of this involved question.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg"
    };

    
    expect(arcadeMajorFilter[15]).toEqual(cartas);
  });
})
