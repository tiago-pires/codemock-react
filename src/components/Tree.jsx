import { useState } from 'react'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tree({ data }) {
   return (
      <ul>
         {data.map((item) => {
            return (
               <TreeNode node={item} />
            );
         })}
      </ul>
   );
}

const TreeNode = ({node}) => {
   const [childVisible, setChildrenVisibility] = useState(false)

   const hasChild = node.children ? true : false

   return (
      <li key={node.title} style={{paddingLeft: '10px'}}>
         <span>
            {hasChild && (
               <button onClick={e => setChildrenVisibility(v => !v)}>+</button>
            )}
            <span>{node.title}</span>
         </span>
         <Tree data={node} />
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

