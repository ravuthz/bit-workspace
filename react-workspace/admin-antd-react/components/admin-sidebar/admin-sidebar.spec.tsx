import React from 'react';
import { render } from '@testing-library/react';
import { BasicAdminSidebar } from './admin-sidebar.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicAdminSidebar />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
