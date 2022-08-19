import React from 'react';
import { render } from '@testing-library/react';
import { BasicAdminLayout } from './admin-layout.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicAdminLayout />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
