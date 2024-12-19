const { createApp } = Vue;

createApp({
  template: `
    
      <h1>Lista de Animales</h1>
      <ul>
       <div class="container"> 
        <li v-for="animal in paginatedAnimals" :key="animal.id">
          <img :src="animal.imagen" :alt="animal.animal" width="100" height="100" />
          <div>
            <strong>{{ animal.animal }}</strong> 
            <br />
            <p>Continente: {{ animal.continente }}</p>
          </div>
        </li>
        </div>
      </ul>
      
      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1">Anterior</button>
        <span>Página {{ currentPage }} de {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Siguiente</button>
      </div>
   
  `,
  data() {
    return {
      animals: [
        { id: 1, animal: "Leon", continente: "Africa", imagen: "img/leon.webp" },
        { id: 2, animal: "Oso Grizzly", continente: "America y Europa", imagen: "img/oso.webp" },
        { id: 3, animal: "Gorila", continente: "Africa", imagen: "img/gorila.webp" },
        { id: 4, animal: "Leopardo", continente: "Africa, Asia", imagen: "img/leopardo.webp" },
        { id: 5, animal: "Ciervo", continente: "America y Europa", imagen: "img/ciervo.webp" },
        { id: 6, animal: "Lince", continente: "America, Europa, Asia, Africa y Oceania", imagen: "img/lince.webp" },
        { id: 7, animal: "Zorro", continente: "America, Europa, Asia, Africa y Oceania", imagen: "img/zorro.webp" },
        { id: 8, animal: "Llama", continente: "America", imagen: "img/llama.webp" },
        { id: 9, animal: "Elefante", continente: "Africa y Asia", imagen: "img/elefante.webp" },
        { id: 10, animal: "Rinoceronte", continente: "Africa y Asia", imagen: "img/rinoceronte.webp" },
        { id: 11, animal: "Cabra", continente: "America, Europa, Asia, Africa y Oceania", imagen: "img/cabra.webp" },
        { id: 12, animal: "Cocodrilo", continente: "America, Asia y Africa", imagen: "img/cocodrilo.webp" },
       
      ],
      currentPage: 1,
      itemsPerPage: 4,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.animals.length / this.itemsPerPage);
    },
    paginatedAnimals() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.animals.slice(start, end);
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
  },
}).mount('#app');
