import React from 'react';
import { render } from '@testing-library/react';
import { BasicAdminRightPanel } from './admin-right-panel.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicAdminRightPanel />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
