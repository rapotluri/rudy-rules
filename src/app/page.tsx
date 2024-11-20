'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '@/components/Layout';
import CreateRoomModal from '@/components/CreateRoomModal';
import JoinRoomModal from '@/components/JoinRoomModal';

export default function Home() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);

  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        {/* Logo Section */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8 flex flex-col items-center"
        >
          <motion.img
            src="/images/logo.png"
            alt="Rudy's Rules Logo"
            width={280}
            height={280}
            className="mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <h1 className="text-4xl md:text-6xl font-bold text-emerald-400 tracking-wider whitespace-nowrap">
            Rudy&apos;s Rules
          </h1>
        </motion.div>

        {/* Buttons */}
        <div className="space-y-4 w-full max-w-xs">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-emerald-500 text-white py-4 px-8 rounded-full font-semibold text-lg shadow-lg hover:bg-emerald-600 transition-colors"
            onClick={() => setShowCreateModal(true)}
          >
            Host Game
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-500 text-white py-4 px-8 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-600 transition-colors"
            onClick={() => setShowJoinModal(true)}
          >
            Join Game
          </motion.button>
        </div>

        {/* Modals */}
        <AnimatePresence>
          {showCreateModal && (
            <CreateRoomModal onClose={() => setShowCreateModal(false)} />
          )}
          {showJoinModal && (
            <JoinRoomModal onClose={() => setShowJoinModal(false)} />
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
}
