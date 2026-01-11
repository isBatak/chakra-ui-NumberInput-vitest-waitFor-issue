import { NumberInput } from '@chakra-ui/react';
import { useState } from 'react';

function App() {
  const [numberInputValue, setNumberInputValue] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  return (
    <>
      <NumberInput.Root
        defaultValue="0"
        width="200px"
        value={numberInputValue.toString()}
        onValueChange={({ valueAsNumber }) => setNumberInputValue(valueAsNumber)}
      >
        <NumberInput.Label>Value1</NumberInput.Label>
        <NumberInput.Control />
        <NumberInput.Input />
      </NumberInput.Root>
      <NumberInput.Root defaultValue="0" width="200px" value={numberInputValue + 1 + ''}>
        <NumberInput.Label>Value2</NumberInput.Label>
        <NumberInput.Control />
        <NumberInput.Input />
      </NumberInput.Root>

      <label htmlFor="input1">Plain Input 1</label>
      <input id="input1" value={inputValue} onChange={(e) => setInputValue(Number(e.target.value))} />
      <label htmlFor="input2">Plain Input 2</label>
      <input id="input2" value={inputValue + 1} readOnly />
    </>
  );
}

export default App;
