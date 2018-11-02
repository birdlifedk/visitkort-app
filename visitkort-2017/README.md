# VisitkortApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.

## Dansk beskrivelse

Appen kan bruges til at udfylde sine egne kontaktinformationer i et standard "Birdlife" layout. Dernæst downloade og bruge disse direkte.

## Involverede

Bestilt af Toke Nyborg
Programmeret af Theo Askov

### Build
DOF: Kør `ng build --deploy-url https://integration.dof.dk/visitkort/`for at publicere til drift. Sitet er valgt, da signaturen er "integreret med" mail.
Hvis der er nye assets skal disse publiceres, men lad de gamle ligge da visitkort lavet.
I den eksporterede `index.html`skal teksten `  <base href="/Visitkort-app">` rettes til `  <base href="/visitkort">` inden siden eksporteres til drift.

## Default from `ng create` commando

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
