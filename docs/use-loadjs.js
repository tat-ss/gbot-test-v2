var root = document.getElementById('app');

loadjs([
  'https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react-dom.min.js'
], 'react');

loadjs.ready('react', {
  success: function() {
    ReactDOM.render(
      React.createElement('div', null, 'Hello from React'),
      root
    );
  },
  error: function() {
    root.innerHTML = 'Deps not found';
  }
});
