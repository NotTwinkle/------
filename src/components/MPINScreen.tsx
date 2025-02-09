import React, { useState } from "react";
import { motion } from "framer-motion";
import { FloatingElements } from "./floatinghearts";
import { LockKeyhole, X } from "lucide-react";

interface MPINScreenProps {
  onSuccess: () => void;
}

const MPINScreen: React.FC<MPINScreenProps> = ({ onSuccess }) => {
  const [mpin, setMpin] = useState("");
  const [error, setError] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const correctMPIN = "241108"; // Valentine's Day ;)

  const handleNumberClick = (number: string) => {
    if (mpin.length < 6) {
      setMpin((prev) => prev + number);
    }
  };

  const handleDelete = () => {
    setMpin((prev) => prev.slice(0, -1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mpin === correctMPIN) {
      onSuccess();
    } else {
      setError(true);
      setShowToast(true);
      setTimeout(() => {
        setError(false);
        setShowToast(false);
      }, 1000);
      setMpin("");
    }
  };

  const renderNumber = (num: string) => (
    <motion.button
      whileTap={{ scale: 0.95 }}
      type="button"
      onClick={() => handleNumberClick(num)}
      className={`w-16 h-16 rounded-full bg-white/90 border border-sky-300 text-sky-600 text-2xl font-semibold transition-colors duration-200 shadow-md ${
        error ? "ring-4 ring-red-500" : ""
      } hover:bg-sky-400 hover:text-white`}
    >
      {num}
    </motion.button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-blue-200 flex flex-col items-center justify-center p-4">
      <FloatingElements />
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8"
      >
        <div className="text-center">
          <motion.div
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
            className="mx-auto w-16 h-16 bg-sky-400 rounded-full flex items-center justify-center mb-4"
          >
            <LockKeyhole className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="mt-6 text-3xl font-extrabold text-sky-600">
            Enter Secret Code
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Hint: The day we officially started as couple. (YYMMDD)
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm">
            <input
              type="password"
              maxLength={4}
              value={mpin}
              readOnly
              className="appearance-none rounded-lg relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-sky-400 focus:border-sky-400 text-center text-2xl tracking-widest"
              placeholder="••••••"
              required
            />
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="grid grid-cols-3 gap-4">
              {["1", "2", "3"].map((num) => renderNumber(num))}
            </div>
            <div className="grid grid-cols-3 gap-4">
              {["4", "5", "6"].map((num) => renderNumber(num))}
            </div>
            <div className="grid grid-cols-3 gap-4">
              {["7", "8", "9"].map((num) => renderNumber(num))}
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="w-16 h-16"></div>
              {renderNumber("0")}
              <motion.button
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={handleDelete}
                className={`w-16 h-16 rounded-full bg-white/90 border border-sky-300 text-sky-600 transition-colors duration-200 shadow-md flex items-center justify-center ${
                  error ? "ring-4 ring-red-500" : ""
                } hover:bg-sky-400 hover:text-white`}
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400 transition-colors duration-200"
            >
              Unlock
            </button>
          </div>
        </form>
      </motion.div>

      {showToast && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded shadow-md"
        >
          Incorrect MPIN. Please try again.
        </motion.div>
      )}
    </div>
  );
};

export default MPINScreen;
