import itemModel from "../model/itemModel.js";
import ItemView from "../view/itemView.js";
import itemView from "../view/itemView.js";
export default class Controller {
  constructor(itemListModel, itemListView) {
    this.itemListModel = itemListModel;
    this.itemListView = itemListView;
    this.itemListModel.setOnChangeCallback((e) => this.onChangeCallback(e));
  }
  onChangeCallback(item) {
    this.itemListView.toHTML();
  }
  add(title) {
    let item = new itemModel(title);
    this.itemListModel.addItem(item);
  }
  delete(title) {
    this.itemListModel.deleteItem(title);
  }
}
