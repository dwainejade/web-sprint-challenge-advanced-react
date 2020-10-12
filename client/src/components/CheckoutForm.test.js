import React from "react";
import { render, act, fireEvent} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const {getByText} = render(<CheckoutForm/>);
    getByText('Checkout Form');

});

test("form shows success message on submit with form details", () => {
    const {getByTestId, getByLabelText, getByText} = render(<CheckoutForm/>);
    const Firstname = getByLabelText("First Name:");
    const Lastname = getByLabelText("Last Name:");
    const Address = getByLabelText("Address:");
    const City = getByLabelText("City:");
    const State = getByLabelText("State:");
    const Zip = getByLabelText("Zip:");
    const CheckoutButton = getByText("Checkout");

    act(()=>{
        fireEvent.change(Firstname, {target: {value: "Dwaine"}});
        fireEvent.change(Lastname, {target: {value: "Matthew"}});
        fireEvent.change(Address, {target: {value: "205 ave"}});
        fireEvent.change(City, {target:{value: "Queens"}});
        fireEvent.change(State, {target:{value: "NY"}});
        fireEvent.change(Zip, {target:{value: "11412"}});

        fireEvent.click(CheckoutButton);
    });

    const successMessage = getByTestId("successMessage");
    expect(successMessage).toBeInTheDocument();
});