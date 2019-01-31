const { get, post } = require('httpie');

async function sample() {
  try {
    const { data } = await get('https://pokeapi.co/api/v2/pokemon/1');

    console.log(data);
    const res = await post('https://jsonplaceholder.typicode.com/posts', {
      body: {
        id: data.id,
        name: data.name,
        number: data.order,
        moves: data.moves.slice(0, 6)
      }
    });

    console.log(res.statusCode); //=> 201
    console.log(res.data); //=> { id: 1, name: 'bulbasaur', number: 1, moves: [{...}, {...}] }
    console.log('end');
  } catch (err) {
    console.error('Error!', err.statusCode, err.message);
    console.error('~> headers:', err.headers);
    console.error('~> data:', err.data);
  }
}

sample();

