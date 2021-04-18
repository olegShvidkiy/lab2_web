export default class itemListModel {
  constructor() {
    this.items = [];
    this.totalVotes = 0;
    this.onChangeCallback = null;
  }
  setOnChangeCallback(onChangeCallback) {
    this.onChangeCallback = onChangeCallback;
  }
  calculateTotalVotes() {
    this.totalVotes = 0;
    this.items.forEach((e) => {
      this.totalVotes += e.chooseNumberVotes;
    });
  }

  addItem(item) {
    this.items.push(item);
    item.onChangeCallback = this.onChangeCallback;
  }
  deleteItem(title) {
    let index = this.items.findIndex((item) => item.title === title);
    this.items.splice(index, 1);
    this.onChangeCallback();
  }

  vote(id) {
    const index = this.items.findIndex((item) => item.id === id);
    this.items[index].vote();
    this.calculateTotalVotes();
    this.items.map((item) => {
      item.calculatePercent(this.totalVotes);
    });
  }
  // при изменении айтема пересчитать тотал и пройтись по всем айтемам пересчитывая процент
}
