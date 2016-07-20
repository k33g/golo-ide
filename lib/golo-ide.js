'use babel';

import GoloIdeView from './golo-ide-view';
import { CompositeDisposable } from 'atom';

export default {

  goloIdeView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.goloIdeView = new GoloIdeView(state.goloIdeViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.goloIdeView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'golo-ide:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.goloIdeView.destroy();
  },

  serialize() {
    return {
      goloIdeViewState: this.goloIdeView.serialize()
    };
  },

  toggle() {
    console.log('GoloIde was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
