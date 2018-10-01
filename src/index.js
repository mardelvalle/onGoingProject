//import _ from 'lodash';
import AFRAME from 'aframe';
 function component() {
   let element = document.createElement('a-scene');
// Lodash, currently included via a script, is required for this line to work
   element.innerHTML = element.innerHTML + '<a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4" shadow></a-plane>';
   //let element2 = document.createElement('a-sphere');
     return element;
 }

 document.body.appendChild(component());
