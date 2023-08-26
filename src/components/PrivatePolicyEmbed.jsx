import React from "react";

// Styles
const Styles = {
  body: {
    padding: "20px",
    margin: "0px",
    background: "transparent",
  },

  title: {
    fontFamily: "Arial",
    fontSize: "26px",
    color: "#000"
  },

  subtitle: {
    fontFamily: "Arial"
  }
};

const PrivatePolicyEmbed = () => {
  return (
    <>
      <div className={Styles.body}>
        <div>
          <strong>
            <span style={{ fontSize:'26px' }}>
              <span className={Styles.title}>
                <bdt className='block-component'></bdt>
                <bdt className='question'>PRIVACY POLICY</bdt>
                <bdt className='statement-end-if-in-editor'></bdt>
              </span>
            </span>
          </strong>
        </div>
      </div>
    </>
  );
};

export default PrivatePolicyEmbed;
