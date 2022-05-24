import View from './veeiw.js';
import icons from 'url:../img/icons.svg'; // Parcel 2.0
import previewView from './previewView.js';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');

  addHandlerRender(handler){
      window.addEventListener('load',handler);
  }
  _generateMarkup() {
    return this._data.map(bookmarks=> previewView.render(bookmarks,false)).join('')
  }
}

export default new BookmarksView();
