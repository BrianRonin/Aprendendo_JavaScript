fetch("https://dark-sky.p.rapidapi.com/%7Blatitude%7D,%7Blongitude%7D?units=auto&lang=en", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "dark-sky.p.rapidapi.com",
		"x-rapidapi-key": "8475a571camsh65772479f161c5ap12616fjsn3f7aeb9a72df"
	}
})
.then(response => {
    response.json
    console.log(response);
})
.catch(err => {
	console.error(err);
});