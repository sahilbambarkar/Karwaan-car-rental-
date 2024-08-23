import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useRouter } from "next/router";

const Success = () => {
    const router = useRouter();
    const { id } = router.query; 

    const [animationClass, setAnimationClass] = useState("");

    useEffect(() => {
        // Trigger the animation on mount
        setAnimationClass("animate-fadeInUp");
    }, []);

    return (
        <div className="container">
            <div className={`content ${animationClass}`}>
                <FaCheckCircle className="icon" />
                <h1 className="title">Payment Successful!</h1>
                <p className="order-id">Your order ID is: <strong>{id}</strong></p>
                <button
                    onClick={() => router.push('/')} // Redirect to homepage or any other page
                    className="button"
                >
                    Go to Homepage
                </button>
            </div>
            <style jsx>{`
                .container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    background-color: #f9fafb; /* Light background for contrast */
                }
                .content {
                    background-color: white;
                    padding: 2rem;
                    border-radius: 0.9rem;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                    text-align: center;
                }
                .icon {
                    color: #34d399; /* Green color */
                    font-size: 4rem;
                }
                .title {
                    color: #34d399; /* Green color */
                    font-size: 2rem;
                    margin: 1rem 0;
                }
                .order-id {
                    font-size: 1.25rem;
                    margin: 1rem 0;
                }
                .button {
                    background-color: #3b82f6; /* Blue color */
                    color: white;
                    font-weight: bold;
                    padding: 0.625rem 1rem;
                    border-radius: 0.375rem;
                    transition: background-color 0.3s ease;
                }
                .button:hover {
                    background-color: #2563eb; /* Darker blue on hover */
                }
                @keyframes fadeInUp {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeInUp {
                    animation: fadeInUp 1s ease-out;
                }
            `}</style>
        </div>
    );
};

export default Success;