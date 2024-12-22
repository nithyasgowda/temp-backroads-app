import PropTypes from "prop-types"; 

export const Title=(props)=>{
  let {title,subTitle}=props;
    return (
        <div className="section-title">
          <h2>
            {title} <span>{subTitle}</span>
          </h2>
        </div>
    )
}


Title.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};
