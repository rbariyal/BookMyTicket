
export default async function handler(req, res) {
    console.log(req.query)
    const id= req.query.imdb
   console.log(id);
 
       let data=await fetch(`https://api.tvmaze.com/lookup/shows?imdb=${id}`)
    let show=await data.json()
    res.status(200).json(show)

  
  }