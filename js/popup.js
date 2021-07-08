const searchLink = document.querySelector('.search__link');
const popup = document.querySelector('.popup');
const formSearch = popup.querySelector('.form-search');
const formSearchInputArrival = popup.querySelector('.form-search__input-date-arrival');
const formSearchInputDeparture = popup.querySelector('.form-search__input-date-departure');
const formSearchInputChild = popup.querySelector('.form-search__input-number-child');
const formSearchInputOld = popup.querySelector('.form-search__input-number-old');
let clickCount = 0;
let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("NumberChild");
  storageOld = localStorage.getItem('NumberOld');
} catch (err) {
  isStorageSupport = false;
}

popup.classList.add('popup-show');

searchLink.addEventListener('click', function(evt) {
  evt.preventDefault();
  clickCount = ++clickCount

  if (clickCount==1) {
    popup.classList.remove('popup-show');
    popup.classList.add('popup-on');
  } else {
    popup.classList.add('popup-show');
    clickCount = 0;
    popup.classList.remove('popup-on');
    popup.classList.remove('popup-error');
  }

  if (storage || storageOld) {
    formSearchInputChild.value = storage;
    formSearchInputOld.value = storageOld;
  }

  if (!formSearchInputArrival.value) {
    formSearchInputArrival.focus();
  } else {
    if (!formSearchInputDeparture.value) {
      formSearchInputDeparture.focus();
    } else {
      if (!formSearchInputOld.value) {
        formSearchInputOld.focus();
      } else {
        if (!formSearchInputChild.value) {
          formSearchInputChild.focus();
        }
      }
    }
  }
});

formSearch.addEventListener('submit', function(evt) {
  if (!formSearchInputArrival.value || !formSearchInputDeparture.value || !formSearchInputChild.value || !formSearchInputOld.value) {
  evt.preventDefault();
  popup.classList.remove('popup-error');
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add('popup-error');
    if (!formSearchInputArrival.value) {
      formSearchInputArrival.focus();
    } else {
      if (!formSearchInputDeparture.value) {
        formSearchInputDeparture.focus();
      } else {
        if (!formSearchInputOld.value) {
          formSearchInputOld.focus();
        } else {
          if (!formSearchInputChild.value) {
            formSearchInputChild.focus();
          }
        }
      }
    }
} else {
  if (isStorageSupport) {
  localStorage.setItem('NumberChild', formSearchInputChild.value);
  localStorage.setItem('NumberOld', formSearchInputOld.value);
  }
}
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (!popup.classList.contains('popup-show')) {
      evt.preventDefault();
      popup.classList.add('popup-show');
      popup.classList.remove('popup-on');
      popup.classList.remove('popup-error');
    }
  }
});

