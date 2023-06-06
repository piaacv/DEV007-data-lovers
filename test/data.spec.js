import {sortBy} from '../src/data.js';
import { arcadeMinorFilter } from '../src/data.js';

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
  it ('traer data ordanda por valor descendente', () =>{
    const cartasDesordenadas =[
      {value:2},
      {value:1},
      {value:3},
    ];
    const cartasOrdenadas = sortBy(cartasDesordenadas)
    expect (cartasOrdenadas).toEqual([
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
    const cartasminor =[
    expect(filter (arcadeMinorFilter.cards.type)).toBe[
      {minor}

    ]
    ];
  }

  )
}
)
/*describe('arcadeMinorFilter', () => {
  it('filter selected return minor cards', () => {
    expect(arcadeMinorFilter).toHaveProperty('type', 'object');
  });

});
*/