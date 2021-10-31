export default function Content({msg, i = 0}){
   return i === 5 ? null : (
      <div style={{ border: "3px solid #ccc", marign: 5 }}>
         {msg}
         <Content msg={msg} i={++i} />
      </div>
   )
}




const tree = [
   {
      title: 'Africa',
      children: []
   },
   {
      title: 'Australia',
      children: [
         {
            title: 'Gold Coast',
            children: [
               {
                  title: 'Superbanks',
                  children: [
                     {
                        title: 'Kirra',
                        children: []
                     },
                     {
                        title: 'Snapper',
                        children: []
                     },
                     {
                        title: 'Greenmount',
                        children: []
                     }
                  ]
               }
            ]
         }
      ]
   },
   {
      title: 'Brazil',
      children: []
   }
]
