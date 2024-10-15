"use client";

import { useState } from "react";
import Modal1 from "../_components/modals/beautiful-modal";
import Modal2 from "../_components/modals/beautiful-modals2";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-blue-400 to-purple-500">
        <Button
          onClick={() => setIsModalOpen1(true)}
          className="bg-white text-purple-600 hover:bg-purple-100 font-bold py-2 px-4 rounded-full transition duration-200 ease-in-out transform hover:scale-105"
        >
          Open Colorful Modal
        </Button>

        <p className="text-gray-100 p-4">
          Scroll down to see the beautiful modal component in action.
        </p>
        <Modal1
          isOpen={isModalOpen1}
          onClose={() => setIsModalOpen1(false)}
          title="Interactive Colorful Modal"
        />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Button onClick={() => setIsModalOpen2(true)}>Open Modal</Button>

        <p className="text-gray-700 p-4">
          Scroll down to see the beautiful modal component in action.
        </p>
        <Modal2
          isOpen={isModalOpen2}
          onClose={() => setIsModalOpen2(false)}
          title="Beautiful Modal"
        >
          <p className="text-gray-700 mb-4">
            This is a beautiful and reusable modal component built with React
            and Tailwind CSS.
          </p>

          <div className="flex justify-end">
            <Button onClick={() => setIsModalOpen2(false)}>Close</Button>
          </div>
        </Modal2>
      </div>
    </>
  );
}
