import { useState } from "react";
import "./CustomerForm.css";

const CustomerForm = ({ addNewCustomer }) => {
    const [customerName, setCustomerName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const newCustomer = {
            id: Math.random(),
            customerName,
        };
        if (customerName != null && customerName != "") {
            addNewCustomer(newCustomer);
        } else {
            alert("isim boş bırakılamaz. ")
        }
        setCustomerName("")
    };

    return (
        <form className="customer-form" onSubmit={handleSubmit}>
            <input
                type="text"
                className="customer-input"
                placeholder="Add a new customer"
                onChange={(e) => setCustomerName(e.target.value)}
                value={customerName}
            />
            <button>
                <i className="bi bi-plus-lg"></i>
            </button>
        </form>
    );
};

export default CustomerForm;