"use client";

import React from "react";

import { motion, AnimatePresence } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
}

function Card({ children, className }: Props & { children?: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`flex h-full dark:bg-gray-900  rounded-md flex-col justify-between items-start leading-relaxed group  space-y-2 lg:space-y-4 cursor-pointer shadow-lg p-4 lg:p-6 ${className}`}>
      {children}
    </motion.div>
  );
}

export default Card;
