# MyNgElements

Working with Angular Elements

## Development server

Run `npm run serve` for a dev server. Navigate to `http://localhost:8080/`. This will load a static HTML with created components

## Code scaffolding

- Run `ng g component component-name -v Native` to generate a new component.
- Registering component in NgModule by adding following code
```
 constructor(private injector: Injector) {
    const componentName = createCustomElement(ComponentName, { injector });
    customElements.define('component-name', componentName);
  }

  ngDoBootstrap() {}
```

## Build and package

Run `npm run build && npm run package` to build the project and generate single element.js file. The generated element.js.gz will be stored in the `./` directory.

## Steps to create project
- `ng new myNgElements`
- `cd myNgElements`
- `ng add @angular/elements`
- Remove `app.component.*`

## Added dependencies
- `npm i -D http-server` - Running HTTP server for demo

## Build script changes
- "build": "ng build --prod --output-hashing=none",
- "package": "cat dist/myNgElements/{runtime,polyfills,scripts,main}.js | gzip > public/myNgElements.js.gz",
- "serve": "http-server --gzip"
