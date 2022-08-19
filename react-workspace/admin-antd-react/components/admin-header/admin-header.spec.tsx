import React from 'react';
import { render } from '@testing-library/react';
import { BasicAdminHeader } from './admin-header.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicAdminHeader />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
