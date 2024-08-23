"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaCreditCard, FaPaypal, FaUniversity, FaMoneyBillWave } from "react-icons/fa";

const StepFour = ({ form }) => {
    const router = useRouter();
    const [price, setPrice] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState(""); // Store selected payment method

    const {
        imgUrl,
        transfertype,
        title,
        firstname,
        lastname,
        email,
        phoneNumber,
        comment,
        source,
        destination,
    } = form.getValues();

    useEffect(() => {
        if (source?.length && destination?.length) {
            const sourceVal = source?.split(",");
            const destinationVal = destination?.split(",");
            const distanceInKM = getDistance(
                parseFloat(sourceVal[0]),
                parseFloat(sourceVal[1]),
                parseFloat(destinationVal[0]),
                parseFloat(destinationVal[1]),
            );
            const finalPrice =
                transfertype === "one way"
                    ? parseInt(distanceInKM)
                    : 2 * parseInt(distanceInKM);
            setPrice(finalPrice);
        }
    }, [source, destination]);

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handleSubmit = async () => {
        if (!paymentMethod) {
            alert("Please select a payment method.");
            return;
        }

        try {
            // Simulate a payment process with a delay
            await new Promise((resolve) => setTimeout(resolve, 1000)); // 1-second delay

            // Simulate saving order and getting order ID
            const orderId = "12345"; // Replace with actual order ID from your backend

            // Redirect to the success page with order ID as a query parameter
            router.push(`/success/${orderId}`);
        } catch (error) {
            console.error("Error during payment process:", error);
            alert("There was an issue processing your payment. Please try again.");
        }
    };

    return (
        <div className="max-w-[1150px] mx-auto">
            <div className="grid grid-cols-1 p-4 mt-10">
                <div className="relative w-full mb-4 rounded overflow-hidden">
                    <img src={imgUrl} className="object-cover" alt="" />
                </div>
                <div className="pt-8">
                    <div className="flex justify-between items-center border-b mb-5 pb-5">
                        <h3 className="text-3xl font-bold ">{title}</h3>
                        <p className="text-lg font-bold">
                            Price: <span className="text-2xl">${price}</span>
                        </p>
                    </div>
                    <h3 className="text-2xl font-bold mb-5">Order Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-50 p-5 rounded-lg mb-8">
                        <div className="flex justify-between p-2">
                            <span className="font-bold">First Name:</span>
                            <span>{firstname}</span>
                        </div>
                        <div className="flex justify-between p-2">
                            <span className="font-bold">Last Name:</span>
                            <span>{lastname}</span>
                        </div>
                        <div className="flex justify-between p-2">
                            <span className="font-bold">Email:</span>
                            <span>{email}</span>
                        </div>
                        <div className="flex justify-between p-2">
                            <span className="font-bold">Phone Number:</span>
                            <span>{phoneNumber}</span>
                        </div>
                        <div className="flex justify-between p-2">
                            <span className="font-bold">Comment:</span>
                            <span>{comment}</span>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-5">Select Payment Method</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 bg-white p-5 rounded-lg mb-8">
                        <label className="flex items-center p-2">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="credit_card"
                                onChange={handlePaymentMethodChange}
                                className="mr-2"
                            />
                            <FaCreditCard className="text-xl text-blue-500 mr-2" />
                            Credit Card
                        </label>
                        <label className="flex items-center p-2">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="paypal"
                                onChange={handlePaymentMethodChange}
                                className="mr-2"
                            />
                            <FaPaypal className="text-xl text-blue-700 mr-2" />
                            PayPal
                        </label>
                        <label className="flex items-center p-2">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="bank_transfer"
                                onChange={handlePaymentMethodChange}
                                className="mr-2"
                            />
                            <FaUniversity className="text-xl text-green-500 mr-2" />
                            Bank Transfer
                        </label>
                        <label className="flex items-center p-2">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="cash"
                                onChange={handlePaymentMethodChange}
                                className="mr-2"
                            />
                            <FaMoneyBillWave className="text-xl text-green-700 mr-2" />
                            Cash
                        </label>
                    </div>

                    <button
                        className="bg-third-color text-white font-bold w-full py-2.5 px-4 rounded-md"
                        onClick={handleSubmit}
                    >
                        Pay Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StepFour;
