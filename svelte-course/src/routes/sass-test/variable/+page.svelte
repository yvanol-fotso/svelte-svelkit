<script>
     import DynamicStyles from '$lib/DynamicStyles.svelte';
  
    let bgColor = 'lightgreen';
    let textColor = 'darkgreen';
    let makeBold = true;
  
    function toggleBold() {
      makeBold = !makeBold;
    }
  
    function changeColors() {
      bgColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      textColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    }
  </script>
  
  <div>
    <h1>Composant Parent</h1>
  
    <DynamicStyles
      backgroundColor={bgColor}
      textColor={textColor}
      isBold={makeBold}
    />
  
    <button on:click={toggleBold}>Toggle Bold</button>
    <button on:click={changeColors}>Change Colors</button>
  
    <DynamicStyles
      backgroundColor="yellow"
      textColor="red"
      isBold={false}
    />
    
  </div>