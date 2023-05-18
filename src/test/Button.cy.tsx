import { mount } from "cypress/react18";
import { Button } from "myreact-ui-lib";

const DEFAULT_TITLE = "title";

describe("Test Default Button", () => {
  // beforeEach(() => {

  // cy.get("button").as("Button");
  // });
  it("Should Show Title AS Text", () => {
    mount(<Button variant="success" title={DEFAULT_TITLE} />);
    cy.get("button").should("contains.text", DEFAULT_TITLE);
  });
});
