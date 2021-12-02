// https://docs.cypress.io/api/introduction/api.html

describe("App.vue", () => {
  it("finds the correct wordmark", () => {
    cy.visit("/");
    cy.contains(".site-title-text", "Stuart Leaver");
  });

  it("finds the correct title", () => {
    cy.visit("/");
    cy.contains(".site-title-text", "Stuart Leaver");
  });

  it("finds the about me section", () => {
    cy.visit("/");
    cy.get("h3").eq(0).contains("About Me");
  });

  it("finds the testimonial section", () => {
    cy.visit("/");
    cy.get("h3").eq(1).contains("Testimonials");
  });

  it("displays the correct number of testimonials", () => {
    cy.intercept("/data/*", { fixture: "mock-testimonials.json" });
    cy.visit("/");
    cy.get(".testimonial-item").should("have.length", 5);
  });

  it("displays the testimonial section correctly", () => {
    cy.intercept("/data/*", { fixture: "mock-testimonials.json" });
    cy.visit("/");
    cy.get(".testimonial-item")
      .eq(3)
      .within(() => {
        cy.contains(
          ".testimonial-text",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra tellus eget finibus dictum. Morbi cursus convallis dapibus. Sed sed condimentum enim, vitae fermentum nulla. Vivamus dapibus lorem ac libero condimentum, et euismod felis accumsan. Nam sit amet laoreet massa. Sed rutrum lorem at magna porttitor, non sodales risus blandit. Fusce gravida tincidunt metus sit amet bibendum. Nunc quis bibendum nunc. Donec in condimentum elit. Praesent id ex nec enim fermentum aliquam."
        );
        cy.contains("h5", "Lecia Jemmy");
        cy.contains(".testimonial-role", "Software Engineer in Test");
      });
  });
});
