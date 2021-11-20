'use strict';

// label validation

const nameInput = document.querySelector(`.contact__input-name`);
const nameLabel = document.querySelector(`.contact__label-name`);
const emailInput = document.querySelector(`.contact__input-email`);
const emailLabel = document.querySelector(`.contact__label-email`);
const textInput = document.querySelector(`.contact__input-text`);
const textLabel = document.querySelector(`.contact__label-text`);


const deleteLabel = (filledInput, label) => {
    filledInput.addEventListener(`input`, () => {
        if (filledInput.value !== ``) {
            if (!label.classList.contains(`hidden`)) {
                label.classList.add(`hidden`)
            }
        } else {
            if (label.classList.contains(`hidden`)) {
                label.classList.remove(`hidden`)
            }
        }
    })
};

deleteLabel(nameInput, nameLabel);
deleteLabel(emailInput, emailLabel);
deleteLabel(textInput, textLabel);

// popup

const ENTER_BUTTON = `Enter`;
const submitButton = document.querySelector(`.contact__submit-button`);
const overlay = document.querySelector(`.popup`);
const popup = overlay.querySelector(`.popup__wrapper`);
const closeIcon = popup.querySelector(`.popup__close-button`);
const closeButton = popup.querySelector(`.popup__button`);

submitButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    overlay.classList.remove(`hidden`);
});

closeIcon.addEventListener(`click`, () => {
    overlay.classList.add(`hidden`);
});

closeButton.addEventListener(`click`, () => {
    overlay.classList.add(`hidden`);
});

overlay.addEventListener(`click`, (evt) => {
    if (evt.target !== popup) {
        overlay.classList.add(`hidden`)
    }
});