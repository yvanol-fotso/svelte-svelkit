<script lang="ts">
    
    export let clickEvent: (event: { message: string }) => void;

    function handlerClick(){
        clickEvent({ message: 'Clik sur prev' });
    }
     
    function handlerClickNext(){
        clickEvent({ message: 'Clik sur next' });
    }

    function handlerClickPause(){
        clickEvent({ message: 'Clik sur pause' });
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