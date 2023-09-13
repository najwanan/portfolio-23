// //create a component that is a project tile, each project tile should hold a project title and project image
// //write props validation for the project tile component

import PropTypes from "prop-types";

ProjectTile.propTypes = {
  //define prop Types for projectData
  image: PropTypes.string.isRequired

}


// eslint-disable-next-line react/prop-types
function ProjectTile({ projectData }) {
  return (
    <>
      {projectData.map((data, index) => (
        <div className="project" key={index}>
          <img src={data.image} alt={data.title} />
          <h2>{data.title}</h2>
        </div>
      ))}
    </>
  );
}

 export default ProjectTile