"use strict";

//selecting classes $ IDs

const listItems = document.querySelectorAll(".list__item");
const subList = document.querySelectorAll(".list__item-2");

listItems.forEach((navItem) => {
  //   const navItemLink = navItem.querySelector("a");
  // console.log(navItemLink);
  navItem.addEventListener("click", (event) => {
    // const currentItem = event.currentTarget
    const currentItem = navItem;
    // console.log(navItem);
    const currentItemChild = currentItem.querySelector(".sub__list");
    if (!currentItemChild) return;
    const childHeight = currentItemChild.clientHeight;
    const parentHeight = currentItem.clientHeight;
    const initialHeight = 34;

    if (parentHeight === initialHeight) {
      currentItem.style.height = `${childHeight + parentHeight}px`;
    } else {
      currentItem.style.height = `${initialHeight}px`;
    }
  });
});

subList.forEach(($listItems2) => {
  $listItems2.addEventListener("click", (e) => {
    e.stopPropagation();
    const $innerSubList = $listItems2.querySelector(".inner__sub__list");
    if (!$innerSubList) return;

    const currentItemHeight = $listItems2.clientHeight;
    const innerSubListHeight = $innerSubList.clientHeight;
    const initialHeight = 34;
    const $parentElement = $listItems2.parentElement.parentElement;
    const parentElementHeight = $parentElement.clientHeight;

    // console.log(currentItemHeight === initialHeight);
    if (currentItemHeight === initialHeight) {
      const newSubListHeight = initialHeight + innerSubListHeight;
      $listItems2.style.height = `${newSubListHeight}px`;
      $parentElement.style.height = `${
        parentElementHeight + innerSubListHeight
      }px`;
    } else {
      $listItems2.style.height = `${initialHeight}px`;
      $parentElement.style.height = `${
        parentElementHeight - innerSubListHeight
      }px`;
    }
  });
});

// listItems.addEveantListener('click', function(e){
//     let current =  e.currentTarget
//     if(current.chi)
// })
