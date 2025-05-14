<script lang="ts">
    
    export let logAction: (event: { message: string }) => void;

    function handlerClick(){
        logAction({ message: 'Clik sur prev' });
    }
     
    function handlerClickNext(){
        logAction({ message: 'Clik sur next' });
    }

    function handlerClickPause(){
        logAction({ message: 'Clik sur pause' });
    }





</script>

<div>
    <button on:click={handlerClick}>Prev </button>
    <button on:click={handlerClickNext}>Next </button>
    <button on:click={handlerClickPause}>Pause </button>
</div>




<style>
    div {
      padding: 15px;
      background-color: burlywood;
      margin-bottom: 10px;
    }
  </style>