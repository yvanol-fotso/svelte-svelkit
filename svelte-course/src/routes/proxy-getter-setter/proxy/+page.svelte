<script lang="ts">
    // Objet original
    const personneOriginale = {
      nom: 'Fotso',
      prenom: 'Yvanol',
      _occupation: 'stagiaire',
      
      get nomComplet() {
        return `${this.prenom} ${this.nom}`;
      },
      
      set occupation(value: string) {
        if (['stagiaire', 'développeur'].includes(value)) {
          this._occupation = value;
        }
      }
    };
  
    // Handler pour le Proxy
    const handler = {
      get(target: any, prop: string) {
        console.log(`Accès à la propriété: ${prop}`);
        return target[prop];
      },
      
      set(target: any, prop: string, value: any) {
        console.log(`Modification de la propriété: ${prop} = ${value}`);
        
        // Interception spéciale pour 'nom'
        if (prop === 'nom') {
          if (value.length < 2) {
            console.error('Le nom doit faire au moins 2 caractères');
            return false;
          }
          console.log('Validation du nom réussie');
        }
        
        target[prop] = value;
        
        // Pour la réactivité Svelte, on doit retourner true
        return true;
      }
    };
  
    // Création du proxy
    let personne = new Proxy(personneOriginale, handler);
  
    function promouvoir() {
      personne.occupation = 'développeur';
      // Pour forcer la mise à jour en Svelte
      personne = personne;
    }
  
    function changerNom() {
      personne.nom = 'Dupont';
      // Alternative pour la réactivité:
      // personne = {...personne};
    }
  </script>
  
  <div>
    <h1>{personne.nomComplet}</h1>
    <p>Occupation: {personne._occupation}</p>
    <button on:click={promouvoir}>Promouvoir</button>
    <button on:click={changerNom}>Changer le nom</button>
  </div>


  <!-- Un Proxy est un objet qui enveloppe un autre objet et intercepte ses opérations (lecture, écriture, suppression de propriétés). -->
  <!-- Svelte utilise des Proxies pour surveiller les modifications imbriquées dans les objets/tableaux sans casser les références. -->
  <!-- Les Proxies permettent d'observer/contrôler dynamiquement les accès aux objets. -->