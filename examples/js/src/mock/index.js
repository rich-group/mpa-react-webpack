import Mock from 'mockjs';
import user from './user';

const mocks = [...user];

function mockXHR () {
  for (const m of mocks) {
    Mock.mock(m.url, m.type, m.response());
  }
}

mockXHR();