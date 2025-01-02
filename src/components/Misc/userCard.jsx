import React from "react";

const UserCard = ({ userdata }) => {
  return (
    <div className="w-full rounded-lg shadow-md mb-3 text-black">
      <div>Name : {userdata.name}</div>
      <div>Email : {userdata.email}</div>
      <div>Phone : {userdata.phone}</div>
      <div>BloodGroup : {userdata.bloodGroup}</div>
    </div>
  );
};

export default UserCard;
