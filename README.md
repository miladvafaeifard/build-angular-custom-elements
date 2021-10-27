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


