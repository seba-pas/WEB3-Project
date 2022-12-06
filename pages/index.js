import { useCallback, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import styles from "../styles/Home.module.css";
import { connector } from "../config/web3";

export default function Home() {
  const { activate, active, deactivate, account, error, chainId } =
    useWeb3React();

  useEffect(() => {
    if (localStorage.getItem("previously connected") === "true") {
      connect();
    }
  }, [connect]);

  const connect = useCallback(() => {
    activate(connector);
    localStorage.setItem("previously connected", true);
  }, [activate]);

  const disconnect = () => {
    deactivate();
    localStorage.removeItem.apply("previusly connected");
  };

  if (error) {
    return <p>ha ocurrido un error maldita sea </p>;
  }

  return (
    <div className={styles.container}>
      <h1>WEB 3 PROJECT SEBA</h1>
      {active ? (
        <>
          <button onClick={disconnect}>Disconnect wallet</button>
          <p>
            {" "}
            you are connected to {chainId} network <br />
            Your account id {account}
          </p>
        </>
      ) : (
        <button onClick={connect}>Connect Wallet</button>
      )}
    </div>
  );
}
