import { Inngest } from "inngest";

// Initialize the Inngest client
export const inngest = new Inngest({
  id: "solvia",
  // You can add your Inngest signing key here if you have one
   eventKey:
    "bF9zjgy370bUFDe68nYNnvVpsgzPHQE1ZUk1oDnodB6r7mHuiQc4R-YZgZAEXrUPpvzGZiW1ABUPV5xyhEfecg",
});

// Export the functions array (this will be populated by the functions.ts file)
export const functions: any[] = [];
