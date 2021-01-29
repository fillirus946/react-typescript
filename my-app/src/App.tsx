import './App.css';
import {Item} from './component/Item'
import * as React from "react";
import Button from './component/Button'
import {Input} from './component/Input'
import {RoducerButtons} from './component/ReducerButtons'
import {GlobalContext, initialValues} from './component/GlobalState';





const App: React.FC=()=>{

  return (
    <GlobalContext.Provider value={initialValues}>
    <div className="App">
      <div>123123</div>

      <Item header={'privet!'} count={564561} special={true}/>
      <Button onClick = {(e)=> {
        e.preventDefault();
        console.log(e)}}>hello fc
        </Button>
        <RoducerButtons/>
        <Input/>
    </div>
    </GlobalContext.Provider>
  );
}

export default App;
