"use client";
import Form from "@/components/Misc/Form";
import React, { useEffect, useState } from "react";
import AdminDashboard from "./dashboard/page";
const AdminPanel = () => {
  const jwt = "";

  return (
    <div className="pt-32 flex items-center justify-center">
      {jwt !== "" ? (
        <AdminDashboard />
      ) : (
        <Form type={"SignUp"} isSignup={true} />
      )}
    </div>
  );
};

export default AdminPanel;
