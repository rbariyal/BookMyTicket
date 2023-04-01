export default async function handler(req, res) {
let data=await fetch('https://api.tvmaze.com/search/shows?q=all')
let result=await data.json();
console.log(result);

    res.status(200).json(result)
  }
  