fetch("http://", {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
}).then(res => {
    console.log(res)
})