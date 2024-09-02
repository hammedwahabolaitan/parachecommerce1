import React from 'react'
const items=[{
    img:'src/assets/img/sub-banner2.3b2448f3.jpg',
    count:'10% off',
    men:'men',
}]
export default function SubHero() {
  return (
    <div>
        <div className="">
            {items.map((items,index)=>
            <img src= {items.img} alt={items.count} />
            // {items.men}
            )}
        </div>
        {/* <img src="src/assets/img/sub-banner1.5d5f9c6f.jpg" alt="" /> */}

        {/* <img src="src/assets/img/sub-banner2.3b2448f3.jpg" alt="" /> */}
    </div>
  )
}
