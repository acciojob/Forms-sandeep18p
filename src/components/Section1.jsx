import React from "react";
export default function Section1(){
    return(<><h1>Form one 1</h1>
    
    <form id="info-form">
    <label htmlFor="full_name">Full Name:</label>
        <input type="text" id="full_name" name="full_name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <label htmlFor="password_confirmation">Password Confirmation:</label>
        <input
          type="password"
          id="password_confirmation"
          name="password_confirmation"
          required
        />

        <button type="submit">Submit</button>
    </form>
    </>)
}