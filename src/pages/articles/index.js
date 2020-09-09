import './style.css';

import {
  MAIN_API_OPTIONS,
} from '../../js/config';

import dateToString from '../../js/utils/date-to-string';

import Overlay from '../../js/components/Overlay';
import Button from '../../js/components/Button';
import MobileMenu from '../../js/components/MobileMenu';
import Page from '../../js/components/Page';
import MainApi from '../../js/api/MainApi';
import Results from '../../js/components/Results';
import Header from '../../js/components/Header';
import SavedNewsTitle from '../../js/components/SavedNewsTitle';
import SavedCardList from '../../js/components/SavedCardList';
import SavedNewsCard from '../../js/components/SavedNewsCard';

const rootElement = document.querySelector('.root');
const overlayElement = document.querySelector('.overlay');

const cardListElement = document.querySelector('.grid');

const mobileMenuElement = document.querySelector('#mobile-menu-nav');
const mobileOpenElement = document.querySelector('#mobile-open-button');
const mobileCloseElement = document.querySelector('#mobile-close-button');

const navListElement = document.querySelector('.header__list');

const logoutHeaderButtonElement = document.querySelector('#logout-header-button');
const logoutButtonTextElement = logoutHeaderButtonElement.querySelector('.header__button-text');

const resultsSectionElement = document.querySelector('.results');

const headingElement = document.querySelector('.articles-heading');
const headingTitleElement = headingElement.querySelector('.articles-heading__title');
const headingSubtitleElement = headingElement.querySelector('.articles-heading__subtitle');
const headingSubtitleIntroElement = headingElement.querySelector('#keyword-title-intro');
const headingFirstKeywordElement = headingElement.querySelector('#first-keyword');
const headingFirstKeywordAfterElement = headingElement.querySelector('#first-keyword-after');
const headingSecondKeywordElement = headingElement.querySelector('#second-keyword');
const headingSecondKeywordAfterElement = headingElement.querySelector('#second-keyword-after');
const headingThirdKeywordElement = headingElement.querySelector('#third-keyword');

const mobileOpenButton = new Button({
  domElement: mobileOpenElement,
  hiddenClass: 'header__burger_hidden',
});
const mobileCloseButton = new Button({
  domElement: mobileCloseElement,
  hiddenClass: 'header__burger-close_hidden',
});
const logoutHeaderButton = new Button({ domElement: logoutHeaderButtonElement });

const results = new Results({ domElement: resultsSectionElement, visibleClass: 'results_visible' });

const mainApi = new MainApi(MAIN_API_OPTIONS);

const page = new Page({
  domElement: rootElement,
  hiddenClass: 'root_hidden',
  pageNoScrollClass: 'root_no-scroll',
});

const overlay = new Overlay({
  domElement: overlayElement,
  visibleClass: 'overlay_visible',
  instances: { page },
});

const mobileMenu = new MobileMenu({
  domElement: mobileMenuElement,
  visibleClass: 'header__nav_mobile-opened',
  instances: { overlay, mobileCloseButton, mobileOpenButton },
});

const header = new Header({
  instances: {
    mainApi,
    logoutButton: logoutHeaderButton,
  },
  navListElement,
  logoutButtonTextElement,
});

const savedNewsTitle = new SavedNewsTitle({
  instances: { domElement: headingElement, mainApi },
  titleElement: headingTitleElement,
  subtitleElement: headingSubtitleElement,
  subtitleIntroElement: headingSubtitleIntroElement,
  firstKeywordElement: headingFirstKeywordElement,
  firstKeywordAfterElement: headingFirstKeywordAfterElement,
  secondKeywordElement: headingSecondKeywordElement,
  secondKeywordAfterElement: headingSecondKeywordAfterElement,
  thirdKeywordElement: headingThirdKeywordElement,
  subtitleHiddenClass: 'articles-heading__subtitle_hidden',
});

const newsCard = new SavedNewsCard({ instances: { mainApi, savedNewsTitle }, dateToString });

const cardList = new SavedCardList({
  domElement: cardListElement,
  instances: {
    mainApi,
    newsCard,
    savedNewsTitle,
  },
  cardListeners: [
    { event: 'click', handler: newsCard.handleRemove },
  ],
});

page.setListeners();
mobileMenu.setListeners();
cardList.setListeners();
header.setListeners();

header.render()
  .then((res) => {
    savedNewsTitle.addUserName(res.name);
    savedNewsTitle.render();
    results.show();
    cardList.renderSavedCards();
  })
  .catch((err) => alert(err));
