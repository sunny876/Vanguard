import { Config } from "./contexts/ConfigurationContext";

export const configuration: Config = {
  corpusKey: "Finance_Agent",
  customerId: "483414338",
  appTitle: "Enterprise Intelligence",
  apiKey: "zwt_HNBRQpan0GiyDATCRxr5EMpCznSCbV9vSvTQpw",
  endpoint: "api.vectara.io",
  questions: [
    // Market Research
    "How have ESG investments performed in the last five years?",
    "How much is Apple's Research and Development budget?",
    "How do global bond markets compare in 2025?",
    "How are investors navigating a fully-valued market?",
    // Financial Analysis
    "What are the advisory fees charged in the First Light Funds group?",
    "What is the historical return of Jupiter Large Cap Fund over the last five years?",
    "How does Lipper calculate total expense ratios and their impact on private equity investors?",
    // Portfolio Management
    "What are the top five holdings in the Copia 13-F filing?",
    "Which fund in the First Light Funds group has the highest exposure to technology stocks?",
    "What is the net asset value (NAV) of Morgan Stanley's North Haven Real Estate Fund?"
  ],
  hfToken: "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", // Hugging Face API token for hallucination evaluation
};
