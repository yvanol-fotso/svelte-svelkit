<script>
    let fruits = [
      { name: "Pomme", color: "red" },
      { name: "Banane", color: "yellow" }
    ];
  </script>
  
  {#snippet fruitItem(fruit)}
    <p style="color: {fruit.color}">
      {fruit.name} ({fruit.color})
    </p>
  {/snippet}
  
  {@render fruitItem(fruits[0])}
  {@render fruitItem(fruits[1])}