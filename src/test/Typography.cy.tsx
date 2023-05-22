import { mount } from "cypress/react18";
import { Typography } from "myreact-ui-lib";

describe("Typography", () => {
  const sample = "SAMPLE_TEXT";
  it("Should Show Text under p tag", () => {
    mount(<Typography>{sample}</Typography>);
    cy.get("p").should("contain", sample);
  });
  it("should Retrun h1", () => {
    mount(<Typography variant="h1">{sample}</Typography>);
    cy.get("h1").should("contain", sample);
  });
});
