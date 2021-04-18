import itemListModel from "./model/itemListModel.js";
import itemListView from "./view/itemListView.js";
import Controller from "./controller/controller.js";

const ItemListModel = new itemListModel();
const ItemListView = new itemListView(ItemListModel);

const controller = new Controller(ItemListModel, ItemListView);

controller.add("Марсианин");

controller.add("Интерстеллар");

controller.add("Не дыши");
