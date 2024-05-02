<script setup></script>

<template>
  <div class="container p-8 border">
    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead class="text-white">
          <tr class="border-0">
            <th>Track</th>
            <th>Artist</th>
            <th>Duration</th>
            <th>Favorite</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr class="group text-white border-0">
            <td>
              <div class="flex items-center gap-3 text-white">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img src="https://placehold.co/600x400" alt="track cover" />
                  </div>
                </div>
                <div>
                  <div class="font-bold">Placeholder trackname</div>
                  <div class="text-sm opacity-50">Placeholder more info</div>
                </div>
              </div>
            </td>
            <td>Artist name</td>
            <td>Duration</td>
            <th>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m6 10.05L15.46 18H7v-7.56L12 5l1 1v.53L12.41 10H18z"
                ></path>
              </svg>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
