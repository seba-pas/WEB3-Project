import web3 from "web3";
import { InjectedConnector } from "@web3-react/injected-connector";

const ETHEREUM_WORKING_ID = 1;

const connector = new InjectedConnector({
  supportedChainIds: [ETHEREUM_WORKING_ID],
});

const getLibrary = (provider) => {
  const library = new web3(provider);
  return library;
};

module.exports = {
  connector,
  getLibrary,
};
