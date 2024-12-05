import React from "react";

export default function FAQ() {
  // Array of colors for each card
  const cardColors = [
    "bg-red-100", // Light red
    "bg-yellow-100", // Light yellow
    "bg-green-100", // Light green
  ];

  return (
    <div className="bg-lightblue py-20 px-4 text-zinc-500">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row">
        <h2 className="mr-8 w-full md:w-1/3 text-3xl font-bold leading-9 text-zinc-400 mb-10 md:mb-0">
          Frequently-asked questions
        </h2>
        <div className="w-full md:w-2/3">
          {/* FAQ Card 1 - Rectangle with rounded corners */}
          <div className={`p-6 mb-6 rounded-lg shadow-2xl ${cardColors[0]}`}>
            <h3 className="text-xl font-semibold text-green-500 mb-4">
              Do I need to fill all sections?
            </h3>
            <p>
              Not at all, only GitHub username is mandatory, all the other
              sections are optional. It&apos;s all your choice, you can fill
              them depending on your requirement, you have all the options for
              customisation.
            </p>
          </div>

          {/* FAQ Card 2 - Rectangle with rounded corners */}
          <div
            className={`p-6 mb-6 rounded-lg shadow-2xl ${cardColors[1]}`}
          >
            <h3 className="text-xl font-semibold text-green-500 mb-4">
              Do I need to know Markdown or HTML for using this website?
            </h3>
            <p>
              This is a complete No-Code solution so you don&apos;t need any
              coding experience. You just have to fill sections and we will
              create a perfect GitHub Profile ReadMe for you for free! Sounds
              cool? Try now!
            </p>
          </div>

          {/* FAQ Card 3 - Rectangle with rounded corners */}
          <div
            className={`p-6 mb-6 rounded-lg shadow-2xl ${cardColors[2]}`}
          >
            <h3 className="text-xl font-semibold text-green-500 mb-4">
              How to change GitHub ReadMe?
            </h3>
            <div className="max-h-40 overflow-y-auto">
              <p>
                <b>Step 1 :</b> Go to{" "}
                <a
                  href="https://github.com/new"
                  className="text-cyan-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/new
                </a>{" "}
                and enter the same name as your GitHub username into the
                Repository name field.
                <br />
                <b>Step 2 :</b> Leave the repo as a Public repo (by default).
                <br />
                <b>Step 3 :</b> Also, make sure to initialize it with a README to
                get started.
                <br />
                <b>Step 4 :</b> Paste the code generated from this website inside
                your ReadMe file.
                <br />
                <b>Step 5 :</b> Commit the changes to add a ReadMe to your GitHub
                Account.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
