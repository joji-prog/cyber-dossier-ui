
import React from 'react';
import { cn } from '@/lib/utils';
import SecurityBadge from './SecurityBadge';

interface DataCardProps {
  title: string;
  children: React.ReactNode;
  securityLevel?: 'TOP SECRET' | 'CLASSIFIED' | 'CONFIDENTIAL' | 'RESTRICTED' | 'UNCLASSIFIED';
  className?: string;
}

const DataCard: React.FC<DataCardProps> = ({ 
  title, 
  children, 
  securityLevel = 'CLASSIFIED',
  className
}) => {
  return (
    <div className={cn(
      "glass rounded-md overflow-hidden neon-border",
      className
    )}>
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-black/50">
        <h3 className="font-mono text-primary text-sm">{title}</h3>
        <SecurityBadge level={securityLevel} />
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

export default DataCard;
