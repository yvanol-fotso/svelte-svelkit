<script lang="ts">
    import { customCssTransition } from './CustomCssTransition';
    import { customJsTransition } from './CustomJsTransition';
    import { myFlipAnimation } from './MyFlipAnimation';
  
    let showCss = false;
    let showJs = false;
    let showFlip = false;
  </script>
  
  <style>
    .box {
      width: 100px;
      height: 100px;
      margin: 10px;
      border-radius: 12px;
      color: white;
      font-weight: bold;
      text-align: center;
      line-height: 100px;
    }
  
    .css-box { background-color: blue; }
    .js-box { background-color: green; }
    .flip-box { background-color: red; }
  
    .buttons {
      margin-bottom: 20px;
    }
  </style>
  
  <div class="buttons">
    <button onclick={() => showCss = !showCss}>Toggle CSS</button>
    <button onclick={() => showJs = !showJs}>Toggle JS</button>
    <button onclick={() => showFlip = !showFlip}>Toggle Flip</button>
  </div>
  
  <div style="display: flex; gap: 20px;">
    {#if showCss}
      <div class="box css-box" transition:customCssTransition={{ duration: 1000 }}>
        CSS
      </div>
    {/if}
  
    {#if showJs}
      <div class="box js-box" transition:customJsTransition={{ duration: 1000, spin: 2 }}>
        JS
      </div>
    {/if}
  
    {#if showFlip}
      <div class="box flip-box" transition:myFlipAnimation={{ duration: 800 }}>
        FLIP
      </div>
    {/if}
  </div>
  