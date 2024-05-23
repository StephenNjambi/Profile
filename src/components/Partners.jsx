import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Partners = () => {
  const partners = [
    {
      image: "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/wclrzee79w60rqgqqe4v",
      name: "Atlancis Technologies",
      description: "Atlancis Technologies is an ISO 9001 certified company, a member of the Open Compute Project (OCP) and a Top 100 Midsized Company headquartered in Nairobi.",
      roles: ["DevOps", "Front end design", "back end", "UI design"]
    },
    {
      image: "https://givewatts.org/img/G_HIGH%20RES.%20LOGO.png",
      name: "Givewatts East Africa",
      description: "Sed convallis, nunc at rhoncus auctor, nibh elit lacinia est, vitae laoreet ante quam non nisi.",
      roles: ["DevOps", "Front end design"]
    },
    {
      image: "https://acaltd.co.ke/wp-content/uploads/elementor/thumbs/logo-nwce0t2sxxl61juktoea1oe5v85kpduo1goev4w5rg.png",
      name: "Apex Collectors ",
      description: "Vestibulum vel consectetur libero, sit amet vestibulum eros. Nullam efficitur bibendum enim sit amet.",
      roles: ["DevOps", "UI design"]
    },
  
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000, 
  };

  return (
    <section className=" py-16"> 
      <div className="container mx-auto rounded-lg shadow-md overflow-hidden">
        <h2 className="text-4xl font-bold text-center text-white-800 mb-8">Work Experience</h2>
        <div className="mx-auto border-t-2 border-b-2 border-gray-400"> 
          <Slider {...settings}>
            {partners.map((partner, index) => (
              <PartnerCard key={index} {...partner} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

const PartnerCard = ({ image, name, description, roles }) => {
  return (
    <div className="p-6 flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 md:pr-4 flex items-center">
        <img src={image} alt={name} className="w-8 h-8 mr-5 md:w-10 md:h-10 mr-4 md:mr-0" />
        <div className='ml-7'>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 md:pl-4">
        <div className="md:ml-4">
          <h4 className="text-gray-800 font-semibold">Roles:</h4>
          <ul className="list-disc pl-6">
            {roles.map((role, index) => (
              <li key={index} className="text-gray-600">{role}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Partners;
