const EventForm = ({
  formData,
  setFormData,
  handleSubmit,
  editingEvent,
  uploading,
  resetForm,
  mainImageRef,
  raceImageRef,
  previews,
  handleImageUpload,
}) => {
  const handleInputChange = (e, section, field) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="p-4 bg-gray-50 rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-4">Event Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Event Name"
            value={formData.event.name}
            onChange={(e) => handleInputChange(e, "event", "name")}
            className="border p-2 rounded"
            required
          />

          {/* Main Image Upload */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Event Image
            </label>
            <input
              type="file"
              name="imageUrl"
              ref={mainImageRef}
              onChange={(e) => handleImageUpload(e, "mainImage")}
              accept="image/*"
              className="mt-1"
              //   required
            />
            {previews.mainImage && (
              <img
                src={previews.mainImage}
                alt="Preview"
                className="mt-2 h-32 object-cover"
              />
            )}
          </div>

          <input
            type="date"
            name="date"
            value={formData.event.date}
            onChange={(e) => handleInputChange(e, "event", "date")}
            className="border p-2 rounded"
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.event.location}
            onChange={(e) => handleInputChange(e, "event", "location")}
            className="border p-2 rounded"
            required
          />

          <textarea
            placeholder="Description"
            name="description"
            value={formData.event.description}
            onChange={(e) => handleInputChange(e, "event", "description")}
            className="border p-2 rounded col-span-2"
            required
          />
        </div>
      </div>

      <div className="p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Additional Event Data</h3>
        <div className="mb-4">
          Event Image
          <input
            type="file"
            name="imageUrl"
            ref={raceImageRef}
            onChange={(e) => handleImageUpload(e, "mainImage")}
            accept="image/*"
            className="mt-1"
            //   required
          />
          {previews.raceImage && (
            <img
              src={previews.mainImage}
              alt="Preview"
              className="mt-2 h-32 object-cover"
            />
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Details Fields */}
          <div className="space-y-2">
            <h4 className="font-medium">Event Details</h4>
            {[1, 2, 3, 4].map((num) => (
              <input
                key={`details${num}`}
                type="text"
                placeholder={`Details ${num}`}
                value={formData.eventData[`details${num}`]}
                onChange={(e) =>
                  handleInputChange(e, "eventData", `details${num}`)
                }
                className="border p-2 rounded w-full"
              />
            ))}
          </div>

          {/* Directions Fields */}
          <div className="space-y-2">
            <h4 className="font-medium">Directions</h4>
            {[1, 2, 3, 4].map((num) => (
              <input
                key={`direction${num}`}
                type="text"
                placeholder={`Direction ${num}`}
                value={formData.eventData[`direction${num}`]}
                onChange={(e) =>
                  handleInputChange(e, "eventData", `direction${num}`)
                }
                className="border p-2 rounded w-full"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          type="submit"
          disabled={uploading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-blue-300"
        >
          {editingEvent ? "Update Event" : "Create Event"}
        </button>
        <button
          type="button"
          onClick={resetForm}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
export default EventForm;
