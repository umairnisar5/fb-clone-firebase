import React from 'react'; 
import Story from './Story';
import "./StoryReel.css";
import img1 from "./images/amir.jpeg"
import img2 from "./images/umiar.jpeg"
import img3 from "./images/raza.jpeg"
import img4 from "./images/tayyab.jpeg"
import img5 from "./images/mohsin.jpeg"
import img6 from "./images/amirStory.jpeg"
import img7 from "./images/tayyabStory.jpeg"
import img8 from "./images/umairStory.jpeg"
import img9 from "./images/razaStory.jpeg"
import img10 from "./images/mohsinStory.jpeg"

function StoryReel() {
    return (
        <div className="storyReel" >
            <Story 
            image={img7}
            profileSrc={img4}
            title="Tayyab" />
            <Story 
            image={img6}
            profileSrc={img1}
            title="Amir" />
            <Story 
            image={img8}
            profileSrc={img2}
            title="Umair" />
            <Story 
            image={img9}
            profileSrc={img3}
            title="Ali Raza" />
            <Story 
            image={img10}
            profileSrc={img5}
            title="Mohsin" />
        </div>
    )
}

export default StoryReel;