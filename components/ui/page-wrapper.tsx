"use client";

import classNames from "classnames";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export const PageWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <motion.main
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className={classNames("min-h-screenHeightWithoutHeader", className)}
  >
    {children}
  </motion.main>
);
