import React from 'react';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { GrUserWorker } from "react-icons/gr";
import { GrProjects } from "react-icons/gr";
import { IoDocumentsSharp } from "react-icons/io5";
import { CgFileDocument } from "react-icons/cg";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import {
    FaUsers, 
} from "react-icons/fa";

const AdminHome = () => {

    const axiosPublic = useAxiosPublic();

    const { data: allCount = {}, isLoading } = useQuery({
        queryKey: ["allCount", axiosPublic],
        queryFn: async () => {
            const res = await axiosPublic.get(`/allCount`);
            return res.data;
        },
    });

    const {
        usersCount = 0,
        employeeCount = 0,
        projectsCount = 0,
        jobsCount = 0,
        appliesCount = 0, 
    } = allCount;

    const chartData = [
        { name: "Users", count: usersCount },
        { name: "Employee", count: employeeCount },
        { name: "Projects", count: projectsCount },
        { name: "Jobs", count: jobsCount },
        { name: "Applications", count: appliesCount }, 
    ];

    const stats = [
        {
            title: "Total Users",
            value: usersCount,
            icon: <FaUsers className="text-blue-600" />,
            bg: "bg-blue-100",
        },
        {
            title: "Total Employees",
            value: employeeCount,
            icon: <GrUserWorker className="text-green-600" />,
            bg: "bg-green-100",
        },
        {
            title: "Total Complete Projects",
            value: projectsCount,
            icon: <GrProjects className="text-yellow-600" />,
            bg: "bg-yellow-100",
        },
        {
            title: "Total Jobs",
            value: jobsCount,
            icon: <IoDocumentsSharp className="text-purple-600" />,
            bg: "bg-purple-100",
        },
        {
            title: "Total Applications",
            value: appliesCount,
            icon: <CgFileDocument className="text-orange-600" />,
            bg: "bg-orange-100",
        } 
    ];

    return (
        <div className="min-h-screen bg-base-200 p-4 bg-opacity-40">
        {/* Header */}
        <header className="mb-6">
            <h1 className="text-3xl font-bold ">Admin Dashboard</h1>
            <p className="opacity-80">Welcome back, Admin!</p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className={`${stat.bg} p-4 rounded-lg shadow-md flex items-center hover:shadow-lg`}
                >
                    <div className="p-2 rounded-full bg-opacity-20 text-4xl">
                        {stat.icon}
                    </div>
                    <div className="ml-4">
                        <h2 className="text-lg font-medium  opacity-90">{stat.title}</h2>
                        <p className="text-2xl font-bold  opacity-90">{stat.value}</p>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-10 bg-base-100 md:p-6 p-2 rounded-lg shadow-md">
            <h2 className="text-xl font-bold opacity-90 mb-4">Overview Chart</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="count" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>

    </div>
    );
};

export default AdminHome;