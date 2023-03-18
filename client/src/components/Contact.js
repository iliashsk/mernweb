import React from 'react';
import {MailOutlined,PhoneOutlined,EnvironmentOutlined }
 from '@ant-design/icons';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
function Contact(props){

	const defaultProps = {
    center: {
      lat: 24.86058249663488,
      lng:  88.01863339333394
    },
    zoom: 15
  };


	return(<>
      
      <div class="jumbotron">
        <div class="container">
          <h1 class="display-3" align='center' style={{color:'green'}}>Jonopriyo Textile</h1>
          <div Style={{width:'200px',height:'200px'}} align="center">
       
          	<h3>Hatkhola-Jamaipara Road,<br/> Chandni Market, <br/>Near by- 5-Tala jame-Masjid,<br/> Kaliachak, India, West Bengal</h3>         	
          	<h3><MailOutlined/>  jonopriyotextile@gmail.com</h3>
          	<h3><PhoneOutlined/>  8250085790/9563734519</h3>
          
          </div>
        </div>
      </div>

      <div class="container">
       
        <div class="row">
          <div class="col-md-4">
            <h2>Heading</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo,
             tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. 
             Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
            </p>
          
          </div>
          <div class="col-md-4">
            <h2>Heading</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo,
             tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. 
             Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. 
            </p>
           
          </div>
          <div class="col-md-4">
            <h2>Our Location</h2>
         <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={24.86058249663488}
          lng={ 88.01863339333394}
          text={<><EnvironmentOutlined
                style={{fontSize:'30px',color:'red'}}/>
                <p style={{fontSize:'20px',color:'blue'}}>jonopriyotextile</p></>
                 }
          
        />
        </GoogleMapReact>
        <button><a href="https://www.google.com/maps/place/Jonopriyo+Textile/@24.860013,88.0188587,17z/data=!4m6!3m5!1s0x39fa57892d188715:0xf4b74c2888206b38!8m2!3d24.8602418!4d88.0182257!16s%2Fg%2F11bwm75rqq" target='blank'>See on Google map</a></button>
   
          </div>
        </div>
        </div>
</>);
}
export default Contact;