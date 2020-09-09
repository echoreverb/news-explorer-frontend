import './style.css';

import {
  MAIN_API_OPTIONS,
  NEWS_API_OPTIONS,
  SHOW_MORE_QTY,
  SEARCH_INPUT_REGEXP,
} from '../../js/config';

import dateToString from '../../js/utils/date-to-string';

import VALIDATOR_ERROR_MESSAGES from '../../js/constants/error-messages';

import Overlay from '../../js/components/Overlay';
import Button from '../../js/components/Button';
import MobileMenu from '../../js/components/MobileMenu';
import Popup from '../../js/components/Popup';
import NewsApi from '../../js/api/NewsApi';
import Page from '../../js/components/Page';
import MainApi from '../../js/api/MainApi';
import SearchForm from '../../js/components/SearchForm';
import Preloader from '../../js/components/Preloader';
import Results from '../../js/components/Results';
import LoginForm from '../../js/components/LoginForm';
import SignupForm from '../../js/components/SignupForm';
import Header from '../../js/components/Header';
import MainCardList from '../../js/components/MainCardList';
import MainNewsCard from '../../js/components/MainNewsCard';

const rootElement = document.querySelector('.root');
const overlayElement = document.querySelector('.overlay');

const cardListElement = document.querySelector('.grid');

const mobileMenuElement = document.querySelector('#mobile-menu-nav');
const mobileOpenElement = document.querySelector('#mobile-open-button');
const mobileCloseElement = document.querySelector('#mobile-close-button');

const preloaderElement = document.querySelector('.preloader');
const notFoundElement = document.querySelector('.not-found');
const searchInputElement = document.querySelector('.searchbar__input');

const logoutHeaderButtonElement = document.querySelector('#logout-header-button');
const logoutButtonTextElement = logoutHeaderButtonElement.querySelector('.header__button-text');
const openLoginHeaderButtonElement = document.querySelector('#open-login-header-button');
const navListElement = document.querySelector('.header__list');

const searchButtonElement = document.querySelector('#search-submit-button');
const showMoreButtonElement = document.querySelector('#show-more-button');

const openLoginSignupButtonElement = document.querySelector('#open-login-signup-popup-button');
const loginPopupElement = document.querySelector('.popup_type_login');
const loginSubmitButtonElement = document.querySelector('#login-submit-button');
const openSignupLoginButtonElement = document.querySelector('#open-signup-login-popup-button');
const signupPopupElement = document.querySelector('.popup_type_signup');
const signupSubmitButtonElement = document.querySelector('#signup-submit-button');
const registeredPopupElement = document.querySelector('.popup_type_registered');
const openLoginRegisteredButtonElement = document.querySelector('#open-login-registered-popup-button');

const loginSubmitErrorElement = loginPopupElement.querySelector('.popup__error-message_place_submit');
const signupSubmitErrorElement = signupPopupElement.querySelector('.popup__error-message_place_submit');

const searchFormElement = document.querySelector('.searchbar');
const loginFormElement = document.querySelector('#login-form');
const signupFormElement = document.querySelector('#signup-form');

const resultsSectionElement = document.querySelector('.results');

const mobileOpenButton = new Button({
  domElement: mobileOpenElement,
  hiddenClass: 'header__burger_hidden',
});
const mobileCloseButton = new Button({
  domElement: mobileCloseElement,
  hiddenClass: 'header__burger-close_hidden',
});
const openLoginHeaderButton = new Button({ domElement: openLoginHeaderButtonElement });
const openLoginRegisteredButton = new Button({ domElement: openLoginRegisteredButtonElement });
const openLoginSignupButton = new Button({ domElement: openLoginSignupButtonElement });
const openSignupLoginButton = new Button({ domElement: openSignupLoginButtonElement });
const logoutHeaderButton = new Button({ domElement: logoutHeaderButtonElement });
const searchButton = new Button({ domElement: searchButtonElement });
const showMoreButton = new Button({ domElement: showMoreButtonElement, visibleClass: 'results__button_visible' });
const loginSubmitButton = new Button({ domElement: loginSubmitButtonElement, disabledClass: 'popup__button_disabled' });
const signupSubmitButton = new Button({ domElement: signupSubmitButtonElement, disabledClass: 'popup__button_disabled' });

const results = new Results({ domElement: resultsSectionElement, visibleClass: 'results_visible' });

const preloader = new Preloader({ domElement: preloaderElement, visibleClass: 'preloader_visible' });

const newsApi = new NewsApi(NEWS_API_OPTIONS);
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

const loginPopup = new Popup({
  domElement: loginPopupElement,
  visibleClass: 'popup_opened',
  instances: {
    overlay,
    mobileCloseButton,
    mobileOpenButton,
    mobileMenu,
  },
});

const signupPopup = new Popup({
  domElement: signupPopupElement,
  visibleClass: 'popup_opened',
  instances: {
    overlay,
    mobileCloseButton,
    mobileOpenButton,
    mobileMenu,
  },
});

const registeredPopup = new Popup({
  domElement: registeredPopupElement,
  visibleClass: 'popup_opened',
  instances: {
    overlay,
    openButtons: [],
    mobileCloseButton,
    mobileOpenButton,
    mobileMenu,
  },
});

const newsCard = new MainNewsCard({ instances: { mainApi }, dateToString });

const cardList = new MainCardList({
  domElement: cardListElement,
  instances: {
    mainApi,
    showMoreButton,
    newsCard,
  },
  moreQuantity: SHOW_MORE_QTY,
  cardListeners: [
    { event: 'click', handler: newsCard.handleMark },
    { event: 'click', handler: newsCard.handleUnmark },
  ],
});

const searchForm = new SearchForm({
  domElement: searchFormElement,
  instances: {
    newsApi,
    cardList,
    preloader,
    results,
    submitButton: searchButton,
  },
  searchInputElement,
  notFoundElement,
  SEARCH_INPUT_REGEXP,
});

const loginForm = new LoginForm({
  domElement: loginFormElement,
  instances: {
    mainApi,
    openButtons: [openLoginHeaderButton, openLoginRegisteredButton, openLoginSignupButton],
    popup: loginPopup,
    submitButton: loginSubmitButton,
  },
  VALIDATOR_ERROR_MESSAGES,
  submitErrorElement: loginSubmitErrorElement,
});

const signupForm = new SignupForm({
  domElement: signupFormElement,
  instances: {
    mainApi,
    openButtons: [openSignupLoginButton],
    popup: signupPopup,
    submitButton: signupSubmitButton,
    successPopup: registeredPopup,
  },
  VALIDATOR_ERROR_MESSAGES,
  submitErrorElement: signupSubmitErrorElement,
});

page.setListeners();
mobileMenu.setListeners();
loginPopup.setListeners();
signupPopup.setListeners();
registeredPopup.setListeners();
searchForm.setListeners();
cardList.setListeners();
loginForm.setListeners();
signupForm.setListeners();
header.setListeners();

header.render();
