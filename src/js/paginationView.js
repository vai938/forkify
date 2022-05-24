import View from './veeiw.js';
import icons from 'url:../img/icons.svg'; // Parcel 2.0

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      console.log(goToPage);
      handler(goToPage);
    });
  }
  
  _generateMarkup() {
    //Page 1 and there are other pages
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
      );
      const curPage= this._data.page;

    if (curPage === 1 && numPages > 1) {
      return `
      <button class="btn--inline pagination__btn--next" data-goto = ${
        curPage + 1
      }>
      <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
      </svg>
      <span>Page ${curPage + 1}</span>
    </button>
      `;
    }
    if (curPage === numPages && numPages > 1) {
      return `
      <button  class="btn--inline pagination__btn--prev" data-goto = ${
        curPage - 1
      }>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${curPage - 1}</span>
    </button>
      `;
    }
    if (curPage < numPages) {
      return `
      <button  class="btn--inline pagination__btn--prev" data-goto = ${
        curPage - 1
      }>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${curPage - 1}</span>
    </button>

    <button class="btn--inline pagination__btn--next" data-goto = ${
      curPage + 1
    } >
    <svg class="search__icon">
    <use href="${icons}#icon-arrow-right"></use>
    </svg>
    <span>Page ${curPage + 1}</span>
  </button>
      `;
    }
    // Page 1 and there are no other pages
    return '';
  }
}

export default new PaginationView();
