import React, { useState } from "react";
import "../styles.css";

function Dashboard() {
  const [communities, setCommunities] = useState([
    { id: 1, name: "Community A", members: ["Alice", "Bob", "Charlie"] },
    { id: 2, name: "Community B", members: ["David", "Eve", "Frank"] },
    { id: 3, name: "Community C", members: ["Grace", "Hank", "Ivy"] }
  ]);
  const [newCommunity, setNewCommunity] = useState("");
  const [newMember, setNewMember] = useState("");
  const [selectedCommunity, setSelectedCommunity] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateCommunity = () => {
    setError("");
    if (!newCommunity.trim()) {
      setError("Community name cannot be empty");
      return;
    }

    const communityExists = communities.some(
      (community) => community.name.toLowerCase() === newCommunity.toLowerCase()
    );

    if (communityExists) {
      setError("Community with this name already exists");
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setCommunities([
        ...communities,
        { id: Date.now(), name: newCommunity.trim(), members: [] }
      ]);
      setNewCommunity("");
      setIsLoading(false);
    }, 500);
  };

  const handleAddMember = () => {
    setError("");
    if (!selectedCommunity) {
      setError("Please select a community first");
      return;
    }

    if (!newMember.trim()) {
      setError("Member name cannot be empty");
      return;
    }

    const community = communities.find((c) => c.id === selectedCommunity);
    if (community.members.includes(newMember.trim())) {
      setError("Member already exists in this community");
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const updatedCommunities = communities.map((community) =>
        community.id === selectedCommunity
          ? { ...community, members: [...community.members, newMember.trim()] }
          : community
      );
      setCommunities(updatedCommunities);
      setNewMember("");
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Admin Dashboard</h2>
        <div className="profile-section">
          <img
            src="https://via.placeholder.com/40" 
            alt="Profile"
            className="profile-pic"
            onClick={() => setShowDropdown(!showDropdown)}
          />
          {showDropdown && (
            <div className="dropdown-menu">
              <p>User Details</p>
              <button className="logout-btn">Logout</button>
            </div>
          )}
        </div>
      </div>
      
      <div className="create-community">
        <input
          type="text"
          placeholder="New Community Name"
          value={newCommunity}
          onChange={(e) => setNewCommunity(e.target.value)}
        />
        <button onClick={handleCreateCommunity} className="create-btn">Create Community</button>
      </div>

      <div className="community-list">
        {communities.map((community) => (
          <div key={community.id} className="community-card">
            <h3>{community.name}</h3>
            <button onClick={() => setSelectedCommunity(community.id)} className="select-btn">
              Select Community
            </button>
          </div>
        ))}
      </div>

      {selectedCommunity && (
        <div className="add-member">
          <input
            type="text"
            placeholder="Member Name"
            value={newMember}
            onChange={(e) => setNewMember(e.target.value)}
          />
          <button onClick={handleAddMember} className="add-btn">Add Member</button>
        </div>
      )}
      {error && <div className="error-message">{error}</div>}
      {isLoading && <div className="loading-spinner">Loading...</div>}
    </div>
  );
}

export default Dashboard;
