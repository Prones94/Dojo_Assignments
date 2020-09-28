# Python Methods

## String Methods
    - `string.upper()`: returns a copy of the string with all the characters in uppercase
    - `string.lower()`: returns a copy of the string with al lthe characters in lowercase
    - `string.count(substring)`: returns number of occurrences of substring in string
    - `string.split(char)`: returns a list of values where string is split at the given character. 
       Without a parameter the default split at every space.
    - `string.find(substring)`: returns the index of the start of the first occurrence of substring
       within string
    - `string.isalnum()`: returns boolean depending on whether the string's length is > 0 and all 
       characters are alphanumeric (letters and numbers only). String that include spaces and punctuation will return False for this method. Similar methods include `.isalpha()`,
       `.isdigit()`, `isslower()`, `isupper()`
       -> All return booleans
    - `string.join(list)`: returns a string that is all strings within our set (in this case a list)
       concatenated
    - `string.endswith(substring)`: returns a boolean based upon whether the last characters of string
       match substring
    