'use client'
import React,{useEffect} from 'react';
import { X, ChevronRight } from 'lucide-react';

const RazorpayPaymentUI = ({isOpen , close}) => {
    useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "unset";
        }
    
        return () => {
          document.body.style.overflow = "unset";
        };
      }, [isOpen]);
    

    if(!isOpen) return null;
  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-emerald-400 p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <img src="/api/placeholder/40/40" alt="Chennai Trail Club" className="w-8 h-8" />
          </div>
          <div>
            <h2 className="font-bold text-white">CHENNAI TRAIL CLUB</h2>
            <p className="text-xs text-white flex items-center">
              <img src="/api/placeholder/16/16" alt="Razorpay" className="w-4 h-4 mr-1" />
              Razorpay Trusted Business
            </p>
          </div>
        </div>
        <button onClick={close}>
        <X className="text-white" />
        </button>
      </div>
      
      <div className="p-4">
        <div className="bg-emerald-100 rounded p-3 mb-4">
          <h3 className="text-sm font-semibold text-emerald-800">Price Summary</h3>
          <p className="text-2xl font-bold text-emerald-800">₹2,200</p>
        </div>
        
        <div className="flex items-center justify-between bg-gray-100 rounded p-3 mb-4">
          <span className="text-sm text-gray-600">Using as +91 12345 67890</span>
          <ChevronRight className="text-gray-400" />
        </div>
        
        <h3 className="font-semibold mb-2">Payment Options</h3>
        <div className="space-y-2">
          {['UPI', 'Cards', 'Netbanking', 'Wallet'].map((option, index) => (
            <div key={index} className="flex items-center justify-between bg-emerald-50 p-3 rounded">
              <span>{option}</span>
              <div className="flex space-x-1">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="w-6 h-4 bg-gray-300 rounded"></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-4 bg-gray-50 flex justify-between items-center">
        <div>
          <h4 className="font-semibold">UPI QR</h4>
          <p className="text-xs text-gray-500">11:52</p>
        </div>
        <div className="w-24 h-24 bg-gray-200"></div>
      </div>
      
      <div className="p-4 text-center text-xs text-gray-500">
        Secured by <span className="font-bold">Razorpay</span>
      </div>
    </div>
  );
};

export default RazorpayPaymentUI;