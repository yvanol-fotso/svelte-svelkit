<script lang="ts">
    let personne = {
      nom: 'Fotso',
      prenom: 'Yvanol',
      _occupation: 'stagiaire',
      
      get nomComplet() {
        return `${this.prenom} ${this.nom}`;
      },
      
      set occupation(value:string) {
        if (['stagiaire', 'développeur'].includes(value)) {
          this._occupation = value;
        }
      }
    };
  
    function promouvoir() {
      personne.occupation = 'développeur'; 
      personne = personne; 
    }
  </script>
  
  <div>
    <h1>{personne.nomComplet}</h1>
    <p>Occupation: {personne._occupation}</p>
    <button on:click={promouvoir}>Promouvoir</button>
  </div>