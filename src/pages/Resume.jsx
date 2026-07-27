import { useEffect, useState } from "react";

function Resume() {
  const [role, setRole] = useState("");
  const [file, setFile] = useState(null);
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const savedResumes =
      JSON.parse(localStorage.getItem("resumes")) || [];

    setResumes(savedResumes);
  }, []);

  const handleUpload = (e) => {
    e.preventDefault();

    if (!role || !file) {
      alert("Please enter role and choose a resume.");
      return;
    }

    const newResume = {
      id: Date.now(),
      role,
      fileName: file.name,
      uploadDate: new Date().toLocaleDateString(),
    };

    const updatedResumes = [...resumes, newResume];

    setResumes(updatedResumes);

    localStorage.setItem(
      "resumes",
      JSON.stringify(updatedResumes)
    );

    setRole("");
    setFile(null);

    document.getElementById("resumeFile").value = "";
  };

  const deleteResume = (id) => {
    const updatedResumes = resumes.filter(
      (resume) => resume.id !== id
    );

    setResumes(updatedResumes);

    localStorage.setItem(
      "resumes",
      JSON.stringify(updatedResumes)
    );
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Resume Manager
        </h1>

        <p className="text-slate-500 mt-2">
          Upload different resumes for different job roles.
        </p>
      </div>

      <form
        onSubmit={handleUpload}
        className="bg-white rounded-xl shadow mt-8 p-8 space-y-6"
      >

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="block font-medium mb-2">
              Role Name
            </label>

            <input
              type="text"
              placeholder="Frontend Developer"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Upload Resume
            </label>

            <input
              id="resumeFile"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setFile(e.target.files[0])}
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Upload Resume
        </button>

        <div className="border-t pt-8">

          <h2 className="text-2xl font-bold mb-6">
            Saved Resumes
          </h2>

          <div className="space-y-5">
                      {resumes.length === 0 ? (
              <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl p-10 text-center">
                <p className="text-gray-500 text-lg">
                  No resumes uploaded yet.
                </p>
              </div>
            ) : (
              resumes
                .slice()
                .reverse()
                .map((resume) => (
                  <div
                    key={resume.id}
                    className="bg-white border rounded-xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-5 hover:shadow-md transition"
                  >
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">
                        {resume.role}
                      </h3>

                      <p className="text-gray-600 mt-2">
                        <span className="font-semibold">
                          📄 {resume.fileName}
                        </span>
                      </p>

                      <p className="text-sm text-gray-500 mt-2">
                        📅 Uploaded on {resume.uploadDate}
                      </p>
                    </div>

                    <button
                      onClick={() => deleteResume(resume.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition"
                    >
                      Delete
                    </button>
                  </div>
                ))
            )}
          </div>

        </div>

      </form>

    </div>
  );
}

export default Resume;