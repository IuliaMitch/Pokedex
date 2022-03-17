import express from "express";
import path from "path";

const app = express();

const __dirname = path.resolve(path.dirname(''));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set("view engine", "ejs");

const pokedex = [
    {
      numero: 1,
      nome: "Bulbasaur",
      descricao:
        "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
      tipo: "Grass",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
      altura:0.7,
      peso:6.9,
      categoria: "Seed",
      habilidade: "Clorofila"
    },
    {
      numero: 2,
      nome: "Charmander",
      descricao:
        "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
      tipo: "Fire",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
      altura:0.6,
      peso:8.5 ,
      categoria:"Lizard" ,
      habilidade:"Blaze"
    },
    {
      numero: 3,
      nome: "Squirtle",
      descricao:
        "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
      tipo: "Water",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
      altura:0.5,
      peso:9.0,
      categoria:"Turtle",
      habilidade:"Torrent" 
    },
  ];

app.get("/", (req, res) => {
    res.render("index.ejs", {pokedex});
})

const port = 3000;

app.listen(port, ()=>{
    console.log('Servidor Rodando na porta '+ port);
})