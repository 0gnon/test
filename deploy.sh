#!/bin/bash
set -e  # Stoppe si une commande échoue


echo "[*] Build du projet..."
npm run build

echo "[*] Déploiement sur GitHub Pages..."
npx gh-pages -d dist -r https://$GH_TOKEN@github.com/0gnon/test.git

echo "[*] Push des changements sur main..."
git add .
git commit -m "Deploy"
git push https://$GH_TOKEN@github.com/0gnon/test.git main
