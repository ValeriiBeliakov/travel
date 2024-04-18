import React,{useEffect} from "react";
import "./main.scss";
import img1 from '../Assets/img/img1.jpg'
import img2 from '../Assets/img/img2.jpg'
import img3 from '../Assets/img/img3.jpg'
import img4 from '../Assets/img/img4.jpg'
import img5 from '../Assets/img/img5.jpg'
import img6 from '../Assets/img/img6.jpg'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Main = () => {
  useEffect( () => {
    Aos.init({duration: 2000})
},[])
  const data = [
    {
      id: 1,
      imgSrc: img1,
      title: 'Cappadocia',
      location: 'Turkey',
      fees: "800$",
      description:
        "Set in Goreme, 3.5 km from Cappadocia, Guzide Cave Hotel boasts air-conditioned rooms with free WiFi throughout the property. - Great, varied breakfasts - Family atmosphere, very nice and helpful staff - excellent organization, help in buying trips around the area, good prices. - great location in the heart of beautiful Goreme - Clean, large, functional rooms.",

    },
    {
        id: 2,
        imgSrc: img2,
        title: 'Hôtel de Crillon',
        location: 'Paris',
        fees: "1000$",
        description:
          
          'Overlooking the iconic Place de la Concorde, Hôtel de Crillon is a Parisian palace suffused with sophistication and glamour, merging all the historic architectural detail of a landmark property with a quietly confident display of interior-design grandeur.'     
      },
      {
        id: 3,
        imgSrc: img3,
        title: ' Six Senses Ibiza',
        location: 'Portinatx',
        fees: "900$",
        description:
          "Opened in July 2021, Six Senses Ibiza offers a seamless blend of wellbeing, sustainability and impeccable design, tied together with an unfaltering dedication to stellar hospitality. Located on the island’s Xarraca coast, it’s a perfect getaway to lose and then rediscover yourself across a stay.",
          
      },
      {
        id: 4,
        imgSrc: img4,
        title: 'Equinox Hotel New York',
        location: 'New York City',
        fees: "1500$",
        description:
          "Fitness giant Equinox opened its New York City hotel offshoot in July 2019 to create the ultimate temple to health and wellbeing. From its flagship gym, which spans a staggering 60,000 sq ft, to its nutrition and immunity-boosting food offerings, any guest who enters its doors is destined to leave healthier and happier than when they arrived.",
          
      },
      {
        id: 5,
        imgSrc: img5,
        title: 'Badrutt\'s Palace',
        location: 'St. Moritz',
        fees: "700$",
        description:
          "Towering over Switzerland’s Engadin valley within the glitzy resort town of St. Moritz, Badrutt’s Palace is a fairy-tale-turreted hotel wonderland, opened by Caspar Badrutt in 1896. Come summer, it’s a fantasy lake getaway; come winter, it’s a snow-saturated skiers' valhalla.",
          
      },
      {
        id: 6,
        imgSrc: img6,
        title: 'Eden Rock',
        location: 'St. Barths',
        fees: "1200$",
        description:
          
          'With its pedigree as one of the best addresses in St. Barths, Eden Rock has long been lauded as one of the area’s flagship hotels. Overlooking the crystal-clear waters of Baie de St Jean, each red-roofed room and villa is a unification of warm walnut woods, colourful textures and artworks that enhance its unparalleled panoramas.',
          
      }
  ];
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos = "fade-right" className="title">Most visited destinations</h3>
      </div>
      <div className="secContent grid">
        {data.map(({id,imgSrc,title,location,fees,description})=>{
            return(
                <div key={id} data-aos="fade-up" className="singleDestination">
                    <div className="imageSrc">
                        <img src={imgSrc} alt={title} />
                    </div>
                    <div className="cardInfo">
                       <h4 className="destTitle">{title}</h4>
                       <span className="continent flex">
                         <HiOutlineLocationMarker className="icon"/>
                         <span className="name">{location}</span>
                       </span>
                    </div>
                    <div className="fees ">
                     <div className="price">
                         <h5>{fees}</h5>
                     </div>
                    </div>
                    <div className="description">
                        <p>{description}</p>
                    </div>
                    <button className="btn flex">
                        DETAILS <HiOutlineClipboardCheck/>
                    </button>

                </div>
            )
        })}
      </div>
    </section>
  );
};

export default Main;
