import { useState } from "react";

const Customer = () => {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zipCode: 94111,
    },
  });

  console.log(customer.address.zipCode);

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: {
        ...customer.address,
        zipCode: 94112,
      },
    });
  };

  return (
    <div>
      <button onClick={handleClick}>click me!</button>
    </div>
  );
};

export default Customer;
