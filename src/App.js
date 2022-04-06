import { useState, useEffect } from 'react';
import useCollapse from 'react-collapsed';
import GlobalStyle from './styles/GlobalStyle';
import {
  StyledContainer,
  StyledTitle,
  StyledBlock,
  StyledInput,
  StyledOption,
  StyledRow,
  StyledSelect,
  StyledButton,
  StyledHistory,
} from './styles/Styles';
import axios from 'axios';
import { optionsData } from './components/data/Data';

//declared options for automate rednering

const App = () => {
  const [temp, setTemp] = useState('');
  const [options, setOptions] = useState(optionsData);
  const [unit, setUnit] = useState({ first: '', second: '' });
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  const handleSubmit = () => {
    setResult('');
    if (isNaN(temp) || temp === null || temp === '') {
      setResult('');
      return 0;
    }
    if (unit.first !== '' && unit.second !== '') {
      //parsing "temp" state to float
      const parsedTemp = parseFloat(temp)
      const unitDepends = [
        {
          name: 'CK',
          value: `${parsedTemp + 273.15}`,
        },
        {
          name: 'CF',
          value: `${parsedTemp* 1.8 + 32}`,
        },
        {
          name: 'FC',
          value: `${(parsedTemp - 32) / 1.8}`,
        },
        {
          name: 'FK',
          value: `${(parsedTemp + 459.67) * (5 / 9)}`,
        },
        {
          name: 'KC',
          value: `${parsedTemp - 273.15}`,
        },
        {
          name: 'KF',
          value: `${parsedTemp * 1.8 - 459.67}`,
        },
      ];
      //combining units to check them in array
      const combine = unit.first + unit.second;
      //searching for calculation type wanted by user
      const results = unitDepends.filter((calc) => calc.name === combine);
      //parsing results to correct form with two decimal spaces
      const parsedResults = Math.round(results[0].value * 100) / 100;
      //setting state result
      setResult(parsedResults);
      //checking length of history array
      if (history.length === 6) history.shift();
      const historyJSON = {
        temp: `${temp}`,
        result: `${parsedResults}`,
        from: `${unit.first}`,
        to: `${unit.second}`,
      };
      setHistory([...history, historyJSON]);
      //sending data to mongodb
      sendData(historyJSON);
    }
  };

  //reseting input values
  const handleReset = () => {
    setResult('');
    setTemp('');
  };

  const handleTemp = (e) => {
    if (isNaN(e)) {
      alert('Wpisano tekst, proszę korzystać tylko z wartości numerycznych');
      return 0;
    }
    parseFloat(setTemp(e));
  };

  const handleChoice = (e) => {
    if (e === 'Wybierz') return 0;
    setUnit((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
    //filtering options state, that user can't choose to calculate same unit like 1K = 1K
    if (e.target.name === 'first') {
      const filteredOptions = optionsData.filter(
        (option) => option.value !== e.target.value
      );
      setOptions(filteredOptions);
      setUnit((prevValues) => {
        return { ...prevValues, second: '' };
      });
    }
  };

  const sendData = async (postData) => {
    console.log(postData);
    await axios
      .post('http://localhost:3001/', postData)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  return (
    <>
      <GlobalStyle />
      <StyledContainer>
        <StyledTitle>Przelicznik temperatur</StyledTitle>
        <StyledRow>
          <StyledBlock>
            <StyledInput
              aria-label='input'
              required
              value={temp}
              type='number'
              onChange={(e) => handleTemp(e.target.value)}
            />
            <StyledSelect
              aria-label='select-input'
              name='first'
              value={unit.first}
              onChange={(e) => handleChoice(e)}
            >
              {optionsData.map((option, index) => {
                return (
                  <StyledOption key={index} value={option.value}>
                    {option.name}
                  </StyledOption>
                );
              })}
            </StyledSelect>
          </StyledBlock>
          <StyledBlock>
            <StyledSelect
              aria-label='select-output'
              name='second'
              value={unit.second}
              onChange={(e) => handleChoice(e)}
            >
              {options.map((option, index) => {
                return (
                  <StyledOption key={index} value={option.value}>
                    {option.name}
                  </StyledOption>
                );
              })}
            </StyledSelect>
            <StyledInput aria-label="output" readOnly disabled type='number' value={result} />
          </StyledBlock>
        </StyledRow>
        <StyledRow>
          <StyledButton aria-label='submit' onClick={() => handleSubmit()}>Przelicz</StyledButton>
          <StyledButton aria-label='reset' onClick={() => handleReset()}>Wyczyść</StyledButton>
        </StyledRow>
        <StyledButton {...getToggleProps()}>
          {isExpanded ? 'Zwiń' : 'Rozwiń historię'}
        </StyledButton>
        <StyledRow>
          <StyledHistory {...getCollapseProps()}>
            {history.length > 0 ? (
              <>
                <h4>Historia obliczeń</h4>
                {history.map((hist, i) => {
                  return (
                    <p key={i}>
                      Z {hist.temp} {hist.from} na {hist.result} {hist.to}
                    </p>
                  );
                })}
              </>
            ) : (
              'Brak historii'
            )}
          </StyledHistory>
        </StyledRow>
      </StyledContainer>
    </>
  );
};
export default App;
