import React from 'react';
import './MembersPage.css'; // Create this file for custom styling


// Mock data for the members, replace it with real data from your API or database
const membersData = [
  {
    id: 1,
    pid: '550e8400-e29b-41d4-a716-446655440000',
    bachatgat_id: 101,
    member_ids: ['550e8400-e29b-41d4-a716-446655440001'],
    name: 'John Doe',
    role: 'Member',
    entry_month: 'January',
    entry_year: 2022,
    mobile: '9876543210',
    email: 'johndoe@example.com',
    password: '******',
    created_at: '2022-01-10 10:30:00',
    updated_at: '2023-02-15 14:20:00'
  },
  {
    id: 2,
    pid: '550e8400-e29b-41d4-a716-446655440002',
    bachatgat_id: 102,
    member_ids: ['550e8400-e29b-41d4-a716-446655440003'],
    name: 'Jane Smith',
    role: 'Chairperson',
    entry_month: 'March',
    entry_year: 2021,
    mobile: '9876543211',
    email: 'janesmith@example.com',
    password: '******',
    created_at: '2021-03-15 09:45:00',
    updated_at: '2022-06-12 12:15:00'
  },
  {
    id: 2,
    pid: '550e8400-e29b-41d4-a716-446655440002',
    bachatgat_id: 102,
    member_ids: ['550e8400-e29b-41d4-a716-446655440003'],
    name: 'Jane Smith',
    role: 'Chairperson',
    entry_month: 'March',
    entry_year: 2021,
    mobile: '9876543211',
    email: 'janesmith@example.com',
    password: '******',
    created_at: '2021-03-15 09:45:00',
    updated_at: '2022-06-12 12:15:00'
  },
  {
    id: 2,
    pid: '550e8400-e29b-41d4-a716-446655440002',
    bachatgat_id: 102,
    member_ids: ['550e8400-e29b-41d4-a716-446655440003'],
    name: 'Jane Smith',
    role: 'Chairperson',
    entry_month: 'March',
    entry_year: 2021,
    mobile: '9876543211',
    email: 'janesmith@example.com',
    password: '******',
    created_at: '2021-03-15 09:45:00',
    updated_at: '2022-06-12 12:15:00'
  },
  {
    id: 2,
    pid: '550e8400-e29b-41d4-a716-446655440002',
    bachatgat_id: 102,
    member_ids: ['550e8400-e29b-41d4-a716-446655440003'],
    name: 'Jane Smith',
    role: 'Chairperson',
    entry_month: 'March',
    entry_year: 2021,
    mobile: '9876543211',
    email: 'janesmith@example.com',
    password: '******',
    created_at: '2021-03-15 09:45:00',
    updated_at: '2022-06-12 12:15:00'
  },
  {
    id: 2,
    pid: '550e8400-e29b-41d4-a716-446655440002',
    bachatgat_id: 102,
    member_ids: ['550e8400-e29b-41d4-a716-446655440003'],
    name: 'Jane Smith',
    role: 'Chairperson',
    entry_month: 'March',
    entry_year: 2021,
    mobile: '9876543211',
    email: 'janesmith@example.com',
    password: '******',
    created_at: '2021-03-15 09:45:00',
    updated_at: '2022-06-12 12:15:00'
  }
  // Add more member data as needed
];

// Component to display each member's details in a card view
const MemberCard = ({ member }) => {
  return (
    <div className="card">
      <h3>{member.name}</h3>
      <p><strong>Role:</strong> {member.role}</p>
      <p><strong>Entry Month:</strong> {member.entry_month}</p>
      <p><strong>Entry Year:</strong> {member.entry_year}</p>
      <p><strong>Mobile:</strong> {member.mobile}</p>
      <p><strong>Email:</strong> {member.email}</p>
      <p><strong>Created At:</strong> {member.created_at}</p>
      <p><strong>Updated At:</strong> {member.updated_at}</p>
    </div>
  );
};

// Main component to display all members in a grid layout
const MembersPage = () => {
  return (
    <div className="container">
      <h2>Bachat Gat Members</h2>
      <div className="grid">
        {membersData.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default MembersPage;
