<script setup></script>

<template>
  <div class="flex flex-col h-screen overflow-hidden">
    <div class="flex flex-row flex-grow">
      <div class="basis-1/3 bg-primary h-full">
        <NavBar />
      </div>

      <div class="basis-3/4 bg-secondary h-full">
        <SearchBar />
        <slot />
      </div>
    </div>

    <div class="container w-screen max-h-1/6">
      <PlayBar />
    </div>
  </div>
</template>
