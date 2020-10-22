import fs from 'fs';
import '../dist';

jest.mock('fs');

it('fs.writeFile is invoked', () => {
  expect(fs.writeFile).toHaveBeenCalled();
});
