import ItemView from "../view/itemView.js";
import itemView from "../view/itemView.js";
export default class itemListView {
  constructor(itemListModel) {
    this.itemListModel = itemListModel;
    this.placeInDOM = document.querySelector(".poll-list");
    this.placeInDOM.addEventListener("click", (e) => {
      if (e.target.parentNode.tagName === "LI") {
        this.itemListModel.vote(e.target.parentNode.dataset.id);
        // document
        //   .querySelector(`[data-id="${this.itemListModel.items[0].id}"]`)
        //   .querySelector(
        //     ".poll-votepart-part"
        //   ).style = `width:${this.itemListModel.items[0].percent}%; `;
      }
    });
  }
  toHTML() {
    console.log(this.itemListModel);
    const html = this.itemListModel.items
      .map((item) => {
        const itemView = new ItemView(item);
        return itemView.toHTML();
      })
      .join("");
    this.placeInDOM.innerHTML = html;
    // document
    //   .querySelector(`[data-id="${this.itemListModel.items[0].id}"]`)
    //   .querySelector(
    //     ".poll-votepart-part"
    //   ).style = `width:${this.itemListModel.items[0].percent}%; `;
  }
}
