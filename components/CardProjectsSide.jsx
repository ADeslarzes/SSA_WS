import React from 'react';

const CardProjectsSide = ({ items, selectedId, setSelectedId }) => {
  return (
    <div className="mt-12 flex flex-col lg:flex-row w-full p-8 md:px-28 lg:max-w-[2000px] justify-between gap-x-[120px]">
      <div className="text-[#B22222] text-3xl md:text-5xl w-[300px] mb-8 lg:mb-10 h-full md:sticky top-12 font-Lato">
        Side projects
      </div>
      <div className="flex-grow break-all">
        <div className="flex flex-col break-all">
          <div className="text-white break-all mb-12 text-xl" style={{ width: '90%' }}>
            We are currently working on a number of side projects that aim to render this world a better place. Here are some of the projects we are currently working on:
          </div>
          {/* Toggle bar */}
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
                  <div className="text-white text-xl">
                    {selectedId === item.id ? '▲' : '▼'} {/* Arrow up/down */}
                  </div>
                </div>

                {selectedId === item.id && (
                  <div className="text-white mt-4 p-4 border-l border-r border-gray-600 rounded-lg shadow-md">
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    <div>
                      <dt className="font-semibold text-lg">Recommendation:</dt>
                      <dd className="text-base">{item.recommendation}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-lg">Date:</dt>
                      <dd className="text-base">{item.date}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-lg">Owner:</dt>
                      <dd className="text-base">{item.owner}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-lg">Lab:</dt>
                      <dd className="text-base">{item.lab}</dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="font-semibold text-lg">Description:</dt>
                      <dd className="text-base mt-1">{item.description}</dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="font-semibold text-lg">Tasks:</dt>
                      <dd className="text-base mt-1">
                        <ol className="list-decimal list-inside">
                          {item.tasks.map((task, index) => (
                            <li key={index}>{task}</li>
                          ))}
                        </ol>
                      </dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="font-semibold text-lg">Prerequisites:</dt>
                      <dd className="text-base mt-1">
                        <ol className="list-decimal list-inside">
                          {item.prerequisites.map((task, index) => (
                            <li key={index}>{task}</li>
                          ))}
                        </ol>
                      </dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="font-semibold text-lg">Constraints:</dt>
                      <dd className="text-base mt-1">
                        <ol className="list-decimal list-inside">
                          {item.constraints.map((task, index) => (
                            <li key={index}>{task}</li>
                          ))}
                        </ol>
                      </dd>
                    </div>
                  </dl>
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

export default CardProjectsSide;
