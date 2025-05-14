export class MediaQuery {
    #query: MediaQueryList;

    constructor(query: string) {
        if (typeof window !== 'undefined') {
            this.#query = window.matchMedia(query);
            console.log("MediaQuery initialisée avec la requête :", query);
            console.log("État initial de la media query : ", this.current);
        } else {
            throw new Error("window is not defined, ensure this is run in a client-side environment");
        }
    }

    get current(): boolean {
        return this.#query.matches;
    }

    subscribe(callback: (matches: boolean) => void) {
        const onChange = () => {
            const matches = this.current;
            console.log("Changement de media query détecté, nouvelle valeur : ", matches); // Debug
            callback(matches);
        };

        // Ajout de l'écouteur
        this.#query.addEventListener('change', onChange);
        console.log("Écouteur 'change' ajouté pour la media query.");

        // Force l'appel initial de la callback en dehors du changement
        onChange();

        return () => {
            console.log("Désabonnement de l'événement 'change'.");
            this.#query.removeEventListener('change', onChange);
        };
    }
}
