import React from "react";

const Loading = () => {
    return (
        <div className="bg-offWhite h-screen flex justify-center place-content-center">
            <div className="my-auto border-4 border-pink-400 rounded-3xl bg-pink-200 px-6 py-1">
                <p className="font-medium text-base text-pink-700">loading...</p>
            </div>
        </div>
    );
};

export default Loading;