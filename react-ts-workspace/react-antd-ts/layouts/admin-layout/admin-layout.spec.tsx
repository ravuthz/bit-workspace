import React from 'react';
import { render } from '@testing-library/react';
import { AdminLayoutBasic, AdminLayoutWithAllConfig, AdminLayoutWithFooter } from './admin-layout.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<AdminLayoutBasic />);
  const rendered = getByText('AdminLayout basic');
  expect(rendered).toBeTruthy();
});

it('should render with the correct text', () => {
  const { getByText } = render(<AdminLayoutWithFooter />);
  const rendered = getByText('AdminLayout with footer');
  expect(rendered).toBeTruthy();
});

it('should render with the correct text', () => {
  const { getByText } = render(<AdminLayoutWithAllConfig />);
  const rendered = getByText('AdminLayout with footer and setting');
  expect(rendered).toBeTruthy();
});