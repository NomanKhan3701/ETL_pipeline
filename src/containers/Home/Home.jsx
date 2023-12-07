import React from "react";
import "./Home.scss";
import Table from "@/components/Table/Table";
import { IoPlayCircleOutline, IoPauseCircleOutline } from "react-icons/io5";
import Dropdown from "@/components/Dropdown/Dropdown";

const Home = () => {
  return (
    <div className="Home_page">
      <div className="table_wrapper">
        <Table
          columns={[
            {
              name: "Pipeline name",
            },
            {
              name: "Created at",
            },
            {
              name: "Status",
            },
            {
              name: "Execute",
            },
            {
              name: "Schedule",
            },
          ]}
          rows={[
            {
              pipelineName: "Pipeline 1",
              createdAt: "1/10/2023",
              status: 60,
              execute: [
                {
                  name: "Execute",
                  Icon: <IoPauseCircleOutline color="red" />,
                  onClick: () => {
                    console.log("View");
                  },
                },
              ],
              schedule: [
                {
                  name: "Schedule",
                  Dropdown: (
                    <Dropdown
                      data={[
                        {
                          name: "None",
                          onselect: () => {
                            console.log("None");
                          },
                        },
                        {
                          name: "Daily",
                          onselect: () => {
                            console.log("Daily");
                          },
                        },
                        {
                          name: "Weekly",
                          onselect: () => {
                            console.log("Weekly");
                          },
                        },
                        {
                          name: "Monthly",
                          onselect: () => {
                            console.log("Weekly");
                          },
                        },
                      ]}
                      placeholder={"Schedule cron job"}
                    />
                  ),
                },
              ],
            },
            {
              pipelineName: "Pipeline 2",
              createdAt: "2021-10-19",
              status: 25,
              execute: [
                {
                  name: "Execute",
                  Icon: <IoPauseCircleOutline color="red" />,
                  onClick: () => {
                    console.log("View");
                  },
                },
              ],
              schedule: [
                {
                  name: "Schedule",
                  Dropdown: (
                    <Dropdown
                      data={[
                        {
                          name: "None",
                          onselect: () => {
                            console.log("None");
                          },
                        },
                        {
                          name: "Daily",
                          onselect: () => {
                            console.log("Daily");
                          },
                        },
                        {
                          name: "Weekly",
                          onselect: () => {
                            console.log("Weekly");
                          },
                        },
                        {
                          name: "Monthly",
                          onselect: () => {
                            console.log("Weekly");
                          },
                        },
                      ]}
                      placeholder={"Schedule cron job"}
                    />
                  ),
                },
              ],
            },
            {
              pipelineName: "Pipeline 3",
              createdAt: "14/9/2023",
              status: "Running",
              execute: [
                {
                  name: "Execute",
                  Icon: <IoPlayCircleOutline />,
                  Icon2: <IoPauseCircleOutline />,
                  onClick: () => {
                    console.log("View");
                  },
                },
              ],
              schedule: [
                {
                  name: "Schedule",
                  Dropdown: (
                    <Dropdown
                      data={[
                        {
                          name: "None",
                          onselect: () => {
                            console.log("None");
                          },
                        },
                        {
                          name: "Daily",
                          onselect: () => {
                            console.log("Daily");
                          },
                        },
                        {
                          name: "Weekly",
                          onselect: () => {
                            console.log("Weekly");
                          },
                        },
                        {
                          name: "Monthly",
                          onselect: () => {
                            console.log("Weekly");
                          },
                        },
                      ]}
                      placeholder={"Schedule cron job"}
                    />
                  ),
                },
              ],
            },
            {
              pipelineName: "Pipeline 4",
              createdAt: "10/12/2023",
              status: "Running",
              execute: [
                {
                  name: "Execute",
                  Icon: <IoPlayCircleOutline />,
                  onClick: () => {
                    console.log("View");
                  },
                },
              ],
              schedule: [
                {
                  name: "Schedule",
                  Dropdown: (
                    <Dropdown
                      data={[
                        {
                          name: "None",
                          onselect: () => {
                            console.log("None");
                          },
                        },
                        {
                          name: "Daily",
                          onselect: () => {
                            console.log("Daily");
                          },
                        },
                        {
                          name: "Weekly",
                          onselect: () => {
                            console.log("Weekly");
                          },
                        },
                        {
                          name: "Monthly",
                          onselect: () => {
                            console.log("Weekly");
                          },
                        },
                      ]}
                      placeholder={"Schedule cron job"}
                    />
                  ),
                },
              ],
            },
            {
              pipelineName: "Pipeline 5",
              createdAt: "10/10/2023",
              status: "Running",
              execute: [
                {
                  name: "Execute",
                  Icon: <IoPlayCircleOutline />,
                  onClick: () => {
                    console.log("View");
                  },
                },
              ],
              schedule: [
                {
                  name: "Schedule",
                  Dropdown: (
                    <Dropdown
                      data={[
                        {
                          name: "None",
                          onselect: () => {
                            console.log("None");
                          },
                        },
                        {
                          name: "Daily",
                          onselect: () => {
                            console.log("Daily");
                          },
                        },
                        {
                          name: "Weekly",
                          onselect: () => {
                            console.log("Weekly");
                          },
                        },
                        {
                          name: "Monthly",
                          onselect: () => {
                            console.log("Weekly");
                          },
                        },
                      ]}
                      placeholder={"Schedule cron job"}
                    />
                  ),
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Home;
