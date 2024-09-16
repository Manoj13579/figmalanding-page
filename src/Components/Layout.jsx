import { useState } from 'react';
import logo from '../assets/logo.png';
import testimonial1Img from '../assets/testimonial1.png';
import features1Img from '../assets/features1.png';
import features3Img from '../assets/features3.png';
import blogImg from '../assets/blog.png';
import blogImg2 from '../assets/blog2.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';
import slide1 from '../assets/slide1.png';
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import clientLogo1 from '../assets/clientLogo1.png';
import clientLogo2 from '../assets/clientLogo2.png';
import clientLogo3 from '../assets/clientLogo3.png';
import membershipLogo from '../assets/membershipLogo.png';

const Layout = () => {

  const settings = {
    dots: true, // show dots at the bottom
    infinite: true, // make the carousel loop
    speed: 500,
    slidesToShow: 1, // number of slides to show
    slidesToScroll: 1, // number of slides to scroll at once
    autoplay: true, // enable autoplay
autoplaySpeed: 3000, // duration between slides (in milliseconds)
    responsive: [
      {
        breakpoint: 1024, // at 1024px screen width or less
        settings: {
          slidesToShow: 1, // show 1 slide
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true, // enable autoplay
autoplaySpeed: 3000, // duration between slides (in milliseconds)
        },
      },
      {
        breakpoint: 600, // at 600px screen width or less
        settings: {
          slidesToShow: 1, // show 1 slide
          slidesToScroll: 1,
          autoplay: true, // enable autoplay
autoplaySpeed: 3000, // duration between slides (in milliseconds)
        },
      },
    ],
  };


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="bg-gray-100 py-4">
  <nav className="container mx-auto flex justify-between items-center relative">
    <img src={logo} alt="logo" className="h-4 w-15 md:w-30 md:h-8" />
    {/* Toggle Button appears only in small screen coz of md:hidden*/}
    <button
      onClick={toggleMenu}
      className="md:hidden text-gray-500 focus:outline-none"
    >
      {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
    </button>

    {/* Menu Items: isOpen appears in small screen only coz toggle button appears only in small screen.for md direcltly specified as `md:flex... */}
    <ul
      className={`md:flex md:text-gray-500 font-medium md:static md:space-x-6 ${
        isOpen ? 'flex flex-col items-center justify-center absolute top-full left-0 w-full bg-gray-700 text-gray-500 z-50' : 'hidden'
      }`}
    >
      <li className="py-2 px-4 cursor-pointer hover:bg-gray-500 hover:text-white md:p-0">Home</li>
      <li className="py-2 px-4 cursor-pointer hover:bg-gray-500 hover:text-white md:p-0">Service</li>
      <li className="py-2 px-4 cursor-pointer hover:bg-gray-500 hover:text-white md:p-0">Feature</li>
      <li className="py-2 px-4 cursor-pointer hover:bg-gray-500 hover:text-white md:p-0">Product</li>
      <li className="py-2 px-4 cursor-pointer hover:bg-gray-500 hover:text-white md:p-0">Testimonial</li>
      <li className="py-2 px-4 cursor-pointer hover:bg-gray-500 hover:text-white md:p-0">FAQ</li>
    </ul>

    {/* Login and Sign Up */}
    <div className="flex space-x-4">
      <button className="text-green-500">Login</button>
      <button className="bg-green-500 text-white py-2 px-4 rounded">Sign Up</button>
    </div>
  </nav>
</header>

      {/* Hero Section */}
      <div className="relative w-full mx-auto p-4 2xl:w-2/4">
        <Slider {...settings}>
        <div className='w-full h-auto rounded-lg shadow-md'>
          <section className="flex flex-col mx-16 lg:flex-row ">
        <div className="flex justify-center flex-col gap-8 md:px-40">
        <h2 className="text-3xl font-medium text-gray-700">Lessons and insights <span className="text-green-500">from 8 years</span></h2>
            <p className="text-gray-500 text-xs font-medium">Where to grow your business as a photographer: site or social media?</p>
            <button className="bg-green-500 text-white py-2 px-4 rounded w-32">Register</button>
        </div>
        <img src={slide1} alt='animated image of girl logging in moblie' className='object-contain md:object-cover'/>
      </section>
      </div>
      <div className='w-full h-auto rounded-lg shadow-md'>
          <section className="flex flex-col mx-16 lg:flex-row">
        <div className="flex justify-center flex-col gap-8 md:px-40">
        <h2 className="text-3xl font-medium text-gray-700">Lessons and insights <span className="text-green-500">from 8 years</span></h2>
            <p className="text-gray-500 text-xs font-medium">Where to grow your business as a photographer: site or social media?</p>
            <button className="bg-green-500 text-white py-2 px-4 rounded w-32">Register</button>
        </div>
        <img src={slide1} alt='animated image of girl logging in moblie' className='object-contain md:object-cover'/>
      </section>
      </div>
      <div className='w-full h-auto rounded-lg shadow-md'>
          <section className="flex flex-col mx-16 lg:flex-row">
        <div className="flex justify-center flex-col gap-8 md:px-40">
        <h2 className="text-3xl font-medium text-gray-700">Lessons and insights <span className="text-green-500">from 8 years</span></h2>
            <p className="text-gray-500 text-xs font-medium">Where to grow your business as a photographer: site or social media?</p>
            <button className="bg-green-500 text-white py-2 px-4 rounded w-32">Register</button>
        </div>
        <img src={slide1} alt='animated image of girl logging in moblie' className='object-contain md:object-cover'/>
      </section>
      </div>
        </Slider>
      </div>      

      {/* Client Logos */}
      <section className="bg-white py-8">
        <div className='flex items-center justify-center flex-col gap-4'>
        <h1 className='text-3xl font-medium text-gray-700'>Our Clients</h1>
      <p className="text-gray-500 text-sm font-medium mb-6">We have been working with some Fortune 500+ clients</p>
      </div>
        <div className="container mx-auto flex justify-around items-center flex-wrap">
          <img src={clientLogo1} alt="Client 1" />
          <img src={clientLogo2} alt="Client 1" />
          <img src={clientLogo3} alt="Client 1" />
          <img src={clientLogo1} alt="Client 1" />
          <img src={clientLogo2} alt="Client 1" />
          <img src={clientLogo3} alt="Client 1" />
          <img src={clientLogo1} alt="Client 1" />
          </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-medium text-gray-700 mb-2">Manage your entire community in a single system</h2>
          <p className="text-gray-500 text-sm font-medium mb-8">Who is Nextcent Suitable for?</p>
          <div className="flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0 md:space-x-6">
            <div className="p-6 bg-gray-100 rounded-lg flex-1 flex flex-col justify-center items-center">
              <img src={membershipLogo} alt='membership logo' className='w-12'/>
              <h3 className="text-xl font-medium text-gray-700">Membership Organizations</h3>
              <p className="text-gray-500 text-sm font-medium">Our membership management software provides automation of payments and renewals.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg flex-1 flex flex-col justify-center items-center">
            <img src={membershipLogo} alt='membership logo' className='w-12'/>
              <h3 className="text-xl font-medium text-gray-700">National Associations</h3>
              <p className="text-gray-500 text-sm font-medium">Our software automates the management of membership renewals.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg flex-1 flex flex-col justify-center items-center">
            <img src={membershipLogo} alt='membership logo' className='w-12'/>
              <h3 className="text-xl font-medium text-gray-700">Clubs and Groups</h3>
              <p className="text-gray-500 text-sm font-medium">Complete automation of membership renewals and payments for your group.</p>
            </div>
          </div>
        </div>
      </section>
      {/*  Features/Statistics Section1 */}
      <section className="flex flex-col mx-16 lg:flex-row">
        <img src={features1Img} alt='animated image of girl logging in mobile'/>
        <div className="flex justify-center flex-col gap-8 md:px-40">
        <h2 className="text-3xl font-medium text-gray-700">The Unseen of spending three years at Pixelgrade</h2>
            <p className="text-gray-500 text-xs font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et sit autem repellendus libero. Ad eveniet eius impedit, animi repellendus quia corrupti voluptatum aspernatur. Ea consequuntur nostrum facere perferendis! Iusto, recusandae.
            Laudantium modi nulla nisi odio veritatis nam, qui deserunt! Maxime sapiente fugit officia sit natus totam</p>
            <button className="bg-green-500 text-white py-2 px-4 rounded w-32">Learn More</button>
        </div>
      </section>

      {/* Features/Statistics Section2 */}
      <section className="flex flex-col m-16 gap-8  lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-medium text-gray-700">Helping a local <br /><span className="text-green-500">business reinvent itself</span></h2>
          <p className="text-gray-500 text-sm font-medium">We reached here with our hard work and dedication.</p>
          </div>
          <div className="flex items-center justify-center gap-8 md:px-40" >
            <div>
            <div className="text-center mb-4">
              <h3 className="text-2xl font-medium text-gray-700">2,245,341</h3>
              <p className='text-gray-500 text-sm font-medium'>Members</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-medium text-gray-700">828,867</h3>
              <p className='text-gray-500 text-sm font-medium'>Event Bookings</p>
            </div>
            </div>
            
            <div>
            <div className="text-center mb-4">
              <h3 className="text-2xl font-medium text-gray-700">46,328</h3>
              <p className='text-gray-500 text-sm font-medium'>Clubs</p>
              </div>
            <div className="text-center">
              <h3 className="text-2xl font-medium text-gray-700">1,926,436</h3>
              <p className='text-gray-500 text-sm font-medium'>Payments</p>
            </div>
          </div>
          </div>
      </section>

        {/*  Features/Statistics Section3 */}
        <section className="flex flex-col mx-16 lg:flex-row">
        <img src={features3Img} alt='animated image of girl logging in moblie'/>
        <div className="flex justify-center flex-col gap-8 md:px-40">
        <h2 className="text-3xl font-medium text-gray-700">How to design your site footer like we did</h2>
            <p className="text-gray-500 text-xs font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et sit autem repellendus libero. Ad eveniet eius impedit, animi repellendus quia corrupti voluptatum aspernatur. Ea consequuntur nostrum facere perferendis! Iusto, recusandae.
            Laudantium modi nulla nisi odio veritatis nam, qui deserunt! Maxime sapiente fugit officia sit natus totam
            audantium modi nulla nisi odio veritatis nam, qui deserunt! Maxime sapiente fugit officia sit natus totam</p>
            <button className="bg-green-500 text-white py-2 px-4 rounded w-32">Learn More</button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="flex flex-col mx-16 lg:flex-row">
        <img src={testimonial1Img} alt='British Dragon Boat Association Logo'/>
        <div className="flex justify-around items-center flex-col md:px-40">
            <p className="text-gray-500 text-xs font-medium mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et sit autem repellendus libero. Ad eveniet eius impedit, animi repellendus quia corrupti voluptatum aspernatur. Ea consequuntur nostrum facere perferendis! Iusto, recusandae.
            Laudantium modi nulla nisi odio veritatis nam, qui deserunt! Maxime sapiente fugit officia sit natus totam, distinctio similique animi eveniet doloribus ea. Beatae accusantium dolorum aliquid quaerat eaque ea repellendus.
            Qui quas iste sequi suscipit molestias labore. Dignissimos quidem ea sit quo deleniti molestiae accusantium reiciendis hic, sapiente rerum voluptatibus. Voluptates autem numquam nam, animi repellat hic nihil eaque excepturi!
            Officia expedita dicta commodi numquam blanditiis pariatur nihil ipsa delectus necessitatibus mollitia. Deserunt sequi tempora, vitae doloremque ipsa ducimus, iure corporis vero quam rem a dignissimos, nostrum minus tempore. Qui?
            Magni earum tempora quam voluptas exercitationem. Excepturi eum maiores vitae corrupti harum, quaerat nesciunt dolorum. Necessitatibus recusandae sunt saepe quaerat ab ex, ea quos temporibus, sapiente ipsam facilis, a error!</p>
            <h4 className="text-xl font-bold">Tim Smith</h4>
            <p className="text-gray-500">British Dragon Boat Racing Association</p>
            <div className="container mx-auto flex justify-around items-center flex-wrap">
          <img src={clientLogo1} alt="Client 1" />
          <img src={clientLogo2} alt="Client 1" />
          <img src={clientLogo3} alt="Client 1" />
          <img src={clientLogo1} alt="Client 1" />
          <img src={clientLogo2} alt="Client 1" />
          <img src={clientLogo3} alt="Client 1" />
          <h3 className='text-green-500 font-medium'>Meet all customers →</h3>
          </div>
        </div>
      </section>

      {/*  Blog Section */}
      <section className="flex flex-col md:flex-row gap-6 justify-center items-center py-12 px-6">
      {/* Card 1 */}
      <div className="relative w-full md:w-1/3 bg-white h-80">
  <img
    src={blogImg}
    alt="Safeguarding OneRen"
    className="w-full h-60 object-cover rounded-lg"
  />
  <div className="absolute top-[167px] bottom-0 left-[2.2rem] bg-white p-2 rounded-lg shadow-lg w-11/12 md:w-10/12">
    <h3 className="text-gray-500 text-lg font-semibold text-center">
      Creating Streamlined Safeguarding Processes with OneRen
    </h3>
    <a href="#readmore1" className="text-green-400 font-semibold mt-2 text-center block">
      Readmore →
    </a>
  </div>
</div>


      {/* Card 2 */}
      <div className="relative w-full md:w-1/3 bg-white h-80">
  <img
    src={blogImg2}
    alt="Safeguarding OneRen"
    className="w-full h-60 object-cover rounded-lg"
  />
  <div className="absolute top-[167px] bottom-0 left-[2.2rem] bg-white p-2 rounded-lg shadow-lg w-11/12 md:w-10/12">
    <h3 className="text-gray-500 text-lg font-semibold text-center">
      Creating Streamlined Safeguarding Processes with OneRen
    </h3>
    <a href="#readmore1" className="text-green-400 font-semibold mt-2 text-center block">
      Readmore →
    </a>
  </div>
</div>

      {/* Card 3 */}
      <div className="relative w-full md:w-1/3 bg-white h-80">
  <img
    src={blogImg}
    alt="Safeguarding OneRen"
    className="w-full h-60 object-cover rounded-lg"
  />
  <div className="absolute top-[167px] bottom-0 left-[2.2rem] bg-white p-2 rounded-lg shadow-lg w-11/12 md:w-10/12">
    <h3 className="text-gray-500 text-lg font-semibold text-center">
      Creating Streamlined Safeguarding Processes with OneRen
    </h3>
    <a href="#readmore1" className="text-green-400 font-semibold mt-2 text-center block">
      Readmore →
    </a>
  </div>
</div>
    </section>

    {/* Demo Section */}
    <section className='flex flex-col items-center justify-center mt-12 mb-4 space-y-8'>
<h1 className='text-4xl text-gray-700 font-medium'>Lorem ipsum dolor <br />sit amet consectetur.</h1>
<button className="bg-green-500 text-white p-2 rounded w-32">Get a Demo →</button>
</section>


      {/* Footer Section */}
      <footer className="bg-gray-800 py-16 px-32 text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          <div>
        <h3 className="font-bold text-xl mb-4"><img src={logo} alt='Nexcent logo' className='w-32'/></h3>
        <ul className=" text-sm font-medium space-y-4">
        <li>Copyright &copy; 2020 Nexcent Ltd.<br />All rights reserved</li>
            <div className='flex gap-2'>
      <Link to="/twitter-profile" title="Twitter" className="cursor-pointer hover:bg-gray-600">
        <FaTwitter size={20} />
      </Link>
      <Link to="/facebook-profile" title="Facebook" className="cursor-pointer hover:bg-gray-600">
        <FaFacebookF size={20} />
      </Link>
      <Link to="/instagram-profile" title="Instagram" className="cursor-pointer hover:bg-gray-600">
        <FaInstagram size={20} />
      </Link>
      <Link to="/youtube-profile" title="YouTube" className="cursor-pointer hover:bg-gray-600">
        <FaYoutube size={20} />
      </Link>
    </div>
      </ul>
      </div>
          <div>
            <h3 className="font-bold text-xl mb-3">Company</h3>
            <ul className=" text-sm font-medium space-y-3">
              <li className="cursor-pointer hover:bg-gray-600">About Us</li>
              <li className="cursor-pointer hover:bg-gray-600">Blog</li>
              <li className="cursor-pointer hover:bg-gray-600">Contact Us</li>
              <li className="cursor-pointer hover:bg-gray-600">Pricing</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-3">Support</h3>
            <ul className="text-sm font-medium space-y-3">
              <li className="cursor-pointer hover:bg-gray-600">Help Center</li>
              <li className="cursor-pointer hover:bg-gray-600">Terms of Service</li>
              <li className="cursor-pointer hover:bg-gray-600">Privacy Policy</li>
            </ul>
          </div>
          <div>
          <h3 className="font-bold text-xl mb-3">Stay up to date</h3>
          <ul className="text-sm font-medium space-y-3">
              <li className="cursor-pointer hover:bg-gray-600">Your email address</li>
              </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;