"use client";
import React from "react";
import { motion } from "framer-motion";
import TitleText from "./TitleText";
import InsightCard from "./InsightCard";
import { staggerContainer } from "../contants/motion";
import styles from "../contants/styles";
import { insights } from "../contants/appdata";

const Insights = ({ isForm, form }) => {
    return (
        <motion.div
            variants={!isForm && staggerContainer}
            initial={!isForm && "hidden"}
            whileInView={!isForm && "show"}
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
            {!isForm && <TitleText title={<>Our Fleet</>} />}

            <div className="mt-12 flex flex-col gap-9">
                {insights?.map((insight, index) => (
                    <InsightCard
                        key={index}
                        {...insight}
                        index={index}
                        isForm={isForm}
                        form={form}
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default Insights;
