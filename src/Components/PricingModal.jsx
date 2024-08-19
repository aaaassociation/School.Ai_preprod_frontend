import React from 'react';

const PricingModal = ({ showModal, setShowModal }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4">Pricing</h2>
        <ul>
          <li className="mb-2">
            <strong>$50:</strong> 1000 credits
          </li>
          <li className="mb-2">
            <strong>$100:</strong> 2000 credits
          </li>
          <li className="mb-2">
            <strong>$500:</strong> 10000 credits
          </li>
        </ul>
        <button
          className="mt-4 btn btn-primary w-full"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PricingModal;
