# Formula 1 Official Website Clone

## [View it live](https://dnem88.github.io/formula1spa)
## Table of contents
    - About The App
    - Technologies
    - Approach
    - Credits

### About The App

"Formula 1 Official Website Clone" is created for learning purposes. It is supposed 
to look like the Official F1 website (http://formula1.com/). It uses F1 Rest Api, which I created for
this project, for fetching data (https://boiling-brushlands-51072.herokuapp.com/).

### Technologies
    - React: 17.0.2
        - react-router-dom: 6.0.2
        - react-player: 2.9.0
        - react-testing-library
    - HTML 5
    - CSS 3
        - CSS modules

### Approach

This is my first project with React. It's crteated with functional components only and React hooks.
in the development process I used the useContext() hook in some cases, while in
similar situations I tried building pages only with props and state. 
For each page I created seaprate folder which contains its components. There is a 'common' folder which
contains all components used in more than one place. 
Each component folder includes .js, .css and .test.js files in it.
For styling I chose css modules. Next time I will try styled components. 
I implemented code-splitting with <code>React.lazy and React.Suspense</code> for different routes.

### Credits
 - (https://ergast.com/mrd/)  I used this api for most for the Formula1 data (on the server)
 - (http://formula1.com/) I was inspired from the official website and with small changes all the designs
 are from here 
 

