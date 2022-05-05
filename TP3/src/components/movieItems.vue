<template>
    <div id="app">
            
        <h1 v-bind:title="message" v-if="display">{{ message }}</h1>

        <input type="text" placeholder="recherche par nom" v-model="searchValue"  id="search-input"/>
        <input type="text" placeholder="recherche par annee" v-model="searchValueAnne"  id="search-inputAnnee"/>
        <input type="text" placeholder="recherche par real" v-model="searchValueReal"  id="search-inputReal"/>

        <li v-for="(movie,index) in searchResult" :key="movie.title">{{ movie.title }}, {{ movie.release }}, {{ movie.director }}, {{ movie.synopsis }}, {{ movie }}<button v-on:click="suppimer(index)">supprimer</button> <button v-on:click="editer(index)">editer</button></li>
        
        <input type="text" v-model="title" placeholder="titre"/>
        <input type="text" v-model="release" placeholder="realease" />
        <input type="text" v-model="director" placeholder="director"/> 
        <input type="text" v-model="synopsis" placeholder="synop"/>
        <button v-on:click="addMovie">Ajouter</button>
        <p>{{ first_letter }}</p>
    </div>
</template>

<script>
import Vue from "vue"
export default {
  name: 'MovieItems',
  props: {
      msg : String
  },
   data: function(){
       {
           return{
                message:"Séance 2",
                display:true,
                searchValue:"",
                searchValueReal:"",
                searchValueAnne:"",
                movies:[
                    {title:"matrix",release:"2040",director:"Waschowski",synopsis:"c'est le synopsis"},
                    {title:"film 2",release:"2189",director:"Dicaprio",synopsis:"c'est le synopsis"}
                ],
                title:"", 
                release:"",
                director:"",
                synopsis:"",
                rechercher:"",  
                filmRecherche:"",
            }
        }       
   },
   methods: {
            addMovie(){
                this.movies.push({title: this.title,release: this.release,director: this.director,synopsis: this.synopsis});
            },
            suppimer(index){
                this.movies.splice(index, 1);
            },
            editer(index){
                Vue.set(this.movies, index,{title: this.title,release: this.release,director: this.director,synopsis: this.synopsis});
            },
            rechercher(){
                this.valeurTri.set(true);
                this.filmRecherche = this.movies.filter(movie => movie.title=this.rechercher);
                Vue.set(this.filmRecherche);
            }
        },
       
        computed: {
        searchResult() {
            let tempRecipes = this.movies
  
            if (this.searchValue != '' && this.searchValue) {
                tempRecipes = tempRecipes.filter((item) => {
                return item.title
                .toUpperCase()
                .includes(this.searchValue.toUpperCase())
                })
            }

            if (this.searchValueReal != '' && this.searchValueReal) {
                tempRecipes = tempRecipes.filter((item) => {
                return item.director
                .toUpperCase()
                .includes(this.searchValueReal.toUpperCase())
                })
            }

            if (this.searchValueAnne != '' && this.searchValueAnne) {
                tempRecipes = tempRecipes.filter((item) => {
                return item.release
                .toUpperCase()
                .includes(this.searchValueAnne.toUpperCase())
                })
            }


            return tempRecipes;
        },
        first_letter() {
            return this.title.charAt(0);
        }
    }

}
</script>