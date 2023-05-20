import React from "react";

interface CardProps {
    title: string;
    information: string;
    buttonText: string;
}

const Card: React.FC<CardProps> = ({ title, information, buttonText }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{information}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {}}>
            {buttonText}
        </button>
        </div>
    );
};

export default Card;
