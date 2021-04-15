import FormField from "./FormFields";

const BillingDetailsFields = () => {
  return (
    <>
      <FormField
        name="email"
        label="Email"
        type="email"
        placeholder="jane.doe@example.com"
        required
      />
      <FormField
        name="fullname"
        label=" Full Name"
        type="text"
        placeholder="Jane Doe"
        required
      />
      <FormField
        name="address"
        label="Address"
        type="text"
        placeholder="185 Berry St. Suite 550"
        required
      />
      <FormField
        name="city"
        label="City"
        type="text"
        placeholder="San Francisco"
        required
      />
      <FormField
        name="state"
        label="State"
        type="text"
        placeholder="California"
        required
      />
      <FormField
        name="zip"
        label="ZIP"
        type="text"
        placeholder="94103"
        required
      />
      <FormField
        name="country"
        label="Country"
        type="text"
        placeholder="USA"
        required
      />
    </>
  );
};

export default BillingDetailsFields;