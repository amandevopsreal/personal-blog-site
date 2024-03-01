// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';
export default async function handler(req, res) {
  console.log(req.query.count)
  let data = await fs.promises.readdir("blogdata")
  data = data.slice(0,parseInt(req.query.count))
  let myFile;
  let allBlogs = []
  for (let i = 0; i < data.length; i++) {
    const item = data
    console.log(item)
    myFile = await fs.promises.readFile("blogdata/" + data[i], "utf-8")
    allBlogs.push(JSON.parse(myFile))
  }
  {/*
    data.forEach((item) => {
      fs.readFile("blogdata/" + item, "utf-8", (d) => {
        allBlogs.push(d)
      })
    })
    res.status(200).json(allBlogs)
  })*/}
  res.status(200).json(allBlogs)
}
