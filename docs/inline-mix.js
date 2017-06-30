document.getElementById('app-native-1').innerHTML = 'Hello native rendering 1';

ReactDOM.render(
  React.createElement('div', null, 'Hello from React'),
  document.getElementById('app-react')
);

document.getElementById('app-native-2').innerHTML = 'Hello native rendering 2';
