export default class ItemView {
  constructor(itemModel) {
    this.itemModel = itemModel;
  }
  toHTML() {
    return `<li data-id=${this.itemModel.id}>
    <div class="poll-item">${this.itemModel.title}</div>
    <div class="poll-votepart">
        <div class="poll-votepart-part" style="width:${this.itemModel.percent}%" >${this.itemModel.chooseNumberVotes}(${this.itemModel.percent}%)</div>
    </div>
</li>`;
  }
}
//
