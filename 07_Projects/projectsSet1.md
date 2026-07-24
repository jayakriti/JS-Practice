# Projects related to DOM

## Project Link
[Click Here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code
## Project 1 Solution
``` JAVASCRIPT

const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach( (btn) => {
  btn.addEventListener('click', function(enent)
  {
    body.style.backgroundColor = event.target.id
  } )
} )

OR, IF NEEDS TO CHECK THE SPELINGS or ANY COLOR CONDITION

const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach( (btn) => {
  btn.addEventListener('click', function(enent)
  {
    if(event.target.id === 'grey')
    {
    body.style.backgroundColor = event.target.id
  }
  if(event.target.id === 'white')
  {
  body.style.backgroundColor = event.target.id
}
if(event.target.id === 'blue')
{
body.style.backgroundColor = event.target.id
}
if(event.target.id === 'yellow')
{
body.style.backgroundColor = event.target.id
}
  } )
} )

```

## Project 2 Solution
``` JAVASCRIPT
const
```