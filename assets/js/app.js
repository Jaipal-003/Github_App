'use strict';


import { fetchData } from "./api";
 



/**
 * Add event listener on multiple elements
 * @param {NodeList} $elements - NodeList
 * @param {String} eventType - Event type
 * @param {Function} callback - Callback function
 */


const addEventOnElement = function ($elements, eventType, callback) {
  for (const $item of $elements) {
    $item.addEventListener(eventType, callback);
  }
}

/**
 * Header scroll state
 */

const /**{HTMLElement} */ $header = document.querySelector("[data-header]");
window.addEventListener("scroll", function () {
  $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});

/**
 * Search toggle
 */

const /**{HTMLElement} */ $searchToggler = document.querySelector("[data-search-toggler]");
const /**{HTMLElement} */ $searchField = document.querySelector("[data-search-field]");
let /**{Boolean} */ isExpanded = false;

$searchToggler.addEventListener("click", function () {
  $header.classList.toggle("search-active");
  isExpanded = !isExpanded;
  this.setAttribute("aria-expanded", isExpanded);
  $searchField.focus();
});

/**
 * Tab navigation
 */

const /**{NodeList} */ $tabBtns = document.querySelectorAll("[data-tab-btn]");
const /**{NodeList} */ $tabPanels = document.querySelectorAll("[data-tab-panel]");

let /**{HTMLElement} */ $lastActiveTabBtn = $tabBtns[0];
let /**{HTMLElement} */ $lastActiveTabPanel = $tabPanels[0];

addEventOnElement($tabBtns, "click", function () {
  $lastActiveTabBtn.setAttribute("aria-selected", "false");
  $lastActiveTabPanel.setAttribute("hidden", "");

  this.setAttribute("aria-selected", "true");
  const /**{HTMLElement} */ $currentTabPanel = document.querySelector(`#${this.getAttribute("aria-controls")}`);
  $currentTabPanel.removeAttribute("hidden");

  $lastActiveTabBtn = this;
  $lastActiveTabPanel = $currentTabPanel;
});

/** 
 * Keyboard accessibility for tab button
 */


addEventOnElement($tabBtns, "keydown", function (e){
   const /**{NodeElement} */ $nextElement = this.$nextElementSibling;
   const /**{NodeElement} */ $previousElement = this.$previousElementSibling;



   if(e.key === "ArrowRight" && $nextElement){
      this.setAttribute("tabindex", "-1");
      $nextElement.setAttribute("tabindex", "0");
      $nextElement.focus();
   }else if (e.key === "ArrowLeft" && $previousElement){
      this.setAttribute("tabindex", "-1");
      $previousElement.setAttribute("tabindex", "0");
      $previousElement.focus();
   }
})

/** 
 * Work with API
 */


/** 
 * Search
 */
const /**{NodeElement} */  $searchSubmit = document.querySelector("[data-search-submit]");



let /**{String} */ apiUrl = "https://api.github.com/users/Jaipal-003";
let /**{String} */ repoUrl, followerUrl, followingUrl = "";

const searchUser = function (){
  if(!$searchField.value) return;

  apiUrl= `https://api.github.com/users/${$searchField.value}`
}


$searchSubmit.addEventListener("click", searchUser);


//Search when press Enter key

$searchField.addEventListener("keydown", e => {
  if(e.key === "Enter") searchUser();

});

/** 
 * Profile
 */

const  /**{NodeElement} */ $profileCard = document.querySelector("[data-profile-card]");

const  /**{NodeElement} */$repoPanel = document.querySelector("[data-repo-panel]");


















// https://api.github.com/users/Jaipal-003