import React from "react"
import { Link } from "react-router-dom"
import "./Pactices.css"



import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

export default function Pactices(){
    return(
      <div className="quize_card">
       {/* <div id="PracticeNavBar">
        <h1>Practices</h1>
        <ul>
            <li><Link to={"/Pactices/Question"}>Question</Link></li>

        </ul>
      </div> */}

      <div className='card_quize'>
        <Link to={"/pactices/JavaScript"} style={{ textDecoration: 'none' }}>
          <Card sx={{ width: "200px", height: '250px' }}>
            <CardActionArea>

              <CardMedia sx={{ width: "200px", height: "180px" }} component="img" src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' />
              <CardContent>
                <Typography variant='h4' sx={{ textDecoration: "none" }}>
                  javascript
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>

        <Link to={"/Pactices/Htmlcss"} style={{ textDecoration: 'none' }}>
          <Card sx={{ width: "200px", height: '250px' }}>
            <CardActionArea>

              <CardMedia sx={{ width: "200px", height: "180px" }} component="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG2xeTfbNovL_vyMPnpuRYLrDSD0mBfNKXTXx2vcIAbQKhrLrzDJi2VbiFgcqXxf_lZAw&usqp=CAU" />
              <CardContent>
                <Typography variant='h4' sx={{ textDecoration: "none" }}>
                  Html css
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>

        <Link to={"/Pactices/Quize_react"} style={{ textDecoration: 'none' }}>
          <Card sx={{ width: "200px", height: '250px' }}>
            <CardActionArea>

              <CardMedia sx={{ width: "200px", height: "180px" }} component="img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s' />
              <CardContent>
                <Typography variant='h4' sx={{ textDecoration: "none" }}>
                  React js
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>

      </div>
    
      </div>
    )
  }