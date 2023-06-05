import {sortBy} from '../src/data.js';

describe ('ordenar ascendente', () =>{
  it ('traer data ordanda por valor', () =>{
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
/*describe('arcadeMinorFilter', () => {
  it('filter selected return minor cards', () => {
    expect(arcadeMinorFilter).toHaveProperty('type', 'object');
  });

});
*/