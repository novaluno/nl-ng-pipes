import { LocalizeNumberPipe } from './localize-number.pipe';

describe('LocalizeNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new LocalizeNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
