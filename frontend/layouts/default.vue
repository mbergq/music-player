<script setup></script>

<template>
  <div class="flex flex-col h-screen max-h-screen overflow-hidden">
    <div class="flex flex-row flex-grow">
      <div class="basis-1/4 bg-primary">
        <NavBar />
      </div>

      <div class="basis-3/4 bg-primary flex flex-col flex-wrap">
        <SearchBar />
        <div class="flex-grow overflow-y-auto" style="max-height: 1050px">
          <slot />
        </div>
      </div>
    </div>

    <div class="w-full flex-shrink-0 flex-grow-0">
      <PlayBar />
    </div>
  </div>
</template>
