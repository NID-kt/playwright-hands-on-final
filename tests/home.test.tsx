import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import Home from '@/app/page';

describe('Home', () => {
  it('should render the form initially', () => {
    render(<Home />);

    expect(screen.getByLabelText(/名前/)).toBeInTheDocument();
    expect(screen.getByText(/送信/)).toBeInTheDocument();
  });

  it('should switch to submission message on form submit', () => {
    render(<Home />);

    fireEvent.submit(screen.getByText(/送信/));

    expect(screen.getByText(/送信完了/)).toBeInTheDocument();
    expect(screen.getByText(/戻る/)).toBeInTheDocument();
  });

  it('should reset to form when back button is clicked', () => {
    render(<Home />);

    fireEvent.submit(screen.getByText(/送信/));
    fireEvent.click(screen.getByText(/戻る/));

    expect(screen.getByLabelText(/名前/)).toBeInTheDocument();
    expect(screen.getByText(/送信/)).toBeInTheDocument();
  });
});
