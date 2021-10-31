
/* This example requires Tailwind CSS v2.0+ */

import "antd/dist/antd.css";
import { Fragment, useState } from 'react'
import MenuStack from './MenuStack.jsx'
import { Tree } from 'antd'
import { Dialog, Transition } from '@headlessui/react'
import Header from './Header.jsx'
import {
  FolderIcon,
  CubeIcon,
  CodeIcon,
  CollectionIcon,
  GlobeIcon,
  CogIcon,
  HomeIcon,
  InboxIcon,
  MenuIcon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline'


let files = [
  {
    title: "Top level 1",
    slug: "top-level-1",
    children: [
      {
        title: "Sub level 1",
        slug: "sub-level-1",
        children: [
          {
            title: "Sub Sub Level 1",
            slug: "sub-sub-level-1",
            children: [
              {
                title: "Sub Sub Level 2",
                slug: "sub-sub-level-2"
              }
            ]
          }
        ]
      },
      {
        title: "Sub level 2",
        slug: "sub-level-2"
      }
    ]
  },
  {
    title: "Top level 2",
    slug: "top-level 2"
  }
];

const projectNavigation = [
  { name: 'Browse all', href: '#',  current: false },
  { name: 'Browse by teams', href: '#', current: false },
]

const starred = [
  { name: 'New Zealand', href: '#', icon: GlobeIcon, current: false }
]
const productsFiltered = [
  { name: 'JiraSoftware', href: '#', icon: CubeIcon, current: false },
  { name: 'Jira Service Management', href: '#', icon: CodeIcon, current: false },
  { name: 'JiraCore', href: '#', icon: CollectionIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/*
        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
       <Header />
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 z-40 flex md:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex flex-col flex-1 w-full max-w-xs bg-white">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 pt-2 -mr-12">
                    <button
                      type="button"
                      className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon className="w-6 h-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                   
                </div>
                <div className="flex flex-shrink-0 p-4 border-t border-gray-200">
                  <a href="#" className="flex-shrink-0 block group">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">James Bryant</p>
                        <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14">{/* Force sidebar to shrink to fit close icon */}</div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
         <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 md:top-20">
          {/* Sidebar component, swap this element with another sidebar  */}
          <div className="flex flex-col flex-1 min-h-0 bg-white border-r border-gray-200">
            <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
               <MenuStack items={projectNavigation} title="Projects" />
               <MenuStack items={starred} title="Starred"/>
               <MenuStack items={productsFiltered} title="Filter by product"/>
            </div>
            <div className="flex flex-shrink-0 p-4 border-t border-gray-200">
              <a href="#" className="flex-shrink-0 block w-full group">
                <div className="flex items-center">
                  <div>
                     <CogIcon className="w-6 h-6" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">James Bryant</p>
                    <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 md:pl-64">
          <div className="sticky top-0 z-10 pt-1 pl-1 bg-gray-100 md:hidden sm:pl-3 sm:pt-3">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1">
            <div className="py-6">
              <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
              </div>
              <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                {/* Replace with your content */}
                <div className="py-4">
                  <Tree treeData={treeData} />
                </div>
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}


const treeData = [
  {
    title: 'Earth',
    key: 'od20',
    children: [
      {
        title: 'Australia',
        key: 'a415Ouai',
        children: [
          {
            title: 'Gold Coast',
            key: 'od2O7ghs',
            disableCheckbox: true,
          },
          {
            title: 'Sydney',
            key: 'g7nta',
          },
        ],
      },
      {
        title: 'Brazil',
        key: '26oh6',
        children: [{ title: <span style={{ color: '#1890ff' }}>Rio de Janeiro</span>, key: '0-0-1-0' }],
      },
    ],
  },
];

