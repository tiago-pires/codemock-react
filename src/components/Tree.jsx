import React from "react";
import { Table } from "antd";
import { PlusCircleTwoTone, MinusCircleTwoTone, CaretDownFilled, CaretRightOutlined } from "@ant-design/icons";

const columns = [
   {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: "40%"
   },
   {
      title: "Type",
      dataIndex: "type",
      key: "type",
      width: "30%"
   },
   {
      title: "Team",
      dataIndex: "team",
      key: "team",
   },
];

const data = [
   {
      key: 1,
      title: "Africa",
      type: "Folder",
      team: "Group",
      children: [
         {
            key: 11,
            title: "South Africa",
            type: "Software project",
            team: "Team of teams",
         },
         {
            key: 12,
            title: "Ethiopia",
            type: "Software project",
            team: "",
         },
         {
            key: 13,
            title: "Kenya",
            type: "Software project",
            team: "",
         },
      ],
   },
   {
      key: 2,
      title: "Antartica",
      type: 32,
      team: "Team",
   },
   {
      key: 3,
      title: "Europe",
      type: "Folder",
      team: "Group",
      children: [
         {
            key: 2072,
            title: "UK",
            type: "Folder",
            team: "Team of teams",
            children: [
               {
                  key: 2572,
                  title: "England",
                  type: "Software project",
                  team: "",
                  children: [
                     {
                        key: 5572,
                        title: "City of Bristol",
                        type: "Software project",
                        team: "Team",
                     },
                     {
                        key: 2552,
                        title: "Londom",
                        type: "Software project",
                        team: "Team of teams",
                     }
                  ]
               },
               {
                  key: 2571,
                  title: "Scotland",
                  type: "Software project",
                  team: "",
               },
               {
                  key: 2511,
                  title: "Wales",
                  type: "Software project",
                  team: "",
               },
            ]
         }
      ]
   },
];

function TreeData() {
   return (
      <>
         <Table
            columns={columns}
            dataSource={data}
            pagination={false}
         />
      </>
   );
}

export default TreeData;
