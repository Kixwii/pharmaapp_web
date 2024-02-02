import React from 'react';

const HistoryItem = ({ history_component_name, history_component_text }) => (
  <div className="inner-history-container">
    <div className="history-image-container">
      <img alt="img" />
    </div>
    <div className="history-component-text-container">
      <div>
        <h3>{history_component_name}</h3>
        <p>{history_component_text}</p>
      </div>
    </div>
    <div className="recall-button-container">
      <div className="recall-button">
        <button>
          <i className="material-symbols-outlined">arrow_forward</i>
        </button>
      </div>
    </div>
  </div>
);

export default HistoryItem;