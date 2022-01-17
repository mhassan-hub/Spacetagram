import { React } from 'react';
import './Loader.scss';

export default function Loader() {
  return (
    <div className="loader-section">
      <h2 className="text">LOADING...</h2>
      <div className="loader" />
    </div>
  );
}
