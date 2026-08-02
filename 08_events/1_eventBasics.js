// JS is a sequentially executing langu  age (synchronous), but there are few exceptions like Async and browser's events

// Events executes on triggers, means when user do something with mouse (e.g. click, double-click, hover, etc.), these events get triggerd and then perform tasks

// attachEvent()                // Earlier
// jQuery - .on                 // Earlier

// document.getElementById('owl').onclick = function() {             // Old approach, has less features
//     alert('Owl');
// }



// To read :-

// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentElement
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode


document.querySelector('#images').addEventListener('click', function(e) {            // Modern approach, provide more features
    console.log("Clicked inside the ul");
}, false)

document.querySelector('#owl').addEventListener('click', function(e) {            // Modern approach, provide more features
    console.log("Owl clicked");
}, false)

// Event Propagation :- Event propagation is the overall process of an event moving through the DOM tree. It consists of:
//                      - Capturing Phase
//                      - Target Phase
//                      - Bubbling Phase

// 1. Capturing Phase (Event Capturing) :- The event starts from the root and moves downwards in DOM tree until it reaches the target element.
//                                      When we use true in the third argument, it enables Capturing (the event tracked from outside element to inside element)

// 2. Target Phase :- The event reaches the element that was actually clicked.

// 3. Bubbling Phase :- After reaching the target, the event travels back upward. (default behavior in JS)
//                   When we use false in the third argument, we are doing Bubbling (it tracked from inside element to outside element)


// We use e.stopPropagation() to stop the event from continuing to other elements.
// We use e.stopImmediatePropagation() to stop propagation and prevents any remaining listeners on the same element from running.


document.querySelector('#google').addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("Google clicked");
}, false)


document.querySelector('#images').addEventListener('click', function(e) {
    if (e.target.tagName === 'IMG') {
        let removeIt = e.target.parentNode;
        console.log(e.target.id);
        // removeIt.remove();            // New method
        removeIt.parentNode.removeChild(removeIt);

        // e.target       gives whole HTML element
        // e.target.parentNode          gives parent tag of target element
        // e.target.tagName           gives tag name of the target element
    }
}, false);

