import React from 'react';

interface AdPlaceholderProps {
  className?: string;
  label?: string;
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ className = "", label = "Advertisement" }) => {
  return (
    <div className={`w-full bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center text-slate-400 text-sm font-medium p-4 ${className}`}>
      <span className="uppercase tracking-widest">{label}</span>
    </div>
  );
};

export default AdPlaceholder;