<script lang="ts">
    import { timeStore } from '$lib/utils/timeStore'; 
  </script>
  
  <p>Mon heure actuelle est : {$timeStore}</p>
  <style>
    p {
      font-size: 1.5rem;
      font-weight: bold;
    }
  </style>
  