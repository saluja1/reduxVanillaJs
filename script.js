$(document).ready(function() {
    const valueEl = document.getElementById('value');

    function counter(state = 0, action) {
      switch (action.type) {
        case 'INCREMENT':
          return state + 1
        case 'DECREMENT':
          return state - 1
        default:
          return state
      }
    }

    const store = Redux.createStore(counter)

    function render() {
      console.log(store.getState());  
      valueEl.innerHTML = store.getState().toString()
    }

    store.subscribe(render)

    document.getElementById('increment')
      .addEventListener('click', function () {
        store.dispatch({ type: 'INCREMENT' })
      })

    document.getElementById('decrement')
      .addEventListener('click', function () {
        store.dispatch({ type: 'DECREMENT' })
      })

    document.getElementById('incrementIfOdd')
      .addEventListener('click', function () {
        if (store.getState() % 2 !== 0) {
          store.dispatch({ type: 'INCREMENT' })
        }
      })

    document.getElementById('incrementAsync')
      .addEventListener('click', function () {
        setTimeout(function () {
          store.dispatch({ type: 'INCREMENT' })
        }, 1000)
      })
});