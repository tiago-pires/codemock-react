import { useState } from 'react'
import { FolderIcon } from '@heroicons/react/outline'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tree({ data }) {

   const [vis, setVis] = useState()

   const handleItemClick = (item, event ) => {
      console.log('item clicked:', event.target, item)
   }

   return (
      <ul>
         {data.map((item) => {
            return (
               <li 
                  onClick={ item => handleItemClick(item, event)}
                  key={item.title} 
                  style={{ paddingLeft: '10px' }}>
                  <div className="inline-flex">
                     <FolderIcon className="w-6 h-6 mr-1 text-gray-700"/>
                     {item.title}
                  </div>
                  {item.children && <Tree data={item.children} />}
               </li>
            );
         })}
      </ul>
   );
}


Tree.defaultProps = {
   data: [
   {
      title: "Africa",
      children: [],
      open: true
   },
   {
      title: "Australia",
      open: true,
      children: [
         {
            title: "Gold Coast",
            children: [

               {
                  title: "Superbanks",
                  children: [
                     {
                        title: "Kirra",
                        children: [],
                     },
                     {
                        title: "Snapper",
                     },
                     {
                        title: "Greenmount",
                     },
                  ],
               },
            ],
         },
      ],
   },
   {
      title: "Brazil",
      open: true,
   },
]
};

