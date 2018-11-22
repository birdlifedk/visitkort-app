# DOF's emailsignatur generator

I forbindelse med lanceringen af den nye designmanual er der også blevet lavet en ny emailsignatur.

Implementeringen er baseret på den gamle app fra 2017, men er blevet genimplementeret i nyeste Angular version (7.0.4)

## Lokal udvikling

For at udvikle lokalt skal man have følgende programmer installeret:

- Node version 8.x eller 10.x
- NPM (Inkluderet med Node)

Derefter skal man installere Angular CLI ved at køre følgende i en terminal:
`npm install -g @angular/cli`

For at se resultatet af koden, skal man gå ind i mappen og køre angular:
```
cd visitkort-2018
ng serve --open
```

--open åbner din browser på adressen `http://localhost:4200`

## Deployment på server

Den seneste deployede version af appen er tilgængelig på http://integration.dof.dk/visitkort-2018/


For at deploye en ny version af emailsignatur generatoren på serveren skal følgende gøres:

1. Compile koden ved at køre `ng build --prod`
2. Kopier indholdet af `dist/` over til `integration.dofbasen.dk:/var/www/integration.dof.dk/visitkort-2018`  
Dette gøres over flere step, og kræver sudo-rettigheder på serveren.