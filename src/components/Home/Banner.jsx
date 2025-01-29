import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="banner">
                <div className="bg-black bg-opacity-80 px-2 md:px-7 py-16 lg:py-20" >
                    <div className="text-white text-center text-opacity-90">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            <p className="mb-2 md:mb-4">Empowering Your</p>
                            <p>Digital Journey</p>
                        </h1>
                        <p className="text-lg md:text-xl my-4 md:my-8">
                            Innovative IT Solutions for Your Business Success
                        </p>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="text-white font-medium text-xl bg-green-500 px-4 py-2 rounded-sm ">Get Start</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;