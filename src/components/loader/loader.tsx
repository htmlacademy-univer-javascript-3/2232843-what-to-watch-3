import './loader.css';


export function Loader() {
  return (
    <div className="root" data-testid="loader">
      <svg className="loader" viewBox="0 0 50 50">
        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
      </svg>
    </div>
  );
}
