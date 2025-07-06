---
name: "Pull Request"
about: "Suggest changes to the project."
title: "[PR] "
body:
  - type: textarea
    id: what-changed
    attributes:
      label: "What Changed?"
      description: "Describe what you changed and why."
      placeholder: "Summary of changes."
    validations:
      required: true
  - type: textarea
    id: testing
    attributes:
      label: "Testing"
      description: "How did you test your changes?"
      placeholder: "Manual, automated, etc."
    validations:
      required: false
  - type: textarea
    id: related-issues
    attributes:
      label: "Related Issues"
      description: "List any related issues or discussions."
      placeholder: "Closes #1, relates to #2, etc."
    validations:
      required: false
