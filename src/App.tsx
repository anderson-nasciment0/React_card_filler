import { useState } from "react";
import styles from "./App.module.css";
import chip from "./assets/chip.png";
import mastercard from "./assets/mastercardLogo.png";

function App() {
  const [creditNumber, setCreditNumber] = useState("****************");
  const [validityNumber, setValidityNumber] = useState("******");
  const [name, setName] = useState("********");
  const [cvc, setCvc] = useState("***");

  const changeNumber = (Event: React.ChangeEvent<HTMLInputElement>) => {
    setCreditNumber(Event.target.value);
  };

  const changeValidity = (Event: React.ChangeEvent<HTMLInputElement>) => {
    setValidityNumber(Event.target.value);
  };

  const changeName = (Event: React.ChangeEvent<HTMLInputElement>) => {
    setName(Event.target.value);
  };

  const changeCvc = (Event: React.ChangeEvent<HTMLInputElement>) => {
    setCvc(Event.target.value);
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Digite seus dados</h1>
          <input
            type="text"
            maxLength={16}
            placeholder="Digite o numero do cartão"
            onChange={changeNumber}
          />
          <input
            type="month"
            placeholder="Digite a data de vencimento"
            onChange={changeValidity}
          />
          <input
            type="text"
            placeholder="Digite seu nome completo"
            onChange={changeName}
          />
          <input
            type="text"
            maxLength={3}
            placeholder="Digite o cvc"
            onChange={changeCvc}
          />
        </div>
        <div className={styles.rightSide}>
          <div className={styles.face}>
            <div className={styles.front}>
              <h3>Mastercard</h3>
              <img src={chip} alt="" width={70} />
              <div className={styles.cardInfo}>{creditNumber}</div>
              <div className={styles.cardInfo}>
                validade: {validityNumber}
                <img
                  className={styles.logo}
                  src={mastercard}
                  alt=""
                  width={110}
                />
              </div>
              <div className={styles.cardInfo}>{name}</div>
            </div>
            <div className={styles.back}>
              <div className={styles.range}></div>
              <div className={styles.cvc}>
                <div className={styles.number}>{cvc}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
