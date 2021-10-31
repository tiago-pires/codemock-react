import { useState } from 'react'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Tree({ data }) {
   return (
      <ul>
         {data.map((item) => {
            return (
               <li className={classNames(
                     item.open
                     ? ""
                     : "hidden"
                  )}
                  key={item.title} style={{ paddingLeft: '10px' }}>
                  {item.title}
                  {item.children && <Tree data={item.children} />}
               </li>
            );
         })}
      </ul>
   );
}

const treeNode = ({node}) => {
   const [childVisible, setChildrenVisibility] = useState(false)

   const haschild = node.children ? true : false

   return (
      <li>

      </li>
   )
}


Tree.defaultProps = {
   data: [
   {
      title: "Africa",
      children: [],
   },
   {
      title: "Australia",
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
                        open: true
                     },
                     {
                        title: "Snapper",
                        children: [],
                     },
                     {
                        title: "Greenmount",
                        children: [],
                     },
                  ],
               },
            ],
         },
      ],
   },
   {
      title: "Brazil",
      children: [],
   },
]
};

