// @flow

import { expect } from 'chai';

import { getHelloWorld } from '../src';

describe('getHelloWorld', () => {
  it('returns hello world', () => {
    expect(getHelloWorld()).to.equal('hello world');
  });
});
