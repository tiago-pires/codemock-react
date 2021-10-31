function classNames(...classes) {
   return classes.filter(Boolean).join(" ");
}

const MenuStack = (props) => {
   return (
      <nav className="px-2 mt-5 space-y-1">
         <h2 className="px-2 text-lg">{props.title}</h2>
         {props.items.map((item) => (
            <a
               key={item.name}
               href={item.href}
               className={classNames(
                  item.current
                     ? "bg-gray-100 text-gray-900"
                     : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                  "group flex items-center px-2 py-2 text-base font-medium rounded-md"
               )}
            >
               {(
                  <item.icon
                     className={classNames(
                        item.current
                           ? "text-gray-500"
                           : "text-gray-400 group-hover:text-gray-500",
                        "mr-4 flex-shrink-0 h-6 w-6"
                     )}
                     aria-hidden="true"
                  />
               )}
               {item.name}
            </a>
         ))}
      </nav>
   );
};

export default MenuStack;
