<script lang="ts">
 
 export let logAction: (event: { message: string }) => void;
 
  function handlerClick() {
    logAction({ message: 'Volume' });
  }
</script>

<div>
  <button on:click={handlerClick}>Volume</button>
</div>



<style>
  div {
    padding: 15px;
    background-color: rgb(136, 158, 84);
    margin-bottom: 10px;
  }

</style>
