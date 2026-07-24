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
const form = document.querySelector('form')

 form.addEventListener('submit', function(event)
 {
  event.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height))
  {
    result.innerHTML = `Please enter valid height`
  }else if(weight === '' || weight < 0 || isNaN(weight))
  {
    result.innerHTML = `Please enter valid weight`
  }

  else
  {
    const bmi = (weight/(height*height/10000)).toFixed(2);
    if(bmi < 18.6)
    {
      result.innerHTML = `<span>${bmi}</span> <br /> Under Weight`; 
    }else if(bmi >= 18.6 && bmi <24.9)
    {
      result.innerHTML = `<span>${bmi}</span> <br /> Normal Range`; 
    }else if(bmi >=24.9)
    {
      result.innerHTML = `<span>${bmi}</span> <br /> Overweight`; 
    } 
  }
 })
```