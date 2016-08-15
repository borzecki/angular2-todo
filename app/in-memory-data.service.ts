export class InMemoryDataService {
  createDb() {
    let todos = [
      {id: 11, name: 'Do laundry', done: false},
      {id: 12, name: 'Do the dishes', done: true},
      {id: 13, name: 'Call dentist', done: false},
      {id: 14, name: 'Clean garage', done: false},
      {id: 15, name: 'Call ghostbusters', done: false},
      {id: 16, name: 'Go to shop', done: false},
    ];
    return {todos};
  }
}
