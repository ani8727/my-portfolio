import React, { useState, useEffect, useRef } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import Particle from "../components/Particle";
import pdf from "../assets/resume.pdf";


pdfjs.GlobalWorkerOptions.workerSrc = `${import.meta.env.BASE_URL}pdf.worker.mjs`;

const resumeLink = pdf;

const Resume = () => {
  
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  const [numPages, setNumPages] = useState(null);
  const [pdfAvailable, setPdfAvailable] = useState(true);
  const [loadingPdf, setLoadingPdf] = useState(true);
  const [pdfError, setPdfError] = useState(null);

  useEffect(() => {
    let mounted = true;
    async function check() {
      try {
        setLoadingPdf(true);
        const res = await fetch(pdf, { method: "HEAD" });
        if (!mounted) return;
        if (!res.ok) {
          setPdfAvailable(false);
        } else {
          setPdfAvailable(true);
        }
      } catch {
        if (!mounted) return;
        setPdfAvailable(false);
      } finally {
        if (mounted) setLoadingPdf(false);
      }
    }
    check();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="relative bg-gray-900 text-white min-h-screen py-16">
      {/* Particle Background */}
      <Particle />

      {/* Page Header */}
      <div className="max-w-5xl mx-auto relative z-10 px-4 mb-12">
        <h1 className="text-5xl font-bold bg-linear-to-r from-yellow-400 via-red-400 to-pink-400 bg-clip-text text-transparent mb-3">
          <br />
          My Resume
        </h1>
        <p className="text-gray-300 text-lg">Here's my professional profile and experience</p>
      </div>

      {/* Summary / Intro */}
      <div className="max-w-5xl mx-auto mb-12 relative z-10 px-4">
        <div className="bg-linear-to-br from-purple-900/50 to-indigo-900/50 border border-purple-500/30 rounded-xl p-6 backdrop-blur">
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">Summary</h2>
          <p className="text-gray-300 leading-relaxed text-base">
            Results-driven <strong className="text-yellow-300">Software Engineering Student</strong> specializing in <strong className="text-yellow-300">Full-Stack Development</strong>, with strong expertise in <strong className="text-yellow-300">Java (Spring Boot)</strong>, <strong className="text-yellow-300">React.js</strong>, <strong className="text-yellow-300">C++</strong>, and modern backend engineering. Experienced in building scalable, production-ready applications, implementing <strong className="text-yellow-300">RESTful APIs</strong>, designing efficient database structures, and optimizing system performance using advanced <strong className="text-yellow-300">DSA and algorithmic techniques</strong>. Developed impactful projects including a <strong className="text-yellow-300">Spring Boot + React fitness tracking platform</strong>, <strong className="text-yellow-300">C++ metro route finder using Dijkstra's Algorithm</strong>, and secure full-stack system integrating <strong className="text-yellow-300">Keycloak and RabbitMQ</strong>. Proficient across the full stack—responsive UI design, robust backend systems, cloud services (<strong className="text-yellow-300">AWS</strong>), and tools including <strong className="text-yellow-300">Docker</strong>, <strong className="text-yellow-300">Git</strong>, and <strong className="text-yellow-300">PostgreSQL</strong>. Proven leadership in hackathons and collaborative development with strong ability to adapt quickly, learn continuously, and deliver high-quality, maintainable code that prioritizes clean architecture and performance.
          </p>
        </div>
      </div>

      {/* Download Button Top */}
      <div className="flex justify-center mb-12 relative z-10">
        <a
          href={pdf}
          target="_blank"
          rel="noreferrer"
          download="Aniket_Gupta_Resume.pdf"
          className="inline-flex items-center bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 hover:shadow-2xl transform hover:scale-105"
        >
          <AiOutlineDownload className="mr-3 text-lg" />
          Download Full Resume
        </a>
      </div>

      {/* PDF Viewer Section */}
      <div className="max-w-5xl mx-auto mb-8 px-4 relative z-10" ref={containerRef}>
        <h2 className="text-2xl font-bold mb-4 text-center">Preview</h2>
        
        <div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-lg p-4 shadow-2xl backdrop-blur">
          {loadingPdf && (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mb-4"></div>
              <p className="text-gray-300">Checking resume availability…</p>
            </div>
          )}

          {!loadingPdf && !pdfAvailable && (
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 text-center">
              <p className="text-red-300 mb-2">Resume file not found or not accessible.</p>
              <p className="text-gray-400 text-sm">You can still download it using the button above.</p>
            </div>
          )}

          {!loadingPdf && pdfAvailable && (
            <div ref={containerRef} style={{ width: "100%" }} className="flex justify-center bg-gray-900/30 rounded-lg p-3">
              {containerWidth > 0 && (
                <Document
                  file={resumeLink}
                  onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                  onLoadError={(err) => {
                    console.error('PDF load error:', err);
                    setPdfError(String(err));
                  }}
                  loading={<div className="text-center py-12 text-gray-300">Loading resume…</div>}
                  error={<div className="text-center py-12 text-red-300">Failed to load the resume preview.</div>}
                >
                  {/* Responsive PDF page sizing based on container width */}
                  <Page 
                    pageNumber={1} 
                    width={Math.min(containerWidth * 0.95, 595)}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                </Document>
              )}
            </div>
          )}

          {pdfError && (
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mt-4">
              <p className="text-red-300 text-sm">Error: {pdfError}</p>
            </div>
          )}

          {numPages && (
            <div className="text-center mt-4 text-gray-400 text-xs">
              <p>📄 Pages: <span className="text-indigo-400 font-semibold">{numPages}</span></p>
            </div>
          )}
        </div>
      </div>

      {/* Download Button Bottom */}
      <div className="flex justify-center relative z-10 mb-8">
        <a
          href={pdf}
          target="_blank"
          rel="noreferrer"
          download="Aniket_Gupta_Resume.pdf"
          className="inline-flex items-center bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 hover:shadow-2xl transform hover:scale-105"
        >
          <AiOutlineDownload className="mr-3 text-lg" />
          Download Full Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
