"use client";
import React, { useState, useEffect, useRef } from "react";
import { Calendar, Edit, Trash2, Plus, MapPin, Upload } from "lucide-react";
import UserCard from "@/components/Misc/userCard";
import EventForm from "@/components/Misc/eventForm";
const AdminDashboard = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingEvent, setEditingEvent] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [showUsers, setShowUsers] = useState(false);
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    event: {
      name: "",
      imageUrl: "",
      description: "",
      date: "",
      location: "",
    },
    eventData: {
      raceImageUrl: "",
      details1: "",
      details2: "",
      details3: "",
      details4: "",
      direction1: "",
      direction2: "",
      direction3: "",
      direction4: "",
    },
  });

  const mainImageRef = useRef(null);
  const raceImageRef = useRef(null);
  const [previews, setPreviews] = useState({
    mainImage: null,
    raceImage: null,
  });

  useEffect(() => {
    fetchEvents();
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/adminServices/allusers`
      );
      // if (!res.ok) throw new Error("Failed to fetch users");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  users;
  const fetchEvents = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/events/allEvents`
      );
      // if (!response.ok) throw new Error("Failed to fetch events");
      const data = await response.json();
      setEvents(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e, imageType) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) throw new Error("Upload failed");
      const { url } = await response.json();

      setPreviews((prev) => ({
        ...prev,
        [imageType]: URL.createObjectURL(file),
      }));

      setFormData((prev) => ({
        ...prev,
        [imageType === "mainImage" ? "event" : "eventData"]: {
          ...prev[imageType === "mainImage" ? "event" : "eventData"],
          [imageType === "mainImage" ? "imageUrl" : "raceImageUrl"]: url,
        },
      }));
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = editingEvent
        ? `${process.env.NEXT_PUBLIC_API_URL}/events/update/${editingEvent.id}`
        : `${process.env.NEXT_PUBLIC_API_URL}/events/createEventWithData`;

      const response = await fetch(url, {
        method: editingEvent ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to save event");

      await fetchEvents();
      resetForm();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/events/delete/${id}`,
      {
        method: "DELETE",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to delete Event");
    }
  };

  const resetForm = () => {
    setFormData({
      event: {
        name: "",
        imageUrl: "",
        description: "",
        date: "",
        location: "",
      },
      eventData: {
        raceImageUrl: "",
        details1: "",
        details2: "",
        details3: "",
        details4: "",
        direction1: "",
        direction2: "",
        direction3: "",
        direction4: "",
      },
    });
    setPreviews({ mainImage: null, raceImage: null });
    setShowForm(false);
    setEditingEvent(null);
    if (mainImageRef.current) mainImageRef.current.value = "";
    if (raceImageRef.current) raceImageRef.current.value = "";
  };

  const EventCard = ({ event }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between">
        <h3 className="text-xl font-semibold">{event.name}</h3>
        <div className="flex gap-2">
          <button
            onClick={() => {
              setEditingEvent(event);
              setFormData({
                event: {
                  name: event.name,
                  imageUrl: event.imageUrl,
                  description: event.description,
                  date: event.date,
                  location: event.location,
                },
                eventData: {
                  raceImageUrl: formData.eventData.raceImageUrl,
                  details1: formData.eventData.details1,
                  details2: formData.eventData.details2,
                  details3: formData.eventData.details3,
                  details4: formData.eventData.details4,
                  direction1: formData.eventData.direction1,
                  direction2: formData.eventData.direction2,
                  direction3: formData.eventData.direction3,
                  direction4: formData.eventData.direction4,
                },
              });
              setShowForm(true);
            }}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded"
          >
            <Edit size={20} />
          </button>
          <button
            onClick={() => handleDelete(event.id)}
            className="p-2 text-red-600 hover:bg-red-50 rounded"
          >
            <Trash2 size={20} />
          </button>
        </div>
      </div>

      <div className="flex gap-4 text-gray-600 mt-2">
        <span className="flex items-center gap-1">
          <MapPin size={16} /> {event.location}
        </span>
        <span className="flex items-center gap-1">
          <Calendar size={16} /> {event.date}
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <img
            src={event.imageUrl}
            alt={event.name}
            className="w-full h-24 object-cover rounded"
          />
        </div>

        <div>
          <h4 className="font-semibold">Details</h4>
          <ul className="list-disc list-inside space-y-1">
            {[1, 2, 3, 4].map(
              (num) =>
                event.eventData?.[`details${num}`] && (
                  <li key={num}>{event.eventData[`details${num}`]}</li>
                )
            )}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Directions</h4>
          <ul className="list-disc list-inside space-y-1">
            {[1, 2, 3, 4].map(
              (num) =>
                event.eventData?.[`direction${num}`] && (
                  <li key={num}>{event.eventData[`direction${num}`]}</li>
                )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
  // const access_token = localStorage.getItem("jwt");
  if (loading) return <div className="text-center p-20">Loading...</div>;
  if (error)
    return <div className="text-center text-red-600 p-20">Error: {error}</div>;
  return (
    <div className="flex">
      <div className=" h-[600px] flex flex-col pt-32 px-16 text-2xl ">
        <div className="mb-4">
          <button>Events</button>
        </div>
        <div className="mb-4">
          <button onClick={() => setShowUsers(true)}>Users</button>
        </div>
        <div className="text-blue-600">
          <button onClick={() => localStorage.removeItem("jwt")}>Logout</button>
        </div>
      </div>
      {/* <div className="min-h-screen bg-gray-100 p-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              Admin Dashboard
            </h1>
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
            >
              <Plus size={20} /> Add Event
            </button>
          </div>
         
          {showForm && (
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <h2 className="text-xl font-semibold mb-4">
                {editingEvent ? "Edit Event" : "Add New Event"}
              </h2>
              <EventForm
                formData={formData}
                setFormData={setFormData}
                handleSubmit={handleSubmit}
                editingEvent={editingEvent}
                uploading={uploading}
                resetForm={resetForm}
                mainImageRef={mainImageRef}
                raceImageRef={raceImageRef}
                previews={previews}
                handleImageUpload={handleImageUpload}
              />
            </div>
          )}

          <div className="grid grid-cols-1 gap-4">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div> */}
      {users.map((user) => {
        <div className="mb-4 text-black">
          <UserCard key={user.id} userdata={user} />;
        </div>;
      })}
    </div>
  );
};

export default AdminDashboard;
