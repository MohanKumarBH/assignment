const fetchData=  url =>{
	let response=  fetch(url).then(response => response.json()).then(data=>{
		return data;
	});
	return response
}

export default fetchData