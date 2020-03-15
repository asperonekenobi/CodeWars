/* 
Write a simple regex to validate a username. Allowed characters are:

lowercase letters, [a-z]
numbers,           \d
underscore          _
Length should be between 4 and 16 characters (both included).{4,16}

*/

function validateUsr(username) {
   let res = /^([a-z]|\d|_){4,16}$/.test(username);
   return res;
}

/* 
    - `^`        Start from the beginning of the string.
    - `[]`       Allow any character specified, including...
    - `a-z`      anything from a to z,
    - `0-9`      anything from 0 to 9,
    - `_`        and underscore.
    - `|`        Or
    - `{4,16}`   Accept 4 to 16 of allowed characters, both numbers included.
    - `$`        End the string right after specified amount of allowed characters is given.
  

const validateUsr = username => /^([a-z]|\d|_){4,16}$/.test(username) */