import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach } from 'vitest';
import Password from '../components/Password/Password';

describe('Password component', () => {
    let input: HTMLElement;
    beforeEach(() => {
        render(<Password />);
        input = screen.getByLabelText('password-input');
    });
    it('should be rendered', async () => {
        expect(await screen.findByText('Password Component')).toBeInTheDocument();
    });
    it('has a number 0-9 should be checked', async () => {
        fireEvent.change(input, { target: { value: '0' } });
        const badge = screen.getByLabelText('badge-0');
        expect(badge).toHaveClass('badge accept');
    });
    it('has a special char should be checked', async () => {
        fireEvent.change(input, { target: { value: '!' } });
        const badge = screen.getByLabelText('badge-1');
        expect(badge).toHaveClass('badge accept');
    });
    it('has a uppercase letter should be checked', async () => {
        fireEvent.change(input, { target: { value: 'A' } });
        const badge = screen.getByLabelText('badge-2');
        expect(badge).toHaveClass('badge accept');
    });
    it('has a NO consecutive letters should be checked', async () => {
        fireEvent.change(input, { target: { value: 'abc' } });
        const badge = screen.getByLabelText('badge-3');
        expect(badge).toHaveClass('badge accept');
    });
});
