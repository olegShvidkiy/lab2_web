export default class ItemModel {
  constructor(title) {
    this.title = title;
    this.id = Math.round(Math.random() * 100000).toString();
    this.chooseNumberVotes = 0;
    this.percent = 0;
    this.onChangeCallback = null;
    return this.onItemChange();
  }

  calculatePercent(total) {
    this.percent = Math.round((this.chooseNumberVotes / total) * 100);
  }

  vote() {
    this.chooseNumberVotes++;
  }
  onChangeCallback() {}
  onItemChange() {
    let handler = {
      set: (obj, prop, val) => {
        obj[prop] = val;
        if (this.onChangeCallback) this.onChangeCallback(this);
        return true;
      },
    };
    return new Proxy(this, handler);
  }
}

// let a = new Item(10, 5);
// console.log(a.calculatePercent());
