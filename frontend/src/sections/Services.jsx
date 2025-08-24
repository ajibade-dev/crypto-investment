import React from 'react';
import FadeInMotion from './FadeinMotion';
import { Link } from 'react-router-dom';
const Services = () => {
    const features = [
  {
    title: "Stock Trading",
    description: "Access global stock markets with competitive commissions and advanced analysis tools. Trade blue-chip stocks, ETFs, and emerging market opportunities with real-time data.",
    link: "/login",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.4125 3.30938C17.4281 3 16.5281 3 14.7281 3H9.27187C7.47187 3 6.57187 3 5.5875 3.30938C5.06492 3.50054 4.59035 3.80342 4.19688 4.19688C3.80342 4.59035 3.50054 5.06492 3.30938 5.5875C3 6.56063 3 7.46625 3 9.27187V14.7253C3 16.5281 3 17.4281 3.30938 18.4125C3.50054 18.9351 3.80342 19.4097 4.19688 19.8031C4.59035 20.1966 5.06492 20.4995 5.5875 20.6906C6.56063 21 7.46625 21 9.27187 21H14.7281C16.5281 21 17.4281 21 18.4125 20.685C18.9351 20.4938 19.4097 20.191 19.8031 19.7975C20.1966 19.404 20.4995 18.9295 20.6906 18.4069C21 17.4337 21 16.5281 21 14.7225V9.27469C21 7.47187 21 6.57187 20.6906 5.5875C20.4995 5.06492 20.1966 4.59035 19.8031 4.19688C19.4097 3.80342 18.9351 3.50054 18.4125 3.30938ZM15.4505 9.69387C15.3183 9.83448 15.0849 9.83449 14.9443 9.69389L14.9499 9.69949C14.3564 9.16512 13.448 8.77418 12.503 8.77418C11.7605 8.77418 11.0208 9.04418 11.0208 9.7248C11.0208 10.3725 11.6992 10.6208 12.5264 10.9237C12.5936 10.9483 12.6619 10.9733 12.7308 10.9989C14.3339 11.5529 15.6558 12.2336 15.6558 13.8479C15.6558 15.6001 14.3283 16.8011 12.1492 16.9473L11.9523 17.9007C11.9354 17.9851 11.8896 18.061 11.823 18.1153C11.7563 18.1697 11.6727 18.1992 11.5867 18.1989L10.2226 18.1876C9.9892 18.1848 9.81763 17.9682 9.86545 17.7348L10.0736 16.7307C9.22082 16.4973 8.4727 16.0754 7.88207 15.4932C7.81063 15.4215 7.77051 15.3245 7.77051 15.2232C7.77051 15.122 7.81063 15.0249 7.88207 14.9532L8.64145 14.1939C8.67541 14.1599 8.71574 14.1329 8.76014 14.1145C8.80454 14.096 8.85213 14.0866 8.9002 14.0866C8.94826 14.0866 8.99586 14.096 9.04026 14.1145C9.08465 14.1329 9.12499 14.1599 9.15895 14.1939C9.8902 14.9279 10.8352 15.2289 11.7352 15.2289C12.7252 15.2289 13.3946 14.8182 13.3946 14.1179C13.3946 13.5027 12.8453 13.2965 11.8027 12.9052C11.692 12.8636 11.5757 12.82 11.4539 12.7736C10.1124 12.2926 8.84395 11.5923 8.84395 9.96105C8.84395 8.07668 10.3796 7.15699 12.1908 7.06418L12.3877 6.11355C12.4045 6.03013 12.4494 5.955 12.5149 5.90072C12.5804 5.84645 12.6626 5.81634 12.7477 5.81543H14.1089C14.3424 5.81543 14.5168 6.0348 14.4689 6.26824L14.2468 7.33699C14.9419 7.56868 15.5842 7.93574 16.1368 8.41699C16.2943 8.56887 16.3027 8.82199 16.1536 8.96262L15.4505 9.69387Z" fill="#124beb"/>
</svg>

    )
  },
  {
    title: "Cryptocurrency Trading",
    description: "Trade major cryptocurrencies and altcoins with industry-leading security and liquidity. Our platform offers cold storage solutions and 24/7 market access.",
    link: "/login",
    icon: (
  <svg width="40" height="40" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
<path d="M10.7379 15.0481C11.6329 15.2846 13.5907 15.802 13.9022 14.5515C14.2201 13.2734 12.3227 12.8476 11.3969 12.6398C11.2935 12.6166 11.2022 12.5961 11.1275 12.5775L10.525 14.9928C10.5861 15.008 10.6578 15.0269 10.7379 15.0481Z" fill="#124beb"/>
<path d="M11.5831 11.519C12.3299 11.7183 13.9576 12.1525 14.2412 11.0165C14.5311 9.85438 12.9483 9.5041 12.1752 9.33303C12.0883 9.3138 12.0117 9.29683 11.949 9.28123L11.4028 11.4718C11.4545 11.4847 11.5151 11.5009 11.5831 11.519Z" fill="#124beb"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 22.4609C17.5228 22.4609 22 17.9838 22 12.4609C22 6.93809 17.5228 2.46094 12 2.46094C6.47715 2.46094 2 6.93809 2 12.4609C2 17.9838 6.47715 22.4609 12 22.4609ZM14.2097 8.51311C15.595 8.9903 16.6081 9.70561 16.4093 11.0362C16.2653 12.0103 15.725 12.4818 15.0081 12.6478C15.9925 13.1606 16.4931 13.9465 16.0159 15.309C15.4243 17.0009 14.0172 17.1437 12.1462 16.7896L11.6922 18.6093L10.595 18.3359L11.0431 16.5406C10.7587 16.4699 10.4681 16.3949 10.169 16.3137L9.71905 18.1174L8.62312 17.844L9.07718 16.0206C8.97658 15.9948 8.87531 15.9684 8.77331 15.9417C8.61579 15.9007 8.45653 15.8591 8.29531 15.8187L6.86719 15.4628L7.41187 14.2065C7.41187 14.2065 8.22031 14.4215 8.20937 14.4056C8.51999 14.4825 8.6578 14.28 8.71218 14.145L9.94342 9.20717C9.95717 8.97405 9.87655 8.67999 9.43217 8.56905C9.44936 8.55749 8.6353 8.37093 8.6353 8.37093L8.92718 7.19906L10.4403 7.57687L10.439 7.58249C10.6665 7.63905 10.9009 7.6928 11.1397 7.74718L11.5894 5.94531L12.6859 6.21875L12.2453 7.9853C12.5397 8.05249 12.8359 8.1203 13.124 8.19218L13.5615 6.43719L14.659 6.71062L14.2097 8.51311Z" fill="#124beb"/>
</svg>


    )
  },
  {
    title: "Forex Trading",
    description: "Trade over 70 currency pairs with tight spreads and deep liquidity. Our forex platform provides advanced charting, economic calendars, and expert market analysis.",
    link: "/login",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
<path d="M3.5 5.75C3.5 5.33579 3.16421 5 2.75 5C2.33579 5 2 5.33579 2 5.75V17.75C2 18.9926 3.00736 20 4.25 20H21.25C21.6642 20 22 19.6642 22 19.25C22 18.8358 21.6642 18.5 21.25 18.5H4.25C3.83579 18.5 3.5 18.1642 3.5 17.75V5.75Z" fill="#124beb"/>
<path d="M7 10.7773C5.89543 10.7773 5 11.6728 5 12.7773V16.2501C5 16.6643 5.33579 17.0001 5.75 17.0001H8.25C8.66421 17.0001 9 16.6643 9 16.2501V12.7773C9 11.6728 8.10457 10.7773 7 10.7773Z" fill="#124beb"/>
<path d="M12.5 5C11.3954 5 10.5 5.89543 10.5 7V16.2501C10.5 16.6643 10.8358 17.0001 11.25 17.0001H13.75C14.1642 17.0001 14.5 16.6643 14.5 16.2501V7C14.5 5.89543 13.6046 5 12.5 5Z" fill="#124beb"/>
<path d="M18 8.55859C16.8954 8.55859 16 9.45402 16 10.5586V16.2501C16 16.6643 16.3358 17.0001 16.75 17.0001H19.25C19.6642 17.0001 20 16.6643 20 16.2501V10.5586C20 9.45402 19.1046 8.55859 18 8.55859Z" fill="#124beb"/>
</svg>

    )
  },
   {
    title: "Commodities Trading",
    description: "Access global commodities markets including precious metals, energy, and agricultural products. Get real-time pricing, market insights, and specialized tools.",
    link: "/login",
    icon: (
      <svg width="40" height="40" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
<path d="M2.25 12C2.25 6.47715 6.72715 2 12.25 2C17.7728 2 22.25 6.47715 22.25 12C22.25 17.5228 17.7728 22 12.25 22C6.72715 22 2.25 17.5228 2.25 12ZM13 7.375C13 6.96079 12.6642 6.625 12.25 6.625C11.8358 6.625 11.5 6.96079 11.5 7.375V7.845C10.498 8.07236 9.75 8.96845 9.75 10.0392V10.3043C9.75 11.2422 10.3318 12.0817 11.2099 12.411L12.7634 12.9936C13.0561 13.1034 13.25 13.3832 13.25 13.6959V13.9609C13.25 14.3752 12.9142 14.7109 12.5 14.7109H11.8126C11.5019 14.7109 11.25 14.4591 11.25 14.1483C11.25 13.7341 10.9142 13.3983 10.5 13.3983C10.0858 13.3983 9.75 13.7341 9.75 14.1483C9.75 15.1812 10.5092 16.0368 11.5 16.1874V16.625C11.5 17.0392 11.8358 17.375 12.25 17.375C12.6642 17.375 13 17.0392 13 16.625V16.1552C14.002 15.9278 14.75 15.0317 14.75 13.9609V13.6959C14.75 12.758 14.1682 11.9185 13.2901 11.5891L11.7366 11.0066C11.4439 10.8968 11.25 10.6169 11.25 10.3043V10.0392C11.25 9.62503 11.5858 9.28924 12 9.28924H12.6874C12.9981 9.28924 13.25 9.54113 13.25 9.85184C13.25 10.2661 13.5858 10.6018 14 10.6018C14.4142 10.6018 14.75 10.2661 14.75 9.85184C14.75 8.81897 13.9908 7.96341 13 7.81278V7.375Z" fill="#124beb"/>
</svg>
      
    )
  },
];

  return (
    <FadeInMotion>
    <section className="bg-white py-6 sm:py-8 lg:py-12 max-w-[1500px]" id='services'>
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* Text - Start */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-black md:mb-6 lg:text-3xl font-heading">
            Comprehensive Trading Solutions
          </h2>
          <p className="mx-auto max-w-screen-md text-sm text-center text-gray-500 md:text-lg font-sans">
            Discover our full suite of trading services designed to help you succeed in global financial markets. Our platform provides the tools and resources you need to trade confidently across multiple asset classes.
          </p>
        </div>
        {/* Text - End */}

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-2 xl:gap-16">
          {/* Feature Item - Start */}
         {features.map((feature, index) => (
  <div key={index} className="flex gap-4 md:gap-6">
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-white shadow-gray-700 shadow-lg md:h-14 md:w-14 md:rounded-xl">
      {feature.icon}
    </div>

    <div>
      <h3 className="mb-2 text-lg font-semibold md:text-xl">{feature.title}</h3>
      <p className="mb-2 text-sm md:text-base text-gray-500">{feature.description}</p>
      <Link to='/register'>
      <p className="font-bold text-sm md:text-base text-[#222ad6] transition duration-100">
        Explore All Services
      </p>
      </Link>
    </div>
  </div>
))}
          {/* Feature Item - End */}
        </div>
      </div>
    </section>
    </FadeInMotion>
  );
};

export default Services;
