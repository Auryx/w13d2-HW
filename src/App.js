import Movies from "./components/Movies"

function App() {

  const movies = [
    {
      name: "The Princess Bride",
      year: "1987",
      rating: "PG",
      image: "https://m.media-amazon.com/images/I/7116Aa2ZkRL._SY445_.jpg"

    },
    {
      name: "The Goonies",
      year: "1985",
      rating: "PG",
      image: "https://m.media-amazon.com/images/I/51PWNDJTP1L._SY445_.jpg"

    },
    {
      name: "Rise of the Guardians",
      year: "2012",
      rating: "PG",
      image: "https://m.media-amazon.com/images/I/917ttd6dXXL._AC_UY218_.jpg"

    },
    {
      name: "Barbie",
      year: "2223",
      rating: "PG-13",
      image: "https://m.media-amazon.com/images/I/81Fku0HirwL._AC_UL320_.jpg"

    },
    {
      name: "Spider-Man: Into the Spider-Verse",
      year: "2018",
      rating: "PG",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/Spider-Man_Into_the_Spider-Verse_poster.png/220px-Spider-Man_Into_the_Spider-Verse_poster.png"

    },
  ]


  return (
    <div className="App">
      <Movies movies={movies}/>
    </div>
  );
}

export default App;
