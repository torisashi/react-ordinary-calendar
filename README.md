# react-ordinary-calendar

## Installation

```sh
npm install --save-dev react-ordinary-calendar
```

## Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from 'react-ordinary-calendar';

let wrapper = document.getElementById("wrapper");
ReactDOM.render(
  <Calendar />, 
  wrapper
);
```
## Props

### callback
You can pass the callback function with this prop.
The callback function you passed will be called when td > a is clicked.

```js
let myCallback = function(arg) {
  console.log(arg); //e.g. 2015-11-01
};

ReactDOM.render(
  <Calendar callback={myCallback} />, 
  wrapper
);
```
You can get the date from the argument.

### defaultStyle
If you don't want to use default inline style, you can remove it.

```js
ReactDOM.render(
  <Calendar defaultStyle={false} />, 
  wrapper
);
```
