import React from 'react';
import { jsPDF } from 'jspdf';

const CardProjects = ({ items, selectedId, setSelectedId }) => {

  const generatePDFForItem = (item) => {
    const doc = new jsPDF('p', 'mm', 'a4');
    const margin = 10;
    const lineHeight = 10;
    const pageWidth = doc.internal.pageSize.getWidth();
    const maxWidth = pageWidth - margin * 2;
  
    let currentHeight = margin;
  
    // Title
    doc.setFontSize(22);
    doc.setTextColor(0, 0, 0); // Black
    doc.setFont('Helvetica', 'bold');
    doc.text(item.title, margin, currentHeight);
    currentHeight += lineHeight * 2; // Add more space after title
  
    // Section title and content
    doc.setFontSize(12);
    doc.setFont('Helvetica', 'bold');
    doc.text('Recommendation:', margin, currentHeight);
    doc.setFont('Helvetica', 'normal');
    currentHeight = wrapText(doc, item.recommendation, margin, currentHeight, maxWidth);
  
    // Date
    doc.setFont('Helvetica', 'bold');
    doc.text('Date:', margin, currentHeight);
    doc.setFont('Helvetica', 'normal');
    currentHeight = wrapText(doc, item.date, margin, currentHeight, maxWidth);
  
    // Owner
    doc.setFont('Helvetica', 'bold');
    doc.text('Owner:', margin, currentHeight);
    doc.setFont('Helvetica', 'normal');
    currentHeight = wrapText(doc, item.owner, margin, currentHeight, maxWidth);
  
    // Lab
    doc.setFont('Helvetica', 'bold');
    doc.text('Lab:', margin, currentHeight);
    doc.setFont('Helvetica', 'normal');
    currentHeight = wrapText(doc, item.lab, margin, currentHeight, maxWidth);
  
    // Description
    doc.setFont('Helvetica', 'bold');
    doc.text('Description:', margin, currentHeight);
    doc.setFont('Helvetica', 'normal');
    currentHeight = wrapText(doc, item.description, margin, currentHeight, maxWidth);
  
    // Tasks
    doc.setFont('Helvetica', 'bold');
    doc.text('Tasks:', margin, currentHeight);
    doc.setFont('Helvetica', 'normal');
    currentHeight = wrapText(doc, item.tasks.join(', '), margin, currentHeight, maxWidth);
  
    // Prerequisites
    doc.setFont('Helvetica', 'bold');
    doc.text('Prerequisites:', margin, currentHeight);
    doc.setFont('Helvetica', 'normal');
    currentHeight = wrapText(doc, item.prerequisites.join(', '), margin, currentHeight, maxWidth);
  
    // Constraints
    doc.setFont('Helvetica', 'bold');
    doc.text('Constraints:', margin, currentHeight);
    doc.setFont('Helvetica', 'normal');
    currentHeight = wrapText(doc, item.constraints.join(', '), margin, currentHeight, maxWidth);
  
    doc.save(`${item.title}-specifications.pdf`);
  };
  
  // Helper function to wrap text and handle word breaking
  const wrapText = (doc, text, x, y, maxWidth) => {
    const lines = doc.splitTextToSize(text, maxWidth);
    lines.forEach((line) => {
      if (y > 280) { // Prevent content from going beyond the page height
        doc.addPage();
        y = 10; // Reset height to top margin
      }
      doc.text(line, x, y);
      y += 7; // Adjust this value for line height
    });
    return y;
  };
  


  return (
    <div className="mt-12 flex flex-col lg:flex-row w-full p-8 md:px-28 lg:max-w-[2000px] justify-between gap-x-[120px]">
      <div className="text-[#B22222] text-3xl md:text-5xl w-[300px] mb-8 lg:mb-10 h-full md:sticky top-12 font-Lato">
        Main projects
      </div>
      <div className="flex-grow break-words">
        <div className="flex flex-col break-words">
          <div className="text-white break-words mb-12 text-xl" style={{ width: '90%' }}>
            We are currently working on a number of projects that aim to render this world a better place. Here are some of the projects we are currently working on:
          </div>
          {/* Toggle bar */}
          <div>
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
                    <dl className="grid grid-cols-1 gap-y-2">
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
                      <div>
                        <dt className="font-semibold text-lg">Description:</dt>
                        <dd className="text-base mt-1">{item.description}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-lg">Tasks:</dt>
                        <dd className="text-base mt-1">
                          <ol className="list-decimal list-inside">
                            {item.tasks.map((task, index) => (
                              <li key={index}>{task}</li>
                            ))}
                          </ol>
                        </dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-lg">Prerequisites:</dt>
                        <dd className="text-base mt-1">
                          <ol className="list-decimal list-inside">
                            {item.prerequisites.map((task, index) => (
                              <li key={index}>{task}</li>
                            ))}
                          </ol>
                        </dd>
                      </div>
                      <div>
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
                          
                    {/* Download button inside each specification */}
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
                      onClick={() => generatePDFForItem(item)}
                    >
                      Download as PDF
                    </button>
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
