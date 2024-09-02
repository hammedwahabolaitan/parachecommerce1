import React from 'react'



// menu items 
const menuItems = [
  
    {
      name: "Home",
      link: "/",
      subMenu: [
        { name: "New Demos", link: "/layouts/Tools" },
        { name: "Christmas", link: "/layouts/Christmas" },
        //  sub-menu items 
      ],
    },

    {
      name: "Shop",
      link: "/shop/left_sidebar",
      subMenu: [
        { name: "Left Sidebar", link: "/shop/left_sidebar" },
        { name: "Right Sidebar", link: "/shop/right_sidebar" },
        //  sub-menu items
      ],
    },

    {
        name:"products",

    link:" ",
         subMenu:[
           { name:"slide bar",  link:""},
           { name:"Thumbnail Image",  link:""},
           { name:"3-Column",  link:""},
           { name:"sticky",  link:""},
           { name:"accordian",  link:""},
         ]

    },

    {
        name:"features",

    link:"",
         subMenu:[
           { name:"Theme Element",  link:""},
        
           { name:"Product Element",  link:""},
           { name:"Add To Cart",  link:""},
           { name:"Portfolio",  link:""},
           { name:"Email Template",  link:""},
         ]

    },

    {
        name:"pages",

    link:"",
         subMenu:[
           { name:"vendornew",  link:""},
           { name:"Account",  link:""},
           { name:"product",  link:""},
           { name:"language",  link:""},
           { name:"language",  link:""},
         ]

    },

    {
        name:"blog",

    link:"",
         subMenu:[
           { name:"vendornew",  link:""},
           { name:"vendornew",  link:""},
           { name:"vendornew",  link:""},
           { name:"vendornew",  link:""},
           { name:"vendornew",  link:""},
         ]

    },
  ];
  
  
  
export default function Header() {
  return (
    <div>
      <header id="sticky" className="sticky top-0 bg-white shadow">
  <div className="bg-gray-100 h-[50px] ">
    <div className="container mx-auto flex justify-between py-2">
      <div className="flex items-center space-x-4">
        <span>Welcome to Our Store Multikart</span>
        <span className="flex items-center">
          <i className="pi pi-phone text-blue-950 mr-2" aria-hidden="true"></i>
          Call Us: 08107450970
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <a href="/page/account/wishlist" className="hover:underline">
          <i className="pi pi-heart mr-2 text-red-600 " aria-hidden="true"   style={{ fontSize: '15px', color: 'blue' }} ></i> Wishlist
        </a>

        <div className="relative group">
          <i className="pi pi-user mr-2" aria-hidden="true"></i> My Account
          <ul className="absolute right-0 mt-2 hidden bg-white shadow-lg group-hover:block">
            <li><a href="/page/account/login" className="block px-4 py-2 hover:bg-gray-100">Login</a></li>
            <li><a href="/page/account/register" className="block px-4 py-2 hover:bg-gray-100">Register</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="container mx-auto">
    <div className="flex justify-between items-center py-4 ">
      <div className="flex items-center">
        <button className="text-gray-600 hover:text-black">
          <i className="pi pi-bars sidebar-bar" aria-hidden="true" style={{ fontSize: '25px', color: 'back' }} ></i>
        </button>
        <a href="/" className="ml-4">
          <img src="src/assets/img/logo.png" alt="Logo" className="h-8"/>
        </a>
      </div>
      <nav className="flex space-x-6 uppercase">
        <ul className="hidden md:flex items-center space-x-4">
          {menuItems.map((item, index) => (
            <li key={index} className="relative group">
              <a href={item.link} className="hover:underline">{item.name}</a>
              {item.subMenu && (
                <ul className="absolute left-0 mt-2 hidden bg-white shadow-lg group-hover:block">
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a href={subItem.link} className="block px-4 py-2 hover:bg-gray-100">
                        {subItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex space-x-4">
        <button className="text-gray-600 hover:text-gray-900">
          <i className="pi pi-search" style={{ fontSize: '22px', color: 'green' }} ></i>
        </button>
        <button className="text-gray-600 hover:text-gray-900">
          <i className="pi pi-cog"style={{ fontSize: '22px', color: 'green' }} ></i>
        </button>
        <button className="text-gray-600 hover:text-gray-900">
          <i className="pi pi-trash "style={{ fontSize: '22px', color: 'black' }}></i>
        </button>
      </div>
    </div>
  </div>
</header>

    </div>
  )
}
