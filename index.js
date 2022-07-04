const initialState = 0;

const reducer = (state = initialState, { type, value = 1 }) => {
  switch (type) {
    case 'increase':
      return state + value;
    case 'decrease':
      return state - value;
    case 'reset':
      return 0;
    default:
      return state;
  }
}

const store = Redux.createStore(reducer);

let html = document.getElementById('count');
html.innerHTML = store.getState();

store.subscribe(() => html.innerHTML = store.getState());

function increase() {
  store.dispatch({ type: 'increase', value: 1 });
}

function decrease() {
  store.dispatch({ type: 'decrease', value: 1 });
}

function reset() {
  store.dispatch({ type: 'reset' });
}