# jQuery Tags

## Effects (functions to do some cool animation effects)
    - .hide(): hides the matched elements
    - .show(): displays the element
    - .toggle(): toggles the visibility of the elements, changes the CSS display property
    - .slideUp(): animates the height of the matched element,causing lower part of the page to slide up
    - .slideDown(): animates the element to slide down
    - .slideToggle(): animates the lower parts of the page to slide up or down
    - .fadeOut(): animates the opacity of the matched elements from 1 to 0
    - .fadeIn(): animates the opacity of the targeted element from 0 to 1

## CSS (adding or removing a class for any HTML element/DOM)
    - .addClass(): adds the specified class(es) to the targeted element
    - .removeClass():removes class(es) or all classes from the targeted element
    - .css(): sets the property(ies) of a targeted element

## Manipulation (retrieving or setting value or text in any HTML element)
    - .after(): insert content, specified by the parameter, after each element in the set of target
                elements
    - .append(): creates content and then is inserted as the last child of target element(s)
    - .prepend(): creates content and inserts as first child of targeted element(s)
    - .attr(): Gets the attribute value of the first element in the matched set
    - .before(): Creates content and inserts it before target element(s)
    - .html(): Get the HTML content of the first element in the set of matched elements or set the 
                HTML contents of every matched element
    - .text(): Gets the combined text contents of each element in the set of matched elements,
               including descendents 
    - .val(): Gets the current value of the first element in the set of (every) matched element
        - Gets the values of form elements such as input, select, and textarea
        - If called on an empty collection, returns undefined

## Events (functions to handle an event)
    - .click(): binds an event handler to the "click" JS event, or triggers that event on an element
    - .on(): attaches event handlers to the selected set of elements
    - .live() - deprecated (jQuery 1.7)
    - .hover(): binds handlers for both mouseover (mouseenter & mouseleave)

### Note!
For manipulation jQuery functions there are few distinctions to make. The functions `.html()` and `.text()` are different in a key way: `.html()` can be used to insert new HTML markup, meaning new HTML tags `.text()` is used to get or set just the **text** value of an **HTML element**. For instance, you could use `.text()` to change the text of a paragraph, but if you want to put an ordered list inside of the paragraph, you need to use `.html()` to insert the appropriate tags into the paragraph

Similarly, `.append()` and `.html()` do nearly the same thing; they both can alter the HTML content of the selected item. The function `.append` will **add** markup to the element in question, whereas `.html()` will **overwrite** the markup with whatever is run inside the parentheses. So keep in mind that if you want to **add** content, use `.append()`, but if you want to **replace** content, use `.html()`
