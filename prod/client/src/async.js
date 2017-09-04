const fetchStuff = async() => {
    const res = await fetch('http://rallycoding.herokuapp.com/api/music_albums');
    const json = await res.json();

    console.log(json);
}

fetchStuff();