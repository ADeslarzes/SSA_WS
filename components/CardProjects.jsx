import React from 'react';

const CardProjects = ({ items, selectedId, setSelectedId }) => {
  return (
    <div className="mt-12 flex flex-col md:flex-row w-full p-8 md:px-28 lg:max-w-[2000px] justify-between gap-x-[120px]">
      <div className="text-[#B22222] text-3xl md:text-5xl w-[300px] mb-8 md:mb-0 h-full md:sticky top-12 font-Lato">
        Main projects
      </div>
      <div className="flex-grow break-all">
        <div className="flex flex-col break-all">
          <div className="text-white break-all mb-12 text-xl" style={{ width: '90%' }}>
            We are currently working on a number of side projects that aim to render this world a better place. Here are some of the projects we are currently working on:
          </div>
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <div key={item.id} className="cursor-pointer">
                {/* Top line */}
                <div className="border-t border-gray-600"></div>
                
                <div
                  className={`p-1 flex justify-between items-center ${
                    selectedId === item.id ? 'bg-black' : 'bg-black'
                  }`}
                  onClick={() => setSelectedId(selectedId === item.id ? null : item.id)}
                >
                  <div className="text-2xl text-white">{item.title}</div>
                  <div className="text-white text-2xl">
                    {selectedId === item.id ? '▲' : '▼'} {/* Arrow up/down */}
                  </div>
                </div>

                {selectedId === item.id && (
                  <div className="text-white mt-4 p-1 bg-grey-500">
                    <p>{item.description}</p>
                    {/* Add more detailed content here if needed */}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProjects;
