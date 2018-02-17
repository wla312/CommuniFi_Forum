import React from "react";
import { Link, Route } from "react-router-dom";
import "./resources.css"
import Navbar from "../../components/Navbar";
import ResourcesPreview from '../../components/ResourcesPreview'

const Resources = props =>
  <div>
    <Navbar location={'resources'} />

    <div id="resourcesHeader">
      <h1>Resources</h1>
    </div>
       <ResourcesPreview title={'The Net Neutrality map: How I built it'}imageURL={'https://cdn-images-1.medium.com/max/1600/0*xKSgjujj6K_RH5qP.gif'} url={"https://blog.mapbox.com/the-net-neutrality-map-how-i-built-it-c387c9cb64a8"}/>
       <ResourcesPreview title={'Community-Owned Fiber Networks: Value Leaders in America'}imageURL={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbKTX5yFfUP8mc6C0WedSb_82B0w0XDlbHYGE-PMfWnic0A0LeQ'} url={"https://cyber.harvard.edu/publications/2018/01/communityfiber"}/>
       <ResourcesPreview title={'FORGET COMCAST. HERE’S THE DIY APPROACH TO INTERNET ACCESS'} imageURL={'https://www.wired.com/wp-content/uploads/2016/07/1ulzOp9CTjtPaL6RoSonb7g.jpeg' } url={"https://www.wired.com/2016/07/forget-comcast-heres-the-diy-approach-to-internet-access/"}/>
       <ResourcesPreview title={'Net Neutrality: What You Need to Know Now'}imageURL={'http://media2.govtech.com/images/940*630/shutterstock_186658136.jpg'} url={"https://www.savetheinternet.com/net-neutrality-what-you-need-know-now"}/>
       <ResourcesPreview title={'ISP lobby has already won limits on public broadband in 20 states'}imageURL={'https://cdn.arstechnica.net/wp-content/uploads/2014/02/south-park-no-internet-640x359.png'} url={"https://arstechnica.com/tech-policy/2014/02/isp-lobby-has-already-won-limits-on-public-broadband-in-20-states/"}/>
       <ResourcesPreview title={'Harvard Study Shows Why Big Telecom Is Terrified of Community-Run Broadband'}imageURL={'https://video-images.vice.com/articles/5a5817be9fe9c8361239a6ee/lede/1515724047857-1510847311337-DSC00182.jpeg?crop=0.9975308641975308xw%3A1xh%3Bcenter%2Ccenter&resize=1250%3A*'} url={"https://motherboard.vice.com/en_us/article/d345pv/harvard-study-shows-why-big-telecom-is-terrified-of-community-run-broadband"}/>
       <ResourcesPreview title={'One big reason we lack Internet competition: Starting an ISP is really hard'}imageURL={'https://cdn.arstechnica.net/wp-content/uploads/2014/04/fiber-optic-cable.jpg'} url={"https://arstechnica.com/information-technology/2014/04/one-big-reason-we-lack-internet-competition-starting-an-isp-is-really-hard/2/"}/>
  </div>;

export default Resources;
