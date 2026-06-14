# Portfolio

Portfolio personnel en **HTML / CSS / JavaScript** pur (sans framework).

## 📁 Architecture

```text
portfolio/
├── index.html              # Page principale (point d'entrée)
├── pages/                  # Les autres pages du site
│   ├── page1.html
│   ├── page2.html
│   ├── page3.html
│   ├── page4.html
│   └── page5.html
├── assets/                 # Toutes les ressources
│   ├── css/
│   │   └── styles.css      # Styles partagés par toutes les pages
│   ├── js/
│   │   └── main.js         # Scripts partagés (menu, page active)
│   └── img/                # Images
├── package.json
└── README.md
```

## 🚀 Lancer le site en local

```sh
npm run dev
```

Puis ouvrir **http://localhost:8000** dans le navigateur.

> Le script `dev` lance un simple serveur statique (`python3 -m http.server`).
> On peut aussi ouvrir `index.html` directement dans le navigateur.