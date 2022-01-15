import { React } from 'react';
import './Loader.scss';

export default function Loader() {
  return (
    <div className="loader-section">
      <div className="loader" />
      <h2 className="text">LOADING</h2>
    </div>
  );
}
