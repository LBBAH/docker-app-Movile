import React from 'react';
import renderer from 'react-test-renderer';
import Login from './src/screen/Login';
import Registro from './src/screen/Registro';
import Cursos from './src/screen/Cursos';


describe('<Registro />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Registro />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});

describe('<Cursos />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Cursos />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});