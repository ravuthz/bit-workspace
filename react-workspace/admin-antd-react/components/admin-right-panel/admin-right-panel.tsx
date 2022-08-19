import React, { ReactNode } from 'react';

export type AdminRightPanelProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function AdminRightPanel({ children }: AdminRightPanelProps) {
  return (
    <div>
      {children}
    </div>
  );
}
