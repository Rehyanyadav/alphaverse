import React from 'react';
import { Code2 } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary-700 to-secondary-500">
      <Code2 className="h-6 w-6 text-white" />
    </div>
  );
};

export default Logo;