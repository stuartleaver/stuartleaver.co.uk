describe("CV.vue", () => {
  it("finds the experience section", () => {
    cy.visit("/cv");
    cy.get("h3").eq(0).contains("Experience");
  });

  it("finds the education section", () => {
    cy.visit("/cv");
    cy.get("h3").eq(1).contains("Education");
  });

  it("displays the correct number of experience blocks", () => {
    cy.intercept("/data/*", { fixture: "mock-experience.json" });
    cy.visit("/cv");
    cy.get(".block-content")
      .eq(0)
      .within(() => {
        cy.get(".timeline-item").should("have.length", 3);
      });
  });

  it("displays the correct number of education blocks", () => {
    cy.intercept("/data/*", { fixture: "mock-experience.json" });
    cy.visit("/cv");
    cy.get(".block-content")
      .eq(1)
      .within(() => {
        cy.get(".timeline-item").should("have.length", 4);
      });
  });

  it("displays the experience section correctly", () => {
    cy.intercept("/data/*", { fixture: "mock-experience.json" });
    cy.visit("/cv");
    cy.get(".block-content")
      .eq(0)
      .within(() => {
        cy.get(".timeline-item")
          .eq(1)
          .within(() => {
            cy.contains(".item-title", "ExperienceTitle-2");
            cy.contains(".item-date", "11/2019 - 06/2020");
            cy.contains(".item-company", "ExperienceCompany-2");
            cy.contains(".item-desctiption", "ExperienceDescription-2");
          });
      });
  });

  it("displays the education section correctly", () => {
    cy.intercept("/data/*", { fixture: "mock-experience.json" });
    cy.visit("/cv");
    cy.get(".block-content")
      .eq(1)
      .within(() => {
        cy.get(".timeline-item")
          .eq(3)
          .within(() => {
            cy.contains(".item-title", "EducationTitle-4");
            cy.contains(".item-date", "06/2017 - 11/2018");
            cy.contains(".item-company", "EducationCompany-4");
            cy.contains(".item-desctiption", "EducationDescription-4");
          });
      });
  });
});
