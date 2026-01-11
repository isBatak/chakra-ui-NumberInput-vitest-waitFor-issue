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

  it('udate input waitFor', async () => {
    render(<App />);

    await userEvent.clear(screen.getByLabelText('Value1'));
    await userEvent.paste('10');

    expect(screen.getByLabelText('Value1')).toHaveValue('10');

    await waitFor(() => {
      expect(screen.getByLabelText('Value2')).toHaveValue('11');
    });
  });

  it('udate plain input', async () => {
    render(<App />);

    await userEvent.clear(screen.getByLabelText('Plain Input 1'));
    await userEvent.paste('20');

    expect(screen.getByLabelText('Plain Input 1')).toHaveValue('20');
    expect(screen.getByLabelText('Plain Input 2')).toHaveValue('21');
  });
});
