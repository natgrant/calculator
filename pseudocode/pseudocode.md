
# Reverse Pseudocode: calculator challenge

## HTML

 * Create an element with the class calculator
 * Create another element with an ID of title, to contain the heading
 * Nest another ID of tagline, to contain text 'electronic calculator'
 * Add an input element for text with an id answer
 * Nest a row class inside 
 * Add a button element with a 'ctrl' class and text for AC button
 * Add a button element with the 'ctrl' class and text for CE button
 * Add a button for %
 * Add a button for /
 * Close the row above & open another
 * Add buttons for 7, 8, 9, and x 
 * Close the row above & open another
 * Add buttons for 4, 5, 6, and -
 * Repeat for 1, 2, 3, and + (give a class tall to +)
 * Repeat for 0, ., and =


## CSS

 * Special font used from font awesome & colors specified 
 * Give body and html a width of 100% & background color
 * Apply width, height, background color and margin to calculator class
 * Set a border radius (if rounded edges desired)
 * Set a box shadow if desired
 * Align text 
 * To the title ID set padding, margin, color and font type
 * To the tagline ID set text case, color, font, and font size
 * Set background color to input text type, border, lineheight, width, font size, direction, etc.
 * To ctrl class set border etc
 * For tall class set height, float, mr, ml

 ## JS

 * Assign 'entries' to empty string
 * Assign 'total' to integer zero

 * Assign 'temp' to empty string
 * Use the JQuery selector to select the button elements on click
 * Within the function set 'val' and assign to get string containing combined text of matched elements (this.text) 
 
  //got a number, add to temp 
 * If the variable 'val' is NAN or if that is false check (||) val is equal to '.' if true return true
 * then temp equals temp plus val (+=);
 * Use the JQuery selector $("") to add to val - assign to temp.substring(0, 10)

 * got some symbol other than equals, add temp to our entries *
 * then add our current symbol & clear temp
 * Use else if to check if 'val' is equal to 'AC'
 * use object literal notation to declare entries with empty array
 * temp to empty string
 * total to zero
 * use $(") to set answer to val('')

* clear last entry *
 * else if val is equal to CE
 * then temp assigned empty substring
 * $(") to se answer and access val ('')

* change multiply symbol to work with eval *
* else if (val is equal to 'x')
* then push entries to end of temp array
* push entrie '*'
* temp is ''

* change divide symbol to work with eval *

* got equals sign perform calculation *
* else if the val is equal to equals '='
* then push entries to end of temp array

* set var nt and assign to <Number> with entries starting at [0]
* loop through index starting at 1 for length of entries
* assign number of entries to be index + 1 to var 'nextNum'
* assign the index of entries to var symbol

* if var symbol is equal to string + then number of entries = number of entry + nextNum
* else if symbol is a - then nt is nt  - nextNum
* else if *
* else if /

add the index i + 1 = id

* swap the '-' symbol so text input handles it correctly
* if nt is less than zero
* then assign nt to return absolute value of nt + '-'

* Check answer to see if val(nt)
* with entries empty array
* Set temp empty string

* else 
* push entries to end of temp
* push entries to end of val
* set temp empty string
 

