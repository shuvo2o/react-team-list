import React from 'react';
import Profile from './components/Profile';
  <link href="/src/styles.css" rel="stylesheet"></link>

  const members = [
    {
      id: 1,
      name:"Stephne MaCman",
      designation: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/women/19.jpg"
    },
    {
      id: 2,
      name:"Reginald Chapman",
      designation: "Backend Developer",
      image: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      id: 3,
      name:"Michael Silva",
      designation: "Full-Stack Developer",
      image: "https://randomuser.me/api/portraits/men/82.jpg"
    },
    {
      id: 4,
      name:"Devon Woods",
      designation: "Software Engineer",
      image: "https://randomuser.me/api/portraits/men/36.jpg"
    },
    {
      id: 5,
      name:"Joan Alexander",
      designation: "Digital Marketer",
      image: "https://randomuser.me/api/portraits/women/30.jpg"
    },
    {
      id: 6,
      name:"Judy Arnold",
      designation: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/women/74.jpg"
    },
    {
      id: 7,
      name:"Cathy Wallace",
      designation: "Devops Engineer",
      image: "https://randomuser.me/api/portraits/women/81.jpg"
    },
    {
      id: 8,
      name:"Zachary Morris",
      designation: "HR/Admin",
      image: "https://randomuser.me/api/portraits/men/88.jpg"
    },
    {
      id: 9,
      name:"Kristina Elliott",
      designation: "Software Developer",
      image: "https://randomuser.me/api/portraits/women/13.jpg"
    },
    {
      id: 10,
      name:"Eric Wells",
      designation: "HR/Admin",
      image: "https://randomuser.me/api/portraits/men/94.jpg"
    },
  ]
const App = () => {
  
  return (
    <div>
      <div className='min-h-screen p-5 bg-gray-700   border-amber-200'>
  <h1 className='text-3xl font-bold text-blue-500 text-center mb-5'>Team Member List</h1>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-screen-xl mx-auto gap-6'>
    {
      members.map(member =>(
<Profile key={member.id} name={member.name} designation={member.designation} image={member.image}/>
      ))
    }

  </div>


</div>
    </div>
  );
};

export default App;