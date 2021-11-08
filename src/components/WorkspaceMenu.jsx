import { ViewGridIcon } from '@heroicons/react/solid'
import { Disclosure, Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const WorkspaceMenu = (props) => {
   return (
             <Menu as="div" className="relative flex-shrink-0 ml-4">
                  <div>
                    <Menu.Button className="flex text-sm bg-white rounded-full">
                     <ViewGridIcon  className="w-6 h-6 text-gray-400" aria-hidden="true" />
                    </Menu.Button>
                  </div>
                    <Menu.Items className="absolute left-0 z-10 w-48 py-1 mt-2 bg-white shadow-lg origin-top-right rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Mars Expansion
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Earth Enterprise
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                </Menu>
   )
}

export default WorkspaceMenu
   
