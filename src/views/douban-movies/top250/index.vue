<template>
  <div>
    <h1>豆瓣电影 TOP 250</h1>
    <ul>
      <li v-for="movie of movies" :key="movie.id">
        <p>{{ movie.title }}</p>
        <img :src="movie.images.small" :alt="movie.alt" />
      </li>
    </ul>
  </div>
</template>

<script>
import { getTop250Movies } from "@/api/douban-movies";

export default {
  name: "Top250",
  data() {
    return {
      movies: []
    };
  },
  async created() {
    const { subjects } = await getTop250Movies({
      start: 0,
      count: 20
    });

    this.movies = subjects;
  }
};
</script>
