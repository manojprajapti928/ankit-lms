import React from 'react'
import "./Rating.css"
import StarRatings from 'react-star-ratings';


export default function Rating() {


 const aggregateRating = 1;


    let rating = [
        {
            "Shortname":"TA",
            "name": "Tyrell A.",
            "comment": "As someone who has taken a course on html at a university so far it seems more a bit more in depth and more rounded (just html css and a bit of JS vs all the things offered in this course) and is structured a bit better for a fraction of the price.",
           "rating_star" : 4.8
 
        },
        {
            "Shortname":"DM",
            "name": "Diego antonio iribarren M.",
            "comment": "So far it has been a wonderful course, I would like to highlight the teacher's diction, which is very clear and with a constant tone, always getting to the point in a professional manner, which helps me maintain concentration. The times I have needed help he has responded quickly, so far I am about 15% complete, will update later.",
            "rating_star" : 4.1
 
        },
        {
            "Shortname":"AS",
            "name": "ADEBISI RIDWAN S.",
            "comment": "Very good course the instructor takes his time to explain every step.",
            "rating_star" : 4.8
 
        }
        , {
            "Shortname":"J",
            "name": "Jagadeeshwar",
            "comment": "HTML code publishing and FTP parts are not clearer and promo codes mentioned for external sites also does not work. And it is very basic.",
            "rating_star" : 4.5
 
        }
    ]

  return (
    <div>
       <div className="rating_info">
       <div className="head_">
       <StarRatings
          
          rating={aggregateRating}
          starDimension="28px"
          starSpacing="5px"
          starRatedColor="gold"
          numberOfStars={1}
        />
       <h2>4.4 course rating</h2>
       </div>
       <div className='main'>
       {
        rating.map((item ,index)=>(
       <div className="rating-item" key={index}>
        
        <div className="rating_">
        <div className="rating_head">
            <div className="rating-img"> <p>{item.Shortname}</p></div>
            <div className="rating-name"><p>{item.name} A. </p> 
            <StarRatings
          rating={item['rating_star']}
          starDimension="15px"
          starSpacing="5px"
          starRatedColor="gold"
          numberOfStars={5}
        />
        
        </div>
        </div>

        <div className="rating_body">
            <p>{item.comment}</p>
        </div>
        </div>


       
       </div>))
       }
       </div>
      </div>
    </div>
  )
}
