<template>
  <div class="home">
    <div>
      <h1>Welcome!</h1>
      <h2>This is the best page for Star Wars fans</h2>
      <img src="../assets/lluc_soc_ton_pare.png" />
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus repellat id suscipit sequi, amet doloremque est nihil magni ipsam vero, omnis dolore qui quos voluptatem quo tenetur distinctio soluta culpa...</p>
    </div>
  </div>
</template>

<style>
.home {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

.home div {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin-top: 50px;
  padding: 20px;
  border: 1px solid white;
  border-radius: 12px;
}

.home div p {
  padding: 20px;
}
</style>

