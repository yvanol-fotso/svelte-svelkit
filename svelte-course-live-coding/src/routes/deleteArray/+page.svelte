<script lang="ts">
    // Importation du composant Notification
    import Notification from '$lib/buttonComponent/Notification.svelte';
  
    // Tableau initial de notifications
    let notifications = [
      { id: '1', title: 'Notification 1', body: 'Contenu 1', date: Date.now() },
      { id: '2', title: 'Notification 2', body: 'Contenu 2', date: Date.now() },
      { id: '3', title: 'Notification 3', body: 'Contenu 3', date: Date.now() }
    ];
  
    /**
     * Fonction de suppression : 
     * Crée une nouvelle référence en filtrant les notifications
     * qui ne correspondent pas à l'ID passé.
     */
    function removeNotification(id: string) {
      notifications = notifications.filter(notification => notification.id !== id);
    }
  </script>
  
  <!-- Affichage de la liste de notifications -->
  {#each notifications as notification (notification.id)}
    <Notification {notification} onremove={(id) => removeNotification(id)} />
  {/each}
  
  <style>
    /* Un petit style pour espacer les notifications */
    :global(.notification) {
      margin-bottom: 1rem;
    }
  </style>
  