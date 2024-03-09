import "./App.css";

//1. Given an array of objects, write a React component to display the details of laptops which have price above 4999 and  below 15000.

const Laptops = ({ laptops }) => {
  const filteredLaptops = laptops.filter(
    (laptop) => laptop.price > 4999 && laptop.price < 15000,
  );
  const laptopList = filteredLaptops.map((laptop) => (
    <div key={laptop.id}>
      <h3>{laptop.brand}</h3>
      <p>Price: {laptop.price}</p>
    </div>
  ));
  return (
    <>
      <h2>Laptops</h2>
      {laptopList}
    <hr/>
    </>
  );
};

//2. Given an array of objects, write a React component to display the details of "Fantasy" genre books.

const Books = ({books}) => {
  const filteredBooks = books.filter(book => book.genre === "Fantasy")
  const bookList = filteredBooks.map(book => (
    <div key={book.id}>
    <h3>{book.title}</h3>
      <p>Genre: {book.genre}</p>
           </div>
    ))
  return (
    <>
    <h2>Books</h2>
      {bookList}
       <hr/>
    </>
  )
}

//3. Given an array of objects, write a React component to display the details of podcast where the duration is more than 30 mins.

const Podcast = ({podcasts}) => {
  const filteredPodcasts = podcasts.filter(pod => pod.duration > 30)
  const podcastList = filteredPodcasts.map(pod => (
    <div key={pod.id}>
    <h3>{pod.title}</h3>
      <p>Duration: {pod.duration}</p>
    </div>
  ))
  return (
    <>
    <h2>Podcasts</h2>
      {podcastList}
      <hr/>
    </>
  )
}


//4. Given an array of objects, write a React component to display the details of "Action" genre movies.

const Movies = ({movies}) => {
  const filteredMovies = movies.filter(movie => movie.genre === "Action")
  const movieList = filteredMovies.map(movie => (
    <div key={movie.id}>
    <h3>{movie.title}</h3>
      <p>Genre: {movie.genre}</p>
    </div>
  ))
  return (
    <>
    <h2>Movies</h2>
      {movieList}
      <hr/>
    </>
  )
}

//5. Given an array of objects, write a React component to display the details of "Full-time" jobs.

const Jobs = ({jobs}) => {
  const filteredJobs = jobs.filter(job => job.type === "Full-time")
  const jobsList = filteredJobs.map(job => (
    <div key={job.id}>
    <h3>{job.title}</h3>
      <p>Type: {job.type}</p>
    </div>
  ))
  return (
    <>
      <h2>Jobs</h2>
      {jobsList}
      <hr/>
    </>
  )
}

//6. Given an array of objects, write a React component to display the playlists which are of "Artist 1".

const Artist = ({songs}) => {
  const filteredArtists = songs.filter(song => song.artist === "Artist 1");
  const list = filteredArtists.map(artist => (
    <div key={artist.id}>
      <h3>{artist.title}</h3>
      <p>Artist: {artist.artist}</p>
    </div>
  ))
  return (
   <>
     <h2>Songs</h2>
       {list}
     <hr/>
   </>
  )
}

export default function App() {
  const laptops = [
    { id: 1, brand: "Dell", price: 8000 },
    { id: 2, brand: "HP", price: 7000 },
    { id: 3, brand: "Lenovo", price: 19000 },
  ];

  const books = [
    { id: 1, title: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy" },
    { id: 2, title: "The Hobbit", genre: "Self-help" },
    { id: 3, title: "Mistborn: The Final Empire", genre: "Fantasy" },
  ];

   const podcasts = [
      { id: 1, title: "Tech Talk", duration: 45 },
      { id: 2, title: "Business Insights", duration: 25 },
      { id: 3, title: "Science Hour", duration: 60 },
    ];

  const movies = [
      { id: 1, title: "Mission Impossible", genre: "Action" },
      { id: 2, title: "Die Hard", genre: "Action" },
      { id: 3, title: "The Avengers", genre: "Adventure" },
    ];

  const jobs = [
      { id: 1, title: "Software Engineer", type: "Full-time" },
      { id: 2, title: "Marketing Manager", type: "Part-time" },
      { id: 3, title: "Data Analyst", type: "Full-time" },
    ];


  const songs = [
      { id: 1, title: "Song 1", artist: "Artist 1" },
      { id: 2, title: "Song 2", artist: "Artist 2" },
      { id: 3, title: "Song 3", artist: "Artist 1" },
    ];
  
  return (
    <main>
      <Laptops laptops={laptops} />
      <Books books={books}/>
      <Podcast podcasts={podcasts}/>
      <Movies movies={movies}/>
      <Jobs jobs={jobs}/>
      <Artist songs={songs}/>
    </main>
  );
}
