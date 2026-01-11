import { describe, expect, it } from 'vitest';
import App from './App';
import { render, screen, userEvent, waitFor } from './utils/test-utils';

describe('Number Input', () => {
  it('udate input', async () => {
    render(<App />);

    await userEvent.clear(screen.getByLabelText('Value1'));
    await userEvent.paste('10');

    expect(screen.getByLabelText('Value1')).toHaveValue('10');
    expect(screen.getByLabelText('Value2')).toHaveValue('11');
  });

  it('udate input', async () => {
    render(<App />);

    await userEvent.clear(screen.getByLabelText('Value1'));
    await userEvent.paste('10');

    expect(screen.getByLabelText('Value1')).toHaveValue('10');

    await waitFor(() => {
      expect(screen.getByLabelText('Value2')).toHaveValue('11');
    });
  });
});
