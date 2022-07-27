'use strict'

//selecting classes $ IDs

const listItems= document.querySelectorAll('.list__item')
const subList = document.querySelectorAll('.list__item-2')


listItems.forEach(navItem =>{
    const navItemLink = navItem.querySelector('a')
    // console.log(navItemLink);
    navItem.addEventListener('click', (event)=>{
        // const currentItem = event.currentTarget
        const currentItem = navItem
        // console.log(navItem);
        const currentItemChild = currentItem.querySelector('.sub__list');
        if(!currentItemChild)return;
        const childHeight = currentItemChild.clientHeight
        const parentHeight = currentItem.clientHeight
        const initialHeight = 37
        // console.log(childHeight);
        // console.log(parentHeight === initialHeight);
        
        if(parentHeight === initialHeight){
            currentItem.style.height = `${childHeight + parentHeight}px`
        }else{
            // console.log(parentHeight);
            currentItem.style.height = `${initialHeight}px`
        }
        // currentItemChild.classList.toggle('show')
})
})

subList.forEach($listItems2=>{
    
    $listItems2.addEventListener('click', (e)=>{
        e.stopPropagation()
        const $innerSubList = $listItems2.querySelector('.inner__sub__list');
        if(!$innerSubList)return;
        const initialParentHeight = $listItems2.parentElement.clientHeight
        
        const currentItemHeight = $listItems2.clientHeight
        const innerSubListHeight =  $innerSubList.clientHeight
        const initialHeight = 37;
        const $parentElement = $listItems2.parentElement.parentElement
        const parentElementHeight = $parentElement.clientHeight-initialHeight;
        console.log(innerSubListHeight);
        if(currentItemHeight === initialHeight){
            const totalSubListHeight = innerSubListHeight + currentItemHeight
            const totalHeight = totalSubListHeight + parentElementHeight
            $listItems2.style.height = `${totalSubListHeight}px`
            $parentElement.style.height = `${totalHeight}px`
        }else{
            // console.log(parentHeight);
            $listItems2.style.height = `${initialHeight}px`
            $parentElement.style.height = `${initialParentHeight}px`

        }

        // const $parent = $listItems2.parentElement.parentElement
        // console.log($listItems2,$parent );
    })
})




// listItems.addEveantListener('click', function(e){
//     let current =  e.currentTarget
//     if(current.chi)
// })