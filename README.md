# EazeCodingChallenge

1) npm install
2) npm start -> http://localhost:4200/
3) npm test to run the unit tests

Structured the application in the dumb/smart component design pattern. The Gif component is the smart comp, and when the 
application launches, it would make the service call to get the trendy gifs. The search bar and the display gifs are in two 
separate components. For the gifs, I used their embed url to display the gifs in an iframe which later I found out is a bit 
problematic performance wise. I wanted to implement infinite scrolling, but was having flickering issues with the iframes.
As a result, I created a button to load more gifs instead. If I had more time, I would like to implement caching for 
the gifs so the user can load more gifs indefinitely. I have also written unit tests for all the components. 
Thank you so much for your time!  
