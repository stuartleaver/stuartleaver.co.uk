describe("Blog.vue", () => {
  it("displays the correct number of blog entries", () => {
    cy.intercept("/api/getblogposts", { fixture: "mock-blog.json" });
    cy.visit("/blog");
    cy.get(".item-block").should("have.length", 3);
  });

  it("displays the testimonial section correctly", () => {
    cy.intercept("/api/getblogposts", { fixture: "mock-blog.json" });
    cy.visit("/blog");
    cy.get(".item-block")
      .eq(1)
      .within(() => {
        cy.contains(
          "h4",
          "Creating a VS Code Extension Pack and Publishing through a GitHub Action"
        );
        cy.contains("p", "17th Jun 2020");
        cy.get("img")
          .should("have.attr", "alt")
          .then((alt) => {
            expect(alt).to.eq(
              "Creating a VS Code Extension Pack and Publishing through a GitHub Action"
            );
          });
        cy.get("img")
          .should("have.attr", "src")
          .then((src) => {
            expect(src).to.eq(
              "https://stuartleaver.dev/wp-content/uploads/2020/06/vs-code-extension-pack-github-action-300x200.png"
            );
          });
      });
  });
});
