import React, { useState } from 'react';

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    theme: 'light',
    notifications: true,
    language: 'en',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Settings saved:', settings);
    // Implement saving to backend or local storage here
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Settings</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Theme</label>
          <select
            name="theme"
            value={settings.theme}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Notifications</label>
          <input
            type="checkbox"
            name="notifications"
            checked={settings.notifications}
            onChange={handleChange}
            className="mr-2 leading-tight"
          />
          <span className="text-gray-700">Enable notifications</span>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Language</label>
          <select
            name="language"
            value={settings.language}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;