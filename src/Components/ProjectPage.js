import React from 'react';

function ProjectPage() {
  return (
    <div className="container">
      <section className="project-section">
        <h2 className="project-title" style={{ color: 'aqua' }}>
          Harmful Signs Detection using Neural Networks
        </h2>
        <p className="project-description">
          This project focuses on detecting harmful signs using neural networks. It leverages advanced machine learning techniques to identify and classify dangerous or anomalous signs in various datasets. The goal is to enhance safety measures by providing accurate and real-time detection capabilities.
        </p>
        <h3 className="section-title" style={{ color: 'aqua' }}>
          Project Overview
        </h3>
        <p className="section-description">
          The project involves training a neural network model to recognize harmful signs from images or data streams. Key components include:
        </p>
        <ul className="component-list">
          <li><strong>Data Collection:</strong> Gathering a diverse set of images or data related to harmful signs.</li>
          <li><strong>Model Training:</strong> Implementing and training neural network architectures to detect and classify signs accurately.</li>
          <li><strong>Evaluation:</strong> Testing the model's performance and refining it based on evaluation metrics.</li>
          <li><strong>Deployment:</strong> Integrating the model into applications for real-time detection and monitoring.</li>
        </ul>
        <h3 className="section-title" style={{ color: 'aqua' }}>
          Technologies Used
        </h3>
        <p className="section-description">
          The project utilizes various technologies and tools including:
        </p>
        <ul className="technology-list">
          <li>Neural Network Frameworks (e.g., TensorFlow, PyTorch)</li>
          <li>Data Processing Libraries (e.g., NumPy, Pandas)</li>
          <li>Visualization Tools (e.g., Matplotlib, Seaborn)</li>
          <li>Deployment Platforms (e.g., Flask for web integration)</li>
        </ul>
        <h3 className="section-title" style={{ color: 'aqua' }}>
          Future Work
        </h3>
        <p className="section-description">
          Future enhancements may include expanding the dataset, improving model accuracy, and exploring integration with other systems for broader applications.
        </p>
      </section>
    </div>
  );
}

export default ProjectPage;
