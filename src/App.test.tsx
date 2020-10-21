import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import TestRenderer from 'react-test-renderer';
import { ResultComponent } from './result/Result';

test('pressing "11 + 1 + 2 + " should have the result 14', () => {
  //Arrange
  const testRenderer = TestRenderer.create(<App />);
  const testInstance = testRenderer.root;

  //Act
  testInstance.instance.onClick(1);
  testInstance.instance.onClick(1);
  testInstance.instance.onClick('+');
  testInstance.instance.onClick(1);
  testInstance.instance.onClick('+');
  testInstance.instance.onClick(2);
  testInstance.instance.onClick('+');

  var result = testInstance.findByType(ResultComponent).props.result;

  //Assert
  expect(result).toBe(14);
});

test('pressing "11 + 1 + 2 = = = " should have the result 18 with the equals button pressed three times, repeating last operation twice', () => {
  //Arrange
  const testRenderer = TestRenderer.create(<App />);
  const testInstance = testRenderer.root;

  //Act
  testInstance.instance.onClick(1);
  testInstance.instance.onClick(1);
  testInstance.instance.onClick('+');
  testInstance.instance.onClick(1);
  testInstance.instance.onClick('+');
  testInstance.instance.onClick(2);
  testInstance.instance.onClick('=');
  testInstance.instance.onClick('=');
  testInstance.instance.onClick('=');

  var result = testInstance.findByType(ResultComponent).props.result;
  console.log(result)

  //Assert
  expect(result).toBe(18);
});
