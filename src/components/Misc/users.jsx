"use client";
import { NEXT_PUBLIC_API_URL } from "@/utils/constants";
import React, { use, useEffect, useState } from "react";
import UserCard from "./userCard";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);
  async function fetchUsers() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/adminServices/allusers`
    );
    if (!res.ok) throw new Error("Failed to fetch users");
    const users = await res.json();
    console.log(users);
    setUsers(users);
  }
  return (
    <div>
      {users.length > 0 && (
        <div>
          {users.map((user) => {
            <UserCard key={user.id} userdata={user} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Users;
