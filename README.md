# Angular Custom Elements

Angular Custom elements

# step up and run

1 - build

```shell
npm i && npm run shot
```

2 - index.html

 - there will be a new folder that is generated: `custom-element-build` folder
 - and then create a file `index.html`
 - and put `main-bundle.js` in a script

 the following outcome should be:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Host Custom Element</title>
  </head>
  <body>
    <test-counter></test-counter>
    <script src="main-bundle.js" defer></script>
  </body>
</html>
```

## important to know

Don't build and publish incopereted pollyfills file while Angular Host wants to host this custom elements. because of Zone.js would be duplicate and collided with other the existing file of Zone of app hoster.

### Angular Host

put these two js in index.html

```html
  <script src="https://cdnjs.cloudflare.com/ajax/libs/zone.js/0.9.1/zone.min.js"></script>
  <script type="text/javascript" src="http://localhost:8080/main-bundle.js" defer></script>
```
it will work regardless the error: 
```
zone.js:2956 Uncaught TypeError: __webpack_require__.r is not a function
    at Object.7435 (zone.js:2956)
    at n (main-bundle.js:1)
    at __webpack_exec__ (polyfills.ts:65)
    at polyfills.ts:65
    at a (main-bundle.js:1)
    at webpackJsonpCallback (jsonp chunk loading:34)
    at polyfills.js:2
```
in order to solve the issue, use loading functionality, something like that:
```js
let script = document.createElement('script') as any;
script.type = 'text/javascript';
script.src = this.scripts[name].src;
if (script.readyState) {  //IE
  script.onreadystatechange = () => {
    if (script.readyState === "loaded" || script.readyState === "complete") {
      script.onreadystatechange = null;
      this.scripts[name].loaded = true;
      resolve({ script: name, loaded: true, status: 'Loaded' });
    }
  };
} else {  //Others
  script.onload = () => {
    this.scripts[name].loaded = true;
    resolve({ script: name, loaded: true, status: 'Loaded' });
  };
}
script.onerror = (error: any) => resolve({ script: name, loaded: false, status: 'Loaded' });
document.getElementsByTagName('head')[0].appendChild(script);
```
other way to implement a script service

```ts
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export class ScriptService {
 
  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }
 
 /**
  * Append the JS tag to the Document Body.
  * @param renderer The Angular Renderer
  * @param src The path to the script
  * @returns the script element
  */
  public loadJsScript(renderer: Renderer2, src: string): HTMLScriptElement {
    const script = renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    renderer.appendChild(this.document.body, script);
    return script;
  }
}
```
