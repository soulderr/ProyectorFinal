cmd
ingresar firebase login
press no
ingresar al link y logear la cuenta
luego ingresar firebase projects:list
ng generate environments
ng add @angular/fire
npm install ngx-bootstrap --save
ng add @angular/material 
npm install bootstrap jquery @popperjs/core
en angular.json cambiar styles y scripts
   "styles": [

  "node_modules/bootstrap/dist/css/bootstrap.min.css",

    "src/styles.scss"

    ],

    "scripts": [

    "node_modules/jquery/dist/jquery.min.js",

    "node_modules/@popperjs/core/dist/umd/popper.min.js",

    "node_modules/bootstrap/dist/js/bootstrap.min.js"

    ]

firestore reglas:

1
rules_version = '2';
2
​
3
service cloud.firestore {
4
  match /databases/{database}/documents {
5
    match /{document=**} {
6
      allow read, write: if true;
7
    }
8
  }
9
}
firebase init# ProyectorFinal
