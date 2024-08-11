/**
 * Add eventlisterner on multiple elements
 * @param{NodeList}$ elements  NodeList
 * @param{Sttring}eventType string
 * @param{Function}callback Function
 */


'use strict';

const addEventOnElement = function($elements, eventType, callback){
 for(const $item of $elements){
    $item.addEventListener(eventType,callback);
 }
}

/**
 * Header scroll state
 */

const /**{NodeElement} */ $header = document.querySelector("[data-header]");
window.addEventListener("scroll",function (){
   $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});

/**
 * Search toggle
 */

const/**{NodeElement} */ $searchToggler = document.querySelector("[data-search-toggler]");
const/**{NodeElement} */$searchField = document.querySelector("[data-search-field]");
let /**{Boolean} */ isExpended = false;

$searchToggler.addEventListener("click", function(){
   $header.classList.toggle("search-active");
   isExpended = isExpended ? false : true;
   this.setAttribute("aria-expended", isExpended);
   $searchField.focus();
})

/**
 * Tab navigation
 */

const /**{NodeList} */ $tabBtns = document.querySelectorAll("[data-tab-btn]")
const /**{NodeList} */ $tabPanels = document.querySelectorAll("[data-tab-panel]");

let /**{NodeList} */  [$lastActiveTabBtn] = $tabBtns;
let /**{NodeList} */  [$lastActiveTabPanel] = $tabPanels;
addEventOnElement($tabBtns, "click", function(){
 $lastActiveTabBtn.setAttribute("aria-selected", "false");
 $lastActiveTabPanel.setAttribute("hidden","");



 
 this.setAttribute("aria-selected", "true");
 const/**{NodeList} */ 
})




