
// baseline app styles
require('../scss/tests.css');
require('../scss/app.css');

// // components styles
// require.context('./components/', true, /\.css$/);

// button component
const buttons = document.getElementsByClassName('button');
for (let i = 0; i < buttons.length; i++) {
  console.log('hello');
}
