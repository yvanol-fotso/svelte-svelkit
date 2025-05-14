export const secret = 'value';



// Dans SvelteKit, les modules réservés au serveur permettent de protéger les informations sensibles comme des clés API ou des secrets, en veillant à ce qu'elles ne soient jamais exposées côté client.

// L'idée est simple : on crée des modules spécifiques, comme secrets.server.ts, dans lesquels on stocke des informations sensibles. Ces fichiers ne sont accessibles que depuis le serveur, ce qui assure leur sécurité. Par exemple, dans un fichier secrets.server.ts situé dans le dossier produit, on peut définir des variables privées comme ça :

// ts
// Copier
// Modifier
// export const secret = 'value'; // Secret côté serveur
// Ensuite, pour organiser ces données, on peut aussi avoir un autre fichier dans lib/server/secrets.ts, qui contiendra également des informations que seul le serveur pourra lire.

// Une fois ces secrets définis, on peut les importer dans nos fichiers, comme par exemple dans produit/+page.ts, où on pourra utiliser ces valeurs sensibles sans jamais les exposer côté client :

// ts
// Copier
// Modifier
// import { secret } from './secrets.server'; // Import du secret