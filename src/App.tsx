import { NumberInput } from '@chakra-ui/react';
import { useState } from 'react';

function App() {
  const [value1, setValue1] = useState(0);
  return (
    <>
      <NumberInput.Root
        defaultValue="0"
        width="200px"
        value={value1.toString()}
        onValueChange={({ valueAsNumber }) => setValue1(valueAsNumber)}
      >
        <NumberInput.Label>Value1</NumberInput.Label>
        <NumberInput.Control />
        <NumberInput.Input />
      </NumberInput.Root>
      <NumberInput.Root defaultValue="0" width="200px" value={value1 + 1 + ''}>
        <NumberInput.Label>Value2</NumberInput.Label>
        <NumberInput.Control />
        <NumberInput.Input />
      </NumberInput.Root>
    </>
  );
}

export default App;
